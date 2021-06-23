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
      channel.send('', {
        embed: {
            title: '',
            description: content,
            color: 16774957
          }
      });
    } catch (error) {
      console.log(error);
    }
  }
});

app.get("/", (request, response) => {
  return response.send({ hello: "World" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 3000}`);
});
