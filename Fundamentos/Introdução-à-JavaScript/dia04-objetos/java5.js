let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'Sim';

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
};
info2['recorrente'] = 'Sim';
console.log(info.personagem + 'e ' + info2.personagem + 'Namorada do personagem principal nos quadrinhos do ' +info.origem + 'e ' + info2.origem + ' Ambos recorrentes');