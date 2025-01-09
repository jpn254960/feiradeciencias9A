var avaliacoes = [  
    // Lista de Nomes  
    [  
        "Ana Oliveira",  
        "Carlos Mendes",  
        "Juliana Souza",  
        "Ricardo Silva",  
        "Fernanda Rocha",  
        "Paulo Almeida",  
        "Beatriz Santos",  
        "Gabriel Lima",  
        "Laura Martins",  
        "Diego Fernandes",  
        "Rafael Moreira",  
        "Tatiana Carvalho",  
        "Lucas Pereira",  
        "Mariana Silva",  
        "Pedro Andrade",  
        "Camila Nogueira",  
        "Felipe Costa",  
        "Isabela Ferreira",  
        "Eduardo Ramos",  
        "Renata Souza"  
    ],  

    // Lista de Estrelas (inteiros)  
    [  
        5, 5, 5, 5, 5,  
        5, 5, 5, 5, 5,  
        4, 4, 4, 4, 4,  
        4, 4, 4, 4, 4  
    ],  

    // Lista de Avaliações  
    [  
        "Serviço de altíssima qualidade! A equipe foi muito profissional e o resultado superou minhas expectativas.",  
        "Ficamos muito satisfeitos com a obra. Cumpriram o prazo e a qualidade do acabamento foi excelente.",  
        "Muito atenciosos e organizados. Recomendo fortemente a Tutto Fa para qualquer tipo de reforma.",  
        "Preço justo, ótimo atendimento e uma execução impecável. Difícil encontrar empresas assim hoje em dia.",  
        "O trabalho ficou perfeito! Profissionais extremamente cuidadosos com os detalhes.",  
        "Minha casa ficou incrível depois da reforma. Não tenho nada a reclamar, só a agradecer!",  
        "Ótima experiência! Além de entregarem antes do prazo, o resultado ficou melhor do que imaginávamos.",  
        "Equipe sempre disponível e preocupada com o cliente. O acabamento ficou de primeira.",  
        "Recomendo de olhos fechados! Desde o primeiro contato até a entrega final, tudo foi excelente.",  
        "Entregaram tudo conforme o combinado, com muita qualidade e dentro do prazo. Super satisfeita!",  
        "Gostei muito do serviço. O acabamento ficou ótimo, embora tenha havido um pequeno atraso.",  
        "Muito boa a qualidade do trabalho. Recomendo, mas poderiam melhorar um pouco a comunicação.",  
        "O resultado final foi excelente. Só não dou 5 estrelas porque tiveram alguns imprevistos no cronograma.",  
        "A obra ficou do jeito que queríamos. Houve pequenos ajustes durante o processo, mas tudo foi resolvido.",  
        "O serviço foi muito bem feito, mas houve uma demora na entrega. No geral, recomendo!",  
        "Empresa bem organizada e prestativa. Só senti falta de mais agilidade em alguns momentos.",  
        "O acabamento ficou muito bom. Valeu a pena, mesmo com alguns pequenos atrasos.",  
        "Gostei do atendimento e da qualidade do serviço. Só poderia ser um pouco mais rápido.",  
        "A reforma ficou linda! A única coisa foi que a obra atrasou um pouco no final.",  
        "No geral, uma ótima experiência. O trabalho ficou muito bem feito e o atendimento foi excelente."  
    ]  
]
var c=0
var avalia=avaliacoes[0]
console.log(avalia)
function passar(){
    document.getElementById('nome').innerText=avaliacoes[0][c]
    document.getElementById('avalia').innerText=`avaliou a tutto fa com ${avaliacoes[1][c]} estrelas`
    document.getElementById('descriçao').innerText=avaliacoes[2][c]
    if (c+1>19){
        c=0
    }else{
        c++
    }
}

// talvez depois eu faça isso
function avaliar(){
    console.log('inativo')
}

// calcular media de estrelas
function media(){
    var soma = avaliacoes[1].reduce((total, valor) => total + valor, 0);
    document.getElementById('media_av').innerText=`a media de ${avalia.length} avaliações resultam em:`
    
    for (c = 0; c < 5; c++) {
        document.getElementById(`estrela${c+1}`).style.color='rgba(0, 0, 0, 0.548)'
    }
    for (c=0;c<parseInt(soma/avalia.length);c++){
        document.getElementById(`estrela${c+1}`).style.color='black'
    }



}
media()
setInterval(passar,3000)

function abrir(){
    var barra=document.getElementById('barra')
    var verificador= barra.className
    if(verificador=='barra' || verificador=='barra_0'){
        barra.className='barra_1'
        barra.style.transform='translateX(0%)'
        document.getElementById('bt_barra').style.color='white'   
    }
    else if (verificador=='barra_1'){
            barra.className='barra_0'
            barra.style.transform='translateX(100%)'
        document.getElementById('bt_barra').style.color='black'   
    }
}