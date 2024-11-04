export type CallBack = () => void

export interface IEvent {
    on(eventName: string, callback: CallBack): void
    trigger(eventName: string): void
}