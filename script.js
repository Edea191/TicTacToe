
const playerAboxShadow = "3px 3px 5px #be7f48";
const playerBboxShadow = "3px 3px 5px #FA8072";
const playerAbutton= "#F4A460";
const playerBbutton= "#FA8072";
const playerActiveBackgroundColor = "#faebe1";

var playerX=true;
var playerY=false; 
var turn = 1;



var a1=0, a2=0, a3=0, b1=0, b2=0, b3=0, c1=0, c2=0, c3=0;

function clicker(position){

   document.getElementById(position).setAttribute("disabled", true);
   switch(position){

        case 'a1':
        a1=turn;
        break;
        case 'a2':
        a2=turn;
        break;
        case 'a3':
        a3=turn;
        break;

        case 'b1':
        b1=turn;
        break;
        case 'b2':
        b2=turn;
        break;
        case 'b3':
        b3=turn;
        break;

        case 'c1':
        c1=turn;
        break;
        case 'c2':
        c2=turn;
        break;
        case 'c3':
        c3=turn; 
        break;           
   }
/*
    console.log(a1, a2, a3);
    console.log(b1, b2, b3);
    console.log(c1, c2, c3);*/
  
    

    if(playerX){
        document.getElementById(position).style.backgroundColor=playerAbutton;
        document.getElementById(position).style.boxShadow=playerAboxShadow;
        playerX=false;
        playerY=true;
        turn = 2;
        document.getElementById("player_x").style.backgroundColor="white";
        document.getElementById("player_y").style.backgroundColor=playerActiveBackgroundColor;

        howIsWinner(a1,a2,a3,b1,b2,b3,c1,c2,c3);


       
    }
    else if(playerY){
        document.getElementById(position).style.backgroundColor=playerBbutton;
        document.getElementById(position).style.boxShadow=playerBboxShadow;

        document.getElementById("player_x").style.backgroundColor=playerActiveBackgroundColor;
        document.getElementById("player_y").style.backgroundColor="white";

        playerX=true;
        playerY=false;
        turn= 1;


        howIsWinner(a1,a2,a3,b1,b2,b3,c1,c2,c3);

    }



}


function howIsWinner(a1, a2, a3, b1, b2, b3, c1, c2, c3){
    if (a1== 1 && a2 == 1 && a3 == 1){
        alert("Player A Winner!");
        window.location.reload(true);
    }

    else if(b1== 1 && b2 == 1 && a3== 1){
        alert("Player A Winner!");
        window.location.reload(true);
    }

    else if(c1== 1 && c2 == 1 && c3== 1){
        alert("Player A Winner!");
        window.location.reload(true);
    }

    else if(a1== 1 && b1 == 1 && c1== 1){
        alert("Player A Winner!");
        window.location.reload(true);
    }
    else if(a2== 1 && b2 == 1 && c2== 1){
        alert("Player A Winner!");
        window.location.reload(true);
    }
    else if(b1== 1 && b2 == 1 && b3== 1){
        alert("Player A Winner!");
        window.location.reload(true);
    }
    else if(a3== 1 && b3 == 1 && c3== 1){
        alert("Player A Winner!");
        window.location.reload(true);
    }
    else if(a1== 1 && b2 == 1 && c3 ==1){
        alert("Player A Winner!");
        window.location.reload(true);
    } 
    else if(a3== 1 && b2 == 1 && c1 ==1){
        alert("Player A Winner!");
        window.location.reload(true);
    } 


    else if (a1== 2 && a2 == 2 && a3 == 2){
        alert("Player B Winner!");
        window.location.reload(true);
    }

    else if(b1== 2 && b2 == 2 && a3== 2){
        alert("Player B Winner!");
        window.location.reload(true);
    }

    else if(c1== 2 && c2 == 2 && c3== 2){
        alert("Player B Winner!");
        window.location.reload(true);
    }

    else if(a1== 2 && b1 == 2 && c1== 2){
        alert("Player B Winner!");
        window.location.reload(true);
    }
    
    else if(b1== 1 && b2 == 1 && b3== 1){
        alert("Player B Winner!");
        window.location.reload(true);
    }

    else if(a2== 2 && b2 == 2 && c2== 2){
        alert("Player B Winner!");
        window.location.reload(true);
    }
    else if(a3== 2 && b3 == 2 && c3== 2){
        alert("Player B Winner!");
        window.location.reload(true);
    }
    else if(a1== 2 && b2 == 2 && c3 ==2){
        alert("Player B Winner!");
        window.location.reload(true);
    } 

    else if(a3== 2 && b2 == 2 && c1 ==2){
        alert("Player B Winner!");
        window.location.reload(true);
    } 

    else if(a1!= 0 && a2!=0 && a3!= 0 &&
            b1!= 0 && b2!=0 && b3!= 0 &&
            c1!= 0 && c2!=0 && c3!= 0){
            alert("Try Again!");
            window.location.reload(true);    
            }



}