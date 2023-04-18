function enviar(){
    let n1 = document.getElementById("nome");
    let n2 = document.getElementById("email");
    let n3 = document.getElementById("mensagem");
    

    if(n1.value.trim()==""){
        alert("O nome é obrigatório");
        return false;
    }
    if(n2.value.trim()==""){
        alert("O email é obrigatório");
        return false;
    }
    if(n3.value.trim()==""){
        alert("A mensagem é obrigatória");
        return false;
    }
    return true;
}
