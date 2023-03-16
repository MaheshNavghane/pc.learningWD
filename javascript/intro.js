// console.log("Hello js :)")

// let a;
// console.log(a)

// a = 574;
// console.log('variable '+a)
// console.log('variable',a)


// a = "Hello I am a String"
// console.log(a)

// // variable types: primitive types: number, String, boolean, null,symbol;

// let b = 1;
// console.log(b,typeof(b))

// b= 'Hello'
// console.log(b,typeof(b))

// b= null
// console.log(b,typeof(b))

// b = 1.2
// console.log(b,typeof(b))

// b= true
// console.log(b,typeof(b))

// // loops
// let number = 10
// for(let i = 0; i<number; i++)
// {
//     console.log(i);
// }

// let n = 0
// while(number > n){
//     console.log(n++)
// }


// // is prime
// number = 27
// let flag = true
// for(let num = 2; num*num<=number; num++){
//     if(number%num == 0){
//        flag = false
//        break;
//     }
// }

// if(flag)
// console.log(number,'is prime')
// else
// console.log(number,'is not prime')


// // non primitive - array, objects, functions

// function sayHi(param){
//     console.log('hi')
//     console.log('hi',param)
//     return 'returned value'
// }

// sayHi();
// sayHi(1823)
// sayHi('string')
// let re = sayHi(10)
// console.log(re)

// // let hello = function
// function randomtype()
// {
//     let value = Math.random() > 0.5 ? true:'less than 0.5'
//     return value
// }

// console.log(randomtype())

// // object -> group of key: value pair
// //  key: value -> property
// //  key: function -> method

// let cap ={
//     name: 'Steve',
//     lastName: 'Rogers',
//     address:{
//         city: 'Manhattan',
//         state: 'New york'
//     },

//     age: 35,
//     isAvenger: true,
//     movies: ['First Avenger','Winter soldier','civil war'],

//     say:function()
//     {
//         console.log('Hello')
//     }
// }

// // GET
// // console.log(cap.name)
// // console.log(cap.lastName)
// // console.log(cap.movies[1])
// // cap.say()

// // SET
// console.log("cap :", cap)
// cap.age = 36
// cap.isAvenger = false
// cap.friend = ['Tony','Bruce','Peter']
// console.log("new cap :", cap)

// //DELETE
// delete cap.address
// console.log('cap :', cap)

// for(let key in cap)
// {
//     console.log(key, " : ",cap[key])
// }

// let propKey = 'age'
// console.log(cap.age)
// console.log(cap[propKey])
// console.log(cap['age'])
// console.log(cap.xyz)

// Arrays declare 
// let arr = []

let array = [1, 2, 3, 4, 5]

// console.log(array)
// console.log(array.length)

// let i = 0
// while (i < array.length) {
//     console.log('ele at idx', i, ' is ', array[i])
//     i++;
// }

// // array functions

// // push - add last , unshift - add first 

// array.push('last value')
// array.unshift('first value')

// console.log(array)

// //pop - rm last, shift - rm first
// array.pop()
// array.shift()
// console.log(array)

// // slice - copy of (start, end -1) values
// // splice - taking all values(start, end) and storing in new array and removing from an original array 
// console.log(array.slice(1, 3))
// console.log(array.slice(1, ))
// console.log(array)
// console.log(array.splice(1, 3))
// console.log(array)

// indexOf - getting index of an element if present 
// use for string -> contain - checking the element is present or not in an array
// includes - it does the same thing of contain
console.log(array.indexOf(5))
console.log(array.includes(5))

// contact
let arr = ['Hello','hi','nihav','namaste']

let concated = arr.concat(array)
console.log(concated)

