const dinheiro_atual = document.getElementById('money_value');;
const gpk = document.getElementById('ganhar_por_click') // Botão de ganhar $$1 por click chamado de gpk;
var money = 0;


gpk.addEventListener('click',function(){
    money = money + 1;
    dinheiro_atual.textContent = 'Dinheiro atual → $$' + money;
    console.log('Function');
})