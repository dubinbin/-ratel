export class Store {
    private componentsGroup: Map<string, string[]>
    private componentsQueue: Map<string, any>
    constructor() {
       this.componentsGroup = new Map() 
       this.componentsQueue = new Map()
    }

    public addComponentToGroup(group_name: string, groupComponents: string[]): void { // 组件加入组件群
        if (!this.componentsGroup.has(group_name)) {
            this.componentsGroup.set(group_name, [])
        }

        const getGroup = this.componentsGroup.get(group_name) as string[]
        this.componentsGroup.set(
            group_name,
            ([] as string[]).concat(getGroup, Array.isArray(groupComponents) ? groupComponents : [groupComponents])
        )
    }

    public registerComponent(name: string, comp: any) { // 注册
        comp.originName = name
        this.componentsQueue.set(name, comp)
    }

    public get(name: string) { // 获取组件
        return this.componentsQueue.get(name)
    }

    public getAllGroups() {
        return Array.from(this.componentsGroup.keys())
    }

    public getAllComponents() {
        return Array.from(this.componentsQueue.keys())
    }

    public getObjects(names = [] as string[]) {
        return names.length
      ? names.map(this.get.bind(this))
      : Array.from(this.componentsQueue.values())
    }

    public getObjFromGroup(group: string) {
        const group_map = this.componentsGroup.get(group)
        return this.getObjects(group_map)
    }
}