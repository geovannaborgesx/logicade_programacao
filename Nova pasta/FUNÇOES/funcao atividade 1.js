let numero = Number(prompt(&quot;Digite um número:&quot;))
let numero2 = Number(prompt(&quot;Digite outro número:&quot;))
let operacao = prompt(&quot;Qual a operação? Digite apenas símbolos (+, -, *, /): &quot;)
let resultado

function soma(a, b){
return a + b
}
function subtracao(a, b){
return a - b
}
function multiplicacao(a, b){
return a * b
}
function divisao(a, b){
return a / b
}

switch(operacao){
case &quot;+&quot;:
resultado = soma(numero, numero2)
console.log (&quot;Resultado: &quot;, resultado)
break
case &quot;-&quot;:
resultado = subtracao(numero, numero2)
console.log (&quot;Resultado: &quot;, resultado)
break
case &quot;*&quot;:
resultado = multiplicacao(numero, numero2)
console.log (&quot;Resultado: &quot;, resultado)