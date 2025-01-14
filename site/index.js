function abrir(){
    var barra=document.getElementById('barra')
    var verificador= barra.className
    if(verificador=='barra' || verificador=='barra_0'){
        barra.className='barra_1'
        barra.style.transform='translateX(0%)'
        document.getElementById('bt_barra').style.color='white'
        setTimeout(function(){
            document.getElementById('pagina').style.display='none'
        },300)
    }
    else if (verificador=='barra_1'){
        barra.className='barra_0'
        barra.style.transform='translateX(100%)'
        document.getElementById('bt_barra').style.position='absulute'
        document.getElementById('bt_barra').style.color='black'
        document.getElementById('pagina').style.display='auto'
        document.getElementById('pagina').style.display='' || 'block'
    }
}
setTimeout(function(){
    document.getElementById('inicial').style.width='0vw'
    document.getElementById('inicial').style.animation='fechar 1s'
    document.getElementById('pagina').style.display='' || 'block'
},2000)
setTimeout(function(){
    document.getElementById('logo_inicio').style.animation='surgir 2s'
},500)