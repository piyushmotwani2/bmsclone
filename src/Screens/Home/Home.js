import "./Home.css";
import { React, useState } from "react";
import { Layout, Menu } from "antd";
import SelectCity from "../../Components/SelectCity/SelectCity";
import {
  HomeOutlined,
  VideoCameraOutlined,
  ShopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const Home = () => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="home">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Select City
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Search by Movie
          </Menu.Item>
          <Menu.Item key="3" icon={<ShopOutlined />}>
            Search By Theatre
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggle} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggle} />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 680,
          }}
        >
          <SelectCity />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
