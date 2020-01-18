var John = {
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

John.calcuTip();
console.log(John);