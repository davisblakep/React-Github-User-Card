import React from 'react';
import './App.css';
import NavAppBar from './components/NavAppBar';
import UserSearchForm from './components/UserSearchForm';
import UserList from './components/UserList';
import Axios from 'axios';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: "",
      userSearch: "",
      followerList: [],
    }
  }

  inputChange = (e) => {
    this.setState({ userSearch: e.target.value})
}

  onSubmit = (e) => {
    e.preventDefault();
    Axios
      .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then(res => {console.log(res); this.setState({ followerList: res})})
      .catch(err => {console.log("Errors all day", err)})
    this.setState({ userSearch: "" })
}

  render() {
    console.log("Followerlist state", this.state.followerList)
    return(
    <div className="App">
      <NavAppBar />
      <UserSearchForm userSearch={this.state.userSearch} onSubmit={this.onSubmit} inputChange={this.inputChange}/>
      <UserList followerList={this.state.followerList} />
    </div>
    )};
}

export default App;
