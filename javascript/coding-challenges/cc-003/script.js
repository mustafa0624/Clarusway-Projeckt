let myInput = document.querySelector("#input1");

document.querySelector("#button").addEventListener("click",myFunc);
myInput.addEventListener("keyup",function(e){
    if (e.keyCode === 13){
        document.querySelector("#button").click();
        e.preventDefault();

    }
})


function myFunc(){
    let newInput = myInput.value.split("");
    // newInput.reverse()

    document.querySelector("#div1").innerHTML =  newInput.reverse().join("")

    
}