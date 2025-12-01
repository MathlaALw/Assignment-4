// Human class
class Human {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

// Engineer class extends Human
class Engineer extends Human {
    constructor(name, age, id, title, departmentId, salary, workingHours) {
        super(name, age, id);
        this.title = title;
        this.departmentId = departmentId;
        this.salary = salary;
        this.workingHours = workingHours;
    }
}

//Sample engineers
 let engineers = [
        new Engineer("Ali Ahmed", 28, 1, "Software Engineer", "D-101", 800, "8:00 AM - 4:00 PM"),
        new Engineer("Sara Mohamed", 26, 2, "Frontend Engineer", "D-102", 750, "9:00 AM - 5:00 PM"),
        new Engineer("Omar Saleh", 32, 3, "Backend Engineer", "D-103", 900, "7:30 AM - 3:30 PM"),
        new Engineer("Laila Hassan", 30, 4, "Full Stack Engineer", "D-104", 950, "9:00 AM - 6:00 PM"),
    ];


// Display engineers 
let container = document.getElementById("engineer-info");

engineers.forEach(engineer => {

    // Create a wrapper div for each engineer
    let card = document.createElement("div");
    card.className = "engineer-card mb-4 p-3 border ";


    // Create each line as <h3>
    let name = document.createElement("h3");
    name.textContent = "Name: " + engineer.name;

    let title = document.createElement("h3");
    title.textContent = "Title: " + engineer.title;

    let age = document.createElement("h3");
    age.textContent = "Age: " + engineer.age;

    let dept = document.createElement("h3");
    dept.textContent = "Department ID: " + engineer.departmentId;

    let salary = document.createElement("h3");
    salary.textContent = "Salary: " + engineer.salary + " OMR";

    let hours = document.createElement("h3");
    hours.textContent = "Working Hours: " + engineer.workingHours;

    // Append all fields to the card
    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(dept);
    card.appendChild(salary);
    card.appendChild(hours);

    // Append card to main div
    container.appendChild(card);
});