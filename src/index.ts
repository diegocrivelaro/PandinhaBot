import { ExtendedClient } from "./structs/ExtendedClient";

const client = new ExtendedClient();

client.start();

client.on("ready", () => {
  console.log(`${client.user?.username} online!`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.id !== client.user?.id) {
    msg.reply({
      content: `${client.user?.username}`,
    });
  }
});

export { client };
