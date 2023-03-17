
// taking input from user
// process.argv[2] from command line

let inputArr = process.argv.slice(2);


// const  dir  = require('console');
let fs =  require('fs')


let path = require('path')

types ={

    media: ['mp4','mkv'],
    images:['jpg','jpeg','png'],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz'],
    document: ['docx','doc','pdf','xlsx','xls','odt','ods','odg','odf','txt','psd','html','log','txt'],
    app:['exe','dmg','pkg','deb']
}


// console.log(inputArr)

// node main.js tree 'directoryPath'
// node main.js organize directoryPath'
// node main.js help

let command = inputArr[0]
switch(command){
    case 'tree':
        treeFn(inputArr[1])
        break;
    case 'organize':
        oraganizeFn(inputArr[1])
        break;
    case 'help':
        helpFn()
        break;
    default:
        console.log('Please input right command' )
        break;
}

function treeFn(dirPath){
    console.log('Tree command implemented for', dirPath)
}

function oraganizeFn(dirPath){


    console.log('organize command implemented for', dirPath)

    // 1. input -> directory path given
    let destPath;
    if(dirPath == undefined){

        console.log('Kindly enter the path')
        return
        
    }else{
        let doesExist = fs.existsSync(dirPath)
        if(doesExist){
            // 2. create -> organized files -> directory
            
            destPath=path.join(dirPath, 'organized_files') //getting the path
            if(fs.existsSync(destPath) == false)                //checking the directory already exist or not
            fs.mkdirSync(destPath)                              //if not then make it


        }else{

            console.log('Kindly enter the correct path')        
        }

        
    }


    oraganizeHelper(dirPath, destPath)
}

// 3. check all files/ identify categories of all the files present in that input directory ->
function oraganizeHelper(src, dest){
    
    let childNames = fs.readdirSync(src);
    
    // console.log(childNames)
    
    for(let i =0; i<childNames.length; i++){
        let childAddress = path.join(src,childNames[i])
        let isFile = fs.lstatSync(childAddress).isFile();
        
        if(isFile){                                         //differeniating file and directory
            
            // console.log(childNames[i])
            
            let category = getCategory(childNames[i]);
            
            // console.log(childNames[i],'belongs to ->',ct)
            
            // 4. copy/cut files to that organized directory insdie of any category folder

            sendFiles(childAddress,dest, category)
        }
    }

}

// help implemented
function helpFn(){
    console.log(`
                List of All the commands: 

                node main.js tree 'directoryPath'
                node main.js organize directoryPath'
                node main.js help
                
                `)
}

function getCategory(name){
    let ext =path.extname(name)
    console.log(ext)
    ext=ext.slice(1)                //removing . from extensions


    for(let type in types){

        let curTypeArr = types[type];

        for(let i = 0; i<curTypeArr.length; i++){
            if(ext == curTypeArr[i])
            {
                return type
            }
        }
    }

    return 'others';
}


function sendFiles(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category)

    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath)
    }

    let fileName = path.basename(srcFilePath)
    let destFilePath = path.join(categoryPath, fileName)
    fs.copyFileSync(srcFilePath, destFilePath)          // for copy paste
    // fs.unlinkSync(srcFilePath)           for cut paste 

    console.log(srcFilePath,"belongs to",destFilePath)

}