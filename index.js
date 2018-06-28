const images = document.querySelectorAll(".images");
const pagers = document.querySelectorAll(".banner-pager-item");
const banner = document.querySelector("#banner-inner");

/*let t;
let n = 0;


for (let i = 0; i < pagers.length; i++) {
    pagers[i].onclick = function () {
        for (let j = 0; j < pagers.length; j++) {
            pagers[j].classList.remove("active");
            images[j].classList.remove("active");
        }
        this.classList.add("active");
        images[i].classList.add("active");
    }
}

t = setInterval(move, 3000);

function move() {
    n++;
    if (n === pagers.length) {
        n = 0;
    }
    for (let i = 0; i < pagers.length; i++) {
        pagers[i].classList.remove("active");
        images[i].classList.remove("active");
    }
    pagers[n].classList.add("active");
    images[n].classList.add("active");
}


banner.onmouseenter = function () {
    clearInterval(t);
};
banner.onmouseleave = function () {
    t = setInterval(move, 3000);
};*/

let now = 0;
let z = 12;
let flag = true;
for (let i = 0; i < pagers.length; i++) {
    pagers[i].onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        for (let j = 0; j < pagers.length; j++) {
            pagers[j].classList.remove("active");
        }
        this.classList.add("active");
        if (i > now) {
            images[now].classList.add("leftOut");
            images[i].classList.add("leftIn");
        } else if (i < now) {
            images[now].classList.add("rightOut");
            images[i].classList.add("rightIn");
        }
        images[i].style.zIndex = z++;
        now = i;
    };
    images[i].addEventListener("animationend", function () {
        this.className = "images";
        flag = true;
    })
}

let t;
let next = 0;
t = setInterval(move, 3000);

function move() {
    next=now + 1;
    if (next === pagers.length) {
        next = 0;
    }
    for (let i = 0; i < pagers.length; i++) {
        pagers[i].classList.remove("active");
    }
    pagers[next].classList.add("active");
    images[now].classList.add("leftOut");
    images[next].classList.add("leftIn");
    images[next].style.zIndex=z++;
    now=next;
}
banner.onmouseenter = function () {
    clearInterval(t);
};
banner.onmouseleave = function () {
    t = setInterval(move, 3000);
};
