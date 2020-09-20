import React from 'react'
import { SketchPicker } from 'react-color'
import { Title } from '@/components/PropsEdition/HandleDifferantComponent/Title';

export function ColorPicker(props: {color: string}) {
    const { color } = props;
    function handleColorChange(color: string) {
        console.log(color)
    }

    return (
        <div>
            <Title title="调整颜色"/>
            <SketchPicker color={color}  onChangeComplete={() => handleColorChange}></SketchPicker>
        </div>
    )
}