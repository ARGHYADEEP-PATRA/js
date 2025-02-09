//singleton

//const tinderuser=new Object()   //singleton object
const tinderuser = {}
tinderuser.id="123abc"
tinderuser.name="Arghya"
tinderuser.isLoggedIn= false
//console.log(tinderuser);

const regularuser ={
    email: "some@gmail.com",
    fullname: {
      userfullname:{
        firstname:"Arghyadeep",
        lastname:"Patra"
      }
    }
}
//console.log(regularuser.fullname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"c"}
//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1, ...obj2}  //using spread operator
//console.log(obj3);

// when value comes from database the values are comes as array of object


const user=[
  {
    id:1,
    name:"Arghyadeep Patra",
    roll:1234
  },
  {
    id:2,
    name:"Shubham Golder",
    roll:1243
  }
]
//console.log(user[1].name);
console.log(tinderuser);
console.log(Object.keys(tinderuser));  //Object.keys retutn a array not a object also same for values
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser)); //Object.entryes return arrays of array where each key value  represented by an array where the first value refer key and the second value refer value

console.log(Object.hasOwnProperty('isLoggedIn'));
//hasOwnProperty used for check a key is present or not