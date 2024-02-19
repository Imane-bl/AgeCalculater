let day = document.querySelector(".inDay");
let month = document.querySelector(".inMonth");
let year = document.querySelector(".inYear");

let yearsBefore = document.querySelectorAll(".years");
let monthsBefore = document.querySelectorAll(".months");
let daysBefore = document.querySelectorAll(".days");
let clickBtn = document.querySelector(".btn");

let ey = document.querySelectorAll(".erreurYear");
let em = document.querySelectorAll(".erreurMonth");
let ed = document.querySelectorAll(".erreurDay");

let invalid = false;

day.addEventListener("input", (e) => {
    if (+day.value > 31) {
        ey.textContent = "must be a valid date";
        invalid = false;
        return;
    } else {
        invalid = false;
        ey.textContent = "";


    }

    if (+day.value === 0) {
        invalid = false;

        ey.textContent = "field required";
        invalid = false;
        return;
    } else {
        ey.textContent = "";
    }
});

/*
clickBtn.addEventListener("click", () => {
    span.classList.add("hidden")

   
})
clickBtn.addEventListener("click", () => {
    span.classList.remove("hidden")
  
})

*/

/*
function oni(){
let textday= day.value;

let  spanRes =document.getElementById("hidden")

spanRes.innerHTML = textday;
}*/


