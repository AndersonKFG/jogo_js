const dinheiro_atual = document.getElementById('money_value');
const gpk = document.getElementById('ganhar_por_click'); // Botão de ganhar $$1 por click chamado de gpk;
const upgrade_gpk = document.getElementById('upgrade_gpk');
const capacidade_max = document.getElementById('capacidade_max')
const limite_alerta = document.getElementById('limite_alerta')
const aumentar_capacidade = document.getElementById('aumentar_capacidade')
var money = 0;

var ganho_gpk = 1
var valor_upgrad_gpk = 2

var money_max = 10
var valor_upgrad_max = 10

gpk.addEventListener('click',function(){
    money = money + ganho_gpk;
    dinheiro_atual.textContent = 'DINHEIRO ATUAL → $$' + money.toFixed(2);
    alertar()
})

aumentar_capacidade.addEventListener('click',function(){
    if(money >= valor_upgrad_max){
        money_max = money_max + money_max * 100 / 100
        capacidade_max.textContent = "CAPACIDADE MAXIMA → $$" + money_max
        money = money - valor_upgrad_max
        dinheiro_atual.textContent = 'DINHEIRO ATUAL → $$' + money.toFixed(2);
        valor_upgrad_max = money_max
        aumentar_capacidade.textContent = "AUMENTAR O DINHEIRO MAX - CUSTO: $$" + valor_upgrad_max
    }

    alertar()
})

function alertar(){

    limite_alerta.textContent = "GANHO DISPONIVEL = $$" + (money_max - money).toFixed(2)
    
    if(money >= money_max){
        limite_alerta.style.background = 'red'
        limite_alerta.textContent = "GANHO ATINGIDO"
        gpk.disabled = true
    }else{
        limite_alerta.style.background = 'lightgreen'
        gpk.disabled = false
    }
}

upgrade_gpk.addEventListener('click', function(){

    if (money >= valor_upgrad_gpk){
        money = money - valor_upgrad_gpk
        dinheiro_atual.textContent = 'DINHEIRO ATUAL → $$' + money.toFixed(2);
        var gpk_porcentagem = ganho_gpk * 10 / 100
        ganho_gpk = ganho_gpk + gpk_porcentagem
        gpk.textContent = "CLICK = $$" + ganho_gpk.toFixed(2)
        valor_upgrad_gpk = valor_upgrad_gpk + valor_upgrad_gpk * 40 / 100 // ESCALING DE VALOR  
        upgrade_gpk.textContent = 'AUMENTAR EM 10% O GANHO POR CLICK - CUSTO: $$' + valor_upgrad_gpk.toFixed(2)

    }else{
        console.log("Você não tem dinheiro suficiente.")
    }

    alertar()
})