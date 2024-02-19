let day=document.querySelector(".inDay")
let  month =document.querySelector(".inMonth")
let year=document.querySelector(".inYear")

//let span=document.querySelector(".hidden")


let yearsBefore = document.querySelectorAll(".years");
let monthsBefore = document.querySelectorAll(".months");
let daysBefore = document.querySelectorAll(".days");
let clickBtn=document.querySelector(".btn")

let ey = document.querySelectorAll(".erreurYear");
let em= document.querySelectorAll(".erreurMonth");
let ed = document.querySelectorAll(".erreurDay");

let invalid=false
day.addEventListener("input",(e)=>{
    if(+day.value >31){
        ey.textContent="must be valid date";
        invalid=false
    }else{
        invalid=true

    }
})

clickBtn.addEventListener("click", () => {
    span.classList.add("hidden")

   
})
clickBtn.addEventListener("click", () => {
    span.classList.remove("hidden")
  
})



/*
function oni(){
let textday= day.value;

let  spanRes =document.getElementById("hidden")

spanRes.innerHTML = textday;
}*/


