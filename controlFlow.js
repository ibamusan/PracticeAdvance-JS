//Ternary Operator.

function experiencePoint(bool) {
	return bool;

}

var winBattle = experiencePoint(true)? "Win" : "Loss";



//This is a Switch Statement.

function moveCommand(direction) {
	var whatHappen;
	switch(direction){
		case "forward":
		whatHappen = "You will meet the Man";
		break;
		case "back":
		whatHappen = "You are moving in the wrong direction";
		break;
		case "right":
		whatHappen = "You will meet the Woman";
		break;
		case "left":
		whatHappen = "You will meet the Boy instead";
		break;
		default:
		whatHappen = "Enter the correct direction";

	}

	return whatHappen;

}