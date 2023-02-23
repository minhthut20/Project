import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { images } from '../../assets/images/picture';
import { Comment } from '../comment/Comment';

export default function Detail() {
    let postState = useSelector(state => state.post)
    let params = useParams()
    let [postContent, setPostContent] = useState("")

    useEffect(() => {
        let postValue = postState.find((post) => {
            return post.cataloge === params.cataloge && post.id.toString() === params.id
        })
        setPostContent(postValue)
    }, [postState])

    let imgUrl = images[postContent.image]

    return (
        <>

            <div className='detailPost'>
                <h1>{postContent.title}</h1>
                <img src={imgUrl} alt="#" />
                <p style={{ whiteSpace: "pre-line" }}>{postContent.content}</p>
            </div>
            <Comment post={postContent}/>
        </>
    )
}
