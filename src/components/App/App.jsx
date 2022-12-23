import { Component } from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList"
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css"

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: "Going to learn React JS", important: false, like:false, id:1},
                {label: "That is so good ", important: false, like:false, id:2},
                {label: "I need Back again", important: false, like:false, id:3},
            ],
            term: ""
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)

        this.maxId = 4
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after]
            return {
                data: newArr
            };
        })
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const oldItem = data[index]
            const newItem = {...oldItem, important: !oldItem.important}

            const newArr = [...data.slice(0, index), newItem ,...data.slice(index + 1) ]
            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const oldItem = data[index]
            const newItem = {...oldItem, like: !oldItem.like}

            const newArr = [...data.slice(0, index), newItem ,...data.slice(index + 1) ]
            return {
                data: newArr
            }
        })
    }

    searchPosts(items, term){
        if(term.length === 0){
            return items
        }
        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    render(){
        const {data, term} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.searchPosts(data, term)

        return (
            <div className="app">
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}
