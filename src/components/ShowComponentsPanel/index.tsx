import React, { useCallback } from 'react'
import { pluginsInit } from 'plugins/initStore';
import style from './index.module.scss'
import { observer } from 'mobx-react';
import { useStore } from 'store/store';
import { randomNum } from 'services/utils';

export function ComponentWrap(props: {children: React.ReactNode}) {
    const { children } = props;
    return (
        <div className={style.CollapseComp} style={{minHeight: 120}}>
            <div className={style.CollapseCompMask}></div>
            {children}
        </div>
    )
}

export const ShowComponentsPaenel = observer((props: {data: string}) => {
    
    const { data } = props
    const { addComponent } = useStore()

    const addToComponent = useCallback((comp) => {
        addComponent({
            component: comp,
            comp_id: `comp_${randomNum()}`,
            name: comp.originName,
            schema: comp.schema,
            props: comp.defaultProps,
            defaultProps: comp.defaultProps,
        })
    }, [addComponent])

    const renderDifferentComponent = useCallback(() => {
        const getComponents = pluginsInit.components.getObjFromGroup(data)
        if (getComponents.length) {
            return (
                <ul className={style.renderDifferentComponent}>
                    {getComponents.map((Component, index) => (
                        <li key={index} onClick={() => addToComponent(Component)}>
                            <ComponentWrap>
                                <img className={style.componentShowCover} src={(Component.defaultShowCover) && Component.defaultShowCover.picture} alt=""/>
                            </ComponentWrap>
                        </li>

                    ))}
                </ul>
            )
        } else {
            return null
        }
    }, [data, addToComponent])

    return renderDifferentComponent()
})