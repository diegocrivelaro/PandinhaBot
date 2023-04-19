export interface BotEvent {
  name: string;
  once?: boolean | false;
  execute: (...args: any) => void;
}
