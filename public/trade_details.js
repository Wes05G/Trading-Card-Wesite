const params = new URLSearchParams(window.location.search);

const cardName = params.get('name');
const cardGrade = params.get('grade');
const cardPrice = params.get('price');
const cardImage = params.get('image');
const cardStatus = params.get('status');
const owner = params.get('owner');

const imgEl = document.getElementById('cardImage');
if (cardImage) {
  imgEl.src = cardImage.startsWith('/') ? cardImage : '/Images/' + cardImage;
} else {
  imgEl.src = '';
}

document.getElementById('cardName').textContent = cardName || 'Card Name';
document.getElementById('cardGrade').textContent = 'PSA Grade: ' + (cardGrade || 'N/A');
document.getElementById('price').textContent = 'Price: $' + (cardPrice || '0.00');
document.getElementById('status').textContent = 'Status: ' + (cardStatus || 'Available');

const ownerEl = document.getElementById('owner');
if (ownerEl) ownerEl.textContent = 'Owner: ' + (owner || 'N/A');