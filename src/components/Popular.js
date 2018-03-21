import React, { Component } from 'react';
import Languages from './Languages';
import api from '../utils/api';
import ReposList from './ReposList';

class Popular extends Component {
  state = {
    selectedLanguage: "All",
    repos: null
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  
  updateLanguage = (lang) => {
    this.setState({ 
      selectedLanguage: lang,
      repos: null
    });

    api.fetchPopularRepos(lang)
      .then((repos) => {
        this.setState({
          repos: repos
        })
      })
  };

  render () {
    return(
      <div>
        <Languages
          selectLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        { !this.state.repos ? <h3>Loading...</h3> : <ReposList repositories={this.state.repos}/> }

      </div>
    )
  }
}

export default Popular;