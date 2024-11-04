import axios from "axios"
import { HasId } from "./interfaces/HasId.interface"

export class ApiSync<P extends HasId> {

    constructor(
        public url: string
    ) { }

    fetchAll() {
        return axios.get(this.url)
    }

    fetch(id: string) {
        return axios.get(`${this.url}/${id}`)
    }

    save(data: P) {
        const { id } = data
        if (id) return axios.patch(`${this.url}/${id}`, data)
        return axios.post(this.url, data)
    }
}