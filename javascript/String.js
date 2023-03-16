let single = 'hello'
let double = "Hi"
let another = `not normal`

console.log(double)
console.log(another)
console.log(single)

//charAt
let char = single.charAt(2)
let subStr = single.substring(1,3)
let ascii = single.charCodeAt(2)
console.log(char)
console.log(ascii)
console.log(subStr)

//Split 
let s = single.split('l')
console.log(s)
let sp = single.split("")
console.log(sp)
let join = sp.join("")
console.log(join)

let ne = '      lskdjf       '
console.log(ne)
let trim = ne.trim()
console.log(trim)
