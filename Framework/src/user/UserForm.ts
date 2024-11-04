import { View } from "../framework/views/view"
import { User, UserProps } from "./User"

export class UserForm extends View<User, UserProps> {

    template() {
        return `
            <div>
                <h1>User Form</h1>
                <input />
                <button class="set-name">Update Name</button>
                <button class="set-age">Randome Age</button>
                <button class="save-model">Save User</button>
            </div>
        `
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onUpdateNameClick,
            'click:.save-model': this.onSaveClick,
        }
    }

    onSetAgeClick = () => {
        this.model.setRandomAge()
    }

    onUpdateNameClick = () => {
        const input = this.parent.querySelector('input')
        this.model.set({ name: input!.value })
    }

    onSaveClick = () => {
        this.model.save()
    }
}