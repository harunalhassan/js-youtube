//there are two types of datattypes in js :primitive and non primitive 
/*primitive includes Number,string,undefined, null,Bigint,symbol,Boolean */

// Non Prmitive: Array, Object, function


/*Example of Primitive*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof(userEmail));
console.log(typeof(outsideTemp));
console.log(typeof(isLoggedIn));



/*Example of Non- Primitive*/

let Mybooks=["engish","maths","science"]

console.log(Mybooks)
console.log(typeof Mybooks)

let MyObj={
    branch : "ECE",
    scholarId: 2114054


}

console.log(MyObj)
console.log(typeof MyObj)


const myfunction= function(){
    console.log("Hello NITS")
}


/*++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// memory used in js are of 2 types : Stack and heap

// stacks are used to store the primitive datatypes and the heap are used to store the non primitive data types

//in stack if we change the value of a variable after equating it with a new variable then the original variable is not change ,it make a copy for the change and changes occurs in that copy only, BUT in case of heap memory,it carries the reference of the variables. If we equate two variable then they refers the same values.


