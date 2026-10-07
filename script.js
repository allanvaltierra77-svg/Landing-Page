// JV Essence · NFC Digital Card
// Aquí podremos agregar después animaciones, catálogo dinámico y efectos 3D.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (navigator.vibrate) navigator.vibrate(20);
    });
  });
});
