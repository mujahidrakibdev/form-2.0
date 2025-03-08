const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const submitBtn = document.querySelector(".submit")
const dataCont = document.querySelector(".data-cont")

let round = 0

nextBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    if (round < 4) {
        round++   
    }
    dataCont.innerText = round
    
})
prevBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    if (round > 0) {
        round--   
    }
    dataCont.innerText = round
    
})