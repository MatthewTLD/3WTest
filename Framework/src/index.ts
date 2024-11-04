import { Collection } from "./framework/Collection";
import { User, UserProps } from "./user/User";
import { UserEdit } from "./user/UserEdit";
import { UserForm } from "./user/UserForm";
import { UserShow } from "./user/UserShow";

const collection = User.buildCollection()
collection.fetch()


const jhon = User.build({id: "sg89"})
jhon.fetch()


const rootElement = document.getElementById('root')

const Matthew = User.build({name: 'Matthew', age: 20})

if (rootElement){
 
    const userEdit = new UserEdit(rootElement, collection)
    userEdit.render()
    

}