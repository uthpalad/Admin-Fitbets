import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import Register from "./components/Register/Register";
import UserList from "./components/appUsers/UserList";
import EditProfile from "./components/EditProfile";
import Category from "./components/Category/Category";
import Subcategory from "./components/Subcategory/Subcategory";
import AddUser from "./components/AddUser/AddUser";
import AddUserList from "./components/AddUserList/AddUserList";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryList from "./components/Category/CategoryList";
import SubCategoryList from "./components/Subcategory/SubCategoryList";
import userDetails from "./components/appUsers/userDetails";
import friends from "./components/appUsers/friends";
import idols from "./components/appUsers/idols";
import posts from "./components/appUsers/posts";
import challenges from "./components/appUsers/challenges";


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/categorylist">
            <CategoryList />
          </Route>
          <Route path="/subcategory">
            <Subcategory />
          </Route>
          <Route path="/subcategorylist">
            <SubCategoryList />
          </Route>
          <Route path="/adduser">
            <AddUser />
          </Route>
          <Route path="/userList" component={UserList} />
          <Route path="/adduserlist" component={AddUserList} />
          <Route path="/friends" component={friends} />
          <Route path="/idols" component={idols} />
          <Route path="/posts" component={posts} />
          <Route path="/challenges" component={challenges} />
          <Route path="/userDetails/:id" component={userDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
