class Security {

    constructor(){
        this.variableCode = createInput();
        this.functionCode = createInput();
        this.databaseCode = createInput();

        this.varConfirmButton = createButton("confirm");
        this.dataConfirmButton = createButton("confirm");
        this.funcConfirmButton = createButton("confirm"); 
    }

    display(){
        this.variableCode.position(width-1265,height-575);
        this.varConfirmButton.position(width-1265,height-540);

        this.functionCode.position(width/2,height-575);
        this.funcConfirmButton.position(width/2,height-545);

        this.databaseCode.position(width-1265,height-325);
        this.dataConfirmButton.position(width-1265,height-290);

        this.varConfirmButton.mousePressed(()=>{
            this.variableCode.hide();
            this.varConfirmButton.hide();
            securityCode1 = this.variableCode.value();
            System.check();    
        });

        if(securityCode1 == "variable"){
            text("Approved",width-1265,height-540);
        }     
        if(securityCode2 == "database"){
            text("Approved",width-1265,height-290);
        }    
        if(securityCode3 == "function"){
            text("Approved",width/2,height-545);
        }

        this.dataConfirmButton.mousePressed(()=>{
            this.databaseCode.hide();
            this.dataConfirmButton.hide();
            securityCode2 = this.databaseCode.value();
            System.check();
        });

        this.funcConfirmButton.mousePressed(()=>{
            this.functionCode.hide();
            this.funcConfirmButton.hide();
            securityCode3 = this.functionCode.value();
            System.check();
        });
    }
}