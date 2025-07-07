const disp=document.getElementById("display");
function number(input){
    disp.value+=input;
}
function calculate() {
    try {
        disp.value = eval(disp.value);  
    } catch (error) {
        disp.value = "Error";
    }
}
function clearDisplay() {
    disp.value = "";
}