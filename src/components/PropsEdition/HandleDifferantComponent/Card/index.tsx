import React, { useCallback } from 'react'
import { Tabs, Button, Modal } from 'antd';
import { Input, Select } from 'antd';
import { Title } from '../Title';
import { showModal } from '@/components/common/Modal';

const { Option } = Select;
const { TabPane } = Tabs;


const Demo = () => {

    function callback<T>(key: T): void {
        console.log(key)
    }

    const addCard = useCallback(() => {
        showModal({
            title: '添加项目',
            content: '',
            onOkFn: () => console.log('ok')
        })
    }, [])

    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="接口数据" key="1">
                <div>
                    <Title title="数据接口："/>
                    <Input.Group compact>
                        <Select defaultValue="GET">
                            <Option value="GET">GET</Option>
                            <Option value="POST">POST</Option>
                        </Select>
                        <Input style={{ width: '70%' }} defaultValue="" />
                    </Input.Group>
                    <br/>
                    <Button type="primary">注入</Button>
                </div>

                <div>
                    <br/>
                    <Title title="样式调整："/>

                </div>
            </TabPane>
            <TabPane tab="自定义配置" key="2">
                <Button type="primary" onClick={() => addCard()}>增加列表</Button>
            </TabPane>
        </Tabs>   
    )
}


export function CardHandle() {
    return (
        <div>
            <Demo/>
        </div>
    )
}