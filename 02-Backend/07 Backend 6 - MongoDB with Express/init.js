const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(async () => {
    console.log("connection successful");

    const result = await Chat.insertMany(allChats);
    console.log(result);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Arthur Morgan",
    to: "John Marston",
    msg: "Send me the mission details",
    created_at: new Date(),
  },
  {
    from: "Geralt",
    to: "Yennefer",
    msg: "Meet me at the tavern",
    created_at: new Date(),
  },
  {
    from: "Kratos",
    to: "Atreus",
    msg: "Stay close to me",
    created_at: new Date(),
  },
  {
    from: "Jin Sakai",
    to: "Yuna",
    msg: "The Mongols are coming",
    created_at: new Date(),
  },
  {
    from: "V",
    to: "Johnny Silverhand",
    msg: "We need to talk",
    created_at: new Date(),
  },
  {
    from: "Leon Kennedy",
    to: "Ada Wong",
    msg: "Where are you now?",
    created_at: new Date(),
  },
  {
    from: "Sekiro",
    to: "Kuro",
    msg: "I will protect you",
    created_at: new Date(),
  },
];

