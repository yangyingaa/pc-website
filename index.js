const images = document.querySelectorAll(".images");
const pagers = document.querySelectorAll(".banner-pager-item");

/*let t;
let n = 0;
const banner = document.querySelector("#banner-inner");

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

    for (let i = 0; i < pagers.length; i++) {
        pagers[i].classList.remove("active");
    }
    pagers[now].classList.add("active");
    if (now < next) {
        images[now].classList.add("leftOut");
        images[next].classList.add("leftIn");
    } else if (now > next) {
        images[now].classList.add("rightOut");
        images[next].classList.add("rightIn");
    }

    next++;
    now = next;

}

