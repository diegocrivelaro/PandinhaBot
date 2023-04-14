import {
  CommandInteraction,
  CommandInteractionOptionResolver,
} from "discord.js";
import { ExtendedClient } from "@structs/ExtendedClient";

export interface CommandProps {
  client: ExtendedClient;
  interaction: CommandInteraction;
  options: CommandInteractionOptionResolver;
}
