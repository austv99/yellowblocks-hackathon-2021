import React from 'react';
import { Menu, Button } from 'antd';
import {
    UserOutlined,
    HomeOutlined,
    ContainerOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;


function SideBar () {
    return (
        <>
        <div style={{ width: 200, marginRight: '10px'}}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          style={{ height: '100vh' }}
        //   inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            My Students
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Resources
          </Menu.Item>
        </Menu>
      </div>
        </>
    );

}

export default SideBar;