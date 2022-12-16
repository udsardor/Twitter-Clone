import PostListItem from "../PostListItem"
import "./PostList.css"
const PostList = ({posts}) => {
    const elements = posts.map((element) => {
        const {id, ...itemProps} = element
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps}/>
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList