import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import data from './jsonData.json';
import './JsonProfile.css';

export const JsonProfile = () => {
  return (
    <section className="container json-profile-section">
      <div className="json-profile">
        <h3 className="title">JSON Profile</h3>
        <div className='console'>
          <p>jesus.json</p>
          <SyntaxHighlighter language="json" style={gml} showLineNumbers className='code' wrapLines={true} customStyle={{background: 'rgba(255, 255, 255, 0)'}}>
            {JSON.stringify(data, null, 3)}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

