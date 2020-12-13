import React from 'react'
import App from '@/components/view/app.jsx'
import { BrowserRouter } from 'react-router-dom'

class Father extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    }
}
export default Father