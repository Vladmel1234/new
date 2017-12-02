const url = ' https://interview-booking-api.herokuapp.com/api';

export const getHotelsActivity = () => {
  return fetch(`${url}/recent-activity`)
  .then(res => res.json())
};