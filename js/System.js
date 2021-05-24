class System{

    constructor(){}
    
    static check(){
        if(securityCode1 == "variable"){
            locksOpened += 1;
            text("Approved",width-1265,height-540);
            locksOpenSound.play();
        } 

        if(securityCode2 == "database"){
            locksOpened += 1;
            text("Approved",width-1265,height-290);
            locksOpenSound.play();
        }

        if(securityCode3 == "function"){
            locksOpened += 1;
            text("Approved",width/2,height-545);
            locksOpenSound.play();
        }
    }

    static open(){
        if(locksOpened === 6){
            bg = loadImage("treasure.jpg");
            push();
            visibility -= 10
            tint(255,visibility);
            imageMode(CENTER);
            image(bg2,width/2,height/2,width,height);
            textSize(20);
            text("The treasure is all yours!!",width/2,height/2);
            pop();
        }
    }
}