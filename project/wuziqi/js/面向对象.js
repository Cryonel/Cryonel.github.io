class Wuziqi{
    constructor(){
        this.kaishi = document.querySelector("#start");
        this.h1 = document.querySelector("h1");
        this.left = document.querySelector(".left");
        this.restart = document.querySelector("#restart");
        this.ai = document.querySelector("#ai");
        this.qipu = document.querySelector("#qipu");
        this.xiazai = document.querySelector("#xiazai");
        this.download = document.querySelector("#down");
        this.music = document.querySelector(".music");
        this.container = document.querySelector(".container");
        this.canvas = document.querySelector("canvas");
        this.mask = document.querySelector(".mask");
        this.span = document.querySelector("span");
        this.imgbox = document.querySelector(".imgbox");

        this.cobj = this.canvas.getContext("2d");
        this.w=40;
        this.pos={};
        this.blank={};
    }
    //游戏开始方法
    start(){
        this.kaishi.addEventListener("click",function () {
            this.kaishi.style.display="none";
            this.h1.style.display="none";
            this.left.style.opacity=1;
            this.container.classList.add("show");
            this._drawBoard();
            this._drawPointer(x,y)
        }.bind(this))
    }

    // 画棋盘
    _drawBoard(){
        this.cobj.clearRect(0,0,600,600);
        this.cobj.save();
        this.cobj.beginPath();
        for(let i=0;i<15;i++){
            this.cobj.moveTo(20,i*this.w+20);
            this.cobj.lineTo(580,i*this.w+20);
            this.cobj.moveTo(i*this.w+20,20);
            this.cobj.lineTo(i*this.w+20,580);
        };
        this.cobj.stroke();
        this._drawPointer(3,3);
        this._drawPointer(3,11);
        this._drawPointer(11,3);
        this._drawPointer(11,11);
        this._drawPointer(7,7);
    }

    // 画点点
    _drawPointer(x,y){
        this.cobj.save();
        this.cobj.translate(x*this.w+20,y*this.w+20);
        this.cobj.beginPath();
        this.cobj.arc(0,0,5,0,2*Math.PI);
        this.cobj.fill();
        this.cobj.restore();
    }

    // 创建棋子
    _drawChess(x,y,color){
        this.cobj.save();
        this.cobj.translate(x*this.w+20,y*this.w+20);
        this.cobj.fillStyle=color;
        this.cobj.beginPath();
        this.cobj.arc(0,0,15,0,2*Math.PI);
        this.cobj.fill();
        this.cobj.restore();
        this.pos[this._j(x,y)]=color;
        delete this.blank[this._j(x,y)];
    }
    _j(x,y){
        return x+"_"+y;
    }

    //落棋子

}
let wuziqi = new Wuziqi();
wuziqi.start();