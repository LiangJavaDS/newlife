import React, { useEffect } from 'react'
import { Modal, Form, Input, message } from 'antd'
import { SingleUserType, FormValues } from '@/pages/users/data.d';

interface UserModalProps {
    record: SingleUserType
    visible: boolean,
    handleCancel: () => void,
    onFinish: (values: FormValues) => void,
}

export const UserModal = (props: UserModalProps) => {
    const [form] = Form.useForm()
    const { record, visible, handleCancel, onFinish } = props
    //当visible变化的时候调用箭头函数
    useEffect(() => {
        record ? form.setFieldsValue(record) : form.resetFields()
    }, [visible])

    const onOk = () => {
        form.submit()
    }

    const onFinishFailed = (errorInfo: any) => {
        message.error(errorInfo.errorFields[0].errors[0])   
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