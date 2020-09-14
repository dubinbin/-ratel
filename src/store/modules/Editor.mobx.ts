import { observable, action } from 'mobx'

export class EditorStore {
    @observable componentQueue = [] as any[]
    @observable currentComponent  = {} as any

    @action
    addComponent = (component: any) => {
       this.componentQueue.push(component)
    }

    @action
    adjustProcedure = (startIndex: number, destinationIndex: number) => {
         const temp = this.componentQueue[startIndex];
         this.componentQueue.splice(startIndex, 1, this.componentQueue[destinationIndex])
         this.componentQueue.splice(destinationIndex, 1, temp);
    }

    @action
    editComponent = (component: any) => {
        this.currentComponent = component
     }
}
