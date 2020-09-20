import { observable, action } from 'mobx'

export class EditorStore {
    @observable componentQueue = [] as any[]
    @observable currentComponent  = {} as any

    @action
    addComponent = (component: any) => {
       this.componentQueue.push(component)
    }

    @action 
    deleteItemFromQueue = (index: number) => {
      this.componentQueue.splice(index, 1)
    }

    @action
    adjustProcedure = (startIndex: number, destinationIndex: number) => {

         const startItem = this.componentQueue[startIndex]

         if (destinationIndex - startIndex > 1) {  // 上往下
            this.componentQueue.splice(destinationIndex + 1, 0, startItem)
            this.componentQueue.splice(startIndex, 1)

         } else if (startIndex - destinationIndex > 1) { // 下往上
            this.componentQueue.splice(destinationIndex, 0, startItem)
            this.componentQueue.splice(startIndex + 1, 1)
         } else {
            this.componentQueue[startIndex] = this.componentQueue[destinationIndex];
            this.componentQueue[destinationIndex] = startItem
         }
    }

    @action
    getAllComponent = () => {
       return this.componentQueue;
    }

    @action
    editComponent = (component: any) => {
        this.currentComponent = component
     }
}
