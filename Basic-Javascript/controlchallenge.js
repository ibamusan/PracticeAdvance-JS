/* CODING CHALLENGE
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and
123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average(highest average score), and print the 
winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. HINT: you will need 
the && operator to tae the decision. If you can't solve this one, 
just watch the solution, its no problem :)

5. Like before, change the scores to generate different winners, 
keeping in mind there might be draws.

GOOD LUCK
*/ 

var john_firstScore = 89;
var john_secondScore = 120;
var john_thirdScore = 103;
var john_avr_score = (john_firstScore + john_secondScore + john_thirdScore)/3;
console.log('John\'s Team average score is ' + john_avr_score);

var mike_firstScore = 116;
var mike_secondScore = 94;
var mike_thirdScore = 123;
var mike_avr_score = (mike_firstScore + mike_secondScore + mike_thirdScore)/3;
console.log('Mike\'s Team average score is ' + mike_avr_score)

if (john_avr_score > mike_avr_score){
  console.log('The Winner is John\'s Team with a Score of ' + john_avr_score);  
}else{
  console.log('The Winner is Mike\'s Team with a Score of ' + mike_avr_score)
}

var mary_firstScore = 97;
var mary_secondScore = 134;
var mary_thirdScore = 105;
var mary_avr_score = (mary_firstScore + mary_secondScore + mary_thirdScore)/3;
console.log('Mary\'s Team average score is ' + mary_avr_score)

if (mike_avr_score > (john_avr_score && mary_avr_score)){
  console.log('The Winner is Mike\'s Team with a Score of ' + mike_avr_score);
}else if(john_avr_score > (mike_avr_score && mary_avr_score)){
  console.log('The Winner is John\'s Team with a Score of ' + john_avr_score);
}else if(mary_avr_score > (john_avr_score && mike_avr_score)){
  console.log('The Winner is Mary\'s Team with a Score of ' + mary_avr_score);
}else if(john_avr_score === mike_avr_score===mary_avr_score){
  console.log('The game ended in DRAW');
}else{
  console.log('There is no GAME')
}
