import React from 'react'
import style from './index.module.css'
import { SaveOutlined, 
         EyeOutlined, 
         SendOutlined, 
         UnorderedListOutlined,
         PlusOutlined 
} from '@ant-design/icons'
import { 
        Row, 
        Col, 
        PageHeader, 
        Button, 
        Drawer 
} from 'antd'
import { MiddleModule } from '../MiddleModule';
import RightModuleBoard from '../RightModuleBoard';


export function Logo() {
    return (
        <div className={style.logo}></div>
    )
}

export function PageTitle(props: {clickDrawer: () => void}) {
    return (
        <div className={style.PageTitle}>
            <div className={style.pagename} onClick={() => props.clickDrawer()}>
                <div><UnorderedListOutlined /></div>
                <div className={style.pagetext}>页面：优惠券-首页</div>
            </div>
        </div>
    )
}

export default class MainBoard extends React.Component {

    state = { visible: false };


    showDrawer = () => {
      this.setState({
            visible: true,
      });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const {  visible } = this.state;
        return (
            <div className={style.MainBoard}>
                <div>
                    <Drawer
                        title="页面列表"
                        placement={'left'}
                        className={style.extraDrawer}
                        closable={true}
                        drawerStyle={{paddingTop: 12}}
                        mask={false}
                        onClose={this.onClose}
                        visible={visible}
                        key={'left'}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>

                        <div className={style.addPageBtn}>
                            <div><PlusOutlined /> <span>添加页面</span></div>
                        </div>
                     
                    </Drawer>
                </div>


                <div className={style.MenuBoard}>
                    <PageHeader
                        ghost={false}
                        title={<Logo/>}
                        subTitle={<PageTitle clickDrawer={() => this.showDrawer()}/>}
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
                        <Col span={6}>
                            <div className="LeftSideBoard">
                                {/* <LeftModuleBoard/> */}
                            </div>
                        </Col>
                        <Col span={16}>
                            <MiddleModule/>
                        </Col>
                        <Col span={2}>
                            <div className="rightSideBoard">
                                <RightModuleBoard/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}