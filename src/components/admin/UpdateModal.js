import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import post from '../../redux/reducer/post';
import FormEditPost from './EditPost';
import { useContext } from 'react';
import { postContext } from './Post';

const UpdateModal = (props) => {
    let listContext = useContext(postContext)
    let { action } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        setIsModalOpen(action.action)
    }, [props])

    const handleOk = () => {
        setIsModalOpen(false);
        listContext.closeModal()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        listContext.closeModal()
    };
    let elementEditPost = <></>
    if (isModalOpen == true) {
        elementEditPost = <FormEditPost post={action.post} handleOk={handleOk}/>
    }

    return (
        <>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800}>
                {elementEditPost}
            </Modal>
        </>
    );
};
export default UpdateModal;