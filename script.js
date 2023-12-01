const tasks = document.getElementsByClassName("task");
const checks = document.getElementsByClassName("check");
const btn = document.querySelector("button")
console.log(tasks);
console.log("start of program");

const addTask = (i) => {
    let div = document.createElement("div");
    div.class = "row";
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.class = "check";
    checkBox.id = `i${i}`;
    checkBox.name = `t${i}`;
    div.appendChild(checkBox);
    let textBox = document.createElement("input");
    textBox.type = "text"
    textBox.class = "task";
    textBox.id = `i${i}`;
    textBox.name = `t${i}`;
    tasks.push(textBox);
    div.appendChild(textBox);
    let cont = document.querySelector(".flex-container")
    cont.appendChild(div);
    update()
};

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
    btn.addEventListener("onClick", addTask(tasks.length) );
    console.log("working");
};

const add = (i) => {
    update
};

update();

for(let i = 0; i<tasks.length;i++) {
    tasks[i].value = JSON.parse(localStorage.getItem(i));
    checks[i].checked = JSON.parse(localStorage.getItem(`c_${i}`));
}

