import {
  ComponentsButton,
  ComponentsModal,
  ComponentsSelectMenu,
} from "@/structs/types/Command";

export interface CommandComponentsProps {
  buttons?: ComponentsButton;
  selectsMenu?: ComponentsSelectMenu;
  modals?: ComponentsModal;
}
