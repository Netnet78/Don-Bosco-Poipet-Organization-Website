class students {
    constructor(name, age, gender, email, grade) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.grade = grade;
    };
    getStudentData() {
        console.log("Student name: " + this.name);
        console.log("Student age: " + this.age);
        console.log("Student gender: " + this.gender);
        console.log("Student Email: " + this.email);
        console.log("Student's grade: " + this.grade + '\n');
        console.log("========================== \n");
    };
};

var student1 = new students("Sy Sophaneth", 16, "Male", "sysophaneth@gmail.com", 'B');

student1.getStudentData();