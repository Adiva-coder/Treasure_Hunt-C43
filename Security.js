class Security {

    constructor(){

        this.access1 = createInput("").attribute("placeholder", "Answer")
        this.access1.position(100,145);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,175);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("").attribute("placeholder", "Answer")
        this.access2.position(700,215);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,245);
        this.button2.style('background', 'lightgrey');
        
        //add code for creating and positioning the third input box and button
        this.access3 = createInput("").attribute("placeholder", "Answer")
        this.access3.position(100,365);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,395);
        this.button3.style('background', 'lightgrey');

        this.retry1 = createElement('h1');
        this.retry1.html("Oops! Try Again");
        this.retry1.style('color', 'red');
        this.retry1.style('font-family', 'arial');
        this.retry1.style('font-size', '25px');
        this.retry1.position(100, 20);
        this.retry1.hide();

        this.yay1 = createElement('h1');
        this.yay1.html("Yay! 1st puzzle done!!");
        this.yay1.style('color', 'yellow');
        this.yay1.style('font-family', 'arial');
        this.yay1.style('font-size', '40px');
        this.yay1.position(100, 150);
        this.yay1.hide();

        this.retry2 = createElement('h1');
        this.retry2.html("Oops! Try Again");
        this.retry2.style('color', 'red');
        this.retry2.style('font-family', 'arial');
        this.retry2.style('font-size', '25px');
        this.retry2.position(700, 90);
        this.retry2.hide();

        this.yay2 = createElement('h1');
        this.yay2.html("Yay! 2nd puzzle done!!");
        this.yay2.style('color', 'yellow');
        this.yay2.style('font-family', 'arial');
        this.yay2.style('font-size', '40px');
        this.yay2.position(550, 260);
        this.yay2.hide();

        this.retry3 = createElement('h1');
        this.retry3.html("Oops! Try Again");
        this.retry3.style('color', 'red');
        this.retry3.style('font-family', 'arial');
        this.retry3.style('font-size', '25px');
        this.retry3.position(100, 240);
        this.retry3.hide();

        this.yay3 = createElement('h1');
        this.yay3.html("Yay! 3rd puzzle done!!");
        this.yay3.style('color', 'yellow');
        this.yay3.style('font-family', 'arial');
        this.yay3.style('font-size', '40px');
        this.yay3.position(100, 350);
        this.yay3.hide();

    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
                this.retry1.hide();
                this.yay2.hide();
                this.yay3.hide();
                this.yay1.show();
            }

            else{
                this.retry1.show();
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
                this.yay1.hide();
                this.yay3.hide();
                this.retry2.hide();
                this.yay2.show();
            }

            else{
                this.retry2.show();
            }
        });

        //add code for what happens when the third button is pressed
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
                this.yay1.hide();
                this.yay2.hide();
                this.retry3.hide();
                this.yay3.show();
            }

            else{
                this.retry3.show();
            }
        });

    }
}