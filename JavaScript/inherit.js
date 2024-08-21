class Person {
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    displayPerson(){
        console.log("person Name is :", this.name, "and age is : ",this.age);

        
    }
personDemo(){
console.log("Person Cladss");

}
}

class student extends Person{
    constructor(sName,sAge){
        super(sName,sAge);
        this.sName = sName;
        this.sAge =sAge;
    }
    DisplayStudent(){
        console.log("student Name :",this.sName,"And age : ",this.sAge);
        
    }
    StudentDemo(){
        console.log("Student Demo");
        
    }

}
const s1 = new student("roshan",18);

s1.DisplayStudent();
s1.displayPerson();

s1.StudentDemo();