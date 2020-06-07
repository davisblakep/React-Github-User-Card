import React from 'react';
import './App.css';
import NavAppBar from './components/NavAppBar';
import UserSearchForm from './components/UserSearchForm';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: "",
      userSearch: "",
      userList: [],
    }
  }

  render() {
    return(
    <div className="App">
      <NavAppBar />
      <UserSearchForm />
    </div>
    )};
}

export default App;
