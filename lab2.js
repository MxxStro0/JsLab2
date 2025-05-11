import { camelize, shuffleArray } from './lab2_lib1.js';

console.log("Camelize:", camelize("my-short-string"));

const arr = [1, 2, 3, 4, 5];
const shuffledArr = shuffleArray(arr);

console.log("Перемішаний масив:", shuffledArr);
alert("Перемішаний масив: " + shuffledArr.join(', '));

document.addEventListener("DOMContentLoaded", () => {
    const resultDiv = document.getElementById("results");
    
    resultDiv.innerHTML = `
        <p><strong>Слово після форматування:</strong> ${camelize("my-short-string")}</p>
        <p><strong>Перемішаний масив:</strong> ${shuffledArr.join(', ')}</p>
    `;
});
