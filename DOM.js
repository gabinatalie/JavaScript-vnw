const elementPorId = document.getElementById("id")
//pega pelo ID

const elementPorClass = document.getElementsByClassName("aula")
//pega pela classe

const elementoPorTag = document.getElementsByTagName("p")
  //pega o elemento pela tag

//querySelector - id (#nomeId), class (.nomeDaClass), tag (nomeTag)

const imagemDom = document.querySelector(".imagem")
//chamei pela class
  
imagemDom.style.border = "solid red 5px"
console.log(imagemDom)

const mudandoTexto = document.querySelector("#id")

mudandoTexto.innerHTML= "Olá, bem vindo"