/* Task 1 */
/*let courses = ["html", "css", "js"];

let courseName = prompt('enter a course name');

let index = courses.findIndex(course => course === courseName);
if (index !== -1) {
    console.log("index= ", index);
} else {
    courses.push(courseName);
    console.log("course added");
}
console.log(courses); */



/* Task 2 */
let users = [];

function addUser() {

    let id = Number(prompt("enter user ID"));
    let name = prompt("enter user name");
    let balance = Number(prompt("enter user balance"));

    let index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        console.log("ID already exists!");
        return;
    }

    users.push({
        id: id,
        name: name,
        balance: balance
    });

    console.log("user added successfully");
}


function editUserById() {

    let id = Number(prompt("enter user ID"));
    let newBalance = Number(prompt("enter new balance"));

    let index = users.findIndex(user => user.id === id);

    if (index === -1) {
        console.log("user not found");
        return;
    }

    users[index].balance = newBalance;

    console.log("balance updated successfully");
}


function transferBalance() {

    let fromId = Number(prompt("transfer from ID"));
    let toId = Number(prompt("transfer to ID"));
    let amount = Number(prompt("enter amount"));

    let fromIndex = users.findIndex(user => user.id === fromId);
    let toIndex = users.findIndex(user => user.id === toId);

    if (fromIndex === -1 || toIndex === -1) {
        console.log("invalid user ID");
        return;
    }

    if (users[fromIndex].balance < amount) {
        console.log("insufficient balance");
        return;
    }

    users[fromIndex].balance -= amount;
    users[toIndex].balance += amount;

    console.log("transfer completed successfully");
}


function deleteUserById() {

    let id = Number(prompt("enter user ID"));

    let index = users.findIndex(user => user.id === id);

    if (index === -1) {
        console.log("user not found");
        return;
    }

    users.splice(index, 1);

    console.log("user deleted successfully");
}


function displayUsers() {
    console.table(users);
}


addUser();
addUser();
addUser();
displayUsers();
editUserById();
displayUsers();
transferBalance();
displayUsers();
deleteUserById();
displayUsers();