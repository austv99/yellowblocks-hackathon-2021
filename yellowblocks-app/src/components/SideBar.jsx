import React from "react";
import llogo from "../data/learnabilitylogowhite.png";
import { Menu, Button } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function SideBar() {
  return (
    <>
      <div style={{ width: 200, marginRight: "10px" }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          style={{ minHeight: "100vh", height: "100%" }}
          //   inlineCollapsed={this.state.collapsed}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {" "}
            <img src={llogo} alt="Logo" style={{ width: "75%" }} />
          </div>
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
