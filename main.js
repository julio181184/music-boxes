$(document).ready(function(){
    
    var cnote = document.getElementById("c-note");
    var dnote = document.getElementById("d-note");
    var enote = document.getElementById("e-note");
    var fnote = document.getElementById("f-note");
    var gnote = document.getElementById("g-note");
    var anote = document.getElementById("a-note");
    var bnote = document.getElementById("b-note");
    
    $("#c").on("click",function(){
        cnote.currentTime = 0;
        cnote.play();
    });
    
    $("#d").on("click",function(){
        dnote.currentTime = 0;
        dnote.play();
    }); 
    
    $("#e").on("click",function(){
        enote.currentTime = 0;
        enote.play();
    });
    
    $("#f").on("click",function(){
        fnote.currentTime = 0;
        fnote.play();
    });
    
    $("#g").on("click",function(){
        gnote.currentTime = 0;
        gnote.play();
    });
    
    $("#a").on("click",function(){
        anote.currentTime = 0;
        anote.play();
    });
    
    $("#b").on("click",function(){
        bnote.currentTime = 0;
        bnote.play();
    });
    
});