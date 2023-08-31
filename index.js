tempo = 1000;
const idade = 18;
age = 18
age = age + 1; 
var timer =setInterval(chamar, tempo);

function chamar(){ 
    //document.getElement só é chamado com tempo
    document.getElementyById("mostrar").innerHTML = idade;
    document.getElementyById("exibir").innerHTML = age;
}
