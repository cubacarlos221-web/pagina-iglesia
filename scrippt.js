document.addEventListener("DOMContentLoaded", () => {
  const oracion = document.getElementById("btn-oracion");
  if (oracion) {
    oracion.addEventListener("click", () => {
      alert("🙏 Gracias por confiar en nosotros. Estaremos orando por ti.");
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado.`);
      form.reset();
    });
  }
});
