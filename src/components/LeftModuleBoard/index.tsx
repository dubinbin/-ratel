import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react'
import { Drawer } from 'antd'
import style from './index.module.scss'
import { LeftSideMenu } from './LeftSideMenu'
import { ShowComponentsPaenel } from 'components/ShowComponentsPanel'
import { pluginsInit } from 'plugins/initStore'

export const LeftModuleBoard: React.FC<any> = forwardRef((props: {addComponent: () => void}, ref) => {
    const default_Components = pluginsInit.components.getAllGroups()[0]
    const DrawerRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<boolean>(true)
    const [selectItem, setSelectItem] = useState<string>(default_Components)

    useImperativeHandle(ref, () => ({
        openDrawer: () => {
            setVisible(true)
        }
    }))

    const onClose = () => {
        setVisible(false)
    }

    const selectItemMethod = (item: string) => {
        setSelectItem(item)
    }

    return (
        <div ref={DrawerRef}>
            <Drawer
                title="页面列表"
                placement={'left'}
                className={style.extraDrawer}
                closable={true}
                drawerStyle={{paddingTop: 12}}
                mask={false}
                onClose={() => onClose()}
                visible={visible}
                key={'left'}
                >

                <div className={style.LeftSideMenu}>
                    <LeftSideMenu seleteItem={(item) => selectItemMethod(item)}/>
                </div>

                <div className={style.mainContentArea}>
                    <ShowComponentsPaenel data={selectItem} {...props as any}/>
                </div>
            
            </Drawer>
        </div>

    ) 
})