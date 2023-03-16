
let cp = require('child_process')

console.log('trying to open calculator')

// cp.execSync('calc')
// cp.execSync('start chrome https:\\www.youtube.com')
let out = cp.execSync('node abc.js')
console.log('output '+ out)