import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

export const CollapseComp: React.FC = () => {

    return (
        <Collapse defaultActiveKey={['1']}>
            <Panel header="sdsfdsfsd" key="1">
                <p>123123</p>
            </Panel>
        </Collapse>
    )
}

CollapseComp.defaultProps = {
    activeKey: null,
    defaultActiveKey: null,
    bordered: true,
    accordion: false,
    onChange:  undefined,
    expandIcon: null,
    expandIconPosition: null,
    destroyInactivePanel: false,
    ghost: false,
    Panel: {
        disabled: false,	
        forceRender	: false,
        header:	null,	
        key:	null,	
        showArrow:  true,
        extra: null
    }
};


(Collapse as any).sechma = {
    activeKey: '',
    defaultActiveKey: null,
    bordered: true,
    accordion: false,
    onChange:  undefined,
    expandIcon: null,
    expandIconPosition: null,
    destroyInactivePanel: false,
    ghost: false,
    Panel: {
        disabled: false,	
        forceRender	: false,
        header:	null,	
        key:	null,	
        showArrow:  true,
        extra: null
    }
}