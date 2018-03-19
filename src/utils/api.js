import axios from 'axios';

module.export = {
  fetchPopularRepos: (language) => {
    const encodedURL = window.encodedURL("https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories");

    axios.get(encodedURL)
    .then(response => (
      response.data.items
    ))
  }
}