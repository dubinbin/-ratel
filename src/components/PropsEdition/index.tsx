import React from 'react'
import { inject, observer } from 'mobx-react';
import { RenderDifferentEditItem } from './RenderDifferentEditItem';

export const PropsEdition = inject('EditorStores')(observer(({EditorStores, component}: any) =>{
    const { schema, props } = component;
    console.log(props)
    return (
        <div>
            <ul>
                123
                {/* {Object.keys(schema).map(key => {
                    return (
                        <li key={key}>
                            {JSON.stringify(schema[key])}
                        </li>
                    )
                })} */}
            </ul>
            <div>{RenderDifferentEditItem()}</div>
        </div>
    )
}))