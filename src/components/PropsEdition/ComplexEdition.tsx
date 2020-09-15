import React, { useCallback } from 'react'
import { RenderDifferentEditItem } from './RenderDifferentEditItem';
import { observer } from 'mobx-react';
import { useStore } from 'store/store';

export const ComplexEdition = observer((props: { schema: any, propsValue: any} ) => {

    const { schema } = props;
    const { schema: schemaInner } = schema;
    const { currentComponent } = useStore()
    const { props: Props } = currentComponent
    const { CardInfo } = Props


    const onChangeValue = useCallback((key: string, v: any, index: number) => {
        CardInfo[index][key] = v
    }, [CardInfo])

    return (
        <div>
            {CardInfo && CardInfo.map((item: {[key: string]: any}, index: number) => {
                return Object.keys(item).map(key => {
                    return (
                        <div key={key}>
                            <div>{RenderDifferentEditItem(key, item[key], schemaInner[key], (k, v) => onChangeValue(k, v, index))}</div>
                        </div>
                    )
                })
            })}
        </div>
    )
})