let start = document.querySelector("#start");
let container = document.querySelector(".container");
let mask = document.querySelector(".mask");
let span = document.querySelector("span");
let h1 = document.querySelector("h1");
let restart = document.querySelector("#restart");
let wanjia = document.querySelector("#wanjia");
let ai = document.querySelector("#ai");
let isAi = false;
let left = document.querySelector(".left");
ai.onclick = function () {
    isAi = true;
};
wanjia.onclick=function () {
    isAi = false;
};
// 点击开始事件
start.onclick=function () {
    container.classList.add("show");
    start.style.display="none";
    restart.style.display="block";
    left.style.opacity=1;
    h1.style.display="none";
};

let canvas = document.querySelector("canvas");
let cobj = canvas.getContext("2d");
let w=40;
let pos={};//
let blank={};//所有空白区域的位置

// 画棋盘
function drawBoard() {
    cobj.clearRect(0,0,600,600);
    cobj.save();
    cobj.beginPath();
    for(let i=0;i<15;i++){
        cobj.moveTo(20,i*w+20);
        cobj.lineTo(580,i*w+20);
        cobj.moveTo(i*w+20,20);
        cobj.lineTo(i*w+20,580);
    };
    cobj.stroke();
    // 画点点
    drawPointer(3,3);
    drawPointer(3,11);
    drawPointer(11,3);
    drawPointer(11,11);
    drawPointer(7,7);
    function drawPointer(x,y) {
        cobj.save();
        cobj.translate(x*w+20,y*w+20);
        cobj.beginPath();
        cobj.arc(0,0,5,0,2*Math.PI);
        cobj.fill();
        cobj.restore();
    }
    for(let i=0;i<15;i++){
        for(let k=0;k<15;k++){
            blank[j(i,k)]=true;
        }
    }
}
drawBoard();

// 创建棋子
function drawChess(x,y,color) {
    cobj.save();
    cobj.translate(x*w+20,y*w+20);
    cobj.fillStyle=color;
    cobj.beginPath();
    cobj.arc(0,0,15,0,2*Math.PI);
    cobj.fill();
    cobj.restore();
    pos[j(x,y)]=color;
    delete blank[j(x,y)];
};

// 落棋子
let flag = true;
canvas.onclick=function (e) {
    let x=Math.round((e.offsetX-20)/w);
    let y=Math.round((e.offsetY-20)/w);
    if(pos[j(x,y)]){
        return;
    }
    if(flag){
        drawChess(x,y,"black");
        if(check(x,y,"black")===5){
            over("黑")
        }
        if(isAi){
            let p = getPos();//{x:1,y:1}
            drawChess(p.x,p.y,"white");
            if(check(p.x,p.y,"white")===5){
                over("白")
            }
            return;
        }

    }else{
        drawChess(x,y,"white");
        if(check(x,y,"white")===5){
            over("白")
        };
    };
    flag=!flag;
};

function j(x,y) {
    return x+"_"+y;
}
// 判断是否成功
function check(x,y,color) {
    let row = 1;
    let i = 1;
    while(pos[j(x+i,y)]===color){
        row++;
        i++;
    }
    i=1;
    while(pos[j(x-i,y)]===color){
        row++;
        i++;
    }
    let col = 1;
    i=1;
    while(pos[j(x,y+i)]===color){
        col++;
        i++
    }
    i=1;
    while(pos[j(x,y-i)]===color){
        col++;
        i++
    }
    let x1=1;
    i=1;
    while (pos[j(x+i,y+i)]===color){
        x1++;
        i++;
    }
    i=1;
    while (pos[j(x-i,y-i)]===color){
        x1++;
        i++;
    }
    // i=1;
    let x2=1;
    i=1;
    while (pos[j(x+i,y-i)]===color){
        x2++;
        i++;
    }
    i=1;
    while (pos[j(x-i,y+i)]===color){
        x2++;
        i++;
    }
    return Math.max(x1,x2,row,col)
};


function getPos() {
    let max1 = 0;
    let pos1 = {};
    for(let i in blank){
        let x = parseInt(i.split("_")[0]);
        let y = parseInt(i.split("_")[1]);
        let length = check(x,y,"black");
        if(length > max1){
            max1=length;
            pos1={x,y};
        }
    }
    let max2=0;
    let pos2={};
    for(let i in blank){
        let x = parseInt(i.split("_")[0]);
        let y = parseInt(i.split("_")[1]);
        let length = check(x,y,"white");
        if(length > max2){
            max2=length;
            pos2={x,y};
        }
    }
    if(max1>max2){
        return pos1;
    }else{
        return pos2;
    }
};

function over(name) {
   mask.style.display = "block";
   span.innerHTML=name+"棋获胜";
}


restart.onclick = function () {
    mask.style.display="none";
    cobj.clearRect(0,0,600,600);
    drawBoard();
    pos={};
    imgbox.style.display = "none";
};



let qipu = document.querySelector("#qipu");
let imgbox = document.querySelector(".imgbox");
let xiazai = document.querySelector("#xiazai");
let f = true;
qipu.onclick = function(){
    if(f === true) {
        let url = canvas.toDataURL();
        let newimg = new Image();
        newimg.src = url;
        imgbox.appendChild(newimg);
        imgbox.style.display = "block";
        xiazai.href = url;
        xiazai.setAttribute("download", "5.png");
    }
};

let music = document.querySelector(".music");
let audio = document.querySelector("audio");
let flag2 = true;
music.onclick = function(){
    if(flag2){
        audio.pause();
        music.style.animationPlayState = "paused";
    }else{
        audio.play();
        music.style.animationPlayState = "running";
    }
    flag2 = !flag2;
};
