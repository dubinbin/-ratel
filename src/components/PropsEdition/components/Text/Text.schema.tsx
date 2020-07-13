import React from 'react'
import { Input, Divider } from 'antd'


export function TextSchema(props: { schema: any, value: any, onChange: (e: Event) => any}) {
    const { schema, value, onChange } = props;
    const { title } = schema

    return (
        <div>
            <Divider orientation="left">{title}</Divider>
            <Input placeholder="Basic usage" value={value} onChange={(e) => onChange((e.target.value) as any)}/>
        </div>
    )
}