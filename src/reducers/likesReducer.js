import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_JOB,
  CLEAR_LIKED_JOB
} from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likedJob || [];
    case CLEAR_LIKED_JOB:
      return [];
    case LIKE_JOB:
      return _.uniqBy([
        action.payload, ...state
      ], 'id');
    default:
      return state;
  }
}
