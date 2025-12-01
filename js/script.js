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
        new Engineer("Youssef Karim", 27, 5, "DevOps Engineer", "D-105", 850, "8:30 AM - 4:30 PM")
    ];

// Display engineers in the HTML
// get the container div
let container = document.getElementById("engineers");
// loop through engineers and create cards
    engineers.forEach(engineer => {
        // create a column div
        let col = document.createElement("div");
        // set bootstrap classes
        col.className = "col-md-6 col-lg-4 mb-4";
        // create card content
        col.innerHTML = `
            <div class="card h-100 "> 
                <div class="card-body">
                    <p class="card-text mb-1"><strong>Name:</strong>${engineer.name}</p>
                    <p class="card-text mb-1 "><strong>Title:</strong> ${engineer.title}</p>
                    <p class="card-text mb-1"><strong>Age:</strong> ${engineer.age}</p>
                    <p class="card-text mb-1"><strong>Department ID:</strong> ${engineer.departmentId}</p>
                    <p class="card-text mb-1"><strong>Salary:</strong> ${engineer.salary} OMR</p>
                    <p class="card-text mb-0"><strong>Working Hours:</strong> ${engineer.workingHours}</p>
                </div>
            </div>
        `;

        // append the column to the container

        container.appendChild(col);
    });
