const formElement = document.getElementsByTagName("form")[0]

const inputElements = [...document.getElementsByClassName("textInput")]
const invalidStateTextText = [...document.getElementsByClassName("textInputText")]

const emailInput = document.getElementById("Email")
const emailInvalidText = document.getElementsByClassName("emailInvalidText")[0]

const queryDivs = [...document.getElementsByClassName("queryDiv")]

const radioInputElements = [...document.getElementsByClassName("radioInput")]
const invalidStateTextRadio = document.getElementById("textInputRadio")

const CheckInputElement = document.getElementById("consent")
const invalidStateTextCheck = document.getElementsByClassName("textInputCheck")[0]
const checkLabel = document.getElementsByClassName("labelCheck")[0]

const sendButtonElement = document.getElementsByTagName("button")[0]

const sucessMesage = document.getElementsByClassName("successMessage")[0]


let formSuccess = false


sendButtonElement.addEventListener("click", ()=>{
    for (let i=0; i<inputElements.length; i++){
        if(inputElements[i].value.trim() === ""){
            inputElements[i].classList.add("invalidValue")
            formSuccess = false
        }else{
            for (let i=0; i<invalidStateTextText.length; i++){
                invalidStateTextText[i].classList.add("valid-Value-Text")
            }
            inputElements[i].classList.remove("invalidValue")
            formSuccess = true
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
        formSuccess = true
    }else{
        textInputRadio.classList.remove("valid-Value-Text")
        formSuccess = false
    }

    if(CheckInputElement.checked){
        invalidStateTextCheck.classList.add("valid-Value-Text")
        formSuccess = true
    }else{
        invalidStateTextCheck.classList.remove("valid-Value-Text")
        formSuccess = false
    }
    const atPosition = emailInput.value.indexOf("@")
    if (emailInput.value.indexOf(".com") === -1 || emailInput.value.indexOf("@") === -1 || emailInput[atPosition+1] === "."){
        formSuccess = false
        emailInvalidText.classList.remove("valid-Value-Text")
    }

    if (formSuccess){
        formElement.reset()
        sucessMesage.classList.remove("noSuccess")
        console.log("success!!")
        setTimeout(() => {
            sucessMesage.classList.add("noSuccess");
        }, 5000)
    }else{
        sendButtonElement.type = "button"
        console.log("failure.")
    }
})

for(let i=0; i < inputElements.length; i++){
    inputElements[i].addEventListener("input", ()=>{
        if(inputElements[i].value.trim() !== ""){
            invalidStateTextText[i].classList.add("valid-Value-Text")
            inputElements[i].classList.remove("invalidValue")
            formSuccess = true
        }
    })
}

function isRadioFocused(element) {
    return document.activeElement === element;
}

radioInputElements.forEach(radio =>{
    radio.addEventListener("focus", ()=>{
        for (i=0;i<radioInputElements.length; i++){
            if(isRadioFocused(radioInputElements[i])){
                queryDivs[i].classList.add("queryFocused")
            }else{
                queryDivs[i].classList.remove("queryFocused")
            }
        }
    })
})

CheckInputElement.addEventListener("click", ()=>{
    if(CheckInputElement.checked){
        invalidStateTextCheck.classList.add("valid-Value-Text")
        formSuccess = true
    }
})

CheckInputElement.addEventListener("focus", ()=>{
    if(isRadioFocused(CheckInputElement)){
        checkLabel.classList.add("checkFocused")
    }
})
CheckInputElement.addEventListener("blur", ()=>{
    checkLabel.classList.remove("checkFocused")
})