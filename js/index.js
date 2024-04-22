function cauculadorIdade() {
    var ano = document.getElementById("ano").value;
    var sex = document.querySelector('input[name="sexo"]:checked').value;
    var hoje = new Date().getFullYear()
    var idade = hoje - ano
    var img = document.getElementById("imagem")

    if (sex == "masculino" && idade >= 1 && idade < 13) {
        document.getElementById("detectar").innerHTML = `Detectamos É uma criança com ${idade} anos de idade.`;
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.src = "img/menino.jpg"

    } else if (sex == "masculino" && idade >= 13 && idade < 18) {
        document.getElementById("detectar").innerHTML = `Detectamos É um adolecente com ${idade} anos de idade.`;
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.src = "img/adolescentehomem.jpg"

    } else if (sex == "masculino" && idade >= 18 && idade < 60) {
        document.getElementById("detectar").innerHTML = `Detectamos É um Homem com ${idade} anos de idade.`;
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.src = "img/homem.jpg"


    } else if (sex == "masculino" && idade >= 60 && idade < 150) {
        document.getElementById("detectar").innerHTML = `Detectamos É um Idoso com ${idade} anos de idade.`;
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.src = "img/velho.jpg"



    } else if (sex == "feminino" && idade >= 1 && idade < 13) {
        document.getElementById("detectar").innerHTML = `Detectamos É uma criança com ${idade} anos de idade.`;
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.src = "img/menina.jpg"

    } else if (sex == "feminino" && idade >= 13 && idade < 18) {
        document.getElementById("detectar").innerHTML = `Detectamos É uma adolecente com ${idade} anos de idade.`;
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.src = "img/adolescentemulherjpg.jpg"

    } else if (sex == "feminino" && idade >= 18 && idade < 60) {
        document.getElementById("detectar").innerHTML = `Detectamos É uma Mulher com ${idade} anos de idade.`;
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.src = "img/mulher.jpg"

    } else if (sex == "feminino" && idade >= 60 && idade < 150) {
        document.getElementById("detectar").innerHTML = `Detectamos É uma Idoso com ${idade} anos de idade.`;
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.src = "img/velha.jpg"

    } else {
        document.getElementById("detectar").innerHTML = "Idade não encontrada, favor tentar novamente"
        alert("erro")
    }


}