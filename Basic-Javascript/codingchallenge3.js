/*
Let's remember the first coding challenge where Mark and John 
compared their BMI's. Let's now implement the same functionality
with objects and methods.
1. For each of them, create an Object with properties for 
their fullname, mass and height.
2. Then, add a method to each object to calculate the BMI. 
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI. 
Don't forget they might have the same BMI.

*/

var Mark = {
  fullName : 'Mark David',
  mass : 56, //kg
  height : 9, //m
  BMI : function (){
    this.markBMI = this.mass / (this.height * this.height);
    return this.markBMI;
  }
};


console.log(Mark)

var John = {
  fullName : 'John Smith',
  mass : 45, //kg
  height : 12, //m
  BMI : function (){
    this.johnBMI = this.mass / (this.height * this.height);
    return this.johnBMI;
  }
};


console.log(John);

if (John.BMI() > Mark.BMI()){
  console.log(John.fullName + ' has the highest BMI with a value of ' + John.johnBMI);
}else if(Mark.markBMI > John.johnBMI){
  console.log(Mark.fullName + ' has the highest BMI with a value of ' + Mark.markBMI);
}else{
  console.log('They have the same BMI');
};

