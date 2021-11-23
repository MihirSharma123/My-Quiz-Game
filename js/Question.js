class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2= createInput("enter correct option");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
     this.question=createElement("h3")
     this.options=createElement("h4")
     this.option2=createElement("h4")
     this.option3=createElement("h4")
     this.option4=createElement("h4")
     
     



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
   
    this.question.html("QUESTION:what comes after 2?")
    this.option2.html("1:3")
    this.option3.html("2:4")   
    this.option4.html("3:6")  
    this.options.html("4:9")
    this.message.html("THANK YOU,YOUR RESPONSE HAS BEEN SUBMITTED:)")

    this.input1.position(150,250);
    this.input2.position(350,230);
    this.button.position(500, 300);
    this.question.position(150,100)
    this.option2.position(150,125)
    this.option3.position(150,150)
    this.option4.position(150,175)
    this.options.position(150,200)
    this.message.position(20,350)
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}
