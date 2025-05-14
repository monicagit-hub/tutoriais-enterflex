  function filtrarDocumentos() {
    const input = document.getElementById("filtro");
    const filtro = input.value.toLowerCase();
    const itens = document.querySelectorAll("ul li");

    itens.forEach((item) => {
      const texto = item.textContent.toLowerCase();
      item.style.display = texto.includes(filtro) ? "" : "none";
    });
  }

