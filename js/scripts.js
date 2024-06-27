const formElement = document.getElementsByTagName("form")[0]
const inputElements = [...document.getElementsByClassName("textInput")]
const invalidStateTextText = [...document.getElementsByClassName("textInputText")]
const sendButtonElement = document.getElementsByTagName("button")[0]
const radioInputElements = [...document.getElementsByClassName("radioInput")]
const invalidStateTextRadio = document.getElementById("textInputRadio")
const CheckInputElement = document.getElementById("consent")
const invalidStateTextCheck = document.getElementsByClassName("textInputCheck")[0]


sendButtonElement.addEventListener("click", ()=>{
    for (let i=0; i<inputElements.length; i++){
        if(inputElements[i].value.trim() === ""){
            inputElements[i].classList.add("invalidValue")
            console.log("oye >:(")
        }else{
            for (let i=0; i<invalidStateTextText.length; i++){
                invalidStateTextText[i].classList.add("valid-Value-Text")
                console.log("2")
            }
            inputElements[i].classList.remove("invalidValue")
            console.log("bien")
        }
    }
    for (let i=0; i<invalidStateTextText.length; i++){
        if(inputElements[i].value.trim() === ""){
            invalidStateTextText[i].classList.remove("valid-Value-Text")
            console.log(invalidStateTextText[i])
    }
}
    let anychecked = false
    radioInputElements.forEach(button =>{
        button.addEventListener("click", () =>{
            textInputRadio.classList.add("valid-Value-Text")
        })
        if (button.checked){
            anychecked = true
        }
    })
    if (anychecked){
        textInputRadio.classList.add("valid-Value-Text")
    }else{
        textInputRadio.classList.remove("valid-Value-Text")
    }

    if(CheckInputElement.checked){
        invalidStateTextCheck.classList.add("valid-Value-Text")
    }else{
        invalidStateTextCheck.classList.remove("valid-Value-Text")
    }
})

for(let i=0; i < inputElements.length; i++){
    inputElements[i].addEventListener("input", ()=>{
        if(inputElements[i].value.trim() !== ""){
            invalidStateTextText[i].classList.add("valid-Value-Text")
            inputElements[i].classList.remove("invalidValue")
            console.log("bien")
        }
    })
}

CheckInputElement.addEventListener("click", ()=>{
    if(CheckInputElement.checked){
        invalidStateTextCheck.classList.add("valid-Value-Text")
    }
})