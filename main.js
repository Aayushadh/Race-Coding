var myGamePiece;
var myObstacle;
var myWallet;
var myHelmet;
var temp=new Array(10);
var x1,y1;
var x2,y2;
var x3,y3;
var x4,y4;
x1=Math.floor(Math.random() * 10) * 40;
x2=Math.floor(Math.random() * 10) * 40;
y1=Math.floor(Math.random() * 10) * 40;
y2=Math.floor(Math.random() * 10)*40;
x3=Math.floor(Math.random() * 10) * 40;
x4=Math.floor(Math.random() * 10) * 40;
y3=Math.floor(Math.random() * 10) * 40;
y4=Math.floor(Math.random() * 10)*40;

alert('Pick up helmet and wallet, and go for the race');

while((x1==x2 && y1==y2) || (x1==x3 && y1==y3) || (x1==x4 && y1==y4) || (x2==x3 && y2==y3) || (x2==x4 && y2==y4) || (x3==x4 && y3==y4))
{
   x1=Math.floor(Math.random() * 10) * 40;
x2=Math.floor(Math.random() * 10) * 40;
y1=Math.floor(Math.random() * 10) * 40;
y2=Math.floor(Math.random() * 10)*40;
x3=Math.floor(Math.random() * 10) * 40;
x4=Math.floor(Math.random() * 10) * 40;
y3=Math.floor(Math.random() * 10) * 40;
y4=Math.floor(Math.random() * 10)*40;


}
console.log(x1+","+y1);
console.log(x2+","+y2);
console.log(x3+","+y3);
console.log(x4+","+y4);




function startGame() {

    for(let i=0;i<10;i++)
    {
        temp[i]=new Array(10);
    }
   
    for(let i=0;i<10;i++)
    {
        let count=i;
        let colo=" #ffffcc";
        if(count%2==0)
        {
            colo="white";
        }
        for(let j=0;j<10;j++)
        {
            temp[i][j]=new component(40,40,colo,i*40,j*40);
            if(count%2==0)
            {
                colo="#ffffcc";
                console.log("even");
            }
            else
            {
                colo="white";
                console.log("odd");
            }

            count++;
        }
    }
    myGamePiece = new component2(40, 40, "img/char3.png", x1, y1,"image");
    myObstacle  = new component2(40, 40, "img/flag1.png", x2, y2,"image"); 
    myWallet=new component2(40,40,"img/wallet.png",x3,y3,"image");
    myHelmet=new component2(40,40,"img/helmet1.png",x4,y4,"image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.getElementById('game').insertBefore(this.canvas, document.getElementById('game').childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}


function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
      
            ctx.fillStyle=color;
        
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.crashWith = function(otherobj) {
       if(this.x==otherobj.x && this.y==otherobj.y)
       {
           return true;
       }
       return false;
    }
}

function component2(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
      this.image = new Image();
      this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = myGameArea.context;
      if (type == "image") {
        ctx.drawImage(this.image,
          this.x,
          this.y,
          this.width, this.height);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
    this.crashWith = function(otherobj) {
        if(this.x==otherobj.x && this.y==otherobj.y)
        {
            return true;
        }
        return false;
     }
  }

  var op1=0,op2=0;
function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle) && op1 && op2) {
        alert('You win !!');
        x1=Math.floor(Math.random() * 10) * 40;
        x2=Math.floor(Math.random() * 10) * 40;
        y1=Math.floor(Math.random() * 10) * 40;
        y2=Math.floor(Math.random() * 10)*40;
        x3=Math.floor(Math.random() * 10) * 40;
        x4=Math.floor(Math.random() * 10) * 40;
        y3=Math.floor(Math.random() * 10) * 40;
        y4=Math.floor(Math.random() * 10)*40;
        
        while((x1==x2 && y1==y2) || (x1==x3 && y1==y3) || (x1==x4 && y1==y4) || (x2==x3 && y2==y3) || (x2==x4 && y2==y4) || (x3==x4 && y3==y4))
        {
           x1=Math.floor(Math.random() * 10) * 40;
        x2=Math.floor(Math.random() * 10) * 40;
        y1=Math.floor(Math.random() * 10) * 40;
        y2=Math.floor(Math.random() * 10)*40;
        x3=Math.floor(Math.random() * 10) * 40;
        x4=Math.floor(Math.random() * 10) * 40;
        y3=Math.floor(Math.random() * 10) * 40;
        y4=Math.floor(Math.random() * 10)*40;
        
        
        }
        myGamePiece.x=x1;
        myGamePiece.y=y1;
        myObstacle.x=x2;
        myObstacle.y=y2;
        myWallet.x=x3;
        myWallet.y=y3;
        myHelmet.x=x4;
        myHelmet.y=y4;
        op1=0;
        op2=0;

 
        //myGameArea.stop();
    }
    else if(myGamePiece.crashWith(myObstacle))
    {
        alert('You forget to pick up helmet or wallet !! Game over !!');
        x1=Math.floor(Math.random() * 10) * 40;
        x2=Math.floor(Math.random() * 10) * 40;
        y1=Math.floor(Math.random() * 10) * 40;
        y2=Math.floor(Math.random() * 10)*40;
        x3=Math.floor(Math.random() * 10) * 40;
        x4=Math.floor(Math.random() * 10) * 40;
        y3=Math.floor(Math.random() * 10) * 40;
        y4=Math.floor(Math.random() * 10)*40;
        
        while((x1==x2 && y1==y2) || (x1==x3 && y1==y3) || (x1==x4 && y1==y4) || (x2==x3 && y2==y3) || (x2==x4 && y2==y4) || (x3==x4 && y3==y4))
        {
           x1=Math.floor(Math.random() * 10) * 40;
        x2=Math.floor(Math.random() * 10) * 40;
        y1=Math.floor(Math.random() * 10) * 40;
        y2=Math.floor(Math.random() * 10)*40;
        x3=Math.floor(Math.random() * 10) * 40;
        x4=Math.floor(Math.random() * 10) * 40;
        y3=Math.floor(Math.random() * 10) * 40;
        y4=Math.floor(Math.random() * 10)*40;
        
        
        }
        myGamePiece.x=x1;
        myGamePiece.y=y1;
        myObstacle.x=x2;
        myObstacle.y=y2;
        myWallet.x=x3;
        myWallet.y=y3;
        myHelmet.x=x4;
        myHelmet.y=y4;

 
    }
    else {
        myGameArea.clear();
        for(let i=0;i<10;i++)
        {
            for(let j=0;j<10;j++)
            {
                temp[i][j].update();
            }
        }

        if(myGamePiece.x==myHelmet.x && myGamePiece.y==myHelmet.y)
        {
            myHelmet.x=-40;
            myHelmet.y=-40;
            op1=1;
        }
        if(myGamePiece.x==myWallet.x && myGamePiece.y==myWallet.y)
        {
            myWallet.x=-40;
            myWallet.y=-40;
            op2=1;
        }
        myObstacle.update();
        myHelmet.update();
        myWallet.update();
        if(myGamePiece.x+myGamePiece.speedX>=0 && myGamePiece.x+myGamePiece.speedX<400)
        myGamePiece.x += myGamePiece.speedX;
        if(myGamePiece.y+myGamePiece.speedY>=0 && myGamePiece.y+myGamePiece.speedY<400)
        myGamePiece.y += myGamePiece.speedY;   
        myGamePiece.speedX=0;
        myGamePiece.speedY=0;
        myGamePiece.update();
    }
}

var startBlocks = document.getElementById('startBlocks');
function moveup() {
    myGamePiece.speedY = -40; 
    
}

function movedown() {
    myGamePiece.speedY = 40; 
}

function moveleft() {
    myGamePiece.speedX = -40; 
}

function moveright() {
    myGamePiece.speedX = 40; 
}

var idi=1;

function moveup1() {
    myGamePiece.speedY = -40; 

}

function movedown1() {
    myGamePiece.speedY = 40; 
}

function moveleft1() {
    myGamePiece.speedX = -40; 
}

function moveright1() {
    myGamePiece.speedX = 40; 
}




function clearmove() {

    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}