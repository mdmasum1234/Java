let x = 10;
let y = 20;
let z = 30;
let sum;
sum = 100;

console.log("sum " + z);

console.log(x+y, y-x, z-y);
console.log(x*y, y*x, z*y);
console.log(x/y, y/x, z/y);


let string = "what 50 so ever wirtten in this double per single inverteed commas is string"
console.log(string);

let numb = 20;
console.log(numb);

let somebool = true;
console.log(somebool)

let someu = undefined;
console.log(typeof someu)

let somenl = null;
console.log(somenl)

let firstsym = Symbol(20);
let secondsym = Symbol("second symbol");

console.log(firstsym, secondsym);
console.log(typeof firstsym);

const sumBig = BigInt(2145454555555555);
console.log(sumBig);
console.log(typeof sumBig);

const SumInt = 3045556565555556656n;
console.log(SumInt);
console.log(typeof SumInt);

const car = {model: "Modelname",
            Name: "Mg",
            no: 404
}

console.log(car);

const personOne = {firstName: "John", LastName: "Doe", Age: 50,
eyeColor: "blue"}
console.log(personOne);

const nameone = {unicname: "md", fakename: "domain", Age: 30}
console.table(nameone);

let someArr = ["ashish", "Someoneelse"];
console.log(someArr);


console.table(someArr);

function myname(){
console.log("A");
console.log("A");
console.log("A");
console.log("A");

}
myname();
myname();


function AddNum(a,b){
    console.log("This is addisiton of two no.", a+b, a-b, a*b, b/a);
    console.log(a+b-100, a*b-100)
}

AddNum(50, 120);
AddNum(20, 120);
AddNum(500, 120);
AddNum(50, 1200);
AddNum(50, 100);

var employee = {
Rahul: {
    id:"001", 
    email: "md@gmail.com",
    personal_no: "15156-W" 
    
} 


};
console.table(employee);


function userlogged(user){
    console.log("This one is user");
    return `${user} has logged in.`;
}

console.log(userlogged('John'));