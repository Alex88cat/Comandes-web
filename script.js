document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('orderForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const totalField = document.getElementById('total');

    const PRICES = {
        camiseta: 15,
        mascota: 8,
        llavero: 3,
        otro: 1
    };

    function calculateTotal() {
        const camisetaS = parseInt(document.getElementById('camisetaS').value, 10) || 0;
        const camisetaM = parseInt(document.getElementById('camisetaM').value, 10) || 0;
        const camisetaXL = parseInt(document.getElementById('camisetaXL').value, 10) || 0;
        const mascota = parseInt(document.getElementById('mascota').value, 10) || 0;
        const llavero = parseInt(document.getElementById('llavero').value, 10) || 0;
        const otro = parseInt(document.getElementById('otro').value, 10) || 0;

        const total = (camisetaS + camisetaM + camisetaXL) * PRICES.camiseta +
                      mascota * PRICES.mascota +
                      llavero * PRICES.llavero +
                      otro * PRICES.otro;

        totalField.value = `${total}€`;
    }

    function getFormData() {
        const camisetaS = document.getElementById('camisetaS').value;
        const camisetaM = document.getElementById('camisetaM').value;
        const camisetaXL = document.getElementById('camisetaXL').value;
        const mascota = document.getElementById('mascota').value;
        const llavero = document.getElementById('llavero').value;
        const otro = document.getElementById('otro').value;
        const email = document.getElementById('email').value;

        return {
            camisetaS: parseInt(camisetaS, 10) || 0,
            camisetaM: parseInt(camisetaM, 10) || 0,
            camisetaXL: parseInt(camisetaXL, 10) || 0,
            mascota: parseInt(mascota, 10) || 0,
            llavero: parseInt(llavero, 10) || 0,
            otro: parseInt(otro, 10) || 0,
            email: email,
            total: totalField.value
        };
    }

    form.addEventListener('input', calculateTotal);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = getFormData();

        if (formData.email && (formData.camisetaS > 0 || formData.camisetaM > 0 || formData.camisetaXL > 0 || formData.mascota > 0 || formData.llavero > 0 || formData.otro > 0)) {
            fetch('/api/pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.text())
            .then(data => {
                confirmationMessage.textContent = '¡Pedido enviado exitosamente!';
            })
            .catch(error => {
                confirmationMessage.textContent = 'Hubo un error al enviar el pedido.';
                console.error('Error:', error);
            });
        } else {
            confirmationMessage.textContent = 'Por favor, completa todos los campos correctamente.';
        }
    });

    calculateTotal();
});

