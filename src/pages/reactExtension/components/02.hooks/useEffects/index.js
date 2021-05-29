function Demo() {
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }, [])
    return (
        <div>
            <h1>{count}&nbsp;&nbsp;&nbsp;effects</h1>
        </div>
    )
}

export default Demo