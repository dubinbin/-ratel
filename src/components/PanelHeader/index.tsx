import React, {FC, useCallback} from 'react'
import { PageHeader, Button } from 'antd'
import style from './index.module.scss'
import { UnorderedListOutlined, SaveOutlined, EyeOutlined, SendOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react'
// import { useStore } from '../../store/store'

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
                <div className={style.pagetext}>页面：首页</div>
            </div>
        </div>
    )
}


export const PanelHeader = observer((props: { showDrawer: () => void}) => {
    const { showDrawer } = props
    // const { getAllComponent } = useStore();


    const getAllQueue = useCallback(() => {
        // const allComp = getAllComponent();
        // console.log(allComp)
    }, [])

    return (
        <PageHeader
            ghost={false}
            title={<Logo/>}
            subTitle={<PageTitle clickDrawer={() => showDrawer()}/>}
            extra={[
                <Button key="1" icon={<SaveOutlined />} onClick={() => getAllQueue()}>保存</Button>,
                <Button key="2" icon={<EyeOutlined />}>预览</Button>,
                <Button key="3" type="primary" icon={<SendOutlined />}>
                    发布
                </Button>,
            ]}
            >
        </PageHeader>
    )
})