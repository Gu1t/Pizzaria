'use strict';
//variavéis//
let somaMussarela = 0;
let somaCalabresa = 0;
let somaFrango = 0;
let vendaMussarela = 0.00;
let vendaCalabresa = 0.00;
let vendaFrango = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('Estorno');
let btnPlanilha = document.getElementById('export');

//eventos//
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',Estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//funções
function venda(e)
{
    if(document.getElementById('Mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('Calabresa').checked)
    {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }else if(document.getElementById('Frango').checked)
    {
        somaFrango = somaFrango + 1;
        vendaFrango = vendaFrango + 25.00;
        document.getElementById('resultadoFrango').innerHTML = somaFrango;
        document.getElementById('vendaFrango').innerHTML = vendaFrango.toFixed(2);
    }
}


function Estorno(e)
{
    if(document.getElementById('Mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        if(somaMussarela < 0)
        {
            somaMussarela = 0
            vendaMussarela = 0.00
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('Calabresa').checked)
    {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 25.00;
        if(somaCalabresa < 0)
        {
            somaCalabresa = 0
            vendaCalabresa = 0.00
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }else if(document.getElementById('Frango').checked)
    {
        somaFrango = somaFrango - 1;
        vendaFrango = vendaFrango - 25.00;
        if(somaFrango < 0)
        {
            somaFrango  = 0
            vendaFrango = 0.00
        }
        document.getElementById('resultadoFrango').innerHTML = somaFrango;
        document.getElementById('vendaFrango').innerHTML = vendaFrango.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}