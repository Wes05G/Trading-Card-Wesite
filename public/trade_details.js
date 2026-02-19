
        const params = new URLSearchParams(window.location.search);
        const cardName = params.get('name');
        const cardGrade = params.get('grade');
        const cardPrice = params.get('price');
        const cardImage = params.get('image');
        const cardStatus = params.get('status');

        document.getElementById('cardImage').src = cardImage ? 'Images/' + cardImage : '';
        document.getElementById('cardName').textContent = cardName || 'Card Name';
        document.getElementById('cardGrade').textContent = 'PSA Grade: ' + (cardGrade || 'N/A');
        document.getElementById('cardPrice').textContent = 'Price: $' + (cardPrice || '0.00');
        document.getElementById('status').textContent = 'Status: ' + (cardStatus || 'Available');
