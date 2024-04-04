// // console.log('hellow world!')

// // let age: number =  20;

// // if(age < 50){
// //     age+=10
// // }
// // console.log(age)
// let sales: number = 123456
// let course: string = 'TypeScript'
// let isPublished = true
// let lmao ;

// console.log (typeof sales)
// console.log(sales)

// const func = (document: number) : number =>{
// console.log(document)
// return document
// }

// func(9)

// // we use tuples when we are working with the pair of values
// // like if we want to print the a id and the name for the person i-e 1 Abdullah
// // Note : the length of the tuple should be fixed like if we annotate with the three types then there should be three values in the tuple not two or one or four

// let user: [number , string , boolean] = [1 , 'Abdullah' , true]

// console.log('the type is now ',typeof user[0].toString())
// console.log('the type of the first element of the tuple is : ',typeof user[0])

// console.log(' this is the tuple ' , user)

// // one of the benefits of the typescript is that when we assign the annotations,
// // typeScript automatically shows us methods related to that data type
// // like if it is type of the array it shows the all array methods, and similar with the number type and string types to

// // lets see the enums
// // enums basically represents the group of constant

// enum Size { small= 4 , meduim , large}

// // in enum the value will always increase from the left to right
// // if we give the value of the 4 to the small constant inside the enum
// // and leave the rest constant without assigning value, TS will automatically assign value of , 5 next to the 4 one and value of 6 next to the 5 one .

// console.log('this is the small one ' , Size.small)
// console.log('this is the meduim size : ',Size.meduim)
// console.log('this is the meduim size : ',Size.large)

// let newVariable: Size = Size.large

// console.log('this is the new variable', newVariable)

// // working with the objects

// let object : {name: string , id: number ,  isPresent: boolean , retire: (name:string)=> void }= {
//     name : 'Abdullah',
//     id : 211316,
//     isPresent: false ,
//     retire: (name : string)=>{
//         console.log('this is the ' , name)
//     }
// }

// console.log(object.retire('arshad'))

console.log("practicing yesterdays concepts !");

let myName: string = "my is Abdullah";
console.log(myName);

let id: number = 211316;
console.log(typeof id);

console.log("Working with the Functions");

enum Enum {
  first = 9,
  second,
  third,
}

console.log(Enum.first, Enum.second, Enum.third);

let arr: string[] = ["sldf"];

// console.log(typeof arr[2] , arr[2])

let objects: { company: string; readonly area: number , func : (date: number)=> number} = {
  company: "futurenostics",
  area : 11,
  func : (date: number)=>{
      return date
  }
};

// console.log(objects.area = 13)
console.log(objects.area);

console.log(objects.func(33))

// working with the union types
// we can give the multiple types.


const sum = (num1: number | string) =>{
  console.log('im in the sum and the type is : ', typeof num1)
}


sum (3) // now sum can take two types not only one 
sum ('9') // sum i


let i = 9 
console.log(typeof i.toString())
console.log(typeof i)


let student : {id: number , name : string , depart: (department: string)=> void} = {
    id : 211316,
    name : 'Abdullah',
    depart : (department: string)=>{
        console.log('the department of abdullah is', department)
    }
}


let student2 : {another: boolean} = {
    ...student,
    another : true
}
console.log(student.depart('software Engineering!'))

console.log(student2)

// type Student 

//union in the typeScript

let lmao = (num2 : number | string): number => {
    if(typeof num2 === 'number'){
        console.log('run number')
        return num2
    }
    else{
        console.log('run string')
          return parseInt(num2)*3
    }
}

lmao('string')

let neww : number | string ; 
neww = 'new string'
neww = 9 
console.log(neww)

let newww: number | string ;
newww = 'lmao this is very true';

console.log(newww)







