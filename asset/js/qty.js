function minus() {
    var textBox = document.getElementById("text").value;
    document.getElementById('textbox').value =parseInt(textBox)+1;
}    

function plus() {
    var textBox = document.getElementById("text").value;
    if(parseInt(textBox)>1)
    document.getElementById('textbox').value =parseInt(textBox)-1;
}  



