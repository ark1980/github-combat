import React from 'react';

const Languages = ({ selectLanguage, onSelect }) => {
  const languages = ["All", "Javascript", "Java", "Python", "C#", "Ruby"];
  return (
   <div>
    <ul className="languages">
      {
        languages.map((language, index) => (
          <li 
            style={language === selectLanguage ? {color: "rgb(0, 108, 112)", fontWeight: "bold"} : null}
            key={index}
            onClick={onSelect.bind(null, language)}
          >
            {language}
          </li>
        ))
      }
    </ul>
   </div>
 )
}

export default Languages;

