function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }


    // o código acima pode ser substituído por apenas este código abaixo. Ele dará o mesmo resultado.

    // html.classList.toggle('light')


    //pegar a tag img, para em seguida substituir a imagem
    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        img.setAttribute("src", "../assets/avatar-light.png")
    } else {
        img.setAttribute("src", "../assets/avatar.png")
    }
}