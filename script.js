@@ -26,6 +26,30 @@ document.addEventListener("DOMContentLoaded", function() {
        totalField.value = `${total}€`;
    }

    function generateEmailBody() {
        const camisetaS = document.getElementById('camisetaS').value;
        const camisetaM = document.getElementById('camisetaM').value;
        const camisetaXL = document.getElementById('camisetaXL').value;
        const mascota = document.getElementById('mascota').value;
        const llavero = document.getElementById('llavero').value;
        const otro = document.getElementById('otro').value;
        const email = document.getElementById('email').value;

        let body = `Pedido de productos:\n\n`;

        if (camisetaS > 0) body += `Camisetas (Talla S): ${camisetaS}\n`;
        if (camisetaM > 0) body += `Camisetas (Talla M): ${camisetaM}\n`;
        if (camisetaXL > 0) body += `Camisetas (Talla XL): ${camisetaXL}\n`;
        if (mascota > 0) body += `Mascotas Negreta: ${mascota}\n`;
        if (llavero > 0) body += `Llaveros: ${llavero}\n`;
        if (otro > 0) body += `Otros: ${otro}\n`;

        body += `\nTotal: ${totalField.value}\n`;
        body += `Email del cliente: ${email}`;

        return body;
    }

    form.addEventListener('input', calculateTotal);

    form.addEventListener('submit', function(event) {
@@ -39,7 +63,7 @@ document.addEventListener("DOMContentLoaded", function() {
        const otro = document.getElementById('otro').value;
        const email = document.getElementById('email').value;

        if (email && (camisetaS => 0 || camisetaM => 0 || camisetaXL => 0 || mascota => 0 || llavero => 0 || otro => 0)) {
        if (email && (camisetaS > 0 || camisetaM > 0 || camisetaXL > 0 || mascota > 0 || llavero > 0 || otro > 0)) {
            const subject = 'Pedido de Productos';
            const body = generateEmailBody();
            window.location.href = `mailto:alexexposito88@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } else {
            confirmationMessage.textContent = 'Por favor, completa todos los campos correctamente.';
        }
    });
    calculateTotal();
});
