let nb =document.querySelectorAll("#nb")
let result = document.querySelector(".result")

let plus = document.querySelector(".plus")
let moins = document.querySelector(".moins")
let times = document.querySelector(".times")
let pro=1;
let equal = document.querySelector(".equal")

let rs=0
let nbr=''

let array = [1,2,3,4,5,6,7,8,9,0]
let operators = ["+", "-", "x"]
let op;



array.forEach(element => {
    nb[element].onclick = function(){
        result.innerHTML+=nb[element].textContent
        nbr= nbr + nb[element].textContent
    }
});



plus.onclick = function(){
    op = operators[0]
    rs =rs+parseInt(nbr);
    nbr=0
    result.innerHTML+="+"
}

moins.onclick = function(){
    op = operators[1]
    rs =rs-parseInt(nbr)
    nbr=0
    result.innerHTML+="-"
}

times.onclick = function(){
    op = operators[2]
    pro =pro*parseInt(nbr)
    nbr=0
    result.innerHTML+="&times;"
}



equal.onclick = function(){
    if(op === "+"){
        rs =rs+parseInt(nbr);
        nbr=0
    }
    if(op === "-"){
        rs =rs-parseInt(nbr);
        nbr=0
    }
    if(op === "x"){
        pro =pro*parseInt(nbr);
        rs = pro
        nbr=1

    }

    result.innerHTML=+rs
}






let remove = document.querySelector("span")
remove.onclick = function(){
    pro=1;
    nbr=0;
    rs=+0;
    // setTimeout(function(){
        result.innerHTML = ""
    // },1000)
}