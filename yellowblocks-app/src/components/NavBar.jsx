import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header } = Layout;
function NavBar() {
  return (
    <>
      <Header>
        <Menu 
        theme="dark" 
        mode="horizontal"
        inlineIndent={0}
        style={{display: 'flex', justifyContent: 'space-between', width: '100%', }}
        >
            <Menu.Item>LearnAbility</Menu.Item>
            <Menu.Item>
              <img src="./avatar.png" style={{width: '50px', height: '50px', borderRadius: '50%'}}/>
            </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default NavBar;