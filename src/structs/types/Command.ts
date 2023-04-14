import { CommandComponentsProps } from "@/interfaces/CommandComponentsProps";
import { CommandProps } from "@/interfaces/CommandProps";
import {
  ApplicationCommandData,
  ButtonInteraction,
  Collection,
  ModalSubmitInteraction,
  StringSelectMenuInteraction,
} from "discord.js";

export type ComponentsButton = Collection<
  string,
  (interaction: ButtonInteraction) => any
>;

export type ComponentsSelectMenu = Collection<
  string,
  (interaction: StringSelectMenuInteraction) => any
>;

export type ComponentsModal = Collection<
  string,
  (interaction: ModalSubmitInteraction) => any
>;

export type CommandType = ApplicationCommandData &
  CommandComponentsProps & {
    run(props: CommandProps): any;
  };
