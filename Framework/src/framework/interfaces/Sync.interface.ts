import { AxiosPromise } from "axios"

export interface ISync<P> {
    fetchAll(): AxiosPromise
    fetch(id: string): AxiosPromise
    save(data: P): AxiosPromise
}