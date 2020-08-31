import * as React from 'react';

import './styles.styl';

import Share from './components/Share';

const App: React.FunctionComponent = () => {
  return (
    <div className="wrapper">
      <a
        target="_blank"
        className="logo"
        rel="noreferrer"
        href="https://aviasales.ru"
      />
      <div className="content">
        <div className="title">Чтобы выиграть путешествие</div>
        <Share />
      </div>
    </div>
  );
};

export default App;
