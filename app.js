const btn = document.querySelector("#equals");
const first = document.querySelector("#first");
const sign = document.querySelector("#sign");
const second = document.querySelector("#second");
const answer = document.querySelector("#answer");

btn.addEventListener("click", ()=>{
    if(first.value != "" && second.value != ""){
    const equals = eval(`${first.value}${sign.value}${second.value}`)
    console.log(equals)
    answer.innerHTML = equals
    } else {
        alert("eta numbrid only :c")
    }
})