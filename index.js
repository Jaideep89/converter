let celcius = document.getElementById("celcius");
let farenhite = document.getElementById("farenhite");

// console.log(celcius,farenhite);
function celTofar(){
    let output = ( parseFloat(celcius.value) * 9/5) +32;
    farenhite.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function fartocel(){
    let output =(parseFloat(farenhite.value)-32)*5/9;
    celcius.value = parseFloat(output.toFixed(2));
    console.log(output); 
}