const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = formulario.querySelector('input[type="text"]').value;
    const telefono = formulario.querySelector('input[type="tel"]').value;
    const mensaje = formulario.querySelector("textarea").value;

    const texto = `Hola, soy ${nombre}.
Mi teléfono es: ${telefono}.
Necesito información sobre: ${mensaje}`;

    const url =
        "https://wa.me/50761419325?text=" +
        encodeURIComponent(texto);

    window.open(url, "_blank");
});
