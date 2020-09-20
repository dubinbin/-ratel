import React from 'react'
import { observer } from 'mobx-react'

export const TextComp = observer((props: {
        text: string
    })  => {
  
    const { text } = props;

    return (
       <div className="textStyle">
           <p>{text}</p>
       </div>
    )
});

(TextComp as any).defaultProps = {
    text: '这是一些示例文字',
  };


(TextComp as any).schema = {
    text: {
      type: 'text',
      title: '文字'
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

(TextComp as any).defaultShowCover = {
    picture: require('@/assets/images/textComp.jpg')
}
  