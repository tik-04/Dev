let input = document.getElementById("input");
let f = document.getElementById("F");
let c = document.getElementById("C");
let result = document.getElementById("output");

function calculateC(){
    let number = Number(input.value);
    if( input.value == ""){
        result.innerHTML = 'Please input number'

        return
    }
    
    let f = (9/5) * number  + 32;

    result.innerHTML =  number + "C" + " " + "=" +  " " + f.toFixed(2) + "F"

    
    


}

function calculateF(){
    let number = Number(input.value);
    if( input.value == ""){
        result.innerHTML = 'Please input number'

        return
        
    }
    let c = (5/9) * (number-32)

    result.innerHTML = number + "F" + " " + "=" +  " " + c.toFixed(2) + "C"

}





f.addEventListener('click',calculateF)
c.addEventListener('click',calculateC)


