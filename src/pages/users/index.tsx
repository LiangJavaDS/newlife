import React, { useState } from 'react'
import { Table, Popconfirm, message } from 'antd';
import { connect } from 'dva'
import { UserModal } from '@/pages/users/components/UserModal.tsx'
const index = ({ users, dispatch }) => {
    //数组第一个参数变量名，第二个参数函数
    const [modalVisible, setModalVisible] = useState(false)//初始值
    const [record, setRecord] = useState(null)
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (<a>{text}</a>)
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Create_Time',
            dataIndex: 'create_time',
            key: 'create_time',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <span>
                    <a onClick={() => { setModalVisible(true); setRecord(record) }}>Edit</a>&nbsp;&nbsp;&nbsp;
                    <Popconfirm
                        title={"你确定删除id为" + record.id + "的信息吗?"}
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="确定"
                        cancelText="取消"
                    >
                        <a onClick={() => { setRecord(record) }}>Delete</a>
                    </Popconfirm>
                </span>
            }
        },
    ];

    const closeModal = () => { setModalVisible(false) }

    const onFinish = values => {
        if(record){
            let id = record.id
            dispatch({
                type: 'users/edit',
                payload: { values, id }
            })
        }else{
            dispatch({
                type: 'users/add',
                values: values
            })
        }
        setModalVisible(false)
    };

    const confirm = () => {
        let id = record.id
        dispatch({
            type: 'users/delete',
            id: id,
        })
    }

    const cancel = (record) => {

    }

    const addUser = () => {
        setModalVisible(true)
        setRecord(undefined)
    }

    return (
        <div className='list-table'>
            <Table columns={columns} dataSource={users.data} rowKey='id' />
            <button onClick={addUser}>新增</button>
            <UserModal record={record} visible={modalVisible} handleOk={closeModal} handleCancel={closeModal} onFinish={onFinish} />
        </div>
    )
}
//let users = store.users等价于let {users} = store
//namespace的名字
const mapStateToProps = ({ users }) => {
    return {
        users//model的数据
    };
};
export default connect(mapStateToProps)(index)