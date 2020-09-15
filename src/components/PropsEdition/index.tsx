import React, { useCallback } from 'react'
import { observer } from 'mobx-react';
import { RenderDifferentEditItem } from './RenderDifferentEditItem';
import style from './index.module.scss'


export const PropsEdition = observer(({component}: any) =>{
    const { schema = {}, props = {} } = component;

    const handle = useCallback((key: string, newValue: any) => {
        const newProps = props
        newProps[key] = newValue;
    }, [props])

    return (
        <ul className={style.PropsEdition}>
            {Object.keys(schema).map(key => (
                <li key={key}>
                    {RenderDifferentEditItem(key, props[key], schema[key], handle)}
                </li>
                )
            )}
        </ul>
    )
})