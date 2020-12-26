import React, { useState, FC } from 'react'
import { Table, Popconfirm, message } from 'antd';
import { connect, Dispatch, Loading, UserState } from 'umi'
import { UserModal } from '@/pages/users/components/UserModal.tsx'
import { SingleUserType, FormValues } from '@/pages/users/data.d';
//参数类型
interface UserPageProps {
    users: UserState,
    dispatch: Dispatch,
    userListLoading: boolean
}

const UserListPage: FC<UserPageProps> = ({ users, dispatch, userListLoading }) => {
    //数组第一个参数变量名，第二个参数函数
    const [modalVisible, setModalVisible] = useState(false)//初始值
    const [record, setRecord] = useState<SingleUserType | undefined>(undefined)
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
            render: (text: string) => (<a>{text}</a>)
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
            render: (text: string, record: SingleUserType) => {
                return <span>
                    <a onClick={() => { setModalVisible(true); setRecord(record) }}>Edit</a>&nbsp;&nbsp;&nbsp;
                    <Popconfirm
                        title={"你确定删除id为" + record.id + "的信息吗?"}
                        onConfirm={() => { confirm(record) }}
                        onCancel={cancel}
                        okText="确定"
                        cancelText="取消"
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </span>
            }
        },
    ];

    const closeModal = () => { setModalVisible(false) }

    const onFinish = (values: FormValues) => {
        if (record) {
            let id = record.id
            dispatch({
                type: 'users/edit',
                payload: { values, id }
            })
        } else {
            dispatch({
                type: 'users/add',
                values: values
            })
        }
        setModalVisible(false)
    };

    const confirm = (record: SingleUserType) => {
        let id = record.id
        dispatch({
            type: 'users/delete',
            id: id,
        })
    }

    const cancel = () => { }

    const addUser = () => {
        setModalVisible(true)
        setRecord(undefined)
    }

    return (
        <div className='list-table'>
            <Table columns={columns} dataSource={users.data} rowKey='id' loading={userListLoading} />
            <button onClick={addUser}>新增</button>
            <UserModal record={record} visible={modalVisible} handleOk={closeModal} handleCancel={closeModal} onFinish={onFinish} />
        </div>
    )
}
//let users = store.users等价于let {users} = store
//namespace的名字
const mapStateToProps = ({ users, loading }: { users: UserState, loading: Loading }) => {
    return {
        users,//model的数据
        userListLoading: loading.models.users
    };
};
export default connect(mapStateToProps)(UserListPage)