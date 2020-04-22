//  let _=require('underscore');
//  let arr=[1,2,3,4,5];
//  arr=_.without(arr,5);
//  console.log(arr);
//  const _ = require('underscore')

// let obj = {
// 	name: 'adley',
// 	age: 18,
// 	addr: 'Beijing'
// }

// let newObj = _.map(obj, (value, key) => {
// console.log(value, key);
	
// let _o = {}
// if (key == 'age' && value >= 18){
// 	_o.desc = '你已经是老年人'
// }else {
// 	_o[key]=value;
// }
// 	return _o;
// })

// console.log(newObj) 

// let a1 = _.range(10)
// let a2 = _.range(0,60,5)
// console.log(a1)
// console.log(a2) 

// let r1 = _.some(obj, (value, key) => {
// 	return value >= 18;
// })
// console.log(r1)

// let r2 = _.every(obj, (value, key) => {
// 	return value > 18;
// })
// console.log(r2)

// function log() {
// 	console.log(new Date())
// }
// _.delay(log, 3000)

let arr = [1,3,41,2,3,21,35,3,2,21];
let m = _.find(arr, item => item % 5 == 0)
console.log(m) 
