class Form{

    constructor(){
        this.input = createInput("Enter your nickname...",'');
        this.button = createButton("Enter Lobby");
        this.greeting = createElement('h2');
        this.title = createElement('h2');
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
        this.title.html("");

        this.input.position(width/2,height/2);
        this.input.size(600,70);
        this.input.style('fontSize','50px')

        this.button.position(width/2+50,height/2+100);
        this.button.size(500,100);
        this.button.style('fontSize','50px')
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            //playerName = this.input.value();
            playerCount+=1;
            console.log(playerCount);
            player.name = this.input.value();
            player.updateCount(playerCount);
            this.greeting.html("Hey "+player.name);
            this.greeting.position(height/2,width/2);
        })


    }
}