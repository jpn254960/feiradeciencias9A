function abrir(){
    var barra=document.getElementById('barra')
    var verificador= barra.className
    var display=document.getElementById('pagina').style.display
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