import React from 'react';

const RepoDetails = ( {repository, number} ) => {
  return (
    <li className="repoDetails">
      <ul>
        <li><h4>#{number + 1}</h4></li>
        <li><img className="avatar" src={repository.owner.avatar_url} alt={`Avatar for ${repository.owner.login}`}/></li>
        <li><a href={repository.html_url} target="_blank">{repository.name}</a></li>
        <li><h4>@{repository.owner.login}</h4></li>
        <li>{`${repository.stargazers_count} stars`}</li>
      </ul>
    </li>
  )
}

export default RepoDetails;