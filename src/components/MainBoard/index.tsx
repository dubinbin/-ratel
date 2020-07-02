import React, { useRef, useCallback, FC } from 'react'
import style from './index.module.scss'
import { SaveOutlined, EyeOutlined, SendOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Row, Col, PageHeader, Button } from 'antd'
import { MiddleModule } from '../MiddleModule';
import { RightModuleBoard } from '../RightModuleBoard';
import { LeftModuleBoard } from '../LeftModuleBoard';


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


export const MainBoard: FC<any> = () => {
    const DrawerRef = useRef<any>();

    const showDrawer = useCallback(() => {
       if (DrawerRef.current) {
            DrawerRef.current.openDrawer()
       }  
    }, [])
    
    return (
        <div className={style.MainBoard}>

            <div className={style.MenuBoard}>
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
            </div>

            <div className={style.MainBoardWrap}>
                <Row>
                    <Col span={4}>
                        <div className="LeftSideBoard">
                            <LeftModuleBoard ref={DrawerRef}/>
                        </div>
                    </Col>
                    <Col span={16}>
                        <MiddleModule/>
                    </Col>
                    <Col span={4}>
                        <div className="rightSideBoard">
                            <RightModuleBoard/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}