require("dotenv").config();

const app = require("express")();
const Discord = require("discord.js");

const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN);

client.on("message", async (message) => {
  if (message.channel.type === "dm") {
    try {
      const { content } = message;
      const channel = client.channels.cache.find(
        (c) => c.id === process.env.DISCORD_CHANNEL
      );
      channel.send(content);
    } catch (error) {
      console.log(error);
    }
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 3000}`);
});
