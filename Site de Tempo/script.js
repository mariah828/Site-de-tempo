function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var bom = document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    // var hora = 14
    // var minuto = 45
    msg.innerHTML = `Agora são ${hora}:${minuto}h.`

    if (hora >= 0 && hora < 12) {
        bom.innerHTML = 'Bom dia!'
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'rgba(119, 121, 223, 0.73)'
    } else if (hora >= 12 && hora < 18) {
        bom.innerHTML = 'Boa tarde!'
        img.src = 'fototarde.jpg'
        document.body.style.background = 'rgba(255, 136, 0, 0.64)'
    } else {
        bom.innerHTML = '<strong>Boa noite!</strong>'
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'rgba(7, 8, 39, 0.77)'
    }
}