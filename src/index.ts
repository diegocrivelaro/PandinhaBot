import { join } from "path";
import { ExtendedClient } from "./structs/ExtendedClient";
import { readdirSync } from "fs";

const client = new ExtendedClient();

const handlersDir = join(__dirname, "./handlers");
readdirSync(handlersDir).forEach((file) => {
  return require(`${handlersDir}/${file}`)(client);
});

client.start();
