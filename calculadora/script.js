var num = document.getElementById('numero')

function clicar(element){
   

num.value += element.value


if(element.value == '='){

    
    let resultado = num.value.replace('=', '')

    num.value = eval(resultado)


}
if(element.value == 'del'){

    num.value = ''


}



}




