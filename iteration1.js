//1.1
let clickButton=function(event){
    console.log(event)
}
document.getElementById('btn').addEventListener('click',clickButton);

//1.2

let focusButton=function(event){
    console.log(event)
}
document.querySelector('.focus').addEventListener('focus',focusButton);

//1.3
let inputValue=function(event){
    console.log(event)
}
document.querySelector('.value').addEventListener('input',inputValue);


