import * as React from 'react';

import {
  FacebookShareButton,
  VKShareButton,
  TwitterShareButton,
  OKShareButton
} from 'react-share';

import './styles.styl';

import { TSaveShareParams } from '../../store/userReducer';

type TProps = {
  id: number | null;
  saveShare: (params: TSaveShareParams) => void;
};

const Share: React.FunctionComponent<TProps> = ({ saveShare, id }: TProps) => {
  const afterShare = () => {
    saveShare({ id });
  };

  return (
    <div className="shareContainer">
      <FacebookShareButton
        url="https://aviasales.ru"
        onShareWindowClose={afterShare}
      >
        <div className="share fb" />
      </FacebookShareButton>
      <VKShareButton url="https://aviasales.ru" onShareWindowClose={afterShare}>
        <div className="share vk" />
      </VKShareButton>
      <TwitterShareButton
        url="https://aviasales.ru"
        onShareWindowClose={afterShare}
      >
        <div className="share tw" />
      </TwitterShareButton>
      <OKShareButton url="https://aviasales.ru" onShareWindowClose={afterShare}>
        <div className="share ok" />
      </OKShareButton>
    </div>
  );
};

export default Share;
