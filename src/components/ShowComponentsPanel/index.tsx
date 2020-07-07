import React, { useCallback } from 'react'
import { pluginsInit } from 'plugins/initStore';
import style from './index.module.scss'
import { observer, inject } from 'mobx-react';
import { EditorStore } from 'store/modules/Editor.mobx'

export function ComponentWrap(props: {children: React.ReactNode}) {
    const { children } = props;
    return (
        <div className={style.CollapseComp}>
            <div className={style.CollapseCompMask}></div>
            {children}
        </div>
    )
}

export const ShowComponentsPaenel = inject('EditorStores')(observer((props: {EditorStores: EditorStore, data: string}) => {
    
    const { data, EditorStores } = props

    const addToComponent = useCallback((comp) => {
        EditorStores.addComponent({
            component: comp,
            name: comp.originName,
            schema: comp.schema,
            props: comp.defaultProps,
            defaultProps: comp.defaultProps,
        })
    }, [EditorStores])

    const renderDifferentComponent = useCallback(() => {
        const getComponents = pluginsInit.components.getObjFromGroup(data)
        if (getComponents.length) {
            return (
                <ul className={style.renderDifferentComponent}>
                {
                    getComponents.map((Component, index) => (
                        <li key={index} onClick={() => addToComponent(Component)}>
                            <ComponentWrap>
                                <Component/>
                            </ComponentWrap>
                        </li>
                    ))
                }
                </ul>
            )
        } else {
            return null
        }
    }, [data])

    return renderDifferentComponent()
}))