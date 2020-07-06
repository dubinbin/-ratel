import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { Drawer } from 'antd';
import style from './index.module.scss'
import { observer, inject } from 'mobx-react';
import { EditorStore } from 'store/modules/Editor.mobx';
import { PropsEdition } from 'components/PropsEdition';

export const RightModuleBoard: React.FC<any> = forwardRef(({...props}, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const DrawerRef = useRef<HTMLDivElement>(null)
  
  useImperativeHandle(ref, () => ({
      openDrawer: () => {
          setVisible(true)
      }
  }))

  const onClose = () => {
      setVisible(false)
  };

  
  return (
      <div ref={DrawerRef}>
            <EditPanel visible={visible} onCloseFn={() => onClose()} {...props}/>
        </div>
    );
})


export const EditPanel = inject('EditorStores')(observer((props: {visible: boolean, onCloseFn: () => void, EditorStores: EditorStore}) => {

  const { onCloseFn, visible, EditorStores } = props

  // console.log(EditorStores.currentComponent.defaultProps)
  return (
    <Drawer
        title="编辑器"
        width={350}
        placement={'right'}
        onClose={() => onCloseFn()}
        visible={visible}
        className={style.extraDrawer}
        closable={true}
        drawerStyle={{paddingTop: 12}}
        mask={false}
        >
        <PropsEdition component={EditorStores.currentComponent} {...props}/>
      </Drawer>
  )
}))