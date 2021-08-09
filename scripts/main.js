import {niveles} from "./niveles.js";

const pagina = document.querySelector('.body-bg');
const popUpTrue = document.querySelector(".popup-true");


let victory = new Audio("assets/audio/win.wav");

/* Seleccion de nivel */
let current_level = {};
const cards_level = document.querySelectorAll(".b-game-card");
const targets =document.querySelectorAll('.objetos');

cards_level.forEach(card=>{
    card.onclick = e =>{
        //Mostrar pantalla de inicio
        const elementos_ocultos = document.querySelectorAll(".hiddenStart");
        elementos_ocultos.forEach(el =>{
            el.classList.toggle("hiddenStart");
        });
        const cards = document.querySelector(".card-niveles");
        cards.style.display = "none";

        let level_id = card.id.slice(-1);

        niveles.forEach((nivel) => {
            if(nivel.id === level_id){
                current_level = nivel;
            }
        });

        //Mostrar objetivos
        targets.forEach( (target, index) => {
            target.innerHTML = current_level.objetos[index].name
        });
    };
});


/* Inicio del juego */
const startButton= document.querySelector('.startBtn');
const points = document.querySelector('.points');
const time = document.querySelector('.seconds');
const scene = document.querySelector('.scene');
let buttons_popup = document.querySelectorAll('.btn-menu');
let clock = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  

let interval;
let score = 0, seconds = 0;
let ancho=0, alto=0;
let x=0, y=0;

startButton.onclick = (e) => {
    interval = setInterval(function(){
        clock.play();
        seconds++;
        time.innerHTML = seconds;
        ancho = scene.clientWidth;
        alto = scene.clientHeight;
        if(seconds === current_level.tiempo){
            gameOver();
        }
    },1000);
    startButton.remove();

    buttons_popup.forEach( (button, index) => {
        button.innerHTML = current_level.objetos[index].name
    });

    scene.setAttribute("src",current_level.fondos[0].img);
}

/* GAMEPLAY */
const menu = document.querySelector('.popup');
let px = 0;
let py = 0;

scene.onclick = (e) => {
    showPopUp();
    //LOG porcentajes
    const target = e.target;
    const rect = target.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    px = x / ancho;
    py = y / alto;
    console.log(`Porcentaje en x: ${px} Porcentaje en y: ${py}`);
}

//Desplegar menu
function showPopUp(){
    if(scene.src.includes("nivel")){
        menu.classList.add("show");
        menu.classList.remove("hide");
        buttons_popup.forEach(button => {
            button.style.transition="0.7s";
        });
        scene.style.opacity=".6";
    }
}
//Cerrar menu
const btnClose = document.querySelector("#btnCancel");
btnClose.onclick = (e) => hidePopUp();

function hidePopUp(){
    menu.classList.remove("show");
    menu.classList.add("hide");
    buttons_popup.forEach(button => {
        button.style.transition="0s";
    });
    scene.style.opacity="1";
}

//Victoria 
const winner = () =>{
    scene.setAttribute("src","assets/img/victoria.png");
    victory.play();
    hidePopUp();
    clearInterval(interval);
    restartButton.style.visibility="visible";
}

//Derrota
function gameOver(){
    scene.setAttribute("src","assets/img/gameover.png");
    victory.play();
    hidePopUp();
    clearInterval(interval);
    restartButton.style.visibility="visible";
}

//Eleccion de objeto
buttons_popup.forEach(button => {
    button.onclick = function(){ 
        let seleccion = {};
        current_level.objetos.forEach(obj =>{
            if(button.id === obj.id){
                seleccion = obj;
            }
        });

        if(px >= seleccion.x1 & px <= seleccion.x2 
            & py >= seleccion.y1 & py <= seleccion.y2){
                hidePopUp(); 
                showPopUpTrue(seleccion.name);
                score++;
                points.innerHTML = score;
                const cont_btn = document.querySelector(`#div_btn_${button.id}`);
                cont_btn.remove();
                buttons_popup = document.querySelectorAll('.btn-menu');
                tacharObjeto(seleccion.name);

                //Victoria
                if (buttons_popup.length===0){
                    setTimeout(winner,1000);
                }
        }
        else{
            hidePopUp();
            showPopUpFalse(seleccion.name);
        }
    }
});


//Regresar a la pantalla principal
const restartButton= document.querySelector('.restartBtn');
const backButton= document.querySelector('.backBtn');
restartButton.onclick = (e) => {
    location.reload();
}
backButton.onclick = (e) => {
    location.reload();
}

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

function oMousePos(canvas, evt) {
    let ClientRect = canvas.getBoundingClientRect();
      return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
  }
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

/* ^ CLICK EFFECT ^ */

/* Popups acierto y error */
let respuesta =true;

function hidePopUpTrue(){
    popUpTrue.classList.remove("show");
    popUpTrue.classList.add("hide");
}

function showPopUpTrue(objeto){
    respuesta=true;
    popUpTrue.style.background="#119B22";
    popUpTrue.classList.remove("hide");
    popUpTrue.classList.add("show");
    popUpTrue.innerHTML=`<div class="row text-center">
        <div class="col"> Felicidades encontraste a ${objeto}!! </div>
        </div>`;
    setTimeout(strongColorEffect, 100);
    setTimeout(weekColoreffect, 200);
    setTimeout(strongColorEffect, 300);
    setTimeout(weekColoreffect, 400);
    setTimeout(strongColorEffect, 500);
    setTimeout(weekColoreffect, 600);
    setTimeout(strongColorEffect, 700);
    setTimeout(weekColoreffect, 800);
    setTimeout(strongColorEffect, 900);
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
    setTimeout(strongColorEffect, 100);
    setTimeout(weekColoreffect, 200);
    setTimeout(strongColorEffect, 300);
    setTimeout(weekColoreffect, 400);
    setTimeout(strongColorEffect, 500);
    setTimeout(weekColoreffect, 600);
    setTimeout(strongColorEffect, 700);
    setTimeout(weekColoreffect, 800);
    setTimeout(strongColorEffect, 900);
    setTimeout(hidePopUpTrue, 1000);
}

function strongColorEffect(){
    if(respuesta){
        popUpTrue.style.background = "#119B22";
        popUpTrue.style.boxShadow = "-1px -1px 20px 5px #119B22";
    }
    else{
        popUpTrue.style.background="#F70968";
        popUpTrue.style.boxShadow = "-1px -1px 20px 5px #F70968";
    }
}
function weekColoreffect(){
    if(respuesta){
        popUpTrue.style.background="#13C03D";
        popUpTrue.style.boxShadow = "-1px -1px 20px 5px #119B22";
    }
    else{
        popUpTrue.style.background="#fc9cc1";
        popUpTrue.style.boxShadow = "-1px -1px 20px 5px #F70968";
    }
}

//Tachar objetos encontrados
function tacharObjeto(name){
    targets.forEach((objeto)=>{
        if(objeto.innerHTML === name){
            objeto.style.textDecoration ="line-through";
            objeto.style.background ="#5B2290";
        }
    });
}


