document.querySelector('[start]').addEventListener('click', chatStart);
document.querySelector('[copy]').addEventListener('click', copyLink);

const phone = document.querySelector('[phone]');
const message = document.querySelector('[message]');

let url_api = `https://api.whatsapp.com/send?phone=+55`

function createLink() {
    if (!message.value)
        return `${url_api}${phone.value.trim()}`;

    return `${url_api}${phone.value.trim()}&text=${message.value.trim()}`;
}

function chatStart() {
    if (!phone.value)
        return alert(`Enter phone number`);

    return window.location.href = createLink();
}

function copyLink() {
    if (!phone.value)
        return alert(`Enter phone number`);

    let copy = createLink();
    let textarea = document.createElement('textarea');
    textarea.value = copy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    alert(`Copied to clipboard`);
}