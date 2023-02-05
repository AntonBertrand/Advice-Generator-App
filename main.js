const diceBtn = document.querySelector("#diceBtn");
const adviceText = document.querySelector(".advice-text");
const adviceID = document.querySelector(".advice-id");

async function generateAdvice() {
    const baseURL = "https://api.adviceslip.com/advice";

    const response = await fetch(baseURL);

    let data = await response.json();

    adviceText.innerHTML = data.slip.advice;
    adviceID.innerHTML = `ADVICE #${data.slip.id}`;


    console.log(data);

}