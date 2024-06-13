function somar(){
    var num1;//Declaração de Variaveis
    var num2;
    //Coletar os Dados do Formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar a Conta
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = res;
}//Fim do Método Somar

function subtrair(){
    var num1;//Declaração de Variaveis
    var num2;
    //Coletar os Dados do Formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar a Conta
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = res;
}//Fim do Método Subtrair

function dividir(){
    var num1;//Declaração de Variaveis
    var num2;
    //Coletar os Dados do Formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar a Conta
    if(num2 <= 0){
        res = "Impossível dividir por zero!"
    }
    else{
        res = num1 / num2;
    }
    document.getElementById("resultado").innerHTML = res;
}//Fim do Método Dividir

function multiplicar(){
    var num1;//Declaração de Variaveis
    var num2;
    //Coletar os Dados do Formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar a Conta
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = res;
}//Fim do Método Multiplicar

function tabuada(){
    var num1;
    var num2;

    //Coletar os Números
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;
    
    for(i = 0; i<= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;
}//Fim do Método Tabuada

function potencia(){
    var num1;
    var num2;
    var res;
    //Coletar os Números
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o Calculo
    res = Math.pow (num1,num2)//Calcula a Potência
    document.getElementById("resultado").innerHTML = res;
}//Fim do Método Potência

function raiz(){
    var num1;
    var num2;
    var res;
    //Coletar os Números
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o Calculo
    resNum1 = Math.sqrt(num1);
    resNum2 = Math.sqrt(num2);
    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;
}//Fim do Método Raiz