import React, { Component } from 'react';
import Languages from './Languages';
import fetchPopularRepos from '../utils/api';

class Popular extends Component {
  state = {
    selectedLanguage: "All"
  }

  updateLanguage = (lang) => {
    this.setState({ selectedLanguage: lang });
  }

  render () {
    return(
      <div className="popular">
        <Languages
          selectLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

export default Popular;