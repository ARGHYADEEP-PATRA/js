//singleton

//objct literals
const mysym=Symbol("keyl")
const jsUser={
    name: "arghya",
    age: 18,
    location: "kolkata",
    email: "abc@gmail.com",
    idLoggedin: false,
    "fullname":"Arghyadeep Patra",  //the fullname item does not access by dot like jsUser.fullname
    [mysym]: "mykey1"
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mysym]);
// console.log(typeof mysym);


jsUser.email="abcchat@gmail.com"
//console.log(jsUser.email);
//Object.freeze(jsUser)
jsUser.email="abcgoogle@gmail.com"
//console.log(jsUser);
jsUser.greeting = function()
{
    console.log("Hello JS user");
}
jsUser.greetingtwo = function()
{
    console.log('Hello JS user,${this.name}');
}
// jsUser.greeting();
// jsUser.greetingtwo();
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

