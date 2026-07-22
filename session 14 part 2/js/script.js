// =====================
// Input Event
// =====================

let customInput = document.getElementById("userName");

customInput.addEventListener("input", (e) => {

    let p = customInput.nextElementSibling;

    p.innerText = e.target.value;

});

// =====================
// Form
// =====================

let form = document.getElementById("loginForm");

let divsContainer = document.getElementById("divsContainer");

let users = [];

// =====================
// Show Users
// =====================

function showUser() {

    divsContainer.innerHTML = "";

    users.forEach((item, i) => {

        let newDiv = document.createElement("div");
        newDiv.classList.add("alert", "alert-primary", "mt-3");

        let newH2 = document.createElement("h2");
        newH2.innerText = `Name : ${item.name}`;

        let newH3 = document.createElement("h3");
        newH3.innerText = `Email : ${item.email}`;

        // Remove Button

        let removeBtn = document.createElement("button");

        removeBtn.innerText = "Remove User";

        removeBtn.classList.add("btn", "btn-danger", "me-2");

        removeBtn.addEventListener("click", () => {

            users.splice(i, 1);

            showUser();

        });

        // Edit Button

        let editBtn = document.createElement("button");

        editBtn.innerText = "Edit User";

        editBtn.classList.add("btn", "btn-success");

        editBtn.addEventListener("click", () => {

            let newName = prompt("Enter New Name", item.name);

            let newEmail = prompt("Enter New Email", item.email);

            if (newName != null && newName != "") {

                item.name = newName;

            }

            if (newEmail != null && newEmail != "") {

                item.email = newEmail;

            }

            showUser();

        });

        newDiv.appendChild(newH2);
        newDiv.appendChild(newH3);
        newDiv.appendChild(removeBtn);
        newDiv.appendChild(editBtn);

        divsContainer.appendChild(newDiv);

    });

}

// =====================
// Submit
// =====================

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let user = {

        name: e.target[0].value,

        email: e.target[1].value

    };

    users.push(user);

    console.table(users);

    showUser();

    form.reset();

});

// =====================
// Scroll Div
// =====================

let scrollDiv = document.getElementById("scroll-div");

scrollDiv.addEventListener("scroll", (e) => {

    console.log(e.target.scrollTop);

    if (e.target.scrollTop > 300) {

        console.log("greater than 300");

        scrollDiv.classList.remove("alert-success");
        scrollDiv.classList.add("alert-danger");

    }

    else {

        scrollDiv.classList.remove("alert-danger");
        scrollDiv.classList.add("alert-success");

    }

});

// =====================
// Window Scroll
// =====================

window.addEventListener("scroll", () => {

    console.log(window.scrollY);

    console.log(document.documentElement.scrollTop);

});

// =====================
// Scroll Window Button
// =====================

let scrollWindow = document.getElementById("scrollWindow");

scrollWindow.addEventListener("click", () => {

    window.scrollTo({

        top: 1000,

        behavior: "smooth"

    });

});

// =====================
// Scroll Div Button
// =====================

let scrollDivBtn = document.getElementById("scrollDivBtn");

scrollDivBtn.addEventListener("click", () => {

    scrollDiv.scrollTo({

        top: 500,

        behavior: "smooth"

    });

});

// =====================
// setTimeout
// =====================

let setTime = setTimeout(() => {

    console.log("please login first");

}, 3000);

console.log(setTime);

// لإلغاء الـ timeout
// clearTimeout(setTime);

// =====================
// setInterval
// =====================

let h1 = document.querySelector(".text-primary");

let i = 0;

let setInt = setInterval(() => {

    h1.innerText = i;

    if (i == 100) {

        clearInterval(setInt);

    }

    i++;

}, 1000);

console.log(setInt);