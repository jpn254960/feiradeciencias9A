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