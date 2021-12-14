var x_color= "#F4A460";
var z_color="#800080";


var playerX=true;
var playerY=false; 

var a1=0, a2=0, a3=0, b1=0, b2=0, b3=0, c1=0, c2=0, c3=0;

function clicker(position){
    
   document.getElementById(position).style.backgroundColor=x_color;
   switch(position){
        case 'a1':
        a1 = 1;
        break;
        case 'a2':
        a2 = 1;
        case 'a3':
        a3 = 1;

        case 'b1':
        b1 = 1;
        case 'b2':
        b2 = 1;
        case 'b3':
        b3 = 1;

        case 'c1':
        c1 = 1;
        case 'c2':
        c2 = 1;
        case 'c3':
        c3 = 1;            
   }

    console.log("change");
    console.log(a2);

    

    if(playerX){
        playerX=false;
        playerY=true;
       
    }
    else if(playerY){
        playerX=true;
        playerY=false;
    }


    else if(a1 == 1 && b2 == 1 && c3 == 1){
        alert('Player Winer');
    }


}