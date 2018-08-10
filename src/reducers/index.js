import { combineReducers } from 'redux';

import auth from './auth_reducer';
import jobs from './jobs_reducer';
import likedJob from './likesReducer';

export default combineReducers({
  auth, jobs, likedJob
});
