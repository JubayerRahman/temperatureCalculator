var tem = document.getElementById("tem")
var fromTem = document.getElementById("fromTem")
var toTem = document.getElementById("toTem")

function result(){
    var val1 = document.getElementById("1st").value;
    var inputValue = fromTem.value
    var outputValue = toTem.value

    //celsius to fahrenheit
    var celsiusTofahrenheit = ((val1*9)/5)+32;
    //fahrenheit to celsius
    var fahrenheit = ((val1-32)*5)/9;
    //Kelvin to celsius
    var Kelvin = val1-273.15
    //celsius to Kelvin
    var celTokel = val1+273.15
    //fahrenheit to Kelvin
    var fahrenheitToKelvin = (((val1-32)*5)/9)+273.15
    //Kelvin to fahrenheit
    var kelvinTofahrenheit = (((val1-273.15)*5)/9)+32


    // document.write("Your C.G.P.A is=" + cgpa.toFixed(2) +"<br>");
    
    if(inputValue =="celsius" && outputValue =="fahrenheit"  ){
        // var celsiusTofahrenheit = ((val1*9)/5)+32;
        document.getElementById("tem").innerHTML ="Temperature is ="+celsiusTofahrenheit.toFixed(2) +"°F";
    }
    else if (inputValue =="celsius" && outputValue =="kelvin") {
        document.getElementById("tem").innerHTML ="Temperature is ="+ celTokel +"K";
    } 
    else if (inputValue =="fahrenheit" && outputValue =="fahrenheit") {
        document.getElementById("tem").innerHTML ="Temperature is ="+ val1 +"°F";
    } 
    else if (inputValue =="celsius" && outputValue =="celsius") {
        document.getElementById("tem").innerHTML ="Temperature is ="+ val1 +"°C";
    } 
    else if (inputValue =="kelvin" && outputValue =="kelvin") {
        document.getElementById("tem").innerHTML ="Temperature is ="+ val1 +"K";
    } 
    else if (inputValue =="fahrenheit" && outputValue =="celsius") {
        document.getElementById("tem").innerHTML ="Temperature is ="+fahrenheit.toFixed(2) +"°C";
    } 
    else if (inputValue =="kelvin" && outputValue =="celsius") {
        document.getElementById("tem").innerHTML ="Temperature is ="+Kelvin.toFixed(2) +"°C";
    } 
    else if (inputValue =="fahrenheit" && outputValue =="kelvin") {
        document.getElementById("tem").innerHTML ="Temperature is ="+fahrenheitToKelvin.toFixed(2) +"K";
    } 
    else if (inputValue =="kelvin" && outputValue =="fahrenheit") {
        document.getElementById("tem").innerHTML ="Temperature is ="+kelvinTofahrenheit.toFixed(2) +"°F";
    } 
    else{
        document.getElementById("tem").innerHTML ="Not valid!!" 
    }

    
    

}