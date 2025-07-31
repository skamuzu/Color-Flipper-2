const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const button = document.getElementsByTagName("button")[0];
const color = document.querySelector(".color")

button.addEventListener("click", () => {
    let randomString = "#";
    for (let i = 0; i < 6; i++) {
        randomString += hex[getRandomLetter()]
    }
    document.body.style.backgroundColor = randomString;
    color.textContent = randomString;
})

function getRandomLetter() {
    return Math.floor(Math.random() * hex.length)
}