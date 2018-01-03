// Initial value

//var Target = Math.floor(Math.random()*9999);
var numbers = [0,1, 2, 3, 4,5,6,7,8,9];

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var Target = shuffle(numbers).slice(0,4);

while(fail(Target)){
	Target = shuffle(numbers).slice(0,4);
}

console.log(Target)


$("input").on("keyup", function(e){
	if (e.which ===13){
		
		var shoot =	$(this).val();

		if(shoot.length<4 || shoot.length>4||fail(shoot)){
			var validation = true;
			$(".user").addClass("has-error")
			$("#text0").hide();
			$("#text1").show();
		}else{
			$(".user").removeClass("has-error")
			$("#text").css("color","black","font-weight","bold")
			$("#text0").show();
			$("#text1").hide();
			round = calculation (Target, num_to_array(shoot));
			print_html(shoot,round);
			console.log(round[2]);
			if (round[2] == true){
				win_game();
			}
		}
	}
})

function fail(input){
	var value = false;
	if(input[0]==input[1]||input[0]==input[2]||input[0]==input[3]){
		value = true;
	}else if (input[1]==input[2]||input[1]==input[3]) {
		value = true;
	}else if(input[2]==input[3]){
		value = true;
	}else{
		value = false;
	}
	return value;
}

function win_game(){
	$(".option").addClass("scale")
	$(".option").show()
	return true;
}
function print_html(shoot, round){
	$('table tr:first').after(`<tr><td>${shoot}</td><td>${round[0].length}</td><td>${round[1].length}</td></tr>`)
}
function num_to_array(number){
	index = 0;
	array = [];
	while (index <4){
		array[index] = number%10;
		number = Math.floor(number/10);
		index +=1
	}
	return array.reverse();
}

function calculation (target, shoot){
	picas = [];
	fijas = [];
	p = 0;
	f = 0;
	winner = false;
	for (var i = 0; i<4;i++)
		for (var j = 0; j<4;j++)
			if (target [i] === shoot[j]){
				if (i === j){
					fijas[f] = shoot[j]
					f +=1;
				}else{
					picas[p] = shoot[j];
					p += 1;
				}
			}
	if(fijas.length==4){
		winner = true;
	}
	return [picas, fijas, winner]
}