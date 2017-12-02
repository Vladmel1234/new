const url = 'https://interview-booking-api.herokuapp.com/api';

export const getBookingSnapshot = () => {
  return fetch(`${url}/booking-snapshot`)
    .then(res => res.json());
};

export const getBookings = () => {
  return fetch(`${url}/bookings`)
    .then(res => res.json());
};

