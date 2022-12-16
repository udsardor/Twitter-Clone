import "./PostAddForm.css"
const  PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="What Are You Thinking About"
                className="form-control new-post-label"
            />
            <button className="btn btn-outline-secondary" type="submit">
                Add Post
            </button>
        </form>
    )
}
export default PostAddForm