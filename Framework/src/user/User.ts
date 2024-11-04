import { Model } from "../framework/model/Model"
import { HasId } from "../framework/interfaces/HasId.interface"
import { ApiSync } from "../framework/ApiSync"
import { Attributes } from "../framework/Attributes"
import { Eventing } from "../framework/Eventing"
import { Collection } from "../framework/Collection"

const BaseUrl = 'http://localhost:3001/users'

export interface UserProps extends HasId {
    // id?: string // moved to HasId interface
    name?: string
    age?: number
}

export class User extends Model<UserProps> {
    
    static build(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(BaseUrl)
        )
    }

    static buildCollection() {
        return new Collection<User, UserProps>(BaseUrl, (json: UserProps) => User.build(json))
    }

    setRandomAge(){
        const age = Math.round(Math.random() * 99 +1)
        this.set({age})
        // console.log('Random Age Set!')
    }
}