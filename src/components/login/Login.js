import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Error } from '../toastify/Toast';
import Toast from '../toastify/Toast';
import BannerLogin from './BannerLogin';

export default function Login() {

    const navigate = useNavigate()
    const userAccount = useSelector(state=>state.user)
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        let flag = false, type= "user"
        let status = true
        let id = ""
        
        for (let i = 0; i< userAccount.length; i++){
            if (userAccount[i].user.toLowerCase() == values.user.toLowerCase() && userAccount[i].pass == values.pass){
                flag=true
                type=userAccount[i].type
                status=userAccount[i].status
                id = userAccount[i].id
            }
        }

        console.log(flag,type,status);


        if (flag){
            if (type==="admin"){
                navigate("/admin")
                localStorage.setItem("loginStatus",JSON.stringify({...values,type:"admin", id:id}))
            }
            else if (status){
                localStorage.setItem("loginStatus", JSON.stringify({ ...values, type: "user",id:id }))
                navigate("/")
            }
            else{
                Error("Tài khoản hiện tại đã bị khoá")
            }
        }
        else {
            Error("Thông tin tài khoản không chính xác")
        }
    };
    return (
       <>
       <BannerLogin/>
            <div className='login_section'>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <div className='login_form'>
                        Đăng nhập
                    </div>
                    <Form.Item
                        name="user"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="pass"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    {/* <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item> */}

                    <Form.Item className='login_button'>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Đăng nhập
                        </Button>
                        Or <Link to={"/register"}>Đăng ký!</Link>
                    </Form.Item>
                </Form>
                <Toast />
            </div></>
    )
}
