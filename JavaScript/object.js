const Students = {
    Name: "Nikesh",
    dob : "Nov 17",
    Address : "bardiya",
    Study : "BIT",
  DisplayName : function(){
    return this.Name
  }

}

// console.log(Students["Name"]);


const fullName = Students.DisplayName();
console.log(fullName);
