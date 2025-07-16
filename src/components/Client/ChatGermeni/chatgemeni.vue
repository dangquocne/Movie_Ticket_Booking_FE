<template>
  <div class="chat-container">
    <div
      v-for="(msg, idx) in messages"
      :key="idx"
      class="bubble"
      :class="msg.role"
    >
      <div class="bubble-content">
        <span>{{ msg.content }}</span>
      </div>
    </div>

    <div class="input-container">
      <input v-model="input" @keyup.enter="sendMessage" placeholder="Nhập câu hỏi..." />
      <button @click="sendMessage">Gửi</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      messages: []
    };
  },
  methods: {
    async sendMessage() {
      if (!this.input.trim()) return;

      const userMsg = { role: "user", content: this.input };
      this.messages.push(userMsg);

      const reply = await this.callGeminiAPI(this.input);
      const botMsg = { role: "bot", content: reply };
      this.messages.push(botMsg);

      this.input = "";
    },

    async callGeminiAPI(text) {
      const API_KEY = "AIzaSyBoJIB7xIHrxVCw6dd8Zv_eJHSe67lmoQM";

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text }]
              }
            ]
          })
        }
      );

      const data = await response.json();
      return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Xin lỗi, Gemini không phản hồi."
      );
    }
  }
};
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 10px;
  font-family: 'Arial', sans-serif;
}

.bubble {
  display: flex;
  margin: 8px 0;
}

.bubble.user {
  justify-content: flex-end;
}

.bubble.bot {
  justify-content: flex-start;
}

.bubble-content {
  padding: 10px 14px;
  border-radius: 16px;
  max-width: 70%;
  word-wrap: break-word;
  font-size: 14px;
}

.user .bubble-content {
  background-color: #d1e7ff;
  color: #000;
  border-bottom-right-radius: 0;
}

.bot .bubble-content {
  background-color: #e6ffe6;
  color: #000;
  border-bottom-left-radius: 0;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
}

button {
  padding: 10px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>