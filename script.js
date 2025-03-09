const form = document.querySelector(".form")

const prevBtn = form.querySelector(".prev")
const nextBtn = form.querySelector(".next")
const submitBtn = form.querySelector(".submit")
const dataCont = form.querySelector(".data-cont")
const datas = form.querySelectorAll(".data")
const dots = form.querySelectorAll(".nav-ul li")
const progressBar = form.querySelector(".progress-bar")

let round = 0

nextBtn.addEventListener("click", (e)=> {
    e.preventDefault()

    if (!isValid()) return

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
submitBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    
})

const inputs = form.querySelectorAll("input, textarea")

inputs.forEach(input => {
    input.addEventListener("focus", (e) => {
        const focInput = e.target
        const focData = [...datas].findIndex((data) => {
            return data.contains(focInput)
        })

        if (focData !== -1 && focData !== round) {
            round = focData
            updateBar()
        }
    })
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


function isValid() {
    const fields = datas[round].querySelectorAll("input, textarea")
    return [...fields].every(field => field.reportValidity())   
}