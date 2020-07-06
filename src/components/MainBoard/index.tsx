import React, { useRef, useCallback } from 'react'
import { Row } from 'antd'
import { EditorPanel } from '../EditorPanel'
import { RightModuleBoard } from '../RightModuleBoard'
import { LeftModuleBoard } from '../LeftModuleBoard'
import { PanelHeader } from 'components/PanelHeader'
import { observer, inject } from 'mobx-react'
import style from './index.module.scss'
import { EditorStore } from 'store/modules/Editor.mobx'

export const MainBoard = inject('EditorStores')(observer((props: {EditorStores: EditorStore}) =>{
    const DrawerRefLeft = useRef<any>()
    const DrawerRefRight = useRef<any>()

    const showDrawer = useCallback(() => { // 关闭左边抽屉
       if (DrawerRefLeft.current) {
            DrawerRefLeft.current.openDrawer()
       }  
    }, [])

    const showRightBoard = useCallback(() => {
        if (DrawerRefRight.current) {
            DrawerRefRight.current.openDrawer()
       }
    }, [])

    return (
        <div className={style.MainBoard}>

            <div className={style.MenuBoard}>
                <PanelHeader showDrawer={() => showDrawer()}/>
            </div>

            <div className={style.MainBoardWrap}>
                <Row>
                    <div className={style.LeftSideBoard}>
                        <LeftModuleBoard ref={DrawerRefLeft}/>
                    </div>

                    <div className={style.EditorPanel}>
                        <EditorPanel {...props} openRightBoard={() => showRightBoard()}/>
                    </div>

                    <div className={style.rightSideBoard}>
                        <RightModuleBoard ref={DrawerRefRight}/>
                    </div>
                </Row>
            </div>
        </div>
    )
}))