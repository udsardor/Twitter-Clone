import "./PostListItem.css"
const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Assalomu Aleykum
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i class="fa fa-star"></i>
                </button>
                <button type="button" className="trash btn-sm btn-trash">
                    <i class="fa fa-trash"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem