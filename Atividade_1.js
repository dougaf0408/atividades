const pesodapecaemgramas = 100
const Listadepecas = ['pecas de teste', 'AB', 'peca B']

console.log('peso da peça ' + pesodapecaemgramas )

if (pesodapecaemgramas >= 100) {
    console.log('peso suficiente')
}
else {
console.log('valor insuficiente')
}

if (Listadepecas.length > 10){
    console.log('Não tem capacidade suficiente\n');
}

console.log('quantidade de caracteres\n')

for (let index = 0; index < Listadepecas.length; index++){
    const pecaatual = Listadepecas[index];
    if (pecaatual.length <3){
        console.log(pecaatual + ' a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.\n')
    } 
    else{
    console.log(pecaatual + ' a peça pode ser cadastrada.\n')
    }
}
