/* Remember the tip calculator challenge? Let's create a more advance version.
  This time, JOhn and his family went to 5 different restaurants. The bills
  were $124, $48, $268, $180 and $42.
  John likes to tip 20% of the bill when the bill is less than $50, 
  15% when the bill is between $50 and $200, and 10% 
  if the bill is more than $200.

  Implement a tip calcuator using objects and loops:
  1. Create an Object with an array for the bill values.
  2. Add a method to calculate the tip.
  3. This method should include a loop to iterate over 
    all paid bills and do the tips calculation.
  4. As an output, create 1) a new array containing all the tips, 2)an array
    containing final paid amount (bill + tip). 
    
    
EXTRA AFTER FINISHING: MArk's family also went on a holiday, 
  going to 4 different restaurants. The bills were $77, $375, $110 and $45.
  Mark likes to tip 20% of the bill when the bill is less than $100, 
  10% when the bill is between $100 and $300, and 25% when the bill is more thn $300. 

  5. Implement the same functionality as befor, ths time usingmark's tipping rules.
  6. Create a function (not a method) to calculate average of a given array of tips.
  HINT: loop over the array,and in each iteration store the current sum 
  in a variable (starting from 0). After you have the sum of the array, 
  divide it by the number of the elements in it (that's how to calculate the average)
  7. Calculate the average tip for each family.
  8. Log to the console which of the family paid the highest tips on average.
  
  GOOD LUCK
*/

var John = {
    fullName: 'John Billy',
    bill : [124, 48, 268, 180, 42],
    calcuTip : function (){
      this.tips = [];
      this.finalbills = [];
        for(var i = 0; i < this.bill.length; i++){
          var tip;

          if(this.bill[i] < 50){
             tip = 0.2 * this.bill[i];
          }else if(this.bill[i] >= 50 && this.bill[i] <= 200){
            tip = 0.15 * this.bill[i];
          }else if(this.bill[i]>200){
            tip = 0.1 * this.bill[i];
          }else{
            console.log('There is no bill');
          }

          this.tips[i] = tip;
          this.finalbills[i] = tip + this.bill[i];

        }
    }
};

var Mark = {
    fullName : 'Mark Smith',
    bill : [77, 375, 110, 45],
    calcuTip : function(){

      this.tips = [];
      this.finalbills = [];

      for(var i = 0; i < this.bill.length; i++){

        if(this.bill[i] < 100){
          tip = 0.2 * this.bill[i];
        }else if(this.bill[i] >= 100 && this.bill[i] <= 300){
          tip = 0.1 * this.bill[i];
        }else{
          tip = 0.25 * this.bill[i];
        }

        this.tips[i] = tip;
        this.finalbills[i] = tip + this.bill[i];
      }

    }
};

function calcuAverage(tips){
  sum = 0;
for(var i = 0; i < tips.length; i++){
   sum = sum + tips[i];    
}
    return sum / tips.length;
};


John.calcuTip();
Mark.calcuTip();
John.Average = calcuAverage(John.tips);
Mark.Average = calcuAverage(Mark.tips);
console.log(John, Mark);

if (John.Average > Mark.Average){
  console.log('John\'s family has paid the highest tip on average with a value of ' + John.Average)
}else{
  console.log('Mark\'s family has paid the highest tip on average with a value of ' + Mark.Average)
}

