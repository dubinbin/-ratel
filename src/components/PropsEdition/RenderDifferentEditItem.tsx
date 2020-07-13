import React, { useCallback, Children } from 'react'
import { RadioSchema } from './components/Radio/Radio.schema'
import { SwitchSchema } from './components/Switch/Switch.schema';
import { TextSchema } from './components/Text/Text.schema';
import { ComplexEdition } from './ComplexEdition';

export const RenderDifferentEditItem = (key: string, propsValue: any, schema: {type: string, [key: string]: {}}, onChange: (key: string, v: any) => void) => {

    const renderDiffComp = useCallback(() => {
        switch(schema.type) {
            case 'radio':
                return <RadioSchema key={key}
                        schema={schema}
                        value={propsValue}
                        onChange={(v) => onChange(key, v)}
                        {...{ bindKey: key }}/>
            case 'switch':
                return <SwitchSchema/>

            case 'text':
                return <TextSchema
                        schema={schema}
                        value={propsValue}
                        onChange={(v) => onChange(key, v)}
                        {...{ bindKey: key }}/>
            case 'children':
                return <ComplexEdition
                        schema={schema}
                        propsValue={propsValue}
                        {...{ bindKey: key }}/>
            default:
                return null
        }
    }, [propsValue])

    return renderDiffComp()
}