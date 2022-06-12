const text = document.querySelector('.text');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
recognition.addEventListener('result', (e) => {
	const texts = Array.from(e.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('');
	p.innerText = texts
	text.appendChild(p)
	if (e.results[0].isFinal) {
		if (texts.includes('what is your name')) {
			p.document.createElement('p')
			p.classList.add('replay');
			p.innerText = 'my name is manjunath roy'
			text.appendChild(p)
		}
		p.document.createElement('p')
	}
	console.log(texts)

})

recognition.addEventListener('end', () => {
	recognition.start();
})

recognition.start();
