import React from 'react'
import { inject, observer } from 'mobx-react';
import { RenderDifferentEditItem } from './RenderDifferentEditItem';
import style from './index.module.scss'

export const PropsEdition = inject('EditorStores')(observer(({EditorStores, component}: any) =>{
    const { schema = {}, props = {} } = component;

    const handle = (key: string, newValue: any) => {
        const newProps = props
        newProps[key] = newValue;
    };

    return (
        <ul className={style.PropsEdition}>
            {Object.keys(schema).map(key => {
                return (
                    <li key={key}>
                        <div>{RenderDifferentEditItem(key, props[key], schema[key], handle)}</div>
                    </li>
                )
            })}
        </ul>
    )
}))