import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CommentModal from './CommentModal'


export function Comment(props) {
    const navigate = useNavigate()
    const userState = useSelector(state => state.user)
    const [writeComment, setWriteComment] = useState({ status: false, data: "" })
    let loginStatus = JSON.parse(localStorage.getItem("loginStatus"))
    const checkValidateLogin = () => {
        let loginFlag = false
        if (loginStatus != null) {
            userState.forEach(user => {
                if (user.id === loginStatus.id && (user.status === true)&&(user.type!=="admin")) {
                    loginFlag = true
                }
            });
        }
        if (loginFlag == false) {
            navigate("/login")
        }
        else {
            setWriteComment({ status: true, data: loginStatus })
        }
    }
    return (
        <>
            <div className='comment'>
                <div className='comment_header'>
                    <p className='comment_header-title'>Binh Luan</p>
                    <button className='comment_header-button' onClick={checkValidateLogin}>Binh Luan</button>
                </div>
                <hr />
                <div className='comment_body'>
                    <div className='comment_detail'>
                        <div className='comment_detail-header'>
                            <p className='comment_detail-title'>Đỗ Chuân</p>

                        </div>
                        <hr />
                        <div className='comment_detail-body'>
                            <p className='comment_detail-content'>
                                Người đứng đầu ngành ngoại giao Mỹ không nêu rõ bản chất thông tin mà Washington đã nắm được liên quan đến cáo buộc Bắc Kinh cân nhắc cung cấp vũ khí sát thương cho Moscow. Ông cho biết, các thông tin chi tiết sẽ được công bố sau và khẳng định hiện tại Bắc Kinh "chưa vượt qua lằn ranh đỏ".
                            </p>
                        </div>
                    </div>

                    <div className='comment_detail'>
                        <div className='comment_detail-header'>
                            <p className='comment_detail-title'>Thanh Vân</p>

                        </div>
                        <hr />
                        <div className='comment_detail-body'>
                            <p className='comment_detail-content'>
                                Người đứng đầu ngành ngoại giao Mỹ không nêu rõ bản chất thông tin mà Washington đã nắm được liên quan đến cáo buộc Bắc Kinh cân nhắc cung cấp vũ khí sát thương cho Moscow. Ông cho biết, các thông tin chi tiết sẽ được công bố sau và khẳng định hiện tại Bắc Kinh "chưa vượt qua lằn ranh đỏ".
                            </p>
                        </div>
                    </div>

                    <div className='comment_detail'>
                        <div className='comment_detail-header'>
                            <p className='comment_detail-title'>Đức Vượng</p>

                        </div>
                        <hr />
                        <div className='comment_detail-body'>
                            <p className='comment_detail-content'>
                                Người đứng đầu ngành ngoại giao Mỹ không nêu rõ bản chất thông tin mà Washington đã nắm được liên quan đến cáo buộc Bắc Kinh cân nhắc cung cấp vũ khí sát thương cho Moscow. Ông cho biết, các thông tin chi tiết sẽ được công bố sau và khẳng định hiện tại Bắc Kinh "chưa vượt qua lằn ranh đỏ".
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CommentModal writeComment={writeComment} post={props.post} />
        </>
    )
}
