import React from 'react';
import { connect } from 'dva';

const namespace = 'list';
const mapStateToProp = (state) => {
    const listData = state[namespace].data;
    const maxNum = state[namespace].maxNum;
    return {
        listData,
        maxNum
    };
};

const mapDiapatchToProps = (dispatch) => {
    return {
        addNewData: () => {
            dispatch({
                type: namespace + '/addNewData'
            });
        },
        initData: () => {
            dispatch({
                type: namespace + '/initData'
            });
        }
    }
}
@connect(mapStateToProp, mapDiapatchToProps)
class List extends React.Component {
    render() {
        return (
            <div>
                <ul>
                {
                    this.props.listData.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
                </ul>
                <button onClick={() => { this.props.addNewData() }}>
                    添加
                </button>
            </div>
        )
    }
}
export default List

