import React, { ChangeEvent } from 'react'
import { Drawer, Button, Space } from 'antd';
import style from './index.module.css'

export default class RightModuleBoard extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e: React.ChangeEvent<any>) => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
        <Space>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </Space>
        <Drawer
          title="编辑器"
          placement={'right'}
          onClose={this.onClose}
          visible={visible}
          key={placement}
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
}