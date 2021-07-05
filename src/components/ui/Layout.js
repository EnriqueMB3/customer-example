import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import './ui.css'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { CustomersScreen } from '../customers/CustomersScreen';
  

const { Header, Sider, Content , Footer} = Layout;


export const LayoutUi = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggle = () =>{
        setToggleMenu(!toggleMenu);
    }
    return (
        <>
        <Layout id="components-layout-demo-custom-trigger">
        <Sider trigger={null} collapsible collapsed={toggleMenu}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Clientes
            </Menu.Item>
          
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(toggleMenu ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <CustomersScreen/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Enrique  ©2021 </Footer>
        </Layout>
      </Layout>
      </>
    )
}
