import {nivel1, nivel2} from "./objetos.js";

const points = document.querySelector('.points');
const pagina = document.querySelector('.body-bg');
const time = document.querySelector('.seconds');
const startButton= document.querySelector('.startBtn');
const restartButton= document.querySelector('.restartBtn');
const screen = document.querySelector('.game');
const nivel = document.querySelector('.nivel');
const menu = document.querySelector('.popup');
let buttons = document.querySelectorAll('.btn-menu');
const objetos =document.querySelectorAll('.objetos');
const instrucciones = document.querySelector('#instrucciones');
const popUpTrue = document.querySelector(".popup-true");
const cards_level = document.querySelectorAll(".b-game-card");

let clock = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
let victory = new Audio("assets/audio/win.wav");
let score = 0;
let seconds = 0;
let ancho=0;
let alto=0;
let x=0;
let y=0;
let interval;
let episodio;

cards_level.forEach(card=>{
    card.onclick = e =>{
        
        const elementos_ocultos = document.querySelectorAll(".hiddenStart");
        elementos_ocultos.forEach(el =>{
            el.classList.toggle("hiddenStart");
        });
        const cards = document.querySelector(".card-niveles");
        cards.style.display = "none";

        let ran = card.id.slice(-1);

        // let ran = Math.round(Math.random(0,2));
        console.log(ran);
        if(ran === "1"){
            episodio = nivel1;
        }else{
            episodio = nivel2;
        }
        objetos.forEach(objeto => {

            const texto = objeto.id === "obj1" ? episodio[0].name :
            objeto.id === "obj2" ? episodio[1].name :
            objeto.id === "obj3" ? episodio[2].name :
            objeto.id === "obj4" ? episodio[3].name :
            "Objeto";
            
            objeto.innerHTML=texto;
        });
    };
});

startButton.onclick = (e) => {
    interval = setInterval(function(){
        clock.play();
        time.innerHTML = seconds;
        seconds++;
        ancho = nivel.clientWidth;
        alto = nivel.clientHeight;
    },1000);
    startButton.remove();

    buttons.forEach(button => {

        const texto = button.id === "1" ? episodio[0].name :
        button.id === "2" ? episodio[1].name :
        button.id === "3" ? episodio[2].name :
        button.id === "4" ? episodio[3].name :
        button.id === "btnCancel" ? "Cerrar" :
        "Objeto";
        
        button.innerHTML=texto;
    });

    nivel.setAttribute("src",episodio[4].img);
}

restartButton.onclick = (e) => {
    location.reload();
}

const gameOver = () =>{
    nivel.setAttribute("src","assets/img/victoria.png");
    victory.play();
    hidePopUp();
    clearInterval(interval);
    restartButton.style.visibility="visible";
}


nivel.addEventListener('mousedown', function(e) {
    // Get the target
    const target = e.target;

    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();

    // Mouse position
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    // console.log(`Ancho: ${ancho} Alto:${alto}`);
    const px1 = x  /ancho;
    const py1 = y  /alto;
    let coords = "corrdenada en x: " + x + ", cordenada en y: " + y;
    console.log(`Porcentaje en: ${px1} Porcentaje en: ${py1}`);
    // console.log(coords);
});

function oMousePos(canvas, evt) {
    let ClientRect = canvas.getBoundingClientRect();
      return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
  }
}


buttons.forEach(button => {
    button.onclick = function(){ 
        // console.log(button.textContent);
        let seleccion = {};
        button.id === "1" ? seleccion = episodio[0] :
        button.id === "2" ? seleccion = episodio[1] :
        button.id === "3" ? seleccion = episodio[2] :
        button.id === "4" ? seleccion = episodio[3] :
        seleccion = 0;
        if(seleccion === 0){
            hidePopUp();
        }
        else{
            //Procentajes
            const px = x  /ancho;
            const py = y  /alto;
            console.log(`Porcentaje en: ${px} Porcentaje en: ${py}`);
            console.log(`Porcentaje x1 en: ${seleccion.x1} Porcentaje y1 en: ${seleccion.y1}`);


            if(px >= seleccion.x1 & px <= seleccion.x2 
                & py >= seleccion.y1 & py <= seleccion.y2){
                    
                    hidePopUp(); 
                    showPopUpTrue(seleccion.name);
                    score++;
                    points.innerHTML = score;

                    const cont_btn = document.querySelector(`#div_btn_${button.id}`);
                    cont_btn.remove();


                    buttons = document.querySelectorAll('.btn-menu');
                    tacharObjeto(seleccion.name);
                    //GameOver
                    if (buttons.length===1){
                        setTimeout(gameOver,1000);
                    }
            }
            else{
                showPopUpFalse(seleccion.name);
                hidePopUp();
            }
        }
    }
});

/*CLICK EFFECT */
const burst = new mojs.Burst({
    count:10,
    left:0,
    top:0,
    children:{
        shape:['circle','rect', 'curve', 'polygon'],
        fill:['#FFC121','#F70968', '#5B2290', '#018CC1'],
        degreeShift: 'rand(-360,360)'
    },
    duration: 500
});

const bang = new mojs.Burst({
    left:0,
    top:0,
    radius: {1:35},
    angle: 45,
    count: 8, 
    children: {
        radius:8,
        fill:'#5B2290',
        scale:{1:0, easing:'sin.in'},
        pathScale:[1,null],
        duration:[500,700],
        degreeShift:[13,null],
    }
});

const circle = new mojs.Shape({
    left:0,
    top:0,
    strokeWidth:8,
    fill:'none',
    radius:80,
    scale:{0:1},
    opacity:{.5:0},
    shape: 'circle',
    stroke: '#F70968',
    strokeWidth:8,
    fill: 'none',
    duration:500,
});

nivel.onclick = (e) => {
    // if(menu.style.visibility === 'visible'){
    //     hidePopUp();
    //     console.log("hola");
    // }else{
        showPopUp();
    // }
}
document.onclick= e =>{
//EFFECT
    const position = oMousePos(pagina, e);
    // console.log(position);
    circle.tune(position);
    circle.replay();
    burst.tune(position);
    burst.replay();
    bang.tune(position);
    bang.replay();

    setTimeout(resetMojsShapes, 510);
}



function resetMojsShapes(){
    
    // console.log("resetshapes");
    const mojs_divs = document.querySelectorAll("[data-name='mojs-shape']");

    mojs_divs.forEach(mojs =>{
        mojs.style.position="absolute"; 
        mojs.style.width = "0px";
        mojs.style.height = "0px";
        mojs.style.marginLeft = "0px";
        mojs.style.marginTop = "0px";
        mojs.style.opacity = "1";
        mojs.style.left = "0px";
        mojs.style.top = "0px";
        mojs.style.transform = "translate(0px, 0px) rotate(0deg) scale(0)";
        mojs.style.transformOrigin = "50% 50%";
    });
}

/*CLICK EFFECT */

function hidePopUp(){
    menu.classList.remove("show");
    menu.classList.add("hide");
    buttons.forEach(button => {
        button.style.transition="0s";
    });
    nivel.style.opacity="1";
}

function showPopUp(){
    if(nivel.src.includes("nivel")){
        menu.classList.add("show");
        menu.classList.remove("hide");
        buttons.forEach(button => {
            button.style.transition="0.7s";
        });
        nivel.style.opacity=".6";
    }
}


function hidePopUpTrue(){
    popUpTrue.classList.remove("show");
    popUpTrue.classList.add("hide");
}

let respuesta =true;

function showPopUpTrue(objeto){
    respuesta=true;
    popUpTrue.style.background="#119B22";
    popUpTrue.classList.remove("hide");
    popUpTrue.classList.add("show");
    popUpTrue.innerHTML=`<div class="row text-center">
        <div class="col"> Felicidades encontraste a ${objeto}!! </div>
        </div>`;
    setTimeout(trueEffect, 100);
    setTimeout(falseEffect, 200);
    setTimeout(trueEffect, 300);
    setTimeout(falseEffect, 400);
    setTimeout(trueEffect, 500);
    setTimeout(falseEffect, 600);
    setTimeout(trueEffect, 700);
    setTimeout(falseEffect, 800);
    setTimeout(trueEffect, 900);
    setTimeout(hidePopUpTrue, 1000);
}

function showPopUpFalse(objeto){
    respuesta=false;
    popUpTrue.style.background="#F70968";
    popUpTrue.classList.remove("hide");
    popUpTrue.classList.add("show");
    popUpTrue.innerHTML=`<div class="row text-center">
        <div class="col">Nooo ese no es ${objeto}!! </div>
        </div>`;
    setTimeout(trueEffect, 100);
    setTimeout(falseEffect, 200);
    setTimeout(trueEffect, 300);
    setTimeout(falseEffect, 400);
    setTimeout(trueEffect, 500);
    setTimeout(falseEffect, 600);
    setTimeout(trueEffect, 700);
    setTimeout(falseEffect, 800);
    setTimeout(trueEffect, 900);
    setTimeout(hidePopUpTrue, 1000);
}

function trueEffect(){
    if(respuesta){
        popUpTrue.style.background = "#119B22";
        popUpTrue.style.boxShadow = "-1px -1px 20px 5px #119B22";
    }
    else{
        popUpTrue.style.background="#F70968";
        popUpTrue.style.boxShadow = "-1px -1px 20px 5px #F70968";
    }
}
function falseEffect(){
    if(respuesta){
        popUpTrue.style.background="#13C03D";
        popUpTrue.style.boxShadow = "-1px -1px 20px 5px #119B22";
    }
    else{
        popUpTrue.style.background="#fc9cc1";
        popUpTrue.style.boxShadow = "-1px -1px 20px 5px #F70968";
    }
}

function tacharObjeto(name){
    objetos.forEach((objeto)=>{
        if(objeto.innerHTML === name){
            objeto.style.textDecoration ="line-through";
            objeto.style.background ="#5B2290";
        }
    });
}


