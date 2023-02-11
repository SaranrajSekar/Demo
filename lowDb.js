const _ = require('lodash')

const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Pomogranents",
    "Kiwi",
    "Pineapple",
    "St_berry",
    "Banana",
    "Apple",
    "apple",
    "Kiwi"
]

const std = [
    { id: 001, "name": "Chottu" },
    { id: 002, "name": "Patulu" },
    { id: 003, "name": "Sina" },
    { id: 004, "name": "Siva" }
]
//console.log(_.differenceBy(std, [{id:002, "name":"Patulu"}]));
//.log(_.drop(fruits, 0));
//console.log(_.drop(std, 2));
//console.log(_.dropRight(std));
//console.log(_.dropRightWhile(std, ["name", "Siva"]));
//console.log(_.fill(fruits, "a"));

//const MyNew = _.chunk(fruits, 3);
//const MyNew = _.difference(fruits, ["apple", "Banana"])
//const MyNew = _.join(fruits, '-')
//let MyNew = _.without(fruits, "Apple", "Banana")
//let MyNew = _.uniq(fruits)
//console.log(MyNew);
// let falsy = [0, 1, 2, null, undefined, false, "false", NaN];
// console.log(_.compact(falsy));
// console.log(_.concat(falsy, 0, 20, 40));
//console.log(_.fill(Array(10), 2));
// console.log(_.findIndex(std, function (item) {
//     return item.id = 2
// }));

// console.log(_.find(std, function (item) {
//     return item.id = 002
// })); => {id:2, name:"Patulu"}

// console.log(_.find(std, (student) => {
//     return student.id = 003
// })); => {id:3, name:"Siva"}

var array1 = [1, 2, 3, [4, [5, [0]]], 6];
console.log(_.zip([1, 2], [true, false], ['a', 'b'], [3, 4]));
//console.log(_.flattenDepth(array1)); => [1, 2, 3, 4,[5, [0]], 6 ]
//console.log(_.flattenDepth(array1, 3)); => [1, 2, 3, 4, 5, 6]
//console.log(_.fromPairs([['a', 1], ['b', 2], ['c', 3]])); => {a:1, b:2, c:3}
//console.log(_.head(std)); => {id:1 , name:"Chottu"}
//console.log(_.head([])); => undefined
//console.log(_.indexOf([1, 2, 3, 4], 1)); => 0
//console.log(_.intersection([1, 2], [2, 3])); => [2]
// console.log(_.intersection([1,2 ,3], [2, 3])); => [2, 3]
// console.log(_.intersection(['Apple', "Mango"], ['Apple', "Kiwi"])); => ['Apple']
//console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 1 }, { 'x': 2 }], 'x')); => [{'x':1}]
//console.log(_.intersectionWith([{ 'x': 1 }, {'x':3}], [{ 'x': 1 }, { 'x': 2 }]));
// var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
// var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

// console.log(_.intersectionWith(objects, others, _.isEqual));
// console.log(133311 / 1024);
//console.log(_.last([1, 2, 3, 4])); > [4]
//console.log(_.nth(fruits, 1)); > Banana
//console.log(_.nth(fruits, -1)); > Kiwi
//console.log(_.pull(fruits, "Banana")); > It will print other than Banana
//console.log(_.pull(fruits, "Apple", "Banana")); > It will Print other than Apple, Banana
//console.log(_.pullAll(fruits, ["Apple", "Banana", "Kiwi"])); > It Will Acceppt Array Value in pullAll
var arr1 = [1, 2, 3, 4];
// console.log(_.take(arr1, 3)); // [1, 2, 3]
// console.log(_.take(arr1, 0));//[]
// console.log(_.take(arr1));// [1]
//console.log(_.tail(arr1)); // [2, 3, 4]
//console.log(_.reverse(arr1));
//console.log(_.sortedIndex(arr1, 1)); > 0
//console.log(_.sortedIndex(arr1, 3));
//console.log(_.sortedLastIndex(arr1, 4));
//console.log(_.sortedUniq(fruits));

// var event = _.remove(arr1, (Item) => {
//     return Item % 2 == 0
// })

// console.log(arr1);
// console.log(event);