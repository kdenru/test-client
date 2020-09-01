import { Dispatch } from 'react';

const LOAD_USER = 'LOAD_USER';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

const SAVE_MAIL = 'SAVE_MAIL';
const SAVE_MAIL_SUCCESS = 'SAVE_MAIL_SUCCESS';

export type TUser = null | {
  id: number;
  shared: boolean;
  email: null | string;
};

export type TStore = {
  user: TUser;
};

type TAction = {
  type: string;
  payload?: TUser;
};

export type TSaveMailParams = {
  id: number;
  email: string;
};

const initialState: TStore = {
  user: null
};

const userReducer = (state: TStore = initialState, action: TAction): TStore => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
    case SAVE_MAIL_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
  }
  return state;
};

export const loadUser = () => {
  return (dispatch: Dispatch<TAction>): void => {
    dispatch({ type: LOAD_USER });
    fetch('http://localhost:8080/user')
      .then((response) => response.json())
      .then((payload: TUser) => dispatch({ type: LOAD_USER_SUCCESS, payload }));
  };
};

export const saveMail = (params: TSaveMailParams) => {
  return (dispatch: Dispatch<TAction>): void => {
    dispatch({ type: SAVE_MAIL });
    fetch(`http://localhost:8080/user/${params.id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: params.email })
    })
      .then((response) => response.json())
      .then((payload: TUser) => dispatch({ type: SAVE_MAIL_SUCCESS, payload }));
  };
};

export default userReducer;
