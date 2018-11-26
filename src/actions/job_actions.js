import axios from 'axios';

import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOB
} from '../constants';

const URL = 'https://jobs.github.com/positions.json?markdown=true';

export const fetchJobs = (region, callbackForNav) => async (dispatch) => {
  try {
    // // NOTE: axios does the fetching thing,calls the url and gets response
    const { latitude, longitude } = region;
    const url = `${URL}&lat=${latitude}&long=${longitude}`;
    console.log(url);

    const data = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    callbackForNav();
  } catch (e) {
    console.error(e);
  }
};

export const likeJob = (job) => ({
  type: LIKE_JOB,
  payload: job
});


export const clearLikedJobs = () => ({ type: CLEAR_LIKED_JOB });
