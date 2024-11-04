export interface IAttributes<P> {
    get: <K extends keyof P>(key: K) => P[K]
    set: (update: Partial<P>) => void
    getAllProps: () => P
}
