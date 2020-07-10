import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { Drawer } from 'antd';
import style from './index.module.scss'
import { observer } from 'mobx-react';
import { EditorStore } from 'store/modules/Editor.mobx';
import { PropsEdition } from 'components/PropsEdition';
import { useStore } from 'store/store';

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


export const EditPanel = observer((props: {visible: boolean, onCloseFn: () => void}) => {

  const { onCloseFn, visible } = props
  const { currentComponent } = useStore()

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
        <PropsEdition component={currentComponent} {...props}/>
      </Drawer>
  )
})