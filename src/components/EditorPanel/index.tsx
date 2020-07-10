import React, { useCallback, Component, ComponentClass } from 'react'
import style from './index.module.scss'
import { observer } from 'mobx-react'
import { useStore } from 'store/store'

export const EditorPanel = observer((props: {openRightBoard: () => void}) =>{

    const { editComponent, componentQueue } = useStore()
    const { openRightBoard } = props;

    const clickComp = useCallback((Comp) => {
        openRightBoard()
        editComponent(Comp)
    } , [])

    return (
        <div className={style.MiddleModule}>
            <div className={style.MiddleModuleWrapper}>

                <div className={style.componentWrap}>
                        {componentQueue.map((Comp: {name: string, component: ComponentClass, props: {[key: string]: any}}, index: number) => {
                            const Component = Comp.component
                            return (
                                <div className={style.componentWrapInner} onClick={() => clickComp(Comp)} key={Comp.name}>
                                        <div className={style.componentWrapMask}></div>
                                        <Component {...Comp.props}/>
                                </div>
                            )
                        })}             
                </div>
            </div>
        </div>
    )
})