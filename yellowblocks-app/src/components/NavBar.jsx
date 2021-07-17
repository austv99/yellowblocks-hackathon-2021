import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function NavBar() {
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item>LearnAbility</Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default NavBar;