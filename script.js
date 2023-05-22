const rate = document.querySelectorAll("span.rate-number");
const submitButton = document.getElementById("submit");
const thanksSection = document.querySelector(".thanks-section-card")
const rateSection = document.querySelector(".rating-section-card")
const selectedRateSpan = document.querySelector(".select")
let selectedRate = 0;

for(let i = 0 ; i <rate.length ; i++){
    
    rate[i].onclick = ()=>{
        for(let i = 0 ; i<rate.length ; i++){
            rate[i].classList.remove("active");
        }
        rate[i].classList.add("active")
        selectedRate = rate[i].innerHTML;
    }

}
submitButton.onclick =()=>{
    thanksSection.style.display="block";
    rateSection.style.display="none";
    selectedRateSpan.innerHTML = selectedRate;
}
