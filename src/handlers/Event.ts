import { join } from "path";
import { readdirSync } from "fs";
import { BotEvent } from "@/interfaces/BotEvent";
import { ExtendedClient } from "@/structs/ExtendedClient";
import colors from "colors";

module.exports = (client: ExtendedClient) => {
  const eventsDir = join(__dirname, "../events");

  readdirSync(eventsDir).forEach((file) => {
    const event: BotEvent = require(`${eventsDir}/${file}`).default;

    event.once
      ? client.once(event.name, (...args) => event.execute(...args))
      : client.on(event.name, (...args) => event.execute(...args));

    console.log(colors.green(`Evento ${event.name} carregado com sucesso!`));
  });
};
