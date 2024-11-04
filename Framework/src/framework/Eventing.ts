import { CallBack } from "./interfaces/Event.interface"


export class Eventing {
    events: { [key: string]: CallBack[] } = {}

    
    on = (eventName: string, callBack: CallBack) => {
        const listener = this.events[eventName] || []
        listener.push(callBack)
        this.events[eventName] = listener
    }

   
    trigger = (eventName: string) => {
        const listener = this.events[eventName]
        if (!listener || listener.length === 0) return;
        listener.forEach(callBack => {
            callBack()
        })
    }
}