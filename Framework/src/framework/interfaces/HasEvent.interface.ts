import { CallBack } from "./Event.interface";

export interface HasEvent {
    on(eventName: string, callback: CallBack): void
}