import React from 'react'
import { observer } from 'mobx-react'

export const BaseConfig = observer(() => {

    const baseStlye = {
        background: '#fff'
    }

    return (
        <div className="baseConfig" style={baseStlye}></div>
    )
});

(BaseConfig as any).defaultProps = {
    text: '这是一些示例文字',
  };


(BaseConfig as any).schema = {
    background: {
      type: 'text',
      title: '背景颜色'
    },
    style: {
      type: 'children',
      title: '基本样式',
    //   schema: {
    //     margin: marginCssSchema,
    //     padding: paddingCssSchema,
    //     font: fontCssSchema
    //   }
    }
};

(BaseConfig as any).defaultShowCover = {
    picture: require('@/assets/images/base.jpg')
}
  