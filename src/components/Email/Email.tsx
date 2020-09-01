import * as React from 'react';
import { useState } from 'react';
import { TSaveMailParams } from '../../store/userReducer';

import './styles.styl';

type TProps = {
  id: number | null;
  saveMail: (params: TSaveMailParams) => void;
};

const Email: React.FunctionComponent<TProps> = ({ saveMail, id }: TProps) => {
  const [valid, setValid] = useState(false);
  const [email, setEmail] = useState('');

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

  const sendMail = (): void => {
    saveMail({
      id,
      email
    });
  };

  return (
    <div className="email">
      <input
        type="email"
        value={email}
        className="input"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          validate(e.currentTarget.value);
          setEmail(e.currentTarget.value);
        }}
      />
      <button className="sendButton" disabled={!valid} onClick={sendMail}>
        Отправить
      </button>
    </div>
  );
};

export default Email;
