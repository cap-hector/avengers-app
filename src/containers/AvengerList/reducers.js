import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

import { FETCH_AVENGER } from './constants';

const error = 'error';
const loading = 'loading';

export const initialState = fromJS({
  [error]: null,
  loaded: false,
  [loading]: false,
  avenger: [],
  selectedAvenger: null,
});

export default function AvengerListReducer (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_AVENGER: {
      return state.set(error, payload.error)
        .set(loading, false);
    }
    default:
      return state;
  }
}
