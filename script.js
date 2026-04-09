function enviar() {
  const mensaje = document.getElementById("mensaje").value;

  fetch("https://discord.com/api/webhooks/1490927739690156073/yoagRg_wWuI231hM9hPfDpFLwsAmA9PuLq5jhmfmALncLnRW1mG0sJr8X6NnqcCS03x2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: "📩 Nuevo mensaje: " + mensaje
    })
  })
  .then(() => {
    document.getElementById("status").innerText = "Mensaje enviado!";
  })
  .catch(() => {
    document.getElementById("status").innerText = "Error al enviar.";
  });
}