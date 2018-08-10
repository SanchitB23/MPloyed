import axios from 'axios';
// import reverseGeocode from 'latlng-to-zip';
// import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOB
} from '../constants';

// const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const URL = 'https://jobs.github.com/positions.json';

// const JOB_QUERY_PARAMS = {
//   publisher: '4201738803816157', // FIXME: get publisherID
//   format: 'json',
//   v: '2',
//   latlong: 1,
//   radius: 10,
//   q: 'javascript'
// };

// const buildJobsUrl = (zip) => {
//   const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
//   console.log('query', query);
//   return `${JOB_ROOT_URL}${query}`;
// };
export const fetchJobs = (region, callbackForNav) => async (dispatch) => {
  try {
    // const zip = await reverseGeocode(region);
    // const url = buildJobsUrl(zip);
    // // NOTE: axios does the fetching thing,calls the url and gets response
    // const { data } = await axios.get(url);
    // console.log('data', data);
    const { latitude, longitude } = region;
    const url = `${URL}?lat=${latitude}&long=${longitude}`;
    // console.log(url);
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
