
import React from 'react';
import { CommentOutlined, UserOutlined,FormOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import {Link, Outlet} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const Admin = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const elementMenu = [{
        key:0,
        icon: <UserOutlined/>,
        label: <Link to={"/admin/user"}>Người dùng</Link>
    },
    {
        key:1,
        icon: <FormOutlined/>,
        label: <Link to={"/admin/post"}>Bài đăng</Link>
    },
    {
        key: 2,
        icon: <FormOutlined />,
        label: <Link to={"/admin/newpost"}>Thêm bài</Link>
    },
    {
        key:3,
        icon: <CommentOutlined/>,
        label: <Link to={"/admin/comment"}>Bình luận</Link>
    }
    
]
    

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={elementMenu}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}><Outlet/></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>CopyRight By MinhThu @ 2023</Footer>
            </Layout>
        </Layout>
    );
};

export default Admin 