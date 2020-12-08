import React from 'react'
import CommentAdd from '@/components/CommentAdd.jsx'
import CommentList from '@/components/CommentList.jsx'

class A extends React.Component {
    state = {
        repoName: '', 
        repoUrl: ''
    }

    componentDidMount() {
        const url = 'https://api.github.com/search/repositories?q=react&sort=stars'
        axios.get(url)
            .then(response => {
                const result = response.data
                console.log(response)
                //得到数据
                const { name, html_url } = result.item[0]
                this.setState({ repoName: name, repoUrl: html_url })
            })
    }

    render() {
        const { repoName, repoUrl } = this.state
        if (!repoName) {
            return <h1>Loading...</h1>
        } else {
            return <h2>Most star repo is<a href='repoUrl'>repoName</a></h2>
        }
        // return (
        //     <div>

        //     </div>
        // )
    }
}
export default A