import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { toggleUserStatus } from '../../redux/action/action';





const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const User = () => {
    const [userList,setUserList] = useState([])
    let userState = useSelector(state=>state.user)
    let dispatch = useDispatch()

    const toggleStatus = (data) => {
        let status = data.status ? false : true
        let newUser = { ...data, status: status }
        delete newUser.key
        axios.put(`http://localhost:5555/user/${data.id}`, newUser)
        dispatch(toggleUserStatus(newUser))
    }

    useEffect(()=>{
        let newUserRender = userState.map((user)=>{
            return {...user,key:user.id}
        })
    setUserList(newUserRender)
    }, [userState])

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'UserName',
            dataIndex: 'user',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            render: (data) => {
                return data.type === "admin" ? <></> : data.status ? (<Button type='primary' danger onClick={() => {
                    toggleStatus(data)
                }}>
                    Ban
                </Button>) : (<Button type='primary' onClick={() => {
                    toggleStatus(data)
                }}>
                    UnBan
                </Button>)
            }
        }
    ];
    return <Table columns={columns} dataSource={userList} onChange={onChange} />
};
export default User;