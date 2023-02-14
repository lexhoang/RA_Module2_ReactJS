import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu mode="horizontal" theme="dark" style={{ justifyContent: "space-around" }}>

                    <Menu.Item mode="horizontal" theme="dark" style={{ justifyContent: "space-around" }}>
                        <Menu.Item key="home">
                            Home
                        </Menu.Item>
                    </Menu.Item>
                    <Menu.Item mode="horizontal" theme="dark" style={{ justifyContent: "space-around" }}>
                        <Menu.Item key="about">
                            About
                        </Menu.Item>
                        <Menu.Item key="contact">
                            Contact
                        </Menu.Item>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer, height: '74vh',
                    }}
                >
                    Content
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default LayoutComponent;