import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { Button, Form, Input, Select, Switch } from "antd";
import UploadPicture from "./UploadPicture";
import { useDispatch } from "react-redux";
import { postNewPost, updatePost } from "../../redux/action/action";


// import * as types from "../../actions/index";
const { Title } = Typography;
const { TextArea } = Input;

export default function FormEditPost(props) {
    let { post } = props
    console.log(post, "Trong form");
    const [lock, setLock] = useState(false);
    const [currentPost, setCurrentPost] = useState({});
    useEffect(() => {
        setCurrentPost(post)
    }, [props])

    console.log(currentPost);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setCurrentPost({ ...currentPost, [name]: value });
    };
    const getImgUrl = (file) => {
        let filePath = file.name.split(".");
        setCurrentPost({ ...currentPost, image: filePath[0] });
    };
    const handleUpdate = () => {
        delete currentPost[""]
        dispatch(updatePost(currentPost))
        props.handleOk()
    };

    return (
        <div className="blog-main">
            <div className="form-box">
                <Title level={2} italic>
                    Chỉnh sửa bài viết
                </Title>
                <Form
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    onChange={handleChange}
                    layout="horizontal"
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={post}
                >
                    <Form.Item label="Title" name="title">
                        <Input name="title" id="inputTitle" />
                    </Form.Item>
                    <Form.Item label="Cataloge" name="cataloge">
                        <Select
                            labelInValue
                            onChange={(e) => {
                                setCurrentPost({ ...currentPost, cataloge: e.value });
                            }}
                        >
                            <Select.Option value="news">Thời sự</Select.Option>
                            <Select.Option value="social">Xã hội</Select.Option>
                            <Select.Option value="world">Thế giới</Select.Option>
                            <Select.Option value="sport">Thể thao</Select.Option>
                            <Select.Option value="culture">Văn hoá</Select.Option>
                            <Select.Option value="education">Giáo dục</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Sort Content" name="sortContent">
                        <TextArea rows={4} name="sortContent" id="inputSubBody" maxLength={250} showCount />
                    </Form.Item>
                    <Form.Item label="Content" name="content">
                        <TextArea rows={4} name="content" id="inputBody" />
                    </Form.Item>

                    <Form.Item label="Upload" valuePropName="fileList" name={"img"} >
                        <UploadPicture fileUrl={getImgUrl} post={post} />
                    </Form.Item>
                    <Form.Item label="Action">
                        <Button onClick={handleUpdate}>Cập nhật</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}