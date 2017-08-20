var takeANumber = (katzDeli, person) =>{
	katzDeli.push(person);
	
	var index = parseFloat(katzDeli.indexOf(person)); 
	var ticket_number = index + 1;

	return "Welcome, " + person + ". You are number " + ticket_number + " in line.";
}

var nowServing = (array) => {
	while (array.length > 0){
		var phrase = "Currently serving " + array[0] + "."
		array.shift();
		return phrase

	}

	return "There is nobody waiting to be served!"
}


var currentLine = (array) => {
	var new_array = new Array()

	if (array.length > 0){
		for (var i = 0; i < array.length; i++){
			var j = i + 1
			var new_value = j+ ". " + array[i]
			new_array.push(new_value)

		}

		var turn_to_string = new_array.join(', ')
		return "The line is currently: " + turn_to_string 
	}
	
	else {return "The line is currently empty."}	
}

//For example, if katzDeliLine is currently ["Ada", "Grace"], 
//currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". 
//"The line is currently empty."
