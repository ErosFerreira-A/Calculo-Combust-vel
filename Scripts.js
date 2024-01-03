const combustivel = {
	nome: ['gasolina', 'etanol'],
    valor: ['5.80', '3.64'],
    kmLitro: ['11.11', '7.2']
};

const distancia = 100;
const litroConsumidoGasolina = distancia / combustivel.kmLitro[0];
const litroConsumidoEtanol = distancia / combustivel.kmLitro[1];

const valorGastoGasolina = litroConsumidoGasolina * combustivel.valor[0];
const valorGastoEtanol = litroConsumidoEtanol * combustivel.valor[1];

console.log('O valor gasto em gasolina é de R$' + valorGastoGasolina.toFixed(2) + ' e em Etanol é de R$' + valorGastoEtanol.toFixed(2) + '.');

console.log('Seram consumidos ' + Math.round(litroConsumidoGasolina) + ' litros de Gasolina' + ' e de Etanol seram ' + Math.round(litroConsumidoEtanol) + ' litros.');

if(valorGastoGasolina < valorGastoEtanol){
	console.log(`O valor da ${combustivel.nome[0]} é menor que o valor do ${combustivel.nome[1]}. É melhor por Gasolina.}`);
} else if(valorGastoGasolina >valorGastoEtanol){
	console.log(`O valor do ${combustivel.nome[1]} é menor que o valor da ${combustivel.nome[0]}. É melhor por Etanol.`);
}else{
	console.log('404 found');
}