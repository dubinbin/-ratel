import React from 'react'
import { Collapse } from 'antd'
import style from './index.module.scss'

const { Panel } = Collapse;

export const CollapseComp: React.FC = () => {
    return (
        <div className={style.CollapseComp}>
            <div className={style.CollapseCompMask}></div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="This is panel header 1" key="1">
                        <p>123123</p>
                    </Panel>
                </Collapse>
        </div>
    )
}