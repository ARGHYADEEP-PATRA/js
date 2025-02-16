//array

const myarr=[0,1,2,3,4,5]    //js array are resizable and mixed datatype
//console.log(myarr[0]);

//if we make a copy of a array then create a shallow copy(if we change in copy then changes reflect in array also)
//deepp copy(changes does not change in main array)

const myarr2 = new Array(1,2,3,4)

//Array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()
//  myarr.unshift(98)
// myarr.shift()


// console.log(myarr.includes(8));
// console.log(myarr.indexOf(4));

// const newarr=myarr.join() //change array to string
// console.log(myarr);
// console.log(newarr);

//slice,splice

console.log("a",myarr);

const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("b",myarr);

const myn2=myarr.splice(1,3)
console.log(myn2);
console.log("c",myarr);

