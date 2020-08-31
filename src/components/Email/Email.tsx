import * as React from 'react';
import { useState } from 'react';

import './styles.styl';

const Email: React.FunctionComponent = () => {
  const [valid, setValid] = useState(false);

  const validate = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const tested = re.test(email);

    if (!valid && tested) {
      setValid(true);
    }
    if (valid && !tested) {
      setValid(false);
    }
  };

  return (
    <div className="email">
      <input
        type="text"
        className="input"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          validate(e.currentTarget.value)
        }
      />
      <button className="sendButton" disabled={!valid}>
        Отправить
      </button>
    </div>
  );
};

export default Email;
