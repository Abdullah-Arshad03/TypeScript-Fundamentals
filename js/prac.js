let student = {
    id : 211316,
    name : 'Abdullah Bin Arshad',
    depart : (department)=>{
        console.log('this is the department : ', department)
    }
}


student.newId = 211315

console.log(student.newId)
console.log(student)
console.log(student.depart('Software Engineering!'))

const func = ()=>{
    
}