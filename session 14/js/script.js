let users = [];
let currentIndex = -1;

function addUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("fill all fields");
        return;
    }

    let user = {
        name: name,
        email: email
    };

    users.push(user);

    clearInputs();
    render();
}

function render() {

    let container = document.getElementById("users");

    container.innerHTML = "";

    for (let i = 0; i < users.length; i++) {

        container.innerHTML += `
            <div class="card">
                <h3>${users[i].name}</h3>
                <p>${users[i].email}</p>

                <button onclick="editUser(${i})">Edit</button>

                <button onclick="removeUser(${i})">Remove</button>

                <hr>
            </div>
        `;
    }
}

function removeUser(index) {

    users.splice(index, 1);

    render();
}

function editUser(index) {

    document.getElementById("name").value = users[index].name;
    document.getElementById("email").value = users[index].email;

    currentIndex = index;
}

function updateUser() {

    if (currentIndex == -1) {
        alert("select a user first");
        return;
    }

    users[currentIndex].name = document.getElementById("name").value;
    users[currentIndex].email = document.getElementById("email").value;

    currentIndex = -1;

    clearInputs();

    render();
}

function clearInputs() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}