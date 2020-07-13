import React, { CSSProperties } from 'react'
import { Card, Avatar } from 'antd'
import style from './index.module.scss'
import { observer } from 'mobx-react'

const { Meta } = Card

const styles: CSSProperties = {
    position: 'relative',
    width:'44.5vw',
    maxWidth: 213.6,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 10,
    marginBottom: 10,
    overflow: 'hidden'
}

export const CardComp = observer((props: {
    CardInfo: {
        avatar: string,
        title: string,
        description: string,
        cover: string,
        link: string
    }[]
}) => {

    const { CardInfo } = props;

    return (
        <div className={style.cardWrap}>
            {CardInfo.map((item, index) => (
                <div className={style.cardInner} onClick={() => window.open(item.link)} key={index}>
                        <Card
                            style={styles}
                            cover={
                            <img
                                alt=""
                                src={item.cover}
                            />
                            }
                        >
                        <Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={item.title}
                            description={item.description}
                        />
                    </Card>
                </div>
            ))}
      </div>
    )
});

(CardComp as any).defaultProps = {
    CardInfo: [{
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Card title',
        description: 'This is the description',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
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
            description: {
                title: '描述',
                type: 'text'
            },
            avatar: {
                title: 'avatar链接',
                type: 'img',
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
}

