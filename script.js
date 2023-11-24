const tasks = document.getElementsByClassName("task");
const checks = document.getElementsByClassName("check");
console.log(tasks);
console.log("start of program");

const sdnj = () => {
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

sdnj();

for(let i = 0; i<tasks.length;i++) {
    tasks[i].value = JSON.parse(localStorage.getItem(i));
    checks[i].checked = JSON.parse(localStorage.getItem(`c_${i}`));
}