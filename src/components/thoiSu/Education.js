import React,{Fragment} from 'react'
import Common from './Common'
import { useSelector } from 'react-redux'

export default function Education() {
    const postNews = useSelector(state => state.post)
    const postElement = postNews.map((post) => {
        if (post.cataloge === "education") {
            return <Common key={post.id} post={post} />
        }
        else {
            return <Fragment key={post.id} />
        }
    })
    return (
        <div className="cases">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage text_align_center ">
                            <h2>Tin tức giáo dục</h2>
                            <p>Cập nhập chính xác mọi nơi, mọi lúc, mọi TV</p>
                        </div>
                    </div>
                </div>
                <div className="row d_flex">
                    {postElement}
                </div>
            </div>
        </div>
    )
}
