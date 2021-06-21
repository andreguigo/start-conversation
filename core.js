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
		return statusBox(`Insert phone number`);
	
	return window.location.href = createLink();
}

function copyLink() {
	if (!phone.value)
		return statusBox(`Insert phone number`);

	let copy = createLink();
	let textarea = document.createElement('textarea');
	textarea.value = copy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();

	statusBox(`Copied link to clipboard`);
}

function statusBox(text) {
	closeStatusBox();

	let statusBox = document.createElement('div');
	statusBox.setAttribute('class', 'statusBox');
	statusBox.setAttribute('onclick', 'closeStatusBox()');
	
	statusBox.innerText = `${text}`;

	return document.body.appendChild(statusBox);
}

function closeStatusBox() {
	let node = document.querySelector('div.statusBox');
	if (node)
		return node.parentNode.removeChild(node);
}