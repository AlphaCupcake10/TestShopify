let steps = document.querySelectorAll(".step");
let images = document.querySelector("#component-steps .img").querySelectorAll("img");

steps.forEach((Element,index)=>{
    Element.addEventListener("click",()=>{
        setActive(index);
    })
})

let index = 0;
let timerIndex;

function timer()
{
    if(index >= steps.length) index = 0;
    steps.forEach((Element)=>Element.classList.add("step-hidden"));
    images.forEach((Element)=>Element.classList.add("img-hidden"));
    steps[index].classList.remove("step-hidden");
    images[index].classList.remove("img-hidden");
    timerIndex = setTimeout(() => {
        index += 1;
        timer()
    }, 5000);
}

timer();

function setActive(indexNum)
{
    clearTimeout(timerIndex);
    index = indexNum;
    timer();
}