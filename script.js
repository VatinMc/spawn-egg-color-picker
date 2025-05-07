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
			var color = rgb2int(getColor(shell));
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

function rgb2int(rgbHex){
	var hex = rgbHex.substr(1);
	var hexARGB = 'ff' + hex;
	var binARGB = hex2bin(hexARGB);
	var binARGBflip = flipBits(binARGB);
	var decARGB = parseInt(binARGBflip, 2) + 1;

	return 0 - decARGB;
}

function hex2bin(hex){
	return parseInt(hex,16).toString(2);
}

function flipBits(bin){
	var flipbits = '';
	for(let i = 0; i < bin.length; i++){
		flipbits += bin[i] === '0' ? '1' : '0'
	}
	
	return flipbits;
}
