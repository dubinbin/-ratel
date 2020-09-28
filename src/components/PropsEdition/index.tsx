import React, { useCallback } from 'react'
import { observer } from 'mobx-react';
import { RenderDifferentEditItem } from './RenderDifferentEditItem';
import style from './index.module.scss'
import { CardHandle } from './HandleDifferantComponent/Card';


export const PropsEdition = observer(({component}: any) =>{
    const { schema , props,  name, comp_id } = component;

    const handle = useCallback((key: string, newValue: any) => {
        const newProps = props
        newProps[key] = newValue;
    }, [props])

    
    const ComponentHandleSwitch = useCallback((name: string) =>  {
        switch(name) {
            case 'Card':
            return <CardHandle/>;
        default:
            const ret = Object.keys(schema).map(key => (
                <li key={key}>
                    {RenderDifferentEditItem(key, props[key], schema[key], handle)}
                </li>
            ))
            return <ul className={style.PropsEdition}>
                {ret}
            </ul>;
        }
    }, [name, comp_id])

    return ComponentHandleSwitch(name)
    
})