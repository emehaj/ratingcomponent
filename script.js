const rateSection = document.querySelector(".rate");
const resultSection = document.querySelector(".result");

const button = document.querySelector("button");
const numbers = document.querySelectorAll(".num");
const score = document.querySelector(".sc");
let num = null;

numbers.forEach((rate) => {
    rate.addEventListener("click", () => {
        if (rate.classList.contains("active")) {
            rate.classList.remove("active");
            num = null;
            return;
        }

        numbers.forEach((r) => r.classList.remove("active"));
        rate.classList.add("active");
        num = Number(rate.textContent);
    });
});

button.addEventListener("click", () => {
    if (num) {
        score.textContent = num;

        rateSection.style.display = "none";
        resultSection.style.display = "grid";
        resultSection.classList.remove("none");

        setTimeout(() => {
            num = null;

            rateSection.style.display = "grid";
            resultSection.style.display = "none";
            resultSection.classList.add("none");

            numbers.forEach((r) => r.classList.remove("active"));
        }, 10000);
    }
});
