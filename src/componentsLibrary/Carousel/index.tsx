import React from 'react'
import { Carousel } from 'antd'
import { observer } from 'mobx-react'

export const CarouselComp = observer((props: {
        autoplay: boolean,
        dotPosition: "bottom" | "top" | "left" | "right" | undefined,
        carousels: {url: string, link: string}[]
    })  => {
  
    const { autoplay, dotPosition, carousels } = props;

    return (
        <Carousel autoplay={autoplay} dotPosition={dotPosition}>
            {carousels.map((item, index) => {
                return (
                    <img
                        key={index}
                        src={item.url}
                        onClick={() => window.open(item.link)}
                        alt=""
                    />
                );
            })}
        </Carousel>
    )
});

(CarouselComp as any).defaultProps = {
    autoplay: false,
    dotPosition: 'bottom',
    carousels: [
      {
        url:
          'https://wipi.oss-cn-shanghai.aliyuncs.com/2020-06-27/dGUxUULyLhgGvkwoNsHn.png',
        link: 'http://www.baidu.com'
      },
      {
        url:
          'https://wipi.oss-cn-shanghai.aliyuncs.com/2020-06-27/dGUxUULyLhgGvkwoNsHn.png',
        link: 'http://www.baidu.com'
      },
      {
        url:
          'https://wipi.oss-cn-shanghai.aliyuncs.com/2020-06-27/dGUxUULyLhgGvkwoNsHn.png',
        link: 'http://www.baidu.com'
      }
    ],
    style: {
    //   margin: marginCss,
    //   padding: paddingCss,
    //   font: fontCss
    }
  };


(CarouselComp as any).schema = {
    autoplay: {
      type: 'switch',
      title: '自动播放'
    },
    dotPosition: {
      title: '指点位置',
      type: 'radio',
      options: ['top', 'bottom', 'left', 'right']
    },
    carousels: {
      type: 'children',
      min: 1,
      title: '轮播组',
      schema: {
        url: {
          title: '图片链接',
          type: 'img',
          width: 686,
          height: 180
        },
        link: {
          title: '跳转链接',
          type: 'text'
        }
      }
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


(CarouselComp as any).defaultShowCover = {
    picture: require('@/assets/images/carsouel.png')
}