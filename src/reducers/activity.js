import { getHotelsActivity } from 'lib/activityService';

const FETCH_ACTIVITY_INPROGRESS = 'BOOKING_ACTIVITY/FETCH_ACTIVITY_INPROGRESS';
const FETCH_ACTIVITY_SUCCESS = 'BOOKING_ACTIVITY/FETCH_ACTIVITY_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const INITIAL_STATE = {
  activity: [],
  activityLoading: false,
  error: ''
};

const fetchingActivityInPorgers = () => ({ type: FETCH_ACTIVITY_INPROGRESS });
const fetchActivityDataSucces = value => ({ type: FETCH_ACTIVITY_SUCCESS, payload: value });
const fetchError = value => ({ type: FETCH_ERROR, payload: value });

export const fetchActivity = () => dispatch => {
  dispatch(fetchingActivityInPorgers());
  getHotelsActivity()
    .then(data => dispatch(fetchActivityDataSucces(data)))
    .catch(err => dispatch(fetchError(JSON.stringify(err))));
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY_SUCCESS:
      return {
        ...state,
        activity: action.payload,
        activityLoading: false
      };
    case FETCH_ACTIVITY_INPROGRESS :
      return {
        ...state,
        activityLoading: true
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default: return state;
  }
};
