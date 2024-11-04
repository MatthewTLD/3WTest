import { Collection } from "../framework/Collection";
import { View } from "../framework/views/view";
import { ViewCollection } from "../framework/views/ViewCollection";
import { User, UserProps } from "./User";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";
import { UserShow } from "./UserShow";

export class UserEdit extends ViewCollection<Collection<User, UserProps>, UserProps> {

    regionsMap(): { [key: string]: string; } {
        return {
            userList: '.user-list',
            userShow: '.user-show',
            userForm: '.user-form'
        }
    }
    template(): string {
        return `
            <div>
                <div class="user-list"></div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `
    }

    onRender(): void {
        new UserList(this.regions.userList, this.collection).render()
        // new UserShow(this.regions.userShow, this.model).render()
        // new UserForm(this.regions.userForm, this.model).render()
    }
}