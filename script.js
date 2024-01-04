// tasks
//? task-1
// let arr = [3, 7, 34, 2]
// console.log(arr.reduce((acc, el) => {
//     return acc < el ? acc : el
// }))



// let students = [
//   { student: 'Jack', marks: 43 },
//   { student: 'Tom', marks: 92 },
//   { student: 'Helen', marks: 85 },
//   { student: 'Peter', marks: 58 },
//   { student: 'Jessica', marks: 78 },
// ];
// console.log(students.sort((a, b) => a.marks - b.marks))


//? task-2    
// let str = 'Hello'
// console.log(str.toLowerCase().split('').sort().join(''))


//? task-3
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.filter(el => {
//     return el % 2 === 0
// }))


//? task-4
// let arr = ['text', 3, 7, 'github', 13, 'dev']
// console.log(arr.filter(el => {
//     return +el
// }))


//? task-5
// const myArr = (arr) => {
//     arr = [7, 13, 3, 77, 100]
//     let min = arr.reduce((acc, el) => acc > el ? el : acc)
//     let max = arr.reduce((acc, el) => acc > el ? acc : el)
//     let arrLength = arr.length
//     let arrMiddle = arr.reduce((acc, el) => {
//         return acc + el
//     }) / arr.length
//     return `[${min}, ${max}, ${arrLength}, ${arrMiddle}]`
// }
// console.log(myArr())


//? task-6
// const double = (str) => {
//     return str.split('').map(el=> el + el).join('')
// }
// console.log(double('test'))


//? task-7
// const persons = [
//   {name: 'Ivan', age: 27},
//   {name: 'Petya', age: 16},
//   {name: 'Erbol', age: 15},
//   {name: 'Aktai', age: 46},
// ]
// console.log(persons.filter(el => {
//     return el.age > 18
// }))



//? task-9
// let arr = [5, 7, 33, 88, 92]
// console.log(arr.find(el => {
//     return el % 2 === 0
// }))


//? task-10
// const persons = [
//   {name: 'Ivan', age: 27},
//   {name: 'Petya', age: 16},
//   {name: 'Dima', age: 24}
// ]
// console.log(persons.reduce((acc, el) => {
//     return acc.age > el.age ? acc : el
// }))
