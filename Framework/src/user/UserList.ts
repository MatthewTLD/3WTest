import { Collection } from "../framework/Collection";
import { View } from "../framework/views/view";
import { ViewCollection } from "../framework/views/ViewCollection";
import { User, UserProps } from "./User";

export class UserList extends ViewCollection<Collection<User, UserProps>, UserProps> {
    template() {
        const usersOptions = this.collection.models
            .map(user => `
                <option value="${user.get('id')}">
                    ${user.get('name')}
                </option>
            `)
            .join('');

        return `
            <div>
                <h1>User List</h1>
                <select class="user-list">
                    <option value="">Select a user</option>
                    ${usersOptions}
                </select>
            </div>
        `;
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'change:.user-list': this.onUserSelect
        };
    }

    onUserSelect = () => {
        const selectElement = this.parent.querySelector('select');
        if (!selectElement) return;
        const selectedUserId = selectElement.value;
        const user = User.build({ id: selectedUserId });
        user.fetch();
        console.log(user);
    };
}
