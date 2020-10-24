




document.querySelector("#try").addEventListener("click",Proces)

function Proces(){
    const input = document.querySelector("#input").value
    const result = document.querySelector("#result")
    if (!input.includes("@")){
        result.innerHTML="Invalid"
    }
    else if(input.split("@")[0]=="" || input.split("@")[1]=="" ){
        result.innerHTML="invalid"
    }
    else if(input.split("@")[1].split(".")[1]==""){
        result.innerHTML="invalid"
    }
    else if(input.split("@")[1].split(".")[1].length > 3){
        result.innerHTML="invalid"
    }
    else{
        result.innerHTML="Valid"
    }
}