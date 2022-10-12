var Numcolor;
var MyScore = 0;
function changeColor(){
    //zmień kolor
    var colors = ['blue', 'Green','Red' ,'Orange'];
    var item = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("blok").style.backgroundColor = item;
    const index = (object) => object == item;
    globalThis.Numcolor = colors.findIndex(index);
    
}

function sprawdz(x){
    
    //sprawdzanie czy został naciśnięty odpowiedni guzik
    if(x == 0){
        //blue
        if(Numcolor == undefined){
            changeColor();
        }else if(x == Numcolor){
            changeColor();
            MyScore++;
        }else{
            changeColor();
            document.getElementById("zle").innerHTML = "zła odpowiedź";
            MyScore = 0;
        } 
    }else if(x == 1 ){
        //green
        if(Numcolor == undefined){
            changeColor();
        }else if(x == Numcolor){
            changeColor();
            MyScore++;
        }else{
            changeColor();
            document.getElementById("zle").innerHTML = "zła odpowiedź";
            MyScore = 0;
        } 
        
    }else if(x == 2){
        //red
        if(Numcolor == undefined){
            changeColor();
            MyScore++;
        }else if(x == Numcolor){
            changeColor();
            MyScore++;
        }else{
            changeColor();
            document.getElementById("zle").innerHTML = "zła odpowiedź";
            MyScore = 0;
        } 
        
    }else if(x == 3){
        //orange
        if(Numcolor == undefined){
            changeColor();
            MyScore++;
        }else if(x == Numcolor){
            changeColor();
            MyScore++;
        }else{
            changeColor();
            document.getElementById("zle").innerHTML = "zła odpowiedź";
            MyScore = 0;
        } 
        
    }
        
    
    //zliczanie punktów
    document.getElementById("score").innerHTML = MyScore;
    console.log(MyScore);
}