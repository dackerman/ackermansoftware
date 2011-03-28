var countdown = {};
countdown.containerId = "countdown";
countdown.backgroundColor = "#55dd55";
countdown.barWidth = 300;
countdown.barHeight = 20;


countdown.CreateCountdown = function(startYear, startMonth, startDay, numDays){
	var millisElapsed = new Date() - new Date(startYear, startMonth - 1, startDay);
	var daysElapsed = millisElapsed / (1000 * 60 * 60 * 24);
	var totalDaysLeft = Math.ceil(numDays - daysElapsed);
	
	var yearsLeft = Math.floor(totalDaysLeft / 365);
	var monthsLeft = Math.floor((totalDaysLeft % 365) / 31);
	var weeksLeft = Math.floor(((totalDaysLeft % 365) % 31) / 7);
	var daysLeft = Math.ceil(((totalDaysLeft % 365) % 31) % 7);
	
	var outerBar = document.createElement("div");
	outerBar.style.border = "1px solid black";
	outerBar.style.borderRadius = "5px";
	outerBar.style.padding = "0px";
	outerBar.style.height = countdown.barHeight + "px";
	outerBar.style.width = countdown.barWidth + "px";
	
	var percentComplete = (numDays - totalDaysLeft) / numDays;
	var bar = document.createElement("div");
	bar.style.backgroundColor = countdown.backgroundColor;
	bar.style.margin = "0px;"
	bar.style.borderRadius = "5px";
	bar.style.height = countdown.barHeight + "px";
	var barWidth = Math.max(Math.floor(countdown.barWidth * percentComplete), 1);
	bar.style.width = barWidth + "px";
	
	var pluralize = function(singular, value){
	    if(value == 1) return singular;
	    else return singular + "s";
	}
	var comma = ", ";
	var text = document.createElement('span');
	text.id = "countdown_text";
	text.innerHTML = yearsLeft + pluralize(" year", yearsLeft) + comma +
	                 monthsLeft + pluralize(" month", monthsLeft) + comma +
	                 weeksLeft + pluralize(" week", weeksLeft) + comma +
	                 daysLeft + pluralize(" day", daysLeft) + " left!";
	
	var element = document.getElementById(countdown.containerId);
	element.innerHTML = ""; //clear
	outerBar.appendChild(bar);
	element.appendChild(outerBar);
	element.appendChild(text);
}