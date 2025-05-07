function updateColorShell(){
	setColor(true, false);
	updateDecARGB(true, false);
}

function updateColorDots(){
	setColor(false, false);
	updateDecARGB(false, false);
}

function switchColors(){
	setColor(false, true);
	updateDecARGB(false, true);
}

function updateDecARGB(shell, isSwitch){
	var colorShellDec = document.getElementById('color-shell-dec');
	var colorDotsDec = document.getElementById('color-dots-dec');
	
	if(isSwitch){
		var shellValue = colorDotsDec.innerText;
		var dotsValue = colorShellDec.innerText;
		
		colorShellDec.innerText = shellValue;
		colorDotsDec.innerText = dotsValue;
	} else {
		var color = rgbHexToInt32(getColor(shell));
		if(shell){
			colorShellDec.innerText = color;
		} else {
			colorDotsDec.innerText = color;
		}
	}
}

function setColor(shell, isSwitch){
	var colorPickerShell = document.getElementById('color-shell');
	var colorPickerDots = document.getElementById('color-dots');
	var spawnEggShell = document.getElementById('spawn-egg-shell');
	var spawnEggDots = document.getElementById('spawn-egg-dots');
	
	if(isSwitch){
		var colorShell = getColor(false);
		var colorDots = getColor(true);
		colorPickerShell.value = colorShell;
		colorPickerDots.value = colorDots;
		spawnEggShell.style.setProperty('--clr', colorShell);
		spawnEggDots.style.setProperty('--clr', colorDots);
	} else {
		if(shell){
			var colorShell = getColor(true);
			spawnEggShell.style.setProperty('--clr', colorShell);
		} else {
			var colorDots = getColor(false);
			spawnEggDots.style.setProperty('--clr', colorDots);
		}
	}
}

function getColor(shell){
	var color;
	if(shell){
		var colorPickerShell = document.getElementById('color-shell');
		color = colorPickerShell.value;
	} else {
		var colorPickerDots = document.getElementById('color-dots');
		color = colorPickerDots.value;
	}
	
	return color;
}

function rgbHexToInt32(rgbHex){
	var hex = rgbHex.substr(1);
	var hexARGB = '0xff' + hex;
	
	return parseInt(hexARGB, 16)>>0;
}
