import React, { Component } from 'react'
import Axios from 'axios';
import GithubCard from './components/GithubCard';
import Header from './components/Header';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userText: 'tlaudahl',
      user: {},
      followers: [],
      searchTerm: '',
    }
  }

  handleUserChange = e => {
    this.setState({
      userText: e.target.value
    })
  }

  handleFilterChange = e => {
    this.setState({
        searchTerm: e.target.value,
      })
    }

  fetchNewUser = e => {
    e.preventDefault();
    // fetch a new user
    document.getElementById('userSearch').value = '';
    Axios.all([
      Axios.get(`https://api.github.com/users/${this.state.userText}`),
      Axios.get(`https://api.github.com/users/${this.state.userText}/followers`)
    ])
    .then(Axios.spread((userRes, followRes) => {
      this.setState({
        user: userRes.data,
        followers: followRes.data
      });
    }))
    .catch(err => console.log('That user may not exist', err));
  }

  filterFollowers = e => {
    e.preventDefault();

  }

  componentDidMount() {
    Axios.all([
      Axios.get(`https://api.github.com/users/${this.state.userText}`),
      Axios.get(`https://api.github.com/users/${this.state.userText}/followers`)
    ])
    .then(Axios.spread((userRes, followRes) => {
      this.setState({
        user: userRes.data,
        followers: followRes.data
      });
    }))
    .catch(err => console.log('That user may not exist', err));
  };

  render() {
    return (
      <div>
        <Route exact path='/' render={() => <Header handleUserChange={this.handleUserChange} fetchNewUser={this.fetchNewUser} /> } />
        <Route exact path='/' render={() => <GithubCard user={this.state.user} followers={this.state.followers.filter(follower => follower.login.toLowerCase().includes(this.state.searchTerm.toLowerCase()))} handleFilterChange={this.handleFilterChange}/>}/>
      </div>
    )
  }
}