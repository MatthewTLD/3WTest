
export class Attributes<P extends Object> {
    constructor(private _data: P) { }

    get = <K extends keyof P>(key: K): P[K] => {
        return this._data[key]
    }

    
    set(update: Partial<P>) {
        Object.assign(this._data, update)
    }

    getAllProps(): P {
        return this._data
    }


}
