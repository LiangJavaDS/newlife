import React from 'react';
import { render } from 'react-dom';
import { Table, Divider, Tags, Space, label, input } from 'antd';
import { connect } from 'dva'

const { Column } = Table;
const namespace = 'userList'

const mapStateToProps = (state) => {
    let UserData = state[namespace].UserData;
    let UserNo = state[namespace].UserNo;
    let User = state[namespace].User;
    return { UserData: UserData, UserNo: UserNo, User: User }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init() {
            dispatch({ type: namespace + '/initData' })
        },
        delete(index) {
            dispatch({ type: namespace + '/delete', index })
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class UserList extends React.Component {
    componentDidMount() {
        this.props.init();
    }
    onDelete = () => {
        // console.log("执行删除")
        this.props.delete();
    }
    render() {
        // console.log("12121", this.props)
        // console.log("12122", this.props.UserData)
        // this.props.UserData
        return (
            <div>
                <form>
                    <label for="male">Male</label>
                    <input type="radio" name="sex" id="male" />
                    <br />
                    <label for="female">Female</label>
                    <input type="radio" name="sex" id="female" />
                </form>
                <Table dataSource={this.props.UserData}>
                    <Column
                        title='姓名'
                        dataIndex='name'
                        key='name' />

                    <Column
                        title="年龄"
                        dataIndex="age"
                        key="age" />

                    <Column
                        title="地址"
                        dataIndex="address"
                        key="address" />

                    <Column
                        title="标签"
                        dataIndex="tags"
                        key="tags" />

                    <Column title='操作' key='action'
                        render={(text, record) => (
                            <span>
                                {/* <>()=>{console.log("98981",record)}</> */}
                                <a href="javascript:;">编辑</a><Divider type={"vertical"} />
                                <a href="javascript:;" onClick={() => { this.onDelete(record.key) }}>删除</a>
                            </span>)} />
                </Table>
            </div>
        )
    }
}
export default UserList


