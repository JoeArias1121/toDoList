const tasks = document.getElementsByClassName("task");
console.log(tasks);
console.log("hey")
const store = 7;

const sdnj = () => {
    for(let i = 0;i<tasks.length;i++){
        tasks[i].addEventListener("change", () => {
            localStorage.setItem(`${i}`,JSON.stringify(tasks[i].value));
            //console.log(localStorage.getItem(i));
        });
    }
    console.log("working");
};

sdnj();

for(let i = 0; i<tasks.length;i++) {
    //tasks[i].value = JSON.parse(localStorage.getItem(i));
}

sessionStorage.setItem("myStorage", "finally");