let nb =document.querySelectorAll("#nb")

let plus = document.querySelector(".plus")

let equal = document.querySelector(".equal")

let result = document.querySelector(".result")
let rs=0
let nbr=''

let array = [1,2,3,4,5,6,7,8,9,0]





array.forEach(element => {

    nb[element].onclick = function(){
        //console.log(result.textContent)
        result.innerHTML+=nb[element].textContent
        
        nbr= nbr + nb[element].textContent
        // console.log("nbr =  " + nbr);
        // console.log(parseInt(nbr));
        
    }
    
});



plus.onclick = function(){
    rs =rs+parseInt(nbr);
    nbr=0

    // x+=+result.innerHTML
    
    result.innerHTML+="+"

    // console.log(x)
    console.log("rs=  " + rs)
    console.log(nbr)
    }






equal.onclick = function(){
    rs =rs+parseInt(nbr);
    nbr=0
    result.innerHTML=+rs
        console.log(rs)
}






let remove = document.querySelector("span")
console.log(remove)
remove.onclick = function(){
    nbr=0;
    rs=+0;
    result.innerHTML = ""
}