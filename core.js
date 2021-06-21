document.querySelector('[start]').addEventListener('click', chatStart);
document.querySelector('[copy]').addEventListener('click', copyLink);

const phone = document.querySelector('[phone]');
const message = document.querySelector('[message]');

function createLink() {
	if (!message.value)
		return `https://api.whatsapp.com/send?phone=+55${phone.value.trim()}`;
	
	return `https://api.whatsapp.com/send?phone=+55${phone.value.trim()}&text=${message.value.trim()}`;
}

function chatStart() {
	if (!phone.value)
		return superBox(`Insira um número de telefone`);
	
	return window.location.href = createLink();
}

function copyLink() {
	if (!phone.value)
		return superBox(`Insira um número de telefone`);

	let copy = createLink();
	let textarea = document.createElement('textarea');
	textarea.value = copy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();

	superBox(`Copiado para a área de transferência`);
}

function superBox(text) {
	closeSuperBox();

	let superBox = document.createElement('div');
	superBox.setAttribute('class', 'superBox');
	superBox.setAttribute('onclick', 'closeSuperBox()');

	superBox.innerHTML = `<div class="statusBox"> <p> ${text} </p> </div>`;

	return document.body.appendChild(superBox);
}

function closeSuperBox() {
	let node = document.querySelector('div.superBox');
	if (node)
		return node.parentNode.removeChild(node);
}