import * as React from 'react';

import './styles.styl';

import Share from './components/Share/Share';
import Email from './components/Email/Email';

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
        <div className="block">
          <div className="header">
            <div className="number">1</div>
            <div className="text">Поделись с друзьями:</div>
          </div>
          <Share />
        </div>
        <div className="block">
          <div className="header">
            <div className="number">2</div>
            <div className="text">Оставь почту:</div>
          </div>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default App;
