import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { postComment } from '../../redux/action/action';

function CommentModal(props) {
    let status = props.writeComment.status
    let data = props.writeComment.data
    let user = data!=""? data.user: ""
    let post = props.post
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [comment,setComment] = useState("")
    useEffect(()=>{
        setShow(status)
    },[props])
    const handleGetComment = (e)=>{
        let value = e.target.value
        setComment(value)
    };
    const sendComment = ()=>{
        if(comment==""){
            alert("Vui lòng điền nội dung trước khi gửi")
            return 
        }
        let newPost = {userId:data.id,content:comment,status:"pending"}
        let currentComment = post.comment 
        let newComment = [...currentComment,newPost]
        dispatch(postComment({id:post.id,commentArr:newComment}))
        
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bình luận</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tài khoản</Form.Label>
                            <Form.Control
                                type="text" disabled
                                placeholder="name@example.com"
                                autoFocus value={user}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Nội dung</Form.Label>
                            <Form.Control as="textarea" rows={3} value={comment} onChange={handleGetComment} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Huỷ bỏ
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        sendComment()
                    }}>
                        Gửi bình luận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CommentModal