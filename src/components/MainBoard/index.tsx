import React, { useRef, useCallback } from 'react'
import { Row } from 'antd'
import { EditorPanel } from '../EditorPanel'
import { RightModuleBoard } from '../RightModuleBoard'
import { LeftModuleBoard } from '../LeftModuleBoard'
import { PanelHeader } from 'components/PanelHeader'
import { observer } from 'mobx-react'
import style from './index.module.scss'

export type IRefType = {
    openDrawer: () => void | undefined
} 

export const MainBoard = observer(() =>{

    const DrawerRefLeft = useRef<IRefType>(null)
    const DrawerRefRight = useRef<IRefType>(null)

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
                            <EditorPanel openRightBoard={() => showRightBoard()}/>
                        </div>


                        <div className={style.rightSideBoard}>
                            <RightModuleBoard ref={DrawerRefRight}/>
                        </div>
                    </Row>
            </div>
        </div>
    )
})