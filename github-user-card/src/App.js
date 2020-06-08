import React from 'react';
import './App.css';
import NavAppBar from './components/NavAppBar';
import UserSearchForm from './components/UserSearchForm';
import UserList from './components/UserList';
import TopUserCard from './components/TopUserCard';
import Typography from '@material-ui/core/Typography'
import Axios from 'axios';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      topUser: "",
      userSearch: "",
      followerList: [],
    }
  }

  componentDidMount(){
    Axios
      .get('https://api.github.com/users/davisblakep/followers')
      .then(res => {console.log("did mount res", res); this.setState({ followerList: res})})
      .catch(err => {console.log(err)});
    Axios
      .get('https://api.github.com/users/davisblakep')
      .then(res => {console.log("did mount top user", res); this.setState({ topUser: res})})
      .catch(err => {console.log(err)})
  }

  inputChange = (e) => {
    this.setState({ userSearch: e.target.value})
}

  onSubmit = (e) => {
    e.preventDefault();
    Axios
      .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then(res => {console.log(res); this.setState({ followerList: res})})
      .catch(err => {console.log("Errors all day", err)});
    Axios
      .get(`https://api.github.com/users/${this.state.userSearch}`)
     .then(res => {console.log(res); this.setState({ topUser: res})})
     .catch(err => {console.log("Errors all day", err)});
     this.setState({ userSearch: "" })
}

  render() {
    console.log("Followerlist state", this.state.followerList)
    return(
    <div className="App">
      <NavAppBar />
      <TopUserCard topUser={this.state.topUser} />
      <UserSearchForm userSearch={this.state.userSearch} onSubmit={this.onSubmit} inputChange={this.inputChange}/>
      <Typography variant="h2" style={{textAlign: "center", margin: "10%"}}>Followers</Typography>
      <UserList followerList={this.state.followerList} />
    </div>
    )};
}

export default App;
