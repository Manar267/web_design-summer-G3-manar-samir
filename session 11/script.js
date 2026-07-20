let courses=["html","css","js"];

let courseName=prompt('enter a course name');

let index = courses.findIndex(course => course === courseName);

if (index !== -1) {
    console.log("index= ", index);
} else {
    courses.push(courseName);
    console.log("course added");
}

console.log(courses);