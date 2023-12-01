const tasks = Array.from(document.getElementsByClassName("task"));
const checks = Array.from(document.getElementsByClassName("check"));
const btn = document.querySelector("button");
console.log(tasks);
console.log("start of program");

const addTask = () => {
    let i = tasks.length
    console.log("executed");
    var div = document.createElement("div");
    div.class = "row";
    var checkBox = document.createElement("input");

    checkBox.type = "checkbox";
    checkBox.class = "check";
    checkBox.id = `i${i}`;
    checkBox.name = `t${i}`;
    div.appendChild(checkBox);
    var textBox = document.createElement("input");
    textBox.type = "text"
    textBox.class = "task";
    textBox.id = `t${i}`;
    textBox.name = `t${i}`;
    console.log(tasks);
    tasks.push(textBox);
    div.appendChild(textBox);
    var cont = document.querySelector(".flex-container")
    cont.appendChild(div);

    update();

    checks = document.getElementsByClassName("check");
    tasks = document.getElementsByClassName("task");
};

const update = () => {
    for(let i = 0;i<tasks.length;i++){
        tasks[i].addEventListener("change", () => {
            localStorage.setItem(`${i}`,JSON.stringify(tasks[i].value));
            console.log(localStorage.getItem(i));
        });
        checks[i].addEventListener("change", () => {
            localStorage.setItem(`c_${i}`,JSON.stringify(checks[i].checked));
            console.log(localStorage.getItem(`c_${i}`));
        });
    }
    //need to investigate why addTask works and not addTask(tasks.length)
    btn.addEventListener("click", addTask);
    console.log("working");
};

update();

for(let i = 0; i<tasks.length;i++) {
    tasks[i].value = JSON.parse(localStorage.getItem(i));
    checks[i].checked = JSON.parse(localStorage.getItem(`c_${i}`));
}

