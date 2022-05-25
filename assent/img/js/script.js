
/*
case sensitive = reconhece letras maiusculas e minusculas

por tag: getelementebytagname()
pot id: getelemetbyid()
por nome: geteelementbyname()
por classe: getelementsbyclassname()
por seletor: queryselector()

*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOK = false 
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3 ) {
       txtNome.innerHTML = 'Nome Inválido!'
       txtNome.style.color = 'black'
    }
    else{
        txtNome.innerHTML = 'Nome Válido!'
        txtNome.style.color ='green'
        nomeOK = true
    
    }

}

function validaEmail(){
let txtEmail = document.querySelector("#txtEmail")
if (email.value.indexOf('@') == -1 || email.value.indexOf('.') ==-1){
txtEmail.innerHTML = 'E-mail inválido!'
txtEmail.style.color = 'black'
}
else{
txtEmail.innerHTML = 'E-mail válido!'
txtEmail.style.color = 'green'
emailOk = true
}

}

function validaAssunto(){
let txtAssunto = document.querySelector("#txtAssunto")

if(assunto.value.length >=100){
txtAssunto.innerHTML
txtAssunto.style.color = "black"
txtAssunto.style.display = "block"
}
else{
    txtAssunto.style.display = "nome"
    assuntoOK = true
}
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert("Formulário enviado com sucesso!")
    }
    else{
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}
   
function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.heigth = '600px'
}
function mapaNormal() {
    mapa.style.width = '550px'
    mapa.style.heigth = '250px'
}