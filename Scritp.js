function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `agora são ${hora} horas`;
  if (hora < 12 && hora >= 6) {
    console.log(`Bom dia!`);
    img.src = "images/manha.png";
    document.body.style.background = "#e8e4e3";
  } else if (hora <= 18 && hora >= 12) {
    console.log(`Boa tarde`);
    img.src = "images/tarde.png";
    document.body.style.background = "#bc8469";
  } else if (hora >= 18) {
    console.log(`Boa noite`);
    img.src = "images/noite.png";
    document.body.style.background = "#01141c";
    document.getElementById("myheader").style.color = "#ffffff";
  } else {
    console.log(`já está tarde, descanse um pouco, Boa madrugada!`);
    img.src = "images/madrugada.png";
    document.body.style.background = "#a9bad6";
  }
}
