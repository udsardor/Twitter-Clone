import { Component } from "react";
import "./SearchPanel.css"

export default class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ""
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(e){
        const term = e.target.value;
        this.setState({term: term})
        this.props.onUpdateSearch(term)
    }
    
    render(){
         return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Search By Posts"
                onChange={this.onUpdateSearch}
            />
        )
    }
}
