// very important


let path = require('path')

// extname -> it shows the type of extension
let ext = path.extname(path.join(__dirname,'abc.js'))
console.log('ext',ext)

// basename -> name of folder or file
let name = path.basename(__dirname)
console.log(name)

name = path.basename(path.join(__dirname,'abc.js'))
console.log(name)
