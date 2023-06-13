const headerEl = document.querySelector("header");
const coverWrap = document.querySelector(".cover-wrap");
const dimd = document.querySelector(".dimd");
const contWrap = document.querySelector(".cont-wrap")
const reCmt = document.querySelector(".re-cmt")

let scrollNum = 0;
let documentHeight = 0;
let per =0;
const coverHeight = window.innerHeight / 3;

coverWrap.style.height = coverHeight + "px";
contWrap.style.marginTop = coverHeight + "px";

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight + coverHeight - window.innerHeight;
    
    
    console.log(documentHeight)
    console.log(scrollNum)


    if(scrollNum >= coverHeight) {
        headerEl.classList.add('fixed')
    }else {
        headerEl.classList.remove('fixed')
        coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
        dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`
    }

});

function percent(num, total) {
    return parseInt((num / total) * 100);
};


reCmt.addEventListener('click', () => {
    document.querySelector(".flex-comment").classList.toggle('on')
})