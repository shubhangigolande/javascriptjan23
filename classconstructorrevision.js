// 1 program  //with object
let stud={
    firstName:"shubhangi",
    lastName:"golande",
    age:33,
    skills:["javascript","python"]      
}
console.log(stud)

//program 2  // class multiple objects--blue print -->user defined data type
class studinfo1{
    firstName="shubhangi"
        lastName="golande"
        age=32
        rollNumber=25
}
let shubhangi=new studinfo1()
console.log(shubhangi)

//program 3
//setting object vaakue outside the class

class studinfo2{
    firstName=undefined
        lastName=undefined
        age=undefined
        rollNumber=undefined
}
let shubh=new studinfo2()
shubh.firstName="amit"
shubh.lastName="raje"
shubh.age=30
shubh.rollNumber=45
console.log(shubh)


//program 4
// 2nd way class constructor

class studinfo4{ 
    constructor(fn,ln,ag,rn){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNumber=rn
   }
}
let pooja = new studinfo4("pooja","dhumal",29,36)
console.log(pooja)

let sneha = new studinfo4("sneha","pathare",34,20)
console.log(sneha)


//program 5
// 3rd way by using method

class studinfo5{
    setfname(fn){
        this.firstName=fn
    }
    setlname(ln){
        this.lastName=ln
    }
    setag(ag){
        this.age=ag
    }
    setrn(rn){
        this.rollNumber=rn
    }
}
let shivansh= new studinfo5()
console.log(shivansh)
shivansh.firstName="shivansh"
shivansh.lastName="deshmukh"
shivansh.age=24
shivansh.rollNumber=20
console.log(shivansh)


// let a={}  //object
// let b=[] // array
//let c=''  //string

