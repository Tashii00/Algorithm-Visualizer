const enqueue = document.querySelector(".push");
const dequeue = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const massage = document.querySelector(".massage");
const massageBox = document.querySelector(".massage-box");
const box = document.querySelectorAll(".box");
const queue = [];

const buttonDisable = () => {
    enqueue.disabled = true;
    enqueue.classList.add("disable-button");
    dequeue.disabled = true;
    dequeue.classList.add("disable-button");
    reset.disabled = true;
    reset.classList.add("disable-button");
    input.disabled = true;
};

const buttonEnable = () => {
    enqueue.disabled = false;
    enqueue.classList.remove("disable-button");
    dequeue.disabled = false;
    dequeue.classList.remove("disable-button");
    reset.disabled = false;
    reset.classList.remove("disable-button");
    input.disabled = false;
};

enqueue.addEventListener("click", () => {
    if (input.value === "") {
        massage.innerHTML = "Please Enter a value.";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    if (queue.length === 5) {
        input.value = "";
        massage.innerHTML = "Queue Overflow";
        massageBox.classList.add("error-massage");
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    const itemValue = input.value;
    queue.push(itemValue);

    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = itemValue;
    bucket.appendChild(element);

    box[0].innerHTML = queue[0];

    input.value = "";
    element.classList.add("ele-add");

    buttonDisable();

    setTimeout(() => {
        element.classList.remove("ele-add");
        box[1].innerHTML = itemValue;
        massage.innerHTML = `Item ${itemValue} is Enqueued.`;
        buttonEnable();
    }, 1500);
});

dequeue.addEventListener("click", () => {
    if (queue.length === 0) {
        massageBox.classList.add("error-massage");
        massage.innerHTML = "Queue Underflow";
        setTimeout(() => {
            massageBox.classList.remove("error-massage");
        }, 1200);
        return;
    }

    bucket.firstElementChild.classList.add("ele-remove");

    buttonDisable();

    setTimeout(() => {
        bucket.removeChild(bucket.firstElementChild);
        const itemValue = queue.shift();
        box[2].innerHTML = itemValue;
        
        if (queue.length === 0) {
            box[0].innerHTML = "";
        } else {
            box[0].innerHTML = queue[0];
        }

        massage.innerHTML = `Item ${itemValue} is Dequeued.`;
        buttonEnable();
    }, 1500);
});

reset.addEventListener("click", () => {
    while (queue.length > 0) {
        queue.pop();
    }

    box[0].innerHTML = "";
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    massage.innerHTML = "";

    while (bucket.firstChild) {
        bucket.removeChild(bucket.firstChild);
    }
});
