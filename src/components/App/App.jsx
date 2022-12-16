import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList"
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css"
const App = () => {

    const data = [
        {label: "Going to learn React JS", important: true, id:"qa"},
        {label: "That is so good ", important: false, id:"qz"},
        {label: "I need Back again", important: false, id:"qk"},
    ]

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data}/>
            <PostAddForm />
        </div>
    )
}
  
  export default App;
  