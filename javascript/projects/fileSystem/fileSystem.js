
// files -> create read update delete
let fs = require('fs')

// reading file
let buffer = fs.readFileSync('abc.js')

console.log('bin data', buffer)

console.log('bin data '+buffer)

// creating file
// fs.openSync('abc.txt','w')

// no file then create 
// file exist -> then content gets replace
// fs.writeFileSync('abc.txt','Hum aj khush nahi hey')

// update
// if file exists then add 
// fs.appendFileSync('abc.txt','hum jhoot bol rahe hey')

//creating/making -> directory/folders
// fs.mkdirSync('meriDirec')

// fs.writeFileSync('meriDirec/meriFile.txt','mein directory banai aur usme meri file bana di')

// let content = fs.readdirSync('meriDirec'); // giving the name of files present in the directory
// console.log(""+content)

// for(let i =0; i<content.length; i++){
//     fs.unlinkSync('meriDirec/'+content[i]); //removing file
// }

// removing directory/folder
// fs.rmdirSync('meriDirec')

// fs.existSync -> if a file exist at a path -> returns true else false
// fs.
// fs lstatSync -> is it file or directory

// console.log(fs.existsSync('fileSystem.js'))
// console.log(fs.existsSync('ab.txt'))
// // console.log(fs.statSync('fileSystem.js'))

// let detailsObj = fs.lstatSync(__dirname + '\\fileSystem.js')
// let ans = detailsObj.isFile();
// console.log(ans)
// ans = detailsObj.isDirectory()
// console.log(ans)




//  summary 
// for files
// create               read                update              delete
// open -w,             readfileSync        appendFileSync      unlinkSync
//writefileSync

// for directory
// create               read                delete              check(exist)
// mkdirSync            readdirSYnc         rmdirSync           existsSync




// program for making directory

for(let i=1; i<=10; i++){

    let mk = `Lecture-${i}`
    fs.mkdirSync(mk)
    fs.writeFileSync(mk+'//'+'readme.md',`# readme file with lecture ${i}`)
    
}



