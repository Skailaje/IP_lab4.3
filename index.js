// Base Person class
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  // Regular method to display details
  displayDetails() {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
  }
}

// Student class extending Person class
class Student extends Person {
  constructor(name, age, city, rollNo) {
    // Call the parent class constructor using 'super'
    super(name, age, city);
    this.rollNo = rollNo;

   
    if (this.rollNo <= 0) {
      throw new Error('Roll Number must be greater than zero!');
    }
  }

  // Overriding the displayDetails method from Person
  displayDetails() {
    // Use super to get details from parent class and add Student-specific info
    return `${super.displayDetails()}, Roll Number: ${this.rollNo}`;
  }
}

// Example usage
try {
  // Create a valid Student object
  const student1 = new Student("sannidhi kailaje", 20, "Navi Mumbai", 20);
  console.log(student1.displayDetails()); // Expected output: Name: John Doe, Age: 20, City: New York, Roll Number: 123

  // Create an invalid Student object with roll number zero to trigger the exception
  const student2 = new Student("anushka", 20, "kalyan", 0); 
  console.log(student2.displayDetails());
} catch (error) {
  console.error(error.message); 
}
