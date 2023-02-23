import { Button, Table, Space } from 'antd';
import { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deletePostAct } from '../../redux/action/action'
import UpdateModal from './UpdateModal';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
export const postContext = createContext()
const User = () => {
  const [postList, setPostList] = useState([])
  const [showModal, setShowModal] = useState(false)
  let postState = useSelector(state => state.post)
  let dispatch = useDispatch()
  let [postUpdate, setPostUpdate] = useState({ action: false, post: "" })

  useEffect(() => {
    let newPost = postState.map((post) => {
      return { ...post, key: post.id }
    })
    setPostList(newPost)
  }, [postState])

  const deletePost = (post) => {
    dispatch(deletePostAct(post))
  }
  const editPost = (post) => {
    setPostUpdate({ action: true, post: post })
    setShowModal(true)
  }
  const closeModal = ()=>{
    setShowModal(false)
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Danh mục',
      dataIndex: 'cataloge'
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title', 
      width:120
    },
    {
      title: 'Nội dung',
      dataIndex: 'content',
    },
    {
      title: 'Hành động',
      width: 150,
      render: (data) => {
        return <>
          <Space>
            <Button type='primary' ghost onClick={() => { editPost(data) }}>Sửa</Button>
            <Button type='primary' danger ghost onClick={() => { deletePost(data) }}>Xoá</Button>
          </Space>
        </>
      }
    }
  ];
  let elementModal = showModal ? <UpdateModal action={postUpdate} /> : <></>
  return <postContext.Provider value={{closeModal:closeModal}}>
    <>
      <Table columns={columns} dataSource={postList} onChange={onChange} />
      {elementModal}
    </>
  </postContext.Provider>

};
export default User;
