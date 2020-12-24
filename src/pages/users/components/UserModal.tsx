import React, { useEffect } from 'react'
import { Modal, Button, Form, Input } from 'antd'

export const UserModal = (props) => {
    const [form] = Form.useForm()
    const { record, visible, handleOk, handleCancel,onFinish } = props
    //当visible变化的时候调用箭头函数
    useEffect(() => {
        form.setFieldsValue(record)
    }, [visible])

    const onOk = () => {
        form.submit()
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal
            title='UserModal'
            visible={visible}
            onOk={onOk}
            onCancel={handleCancel}
            forceRender
        >
            <Form
                name="basic"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Create_Time"
                    name="create_time"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="status"
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}