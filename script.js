var estados = function(){
    var estadosDoNorte = ['Maceió', 'Natal', 'João Pessoa', 'Fortaleza', 'São Luís'];
  var string = estadosDoNorte.join();
  var resultado = string.toUpperCase();
  return resultado.split();
    
}

console.log(estados()); 

var numeros = function(){
    for(let i = 100; i>=100 && i<=450; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

console.log(numeros());

var strings = function(valor1, valor2, valor3, valor4){
    return valor1 + valor2 + valor3 + valor4
}

console.log(strings('oi ', 'karol', ' do ', 'start'));

var multiplos = (n1) =>{
    n1 = parseInt(n1);
    if(n1 % 5 == 0 && n1 % 3 == 0){
        return 'JAVASCRIPT';
    }
    else if(n1 % 5 == 0){
        return 'Bora';
    }
    else if(n1 % 3 == 0){
        return 'Dale';
    }
    else{
        return 'Digite um número que múltiplo de cinco ou múltiplo de três.'
    }
}

console.log(multiplos(30));

var signo = () =>{
    let data = parseInt(prompt('Digite um dia que você nasceu:(em número por favor)'));
   let mes = parseInt(prompt('Digite o mês que você nasceu: (em número por favor)'));
     if(data >= 20 || data <= 21){
       if(mes === 3 || mes === 4){
          return `Dia: ${data} \nMês: ${mes} \nSeu signo é Áries`;
        }
     }
     else{
       return `Digite a data entre 18 até o dia 23.`
    }
}
   
//console.log(signo());

var aprovados = [
    {candidato: 'Renata Soares', nota: 7.8, idade: 29},
    {candidato: 'Marcos Teixeira', nota: 7.8, idade: 26},
    {candidato: 'Priscila Gomes', nota: 7.8, idade: 30},
    {candidato: 'João Oliveira', nota: 7.8, idade: 27},
    {candidato: 'Adriana Telles', nota: 7.8, idade: 28},
]

console.log(aprovados);

var repetir = function(valor){
  var valor = 'oi'
    for(let i = 1; i <= 37; i++){
        console.log( `${valor}`);
    }
}

console.log(repetir());