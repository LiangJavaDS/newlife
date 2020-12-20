import React, { useEffect } from 'react'
import { Modal, Button, Form, Input } from 'antd'

export const UserModal = (props) => {
    const [form] = Form.useForm()
    const {record,visible,handleOk,handleCancel} = props
    //当visible变化的时候调用箭头函数
    useEffect(() => { 
        form.setFieldsValue(record) 
    }, [visible])
    return (
        <Modal
            title='UserModal'
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            forceRender
        >

            <Form
                name="basic"
                form={form}
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