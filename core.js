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

	superBox.innerHTML = `<div class="statusBox"> <div class="statusBoxTitle"> ${text} </div> <div class="statusBoxTxt"> OK </div> </div>`;

	return document.body.appendChild(superBox);
}

function closeSuperBox() {
	let closeSuperBox = document.querySelector('div.superBox');
	if (closeSuperBox)
		return closeSuperBox.parentNode.removeChild(closeSuperBox);
}

function mask(o, f) {
	v_obj = o;
	v_fun = f;
	setTimeout(exeMask, 1);
}

function exeMask() {
	v_obj.value = v_fun(v_obj.value);
}

function tel_br(v) {
	v = v.replace(/\D/g, "");
    v = v.replace(/^(\d\d)(\d)/g,"($1) $2");
    v = v.replace(/(\d{5})(\d)/,"$1-$2");
    return v;
}