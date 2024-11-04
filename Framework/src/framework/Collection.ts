import axios from "axios"
import { User, UserProps } from "../user/User"
import { Eventing } from "./Eventing"

export class Collection<T, P> {
    models: T[] = []
    event: Eventing = new Eventing()
    constructor(
        public url: string,
        public deserialization: (json: P) => T
    ) { }

    on = this.event.on
    trigger = this.event.trigger

    fetch = (): void => {
        axios.get(this.url).then(response => {
            response.data.forEach((json: P) => {
                const user = this.deserialization(json)
                this.models.push(user)
            })
            this.trigger('change')
        })
    }
}