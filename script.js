//Definindo uma variável para o valor do input. 
var input1 = document.querySelector(".valor1");
var input2 = document.querySelector(".valor2");

//Definindo uma var para o resuldado.
var rsoma = document.querySelector(".resultadd")
var rsub = document.querySelector(".resultsub")
var rmult = document.querySelector(".resultmult")
var rdiv = document.querySelector(".resultdiv")

//Definindo variáveis para os botões.
var bttsoma =  document.querySelector(".adição");
var bttsubtração = document.querySelector(".subtração");
var bttmultiplicação = document.querySelector(".multiplicação");
var bttdivisão = document.querySelector(".divisão")

bttsoma.addEventListener("click", function() {
    rsoma.textContent = parseInt(input1.value) + parseInt(input2.value) 
});

bttsubtração.addEventListener("click", function(){
    rsub.textContent = parseInt(input1.value) - parseInt(input2.value)
})

bttmultiplicação.addEventListener("click", function(){
    rmult.textContent = parseInt(input1.value) * parseInt(input2.value)
})
bttdivisão.addEventListener("click", function(){
    rdiv.textContent = parseFloat(input1.value) / parseFloat(input2.value)
})
