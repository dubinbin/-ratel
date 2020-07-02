import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react'
import { Drawer } from 'antd';
import style from './index.module.scss'
import { LeftSideMenu } from './LeftSideMenu';
import { ShowComponentsPaenel } from 'components/ShowComponentsPanel';
import { IMenuListType, MenuList } from 'components/ComponentsConfig';

export const LeftModuleBoard: React.FC<any> = forwardRef(({...props}, ref) => {
    const DrawerRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<boolean>(false)
    const [selectItem, setSelectItem] = useState<IMenuListType>(MenuList[0])

    useImperativeHandle(ref, () => ({
        openDrawer: () => {
            setVisible(true)
        }
    }))

    const onClose = () => {
        setVisible(false)
    };

    const selectItemMethod = (item: IMenuListType) => {
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
                    <ShowComponentsPaenel data={selectItem}/>
                </div>
            
            </Drawer>
        </div>

    ) 
})