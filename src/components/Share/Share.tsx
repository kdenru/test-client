import * as React from 'react';
import 'sharer.js';

import './styles.styl';

const Share: React.FunctionComponent = () => {
  return (
    <div className="shareContainer">
      <div
        className="share vk"
        data-sharer="vk"
        data-title="Выиграй путешествие!"
        data-url="https://aviasales.ru"
      />
      <div
        className="share fb"
        data-sharer="facebook"
        data-title="Выиграй путешествие!"
        data-url="https://aviasales.ru"
      />
      <div
        className="share tw"
        data-sharer="twitter"
        data-title="Выиграй путешествие!"
        data-url="https://aviasales.ru"
      />
      <a
        className="share ok"
        data-sharer="okru"
        data-title="Выиграй путешествие!"
        data-url="https://aviasales.ru"
      />
    </div>
  );
};

export default Share;
