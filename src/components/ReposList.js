import React from 'react';
import RepoDetails from './RepoDetails';

const ReposList = ( {repositories} ) => {
  return (
    <ul className="reposList">
      {
        repositories.map((repo, index) => (
          <RepoDetails key={repo.id} repository={repo} number={index}/>
        ))
      }
    </ul>
  )
}

export default ReposList;