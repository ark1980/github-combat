import React, { Component } from 'react';
import Languages from './Languages';
import fetchPopularRepos from '../utils/api';

class Popular extends Component {
  state = {
    selectedLanguage: "All"
  }

  onClickHandle = (lang) => {
    this.setState({ selectedLanguage: lang });
  }

  render () {
    return(
      <div className="popular">
        <Languages
          selectLanguage={this.state.selectedLanguage}
          onSelect={this.onClickHandle}
        />
      </div>
    )
  }
}

export default Popular;