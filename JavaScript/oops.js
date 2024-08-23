class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  displayPerson() {
    // return `${this.x} is ${this.y} years old.`;
    console.log(this.x,"is", this.y, "years old.");
    
  }
}

const s1 = new Person("Rahul", 46);
s1.displayPerson();
// console.log(s1.displayPerson());
