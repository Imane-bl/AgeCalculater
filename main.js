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
        ed.textContent = "must be a valid date";
        invalid = false;
        return;
    } else {
        invalid = true;
        ed.textContent = "";


    }

    if (+day.value === 0) {
        invalid = false;

        ed.textContent = "field required";
        invalid = false;
        return;
    } else {
        ed.textContent = "";
       // invalid=true;
    }
});



month.addEventListener("input", (e) => {
    if (+month.value > 12) {
        em.textContent = "must be a valid date";
        invalid = false;
        return;
    } else {
        invalid = true;
        em.textContent = "";


    }

    if (+month.value === 0) {
        invalid = false;

        em.textContent = "field required";
        invalid = false;
        return;
    } else {
        em.textContent = "";
       // invalid=true;
    }
});






year.addEventListener("input", (e) => {
    if (+year.value > 2024) {
        ey.textContent = "must be a valid date";
        invalid = false;
        return;
    } else {
        invalid = false;
        ey.textContent = "";


    }

    if (+year.value === 0) {
        invalid = false;

        ey.textContent = "field required";
        invalid = false;
        return;
    } else {
        ey.textContent = "";
       // invalid=true;
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


