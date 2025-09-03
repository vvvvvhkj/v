// 📦 استدعاء المكتبات باستخدام import بدلاً من require
import TelegramBot from "npm:node-telegram-bot-api";
import express from "npm:express";

// 🔐 ضع توكن البوت هنا
const token = "7940785003:AAFrQmMWNRl8IY-bNDy-i3reIzfr7dXiM60"; // ← استبدله بتوكن البوت

// 🛰️ إنشاء البوت (بنمط الاستطلاع polling)
const bot = new TelegramBot(token, { polling: true });

// 📬 عندما يستقبل البوت رسالة
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // رد بسيط
  if (text === "/start") {
    bot.sendMessage(chatId, "أهلاً! أنا شغال 24/7 😉");
  } else {
    bot.sendMessage(chatId, `أرسلت: ${text}`);
  }
});

// 🌐 إعداد سيرفر Express للحفاظ على النشاط (keep alive)
const app = express();
app.get("/", (req, res) => {
  res.send("✅ البوت شغال!");
});

const PORT = Deno.env.get("PORT") || 4000;
app.listen(PORT, () => {
  console.log(`🚀 السيرفر يعمل على المنفذ ${PORT}`);
});
