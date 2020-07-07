import React from 'react'
import { Radio } from 'antd'
import { toJS } from 'mobx'

export function RadioSchema(props: { schema: any, value: any, onChange: (e: Event) => void}) {
    const { schema, value,  onChange } = props;
    const SchemaToJS = toJS(schema)
    const { options } = SchemaToJS;

    return (
        <Radio.Group onChange={e => onChange(options[((e.target.value) - 1)])} value={options.indexOf(value) + 1}>
            {options.map((Item: string, index: number) => (
                <Radio value={index + 1} key={index}>{Item}</Radio>
            ))}
        </Radio.Group>
    )
}