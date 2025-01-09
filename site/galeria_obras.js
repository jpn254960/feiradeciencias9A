
var sequencia=0
var fotos=['imgs/obra1.jpeg','imgs/obra2.jpeg','imgs/obra3.jpeg','imgs/obra4.jpeg','imgs/obra5.jpeg']
document.getElementById('text_numeral').innerText=`${sequencia+1}/${fotos.length}`
function fechar_painel(){
    var painel = document.getElementById('painel')
    if (painel.className=='painel_1'){
        painel.className='painel_0'
        document.getElementById('tela_preta').className='tela_preta0'
    }else{
        document.getElementById('tela_preta').className='tela_preta1'
        painel.className='painel_1'
    }
}
function passar(s){
    if(s==1){
        if((sequencia+2)>fotos.length){
            sequencia=0
        }else{
            sequencia++
        }
        document.getElementById('imgs_gg').src=fotos[sequencia]
        document.getElementById('text_numeral').innerText=`${sequencia+1}/${fotos.length}`
    }
    else{
        if ((sequencia-1)==-1){
            sequencia=fotos.length-1
        }else{
            sequencia--
        }
        document.getElementById('imgs_gg').src=fotos[sequencia]
        document.getElementById('text_numeral').innerText=`${sequencia+1}/${fotos.length}`
    }
}

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