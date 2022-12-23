import { Component } from "react"
import "./PostAddForm.css"
export default class PostAddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
        this.handleValue = this.handleValue.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleValue(e){
        this.setState({
            value: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        this.state.value.length === 0 ?
        alert("should to write something") : this.props.onAdd(this.state.value)

        
        this.setState({value: ""})
    }

    render(){
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="What Are You Thinking About"
                    className="form-control new-post-label"
                    value={this.state.value}
                    onChange={this.handleValue}
                />
                <button className="btn btn-outline-secondary" 
                        type="submit">
                    Add Post
                </button>
            </form>
        )
    }
}
