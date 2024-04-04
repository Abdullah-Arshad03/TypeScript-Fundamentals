// console.log('hellow world!')

// let age: number =  20;

// if(age < 50){
//     age+=10
// }
// console.log(age)


let sales: number = 123456
let course: string = 'TypeScript'
let isPublished = true
let lmao ;

console.log (typeof sales)
console.log(sales)


const func = (document: number) : number =>{
console.log(document)
return document
}

func(9)

// we use tuples when we are working with the pair of values
// like if we want to print the a id and the name for the person i-e 1 Abdullah
// Note : the length of the tuple should be fixed like if we annotate with the three types then there should be three values in the tuple not two or one or four 

let user: [number , string , boolean] = [1 , 'Abdullah' , true]


console.log('the type is now ',typeof user[0].toString())
console.log('the type of the first element of the tuple is : ',typeof user[0])

console.log(' this is the tuple ' , user)

// one of the benefits of the typescript is that when we assign the annotations,
// typeScript automatically shows us methods related to that data type 
// like if it is type of the array it shows the all array methods, and similar with the number type and string types to 


// lets see the enums 
// enums basically represents the group of constant 

enum Size { small= 4 , meduim , large}

// in enum the value will always increase from the left to right 
// if we give the value of the 4 to the small constant inside the enum 
// and leave the rest constant without assigning value, TS will automatically assign value of , 5 next to the 4 one and value of 6 next to the 5 one .


console.log('this is the small one ' , Size.small)
console.log('this is the meduim size : ',Size.meduim)
console.log('this is the meduim size : ',Size.large)

let newVariable: Size = Size.large

console.log('this is the new variable', newVariable)


// working with the objects

let object : {name: string , id: number ,  isPresent: boolean , retire: (name:string)=> void }= {
    name : 'Abdullah',
    id : 211316,
    isPresent: false ,
    retire: (name : string)=>{
        console.log('this is the ' , name)
    }
}

console.log(object.retire('arshad'))



  