import * as React from 'react';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import './styles.styl';

import Share from './components/Share/Share';
import Email from './components/Email/Email';

import {
  TUser,
  TStore,
  loadUser,
  saveMail,
  TSaveMailParams
} from './store/userReducer';

type TProps = {
  user: TUser;
  loadUser: () => void;
  saveMail: (params: TSaveMailParams) => void;
};

class App extends PureComponent<TProps> {
  componentDidMount() {
    const { user, loadUser } = this.props;
    if (!user) loadUser();
  }

  render() {
    const { user, saveMail } = this.props;
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
          <div
            className={user && user.shared ? 'block block_disabled' : 'block'}
          >
            <div className="header">
              <div className="number">1</div>
              <div className="text">Поделись с друзьями:</div>
            </div>
            <Share />
          </div>
          <div
            className={user && user.email ? 'block block_disabled' : 'block'}
          >
            <div className="header">
              <div className="number">2</div>
              <div className="text">Оставь почту:</div>
            </div>
            <Email saveMail={saveMail} id={(user && user.id) || null} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: TStore) => ({
  user: state.user
});

const mapDispatchToProps = {
  loadUser,
  saveMail
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
