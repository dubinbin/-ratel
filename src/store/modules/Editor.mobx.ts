import { observable, action } from 'mobx'

export class EditorStore {
    @observable componentQueue = [] as any[]
    @observable currentComponent  = {} as any

    @action
    addComponent = (component: any) => {
       this.componentQueue.push(component)
    }

    @action
    editComponent = (component: any) => {
        this.currentComponent = component
     }
}
