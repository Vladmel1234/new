import { getBookingSnapshot, getBookings } from 'lib/bookingService';

const FETCH_SNAPSHOT_INPROGRESS = 'BOOKING_SNAPSHOT/FETCH_SNAPSHOT_INPROGRESS';
const FETCH_SNAPSHOT_SUCCESS = 'BOOKING_SNAPSHOT/FETCH_SNAPSHOT_SUCCESS';
const FETCH_BOOKINGS_INPROGRESS = 'BOOKINGS/FETCH_BOOKINGS_INPROGRESS';
const FETCH_BOOKINGS_SUCCESS = 'BOOKINGS/FETCH_BOOKINGS_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const INITIAL_STATE = {
  snapshot: {},
  bookings: [],
  bookingLoading: false,
  snapshotLoading: false,
  error: ''
};

const fetchingSnapshotInPorgers = () => ({ type: FETCH_SNAPSHOT_INPROGRESS });
const fetchingBookingsInPorgers = () => ({ type: FETCH_BOOKINGS_INPROGRESS });
const fetchSnapshotDataSucces = value => ({ type: FETCH_SNAPSHOT_SUCCESS, payload: value });
const fetchBookingDataSucces = value => ({ type: FETCH_BOOKINGS_SUCCESS, payload: value });
const fetchError = value => ({ type: FETCH_ERROR, payload: value });

export const fetchSnapshot = () => dispatch => {
  dispatch(fetchingSnapshotInPorgers());
  getBookingSnapshot()
    .then(data => dispatch(fetchSnapshotDataSucces(data)))
    .catch(err => dispatch(fetchError(JSON.stringify(err))));
};


export const fetchBookings = () => dispatch => {
  dispatch(fetchingBookingsInPorgers);
  getBookings()
    .then(data => dispatch(fetchBookingDataSucces(data)))
    .catch(err => dispatch(fetchError(JSON.stringify(err))));
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SNAPSHOT_SUCCESS:
      return {
        ...state,
        snapshot: action.payload,
        snapshotLoading: false
      };
    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action.payload,
        bookingLoading: false
      };
    case FETCH_SNAPSHOT_INPROGRESS :
      return {
        ...state,
        snapshotLoading: true
      };
    case FETCH_BOOKINGS_INPROGRESS:
      return {
        ...state,
        bookingLoading: true
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default: return state;
  }
};
