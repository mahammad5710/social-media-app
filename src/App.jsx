import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import {useState} from "react";
import PostListItemsProvider from "./store/post-list-items";
function App() {
  const [state,setState]=useState("Home");
  return (
    <PostListItemsProvider>
      <div className="containeer">
        <SideBar state={state} setState={setState}/>
        <div className="containeer1">
          <Header />
          {state === "Home" ? <PostList /> :<CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListItemsProvider>
  );
}

export default App;
