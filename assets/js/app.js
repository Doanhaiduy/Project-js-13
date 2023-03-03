let input = document.querySelector("textarea");
let list_item = document.querySelector(".list-item");
let list = [];
let a = "";
let btn = document.querySelector(".btn");
let btn_new = document.querySelector(".btn.new");
let count = 0;

input.addEventListener("keyup", (e) => {
    a = input.value.trim();
    if (e.key === "Enter" && a !== "") {
        document.querySelector(".error").classList.remove("active");

        e.preventDefault();
        let node = document.createElement("span");
        let text = document.createTextNode(a);
        node.appendChild(text);
        list.push(node);
        list_item.appendChild(node);
        input.value = "";
        console.log(list);
        // random_node(list);
    }
});

function random_node(list_node) {
    list_node.forEach((element) => {
        element.classList.remove("active");
    });
    let max = list_node.length;
    console.log(max);
    let rand = Math.floor(Math.random() * (max - 0) + 0);
    list_node[rand].setAttribute("class", "active");
}

btn.addEventListener("click", () => {
    if (count >= 1 && list.length != 0 && !document.querySelector("span.active")) {
        console.log(list.length);
        document.querySelector("span.active").classList.remove("select");
    }
    if (list.length !== 0) {
        count++;
        let interval = setInterval(() => {
            list.forEach((element) => {
                element.classList.remove("active");
            });
            let max = list.length;
            console.log(max);
            let rand = Math.floor(Math.random() * (max - 0) + 0);
            list[rand].setAttribute("class", "active");
        }, 150);
        setTimeout(() => {
            // document.querySelector("span.active").classList.remove("active");
            // list[1].setAttribute("class", "active");

            clearInterval(interval);
            document.querySelector("span.active").classList.add("select");
            input.value = `The selected answer is: ${document.querySelector("span.active").innerText}`;
        }, 3000);
    } else {
        document.querySelector(".error").classList.add("active");
    }
});

btn_new.addEventListener("click", () => {
    list = [];
    input.value = "";
    list_item.innerHTML = "";
    count = 0;
});
