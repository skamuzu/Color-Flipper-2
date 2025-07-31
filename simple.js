const colors = ['red','green','blue','yellow','white','orange','purple','violet','skyblue'];
const button = document.getElementsByTagName("button")[0];
const color = document.querySelector(".color")

button.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
