var Tamagotchi = {
	 initialize: function(initName){
		this.name = initName;
		this.foodLevel = 10;
		this.sleepLevel = 10;
		this.activityLevel = 10;
	},
	timePasses: function(){
	 this.foodLevel -= 1;
     this.sleepLevel -= 1;
     this.activityLevel -= 1;
     $("#feed").text(this.foodLevel);
     $("#purple").text(this.activityLevel);
     $("#rest").text(this.sleepLevel);

	 },
	isAlive: function(){
	 if ((this.foodLevel <= 0) || (this.sleepLevel <= 0) || (this.activityLevel <= 0)) {
	 $("#fadeout").fadeOut();
	 $(".petsName").text(this.name);
     $("#you-died").fadeIn();
     }
    else {
      return true;
    }
   }
};



$("document").ready(function(){
  $("#feed").text(10);
  $("#purple").text(10);
  $("#rest").text(10);
  $("#nameSpace").show();

  $("#nameSpace").submit(function(event){

  	var petsName = $("#name").val();
  	var myPet = Object.create(Tamagotchi);
  	myPet.initialize(petsName);
  	if(myPet.name === "hefner"|| myPet.name === "Hefner"){
  		$("#hefner").show();
  	}

  	$("#nameSpace").hide();
   

    setInterval(function(){ myPet.timePasses() }, 1200);
    setInterval(function(){ myPet.isAlive() }, 1200);

    event.preventDefault();

    var condition = myPet.isAlive();


      $("button#food").off('click').on('click',function(){ 
       myPet.foodLevel += 1;
       if(myPet.foodLevel > 10) {
        myPet.foodLevel = 10;
      }
      $("#feed").text(myPet.foodLevel);
    });
   
    $("#play").off('click').on('click',function(){  
      myPet.activityLevel += 1;
      if(myPet.activityLevel >= 10) {
        myPet.activityLevel = 10;
      }
      $("#purple").text(myPet.activityLevel);
    });

    $("#sleep").off('click').on('click',function(){
      myPet.sleepLevel += 1;
      if(myPet.sleepLevel >= 10) {
        myPet.sleepLevel = 10;
      }
      $("#rest").text(myPet.sleepLevel);

    });
	
	

 });
});






