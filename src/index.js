function ready() {
	let intros = [
		document.querySelector('#intro1'), 
		document.querySelector('#intro2'),
		document.querySelector('#intro3')]
	let introsInd = intros.length-1;
	setInterval(()=>{
		if(introsInd == 0) {
			introsInd = intros.length-1
			intros.map(el=>el.className = 'intro__slider-img')
		}
		else {
			intros[introsInd].className = 'intro__slider-imgDisappear'
			introsInd--
		}
	}, 3000)
}
document.addEventListener('DOMContentLoaded', ready)