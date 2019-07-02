import React, { Component } from "react";
import styled from 'styled-components';
import axios from 'axios';
import Input from '../components/input';
import SearchResult from '../components/search-result';
import Button from '../components/button';
import Loader from '../components/loader';


const Container = styled.div`
    text-align: center;
    margin-top: 100px;
    font-family: sans-serif;
`;

const Mobile = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

class Home extends Component {

  state = {
    result: [],
    user: '',
    repository: '',
    count: 1,
    loader: false,
    error: false
  }

  fetchData = () => {
    const { user, repository, count, moreButton } = this.state;
    const url = `https://api.github.com/repos/${user}/${repository}/issues?page=${count}&per_page=10`;
    const params = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    };

    this.setState({ 
      loader: true,
      error: false
    })
    
    axios(url, params)
      .then(response => this.setState(prevState => {
          const { result } = prevState;
          return {
            result: [ ...result, response.data ],
            loader: false
          }
        }
      ))
      .catch(() => this.setState({ error: true, result: [], loader: false }))
  }
  
  onChangeUser = e => {
    this.setState({
      user: e.target.value,
      // result: []
    })
  }

  onChangeRepository = e => {
    this.setState({
      repository: e.target.value,
      // result: []
    })
  }

  moreIssues = () => {
    this.setState({
      count: ++this.state.count
    })
    this.fetchData()
  }

  showMoreButton = () => { 
    const { loader, result } = this.state;

    if (loader) return <Loader/>
      else if (result.length > 0) return <Button onClick={this.moreIssues}>More</Button>
  }

  render() {
    const { result, user, repository, error } = this.state;
    const { onChangeUser, onChangeRepository, fetchData } = this;

    return (
      <Container>
        <h1>issues on githab.</h1>
        <Mobile>
          <Input value={user}
                 onChange={onChangeUser} 
                 placeholder='user'/>
          <Input value={repository} 
                 onChange={onChangeRepository} 
                 placeholder='repository'/>
          <Button onClick={fetchData}>Search</Button>
        </Mobile>
        <SearchResult result={result}/>
        {this.showMoreButton()}
        {error && <p>По вашему запросу ничего не найдено</p>}
      </Container>
    );
  }
}

export default Home;
