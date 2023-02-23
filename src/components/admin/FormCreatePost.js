import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Form, Input, Select, Switch } from "antd";
import UploadPicture from "./UploadPicture";
import { useDispatch } from "react-redux";
import { postNewPost } from "../../redux/action/action";
import { useNavigate } from "react-router-dom";


// import * as types from "../../actions/index";
const { Title } = Typography;
const { TextArea } = Input;

export default function FormCreatePost() {
    const [lock, setLock] = useState(false);
    const [newPost, setNewPost] = useState({ title: "", cataloge: "", sortContent: "", content: "", comment: [], image: "" });
    let navigate = useNavigate()
    const dispatch = useDispatch();
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setNewPost({ ...newPost, [name]: value });
    };
    // console.log(newPost);
    const getImgUrl = (file) => {
        let filePath = file.name.split(".");
        setNewPost({ ...newPost, image: filePath[0] });
    };
    const handleCreate = () => {
        delete newPost[""]
        dispatch(postNewPost(newPost))

        window.location.href="/admin/newpost"
        // navigate("/admin/newpost")
        // dispatch(types.act_add_new_post({ ...newPost, status: lock }));
    };

    return (
        <div className="blog-main">
            <div className="form-box">
                <Title level={2} italic>
                    Create a new Post
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
                    initialValues={newPost}
                >
                    <Form.Item label="Title">
                        <Input name="title" id="inputTitle" />
                    </Form.Item>
                    <Form.Item label="Cataloge">
                        <Select
                            labelInValue
                            onChange={(e) => {
                                setNewPost({ ...newPost, cataloge: e.value });
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
                    <Form.Item label="Sort Content">
                        <TextArea rows={4} name="sortContent" id="inputSubBody" maxLength={250} showCount />
                    </Form.Item>
                    <Form.Item label="Content">
                        <TextArea rows={4} name="content" id="inputBody" />
                    </Form.Item>

                    <Form.Item label="Upload" valuePropName="fileList" name={"img"}>
                        <UploadPicture fileUrl={getImgUrl} />
                    </Form.Item>
                    <Form.Item label="Action">
                        <Button onClick={handleCreate}>Create</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}