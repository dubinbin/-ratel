import React, {FC} from 'react'
import { PageHeader, Button } from 'antd'
import style from './index.module.scss'
import { UnorderedListOutlined, SaveOutlined, EyeOutlined, SendOutlined } from '@ant-design/icons'


export const Logo:FC = () => {
    return (
        <div className={style.logo}></div>
    )
}

export const PageTitle: React.FC<any> = (props: {clickDrawer: () => void}) => {
    return (
        <div className={style.PageTitle}>
            <div className={style.pagename} onClick={() => props.clickDrawer()}>
                <div><UnorderedListOutlined /></div>
                <div className={style.pagetext}>页面：优惠券-首页</div>
            </div>
        </div>
    )
}


export function PanelHeader(props: { showDrawer: () => void}) {
    const { showDrawer } = props
    return (
        <PageHeader
            ghost={false}
            title={<Logo/>}
            subTitle={<PageTitle clickDrawer={() => showDrawer()}/>}
            extra={[
                <Button key="1" icon={<SaveOutlined />}>保存</Button>,
                <Button key="2" icon={<EyeOutlined />}>预览</Button>,
                <Button key="3" type="primary" icon={<SendOutlined />}>
                    发布
                </Button>,
            ]}
            >
        </PageHeader>
    )
}