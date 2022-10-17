var Numcolor = 3;
var MyScore = 0;
var Haighscore = 0;
var Blue = new Audio("Blue.mp3") ;
var green = new Audio("Green.mp3") ;
var red = new Audio("red.mp3") ;
var Orange = new Audio("Orange.mp3") ;
var colorsAudio = [Blue, green,  red, Orange];
function changeColor(){
    //zmień kolor Blue/green/red/Orange
    var colors = ['rgb(124, 192, 248)', 'rgb(61, 255, 71)','rgb(255, 61, 61)' ,'rgb(255, 145, 61)'];
    var item = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("blok").style.backgroundColor = item;
    const index = (object) => object == item;
    globalThis.Numcolor = colors.findIndex(index);
    for(var i =0; i <= 3; i++ ){
        if(Numcolor == i){
            colorsAudio[Numcolor].play();
        }
    }
   
}

function sprawdz(x){
    for(var i = 0; i <= 3; i++ ){
        //sprawdzanie czy został naciśnięty odpowiedni guzik
        if(x == i){
            if(x == Numcolor){
                changeColor();
                MyScore++;
            }else{
                changeColor();
                if(MyScore > Haighscore){
                    Haighscore = MyScore;
                }
                MyScore = 0;
            } 
        }
    }
    //zliczanie punktów
    document.getElementById("score").innerHTML = MyScore;
    document.getElementById("highscore").innerHTML = Haighscore;
    if(MyScore != 0){
        document.getElementById("zle").innerHTML = "";
    }else{
        document.getElementById("zle").innerHTML = "Zła odpowiedź";
       
    }
}