import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'
import { images } from '../../assets/images/picture'

export default function Common(props) {
    let { post } = props
    let navigate = useNavigate()
    const seeMorePost = () => {
        let url = `/${post.cataloge}/${post.id}`
        navigate(url)
    }
    let imageUrl = images[post.image]
    return (
        <div className=" col-md-4">
            <div className="latest text_align_center">
                <figure><img src={imageUrl} alt="#" /></figure>
                <div className="nostrud">
                    <h3>{post.title}</h3>
                    <p>{post.sortContent}</p>
                </div>
                <button type='primary' className='view_detail_btn' onClick={seeMorePost}>
                    Xem chi tiết
                </button>
            </div>
        </div>
    )
}
