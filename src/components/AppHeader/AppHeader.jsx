import "./AppHeader.css"
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>UDSardor</h1>
            <h2>{`${allPosts} Posts, like ${liked}`}</h2>
        </div>
    )
}

export default AppHeader