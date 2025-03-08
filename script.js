const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const submitBtn = document.querySelector(".submit")
const datas = document.querySelectorAll(".data")
const dots = document.querySelectorAll(".nav-ul li")
const progressBar = document.querySelector(".progress-bar")

let round = 0

nextBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    if (round < 3) {
        round++   
    }
    updateBar()
    
    datas.forEach(data => {
        data.style.transform = `translateX(-${round * 100}%)`
    });
    
})
prevBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    if (round > 0) {
        round--   
    }
    updateBar()
    datas.forEach(data => {
        data.style.transform = `translateX(-${round * 100}%)`
    });
    
})

function updateBar() {
    progressBar.style.transform = `scaleX(${round / 3})`
    const bar = [...dots]
    bar[round].classList.add("current")
    if (round > 0) {
        bar[round - 1].classList.replace("current", "done")
    }
     if (round < 3) {
        bar[round + 1].classList.remove("current", "done")
    }

    if(round === 3){
        nextBtn.hidden = true
        submitBtn.hidden = false
    } else{
        nextBtn.hidden = false
        submitBtn.hidden = true
    }

    console.log()
}


