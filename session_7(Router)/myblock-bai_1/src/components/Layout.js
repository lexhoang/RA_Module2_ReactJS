import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Content } = Layout;
const { SubMenu } = Menu;

const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "blue" : "",
    color: isActive ? "white" : "",
    padding: "4px 18px",
    textDecoration: 'none',
    fontSize: '18px'
})

const LayoutComponent = () => {
    return (
        <>
            <Layout className="site-layout">
                <Header style={{ padding: 0, }} >
                    <Menu mode="horizontal" className="navbar navbar-expand-lg d-flex justify-content-evenly">
                        <Menu.Item key="home">
                            <NavLink style={navLinkStyle} to="/">Home</NavLink>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <NavLink style={navLinkStyle} to="about">About</NavLink>
                        </Menu.Item>
                        <Menu.Item key="user">
                            <NavLink style={navLinkStyle} to="user">User</NavLink>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <NavLink style={navLinkStyle} to="contact">Contact</NavLink>
                        </Menu.Item>
                        {/* <SubMenu title="User" key="User" style={{ fontSize: "18px" }}>
                            <Menu.ItemGroup title="User">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu> */}
                    </Menu>
                </Header>
            </Layout>

            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <Outlet></Outlet>
            </Content>
        </>

    );
};
export default LayoutComponent;