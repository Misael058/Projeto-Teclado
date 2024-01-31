let teclas = document.querySelectorAll(".key"); //pegabdo tods as teclad


const musicaPlay = (audio) => { //pecorrendo a lista de notas da pasta notas 
    const nota = new Audio(`./notas/${audio}.wav`); 
    nota.play();
}

const clicou = (element) =>  {  //pegando cada elemento da tecla black ou white  e adcicionando classs nelas 

    musicaPlay(element.getAttribute('data-note')); //inicializando a funcção peganmdo o atributo do span la do html 

    if (element.className.includes("black")) {
        element.classList.add("blackAtivado");
        return;

    }
   element.style.background="#ddd";
}

const clickSoltou = (element) =>  { //removendo uma classe quando eu tiro o dedo do mouse
    if (element.className.includes("black")) {
        element.classList.remove("blackAtivado");
        return;

    }

   element.style.background="white";
}


teclas.forEach((element) => {

 element.addEventListener("mousedown", () => clicou(element)) //colocando o evento de segurar o botao de click 

 element.addEventListener("mouseup", () => clickSoltou(element)) //colocando o evento de saida do dedo do botao de click 
})