const dinheiro_atual = document.getElementById('money_value');
const gpk = document.getElementById('ganhar_por_click'); // Botão de ganhar $$1 por click chamado de gpk;
const upgrade_gpk = document.getElementById('upgrade_gpk');
const capacidade_max = document.getElementById('capacidade_max')
const limite_alerta = document.getElementById('limite_alerta')
const aumentar_capacidade = document.getElementById('aumentar_capacidade')
const minerador_1 = document.getElementById('minerador_1')
const minerador1_ql = document.getElementById('minerador1_ql')

var money = 0;

var ganho_gpk = 1
var valor_upgrad_gpk = 2

var money_max = 10
var valor_upgrad_max = 10

//mineradora nv.1
var valor_m1 = 15
var qnt_m1 = 0
var m1_mineram = 0

function m1_automine() {
    setTimeout(function () {
        if(money < money_max){
            money = money + qnt_m1 * 0.1
        }

        dinheiro_atual.textContent = 'DINHEIRO ATUAL → $$' + money.toFixed(2);
        alertar()
        m1_automine()
    }, 1000);
}

minerador_1.addEventListener('click',function(){
    if(money >= valor_m1){
        console.log("OLÁ")
        money = money - valor_m1
        dinheiro_atual.textContent = 'DINHEIRO ATUAL → $$' + money.toFixed(2);
        qnt_m1 = qnt_m1 + 1
        valor_m1 = valor_m1 + valor_m1 * 25 / 100
        minerador_1.innerHTML = 'COMPRAR 1 MINERADOR - CUSTO: $$' + valor_m1.toFixed(2) +' <br> Uma mineradora básica, barata o suficiente para ser suspeita.'
        minerador1_ql.textContent = 'QNT MINERADORES NV.1 → '+qnt_m1+' | MINERAM P/S → $$'+(qnt_m1 * 0.1).toFixed(1)

        alertar()
    }

    if(qnt_m1 == 1){
        m1_automine()
    }
})

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