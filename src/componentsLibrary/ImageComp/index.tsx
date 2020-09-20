import React from 'react'
import { observer } from 'mobx-react'
import defaultCover from '@/assets/images/default.jpg'

export const ImageComp = observer((props: {
        link?: string,
        picUrl: string
    })  => {
  
    const { link, picUrl } = props;

    return (
       <div className="PicStyle">
           {link ? 
                <a href={link}>
                    <img width="100%" src={picUrl} alt=""/>
                </a>
                :
                <img width="100%" src={picUrl} alt=""/>
           }
       </div>
    )
});

(ImageComp as any).defaultProps = {
    link: undefined,
    picUrl: defaultCover,
};


(ImageComp as any).schema = {
    link: {
      type: 'text',
      title: '图片跳转链接'
    },
    picUrl: {
        type: 'text',
        title: '图片链接',
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

  (ImageComp as any).defaultShowCover = {
      picture: defaultCover
  }
  