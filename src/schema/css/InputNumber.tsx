import React, { useCallback } from 'react'
import { InputNumber } from 'antd';

export function InputNumberComp(props: {defaultValue: number, handleValue: (val: number) => void}) {

    const { defaultValue, handleValue }  = props;

    const onChange = useCallback((value: number) => {
        handleValue(value);
    }, [])

    return (
        <InputNumber min={0} defaultValue={defaultValue} onChange={() => onChange} />
    )
}