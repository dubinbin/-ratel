import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { Tabs, Button, Switch,  List, Avatar, TreeSelect } from 'antd';
import { Title } from '../Title';
import { showModal } from '@/components/common/Modal';
// import { CardComp } from '@/componentsLibrary/Card'
import { observer } from 'mobx-react';
import { useStore } from '@/store/store';
import { changeMoney } from '@/services/utils';
import style from './index.module.scss'
import { CardServicesModule } from '@/services/modules/card';

const { TabPane } = Tabs;


const CardTabs = observer(() => {
    const [check, setCheck] = useState<boolean>(true)
    const [selectValue, setSelectValue] = useState(undefined)
    const [moduleData, setModuleData] = useState()

    const { currentComponent } = useStore();

    const { props } = currentComponent;

    const { CardInfo } = props;


    useEffect(() => {
        getModule();
    }, [])

    const getModule = async() => {
        try {
            const { data } = await CardServicesModule.getModule();
            setModuleData(data)
           } catch(e)  {}
    }

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


    const deleteItem = useCallback((index) => {
        CardInfo.splice(index, 1)
    }, [CardInfo])

    const onChange = useCallback((value) => {
        console.log(value);
        setSelectValue(value);
    }, [])


    const edit = useCallback((index) => {
        console.log(CardInfo[index])
    }, [CardInfo])

    const addData = useCallback(() => {
        CardServicesModule.getCard().then((res) => {
            const data = res.data;
            CardInfo.length = 0;
            data.forEach((item) =>  {
                CardInfo.push(item)
            })
        })
    }, [])


    return (
        useMemo(() => {
            return (
                <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="数据来源" key="1">
    

                    <Switch checkedChildren="接口" unCheckedChildren="自定义" defaultChecked={check}  onChange={() => setCheck(!check)} />

                    <div style={{marginTop: 10}}></div>

                    {check ? 
                        <div>
                            <Title title="数据接口："/>
                            <TreeSelect
                                style={{ width: '100%' }}
                                value={selectValue}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={moduleData}
                                placeholder="Please select"
                                treeDefaultExpandAll
                                onChange={onChange}
                            />
                            <div style={{marginTop: 10}}></div>
                        </div>
                    : <div style={{marginTop: 10}}>
                        <div className={style.addBtnWrap}>
                            <Button type="primary" onClick={() => addCard()}>增加列表</Button>
                        </div>
                        <div className="tab_list">
                        <List
                            itemLayout="horizontal"
                            dataSource={CardInfo}
                            renderItem={(item: any, index: number) => (
                            <List.Item style={{position: 'relative'}}>
                                <List.Item.Meta
                                avatar={<Avatar src={item.cover} />}
                                title={<a href={item.link}>{item.title}</a>}
                                description={`原价：${ changeMoney(item.originPrice)}  现价：${changeMoney(item.price)}`}
                                />
                                <div className={style.deleteBtn} onClick={() => deleteItem(index)}>
                                    <img src={require('@/assets/images/delete.png')} alt=""/>
                                </div>

                                <div className={style.editBtn} onClick={() => edit(index)}>
                                    <img src={require('@/assets/images/edit.png')} alt=""/>
                                </div>
                            </List.Item>
                            )}
                        />
                        </div>
                    </div>
                    }


                </TabPane>
                <TabPane tab="数据打点配置" key="2">

                </TabPane>
            </Tabs>    
            )
        }, [CardInfo, addCard, deleteItem, CardInfo.length, check, selectValue, moduleData]) 
    )
})


export function CardHandle() {
    return (
        <div>
            <CardTabs/>
        </div>
    )
}