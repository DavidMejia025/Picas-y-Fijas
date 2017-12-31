// Initial value

//var Target = Math.floor(Math.random()*9999);
var numbers = [0,1, 2, 3, 4,5,6,7,8,9];

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


var Target = shuffle(numbers).slice(0,4);

console.log(Target)


$("input").on("keyup", function(e){
	if (e.which ===13){
		var shoot =	$(this).val();
		validation = false;
		if(shoot.length<4 || shoot.length>4){
			var validation = true;
			$(".user").addClass("has-error")
		}
		if(validation==false){
			$(".user").removeClass("has-error")
			round = calculation (Target, num_to_array(shoot));
			$('table tr:first').after(`<tr><td>${shoot}</td><td>${round[0].length}</td><td>${round[1].length}</td></tr>`)
		}
	}
})

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
	return [picas, fijas]

}