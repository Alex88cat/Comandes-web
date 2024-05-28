document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const email = document.getElementById('email').value;

    const subject = `Pedido de ${product}`;
    const body = `Producto: ${product}%0ACantidad: ${quantity}%0AEmail: ${email}`;

    window.location.href = `mailto:alexexposito88@gmail.com?subject=${subject}&body=${body}`;
});
