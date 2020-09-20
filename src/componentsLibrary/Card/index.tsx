import React from 'react'
import { observer } from 'mobx-react'
import { changeMoney } from '@/services/utils';
import style from './index.module.scss'


export const CardComp = observer((props: {
    CardInfo: {
        originPrice: number,
        title: string,
        price: number,
        cover: string,
        link: string
    }[]
}) => {

    const { CardInfo } = props;

    return (
        <div className={style.cardWrap}>
            {CardInfo.map((item, index) => (
                <div className={style.cardItem} onClick={() => window.open(item.link)} key={index}>
                    <div className={style.CardWrapper}>
                        <div className={style.CardCover}>
                            <img src={item.cover} alt=""/>
                        </div>

                        <div className={style.CardContainer}>
                            <p className={style.CardContainer_title}>{item.title}</p>
                            <div className={style.CardContainer_price}>

                                <div className={style.CardContainer_money}>
                                {changeMoney(item.price, true)}
                                </div>

                                <div className={style.CardContainer_originPrice}>
                                {changeMoney(item.originPrice)}
                                </div>

                            </div>

                            <div className={style.buyBtn}>
                                查看详情
                            </div>
                        </div>
                    </div>
                </div>
            ))}
      </div>
    )
});

(CardComp as any).defaultProps = {
    CardInfo: [{
        title: '依巴特 儿童驼奶粉 225克（15克*15袋）/罐 ',
        price: 17500,
        originPrice: 25000,
        cover: 'https://www.160dyf.com/Public/upload/goods/2019/08-01/200x200/5d42bafa4e899.jpg',
        link: 'https://m1.business.tryweike.cn/operation-business/fourth-activity/coupon-activity?entries=icon'
    },
    {
        title: '跨境 新版澳洲爱他美白金版Aptamil婴幼儿配方奶粉 3段 （1-3岁）900g 1xc',
        price: 15500,
        originPrice: 22000,
        cover: 'https://www.160dyf.com/Public/upload/goods/2018/01-15/200x200/5a5c56ef0382a.jpg',
        link: 'https://m1.business.tryweike.cn/operation-business/fourth-activity/coupon-activity?entries=icon'
    },
    {
        title: '跨境 Devondale 澳大利亚 德运 脱脂高钙成人牛奶粉  1kg 1xc',
        price: 13500,
        originPrice: 21000,
        cover: 'https://www.160dyf.com/Public/upload/goods/2019/03-12/200x200/5c87a7eae802b.jpg',
        link: 'https://m1.business.tryweike.cn/operation-business/fourth-activity/coupon-activity?entries=icon'
    },
    {
        title: '露安适 婴儿手口专用湿巾 20片/包 宝宝儿童便携随身装 ',
        price: 12500,
        originPrice: 20000,
        cover: 'https://www.160dyf.com/Public/upload/goods/2019/08-01/200x200/5d42bafa4e899.jpg',
        link: 'https://m1.business.tryweike.cn/operation-business/fourth-activity/coupon-activity?entries=icon'
    }]
};


(CardComp as any).schema = {
    CardInfo: {
        type: 'children',
        min: 1,
        title: '卡片分组',
        schema: {
            title: {
                title: '标题',
                type: 'text'
            },
            price: {
                title: '现价',
                type: 'text'
            },
            originPrice: {
                title: '原价',
                type: 'text',
            },
            cover: {
                title: '封面图链接',
                type: 'img',
            },
            link: {
                title: '跳转链接',
                type: 'text'
            }
        }
      },
      styleSchema: {
          title: {
            title: '标题',
            schema: [
                { 
                    fontSize: {
                        default: 16,
                        schemaComponent: ''
                    },
                    fontWeight: {
                        default: 500,
                        schemaComponent: ''
                    },
                    lineHeight: {
                        default: '22px',
                        schemaComponent: ''
                    },
                    color: {
                        default: '#282828',
                        schemaComponent: ''
                    },
                    margin: {
                        default: [0, 0, 10, 0],
                        schemaComponent: ''
                    },
                    padding: {
                        default: [7, 0, 0, 0],
                        schemaComponent: ''
                    },
                    height: {
                        default: 50,
                        schemaComponent: ''
                    }

                }
            ]
          },
          originPrice: {
            title: '原价',
            schema: []
          },
          price: {
            title: '现价',
            schema: []
          },
          button: {
            title: '购买按钮',
            schema: []
          }
      }
};

(CardComp as any).defaultShowCover = {
    picture: require('@/assets/images/card.png')
}

