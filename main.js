$(document).ready(function(){
    
    var cnote = document.getElementById("c-note");
    var dnote = document.getElementById("d-note");
    var enote = document.getElementById("e-note");
    var fnote = document.getElementById("f-note");
    var gnote = document.getElementById("g-note");
    var anote = document.getElementById("a-note");
    var bnote = document.getElementById("b-note");
    

    
    $("#c").on("click mouseover", tocarC); 
    
    function tocarC(){
        cnote.currentTime = 0;
        cnote.play();
    };
    
    $("#d").on("click mouseover",tocarD)
    
    function tocarD(){
        dnote.currentTime = 0;
        dnote.play();
    }; 
    
    $("#e").on("click mouseover",tocarE)
    
    function tocarE(){
        enote.currentTime = 0;
        enote.play();
    };
    
    $("#f").on("click mouseover",tocarF)
    
    function tocarF(){
        fnote.currentTime = 0;
        fnote.play();
    };
    
    $("#g").on("click mouseover",tocarG)
    
    function tocarG(){
        gnote.currentTime = 0;
        gnote.play();
    };
    
    $("#a").on("click mouseover",tocarA)
    
    function tocarA(){
        anote.currentTime = 0;
        anote.play();
    };
    
    $("#b").on("click mouseover",tocarB)
    
    function tocarB(){
        bnote.currentTime = 0;
        bnote.play();
    };
    
    $(document).keypress( function (evento){
            if(evento.keyCode == 97){
                tocarC();
                console.log("tocando DO");
        
        }else if(evento.keyCode == 115){
                tocarD();
                console.log("tocando RE");
    
        }else if(evento.keyCode == 100){
                tocarE();
                console.log("tocando MI");
            
        }else if(evento.keyCode == 102){
                tocarF();
                console.log("tocando FA");
            
        }else if(evento.keyCode == 103){
                tocarG();
                console.log("tocando SOL");
            
        }else if(evento.keyCode == 104){
                tocarA();
                console.log("tocando LA");
            
        }else if(evento.keyCode == 106){
                tocarB();
                console.log("tocando SI");
            }
        
    });
    
    
});