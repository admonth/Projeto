function toggleMode() {
    const html = document.documentElement
    
   /*if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/

    html.classList.toggle('light') /*É a mesma coisa do comentário de cima, só que é uma função simplificada, alguém criou e ta no js, é mais limpo do que deixar esse if e else, mas na prática fazem a mesma coisa*/

    //pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', "./assets/red-cat.png")
    img.setAttribute('alt', 'Foto de avatar do perfil de gato branco')
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', "./assets/leaf-cat.png")
        img.setAttribute('alt', 'Foto de avatar do perfil de gato preto')
    }
}