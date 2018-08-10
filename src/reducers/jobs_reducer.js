import {
  FETCH_JOBS,
  CLEAR_LIKED_JOB
} from '../constants';

const INITIAL_STATE = {
  data: []
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CLEAR_LIKED_JOB:
      return [];
    case FETCH_JOBS:
      return action.payload;
    default:
      return state;
  }
}
