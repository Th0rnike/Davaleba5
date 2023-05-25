const button = document.querySelector('button')
const container = document.querySelector(".container")
let isHidden = false

button.addEventListener("click", () => {
    if(isHidden){
        container.classList.remove("hide-container")
        button.textContent = "Hide Div"
    }else{
        container.classList.add("hide-container")
        button.textContent = 'Show Div'
    }

    console.log(isHidden)
    isHidden = !isHidden
    console.log(isHidden)
})
