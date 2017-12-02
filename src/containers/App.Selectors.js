import { fetchSnapshot, fetchBookings } from 'reducers/bookings';
import { fetchActivity } from 'reducers/activity';
import moment from 'moment';
import { take, groupBy, orderBy, map } from 'lodash';


const betweenTwoDates = (firstDate, secondDate) => {
  const from = moment(firstDate.replace('-', '/'), 'D/M/YYYY');
  const to = moment(secondDate.replace('-', '/'), 'D/M/YYYY');
  return to.diff(from, 'hours');
};


const getBestEmploeys = (bookings) => {
  const emploeys = groupBy(bookings.reduce((sellingEmploeys, booking) => {
    if (booking.employee) {
      return sellingEmploeys.concat([{
        ...booking.employee,
        hours: betweenTwoDates(booking.checkInDate, booking.checkOutDate)
      }]);
    }
    return sellingEmploeys;
  }, []), 'id');

  const bestSellers = take(orderBy(map(emploeys, (employe) => {
    return employe.reduce((sum, amount, i, a) => {
      if (i < a.length - 1 && a.length) {
        sum = {
          ...amount,
          hours: parseInt(amount.hours, 10) > parseInt(a[i + 1].hours, 10) ? parseInt(amount.hours, 10) : parseInt(a[i + 1].hours, 10)
        };
      } else {
        sum = {
          ...amount
        };
      }
      return sum;
    }, {});
  }), ['hours'], ['desc']), 3);
  return bestSellers;
};

export const mapStateToProps = state => ({
  snapshot: state.bookings.snapshot,
  bookings: state.bookings.bookings,
  activitys: state.activity.activity,
  emploeys: getBestEmploeys(state.bookings.bookings)
});

export const mapDispatchToProps = {
  getSnapshot: fetchSnapshot,
  getBookings: fetchBookings,
  getActivity: fetchActivity
};
