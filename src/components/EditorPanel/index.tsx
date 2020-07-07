import React, { useCallback, Component, ComponentClass } from 'react'
import style from './index.module.scss'
import { inject, observer } from 'mobx-react'
import { EditorStore } from '../../store/modules/Editor.mobx'

export const EditorPanel = inject('EditorStores')(observer((props: {EditorStores: EditorStore, openRightBoard: () => void}) =>{

    const { EditorStores, openRightBoard } = props;

    const clickComp = useCallback((Comp) => {
        openRightBoard()
        EditorStores.editComponent(Comp)
    } , [])

    return (
        <div className={style.MiddleModule}>
            <div className={style.MiddleModuleWrapper}>

                <div className={style.componentWrap}>
                        {EditorStores.componentQueue.map((Comp: {name: string, component: ComponentClass, props: {[key: string]: any}}, index: number) => {
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
}))