
(function () {
  const API_KEY = "AIzaSyBoJIB7xIHrxVCw6dd8Zv_eJHSe67lmoQM"; // ← Dán API Key ở đây

  const style = document.createElement("style");
  style.textContent = `
    .gemini-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #6333ff;
      color: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      font-size: 24px;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    .gemini-chatbox {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 360px;
      height: 480px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 9999;
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: 'Segoe UI', sans-serif;
    }

    .gemini-header {
      background: #6333ff;
      color: white;
      padding: 12px 16px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .gemini-messages {
      flex: 1;
      padding: 12px;
      overflow-y: auto;
      background: #f0f0f0;
    }

    .gemini-input {
      display: flex;
      border-top: 1px solid #ddd;
    }

    .gemini-input input {
      flex: 1;
      border: none;
      padding: 12px;
      font-size: 14px;
      outline: none;
    }

    .gemini-input button {
      background: #28a745;
      border: none;
      color: white;
      padding: 12px 18px;
      cursor: pointer;
    }

    .gemini-bubble {
      max-width: 75%;
      padding: 10px 14px;
      border-radius: 16px;
      margin-bottom: 10px;
      white-space: pre-wrap;
      line-height: 1.4;
    }

    .gemini-user {
      background: #e3dcff;
      align-self: flex-end;
      margin-left: auto;
      border-bottom-right-radius: 0;
    }

    .gemini-bot {
      background: #d6f5d6;
      align-self: flex-start;
      margin-right: auto;
      border-bottom-left-radius: 0;
    }

    .typing {
      font-style: italic;
      color: gray;
    }
  `;
  document.head.appendChild(style);

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <button class="gemini-button" onclick="toggleGemini()">💬</button>

    <div class="gemini-chatbox" id="gemini-box">
      <div class="gemini-header">
        <span>🤖 OIZOIOI Cinema AI</span>
        <span onclick="toggleGemini()" style="cursor: pointer;">✖</span>
      </div>
      <div class="gemini-messages" id="gemini-log"></div>
      <div class="gemini-input">
        <input id="gemini-input" placeholder="Viết tin nhắn..." />
        <button onclick="sendToGemini()">Gửi</button>
      </div>
    </div>
  `;
  document.body.appendChild(wrapper);

  window.toggleGemini = function () {
    const box = document.getElementById("gemini-box");
    box.style.display = box.style.display === "flex" ? "none" : "flex";
  };

  window.sendToGemini = async function () {
    const input = document.getElementById("gemini-input");
    const log = document.getElementById("gemini-log");
    const text = input.value.trim();
    if (!text) return;

    const userMsg = document.createElement("div");
    userMsg.className = "gemini-bubble gemini-user";
    userMsg.innerText = text;
    log.appendChild(userMsg);

    // Add loading
    const loading = document.createElement("div");
    loading.className = "gemini-bubble gemini-bot typing";
    loading.innerText = "Đang trả lời...";
    log.appendChild(loading);

    input.value = "";
    log.scrollTop = log.scrollHeight;

    try {
      const res = await fetch(
       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text }] }]
          })
        }
      );

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Không phản hồi.";

      log.removeChild(loading);

      const botMsg = document.createElement("div");
      botMsg.className = "gemini-bubble gemini-bot";
      botMsg.innerText = reply;
      log.appendChild(botMsg);
      log.scrollTop = log.scrollHeight;
    } catch (err) {
      log.removeChild(loading);
      const errorMsg = document.createElement("div");
      errorMsg.className = "gemini-bubble gemini-bot";
      errorMsg.innerText = "Lỗi kết nối API. Vui lòng thử lại.";
      log.appendChild(errorMsg);
    }
  };
})();

