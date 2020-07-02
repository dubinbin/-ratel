import React, { FC, useState } from 'react'
import { Drawer, Button, Space } from 'antd';
import style from './index.module.scss'

export const RightModuleBoard: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  
  return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
        <Space>
          <Button type="primary" onClick={() => showDrawer()}>
            Open
          </Button>
        </Space>
        <Drawer
          title="编辑器"
          placement={'right'}
          onClose={() => onClose()}
          visible={visible}
          className={style.extraDrawer}
          closable={true}
          drawerStyle={{paddingTop: 12}}
          mask={false}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
}