import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

export type ISelectList = number[]

export function SelectPicker(props: {defaultValue: number, selectList: ISelectList, handleFn: (val: any) => void}) {

    const {selectList, handleFn, defaultValue} = props;

    function handleChange<T>(value: T) {
        handleFn(value)
    }
      
    return (
        <div>
            <Select defaultValue={defaultValue} style={{ width: 100 }} onChange={handleChange}>
                {selectList.map(item => (
                    <Option value={item}>{item}</Option>
                ))}
            </Select>
        </div>
    )
}