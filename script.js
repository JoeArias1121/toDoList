const tasks = document.getElementsByClassName("task");
const checks = document.getElementsByClassName("check");
console.log(tasks);
console.log("start of program");

const update = () => {
    for(let i = 0;i<tasks.length;i++){
        tasks[i].addEventListener("change", () => {
            localStorage.setItem(`${i}`,JSON.stringify(tasks[i].value));
            console.log(localStorage.getItem(i));
        });
        checks[i].addEventListener("change", () => {
            localStorage.setItem(`c_${i}`,JSON.stringify(checks[i].checked))
            console.log(localStorage.getItem(`c_${i}`));
        });
    }
    console.log("working");
};

update();

for(let i = 0; i<tasks.length;i++) {
    tasks[i].value = JSON.parse(localStorage.getItem(i));
    checks[i].checked = JSON.parse(localStorage.getItem(`c_${i}`));
}

const addTask = () => {
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let textBox = document.createElement("input");
    textBox.type = "text"
    textBox.className = "task";
};