import moment from 'moment';

export const toLocalTime = (timeString, format) => {
	const localtime = moment.utc(timeString, format).toDate();
	return moment(localtime).format('LLL');
};

export const calcDuration =  (startTime, endTime) => {
	return (moment.utc(endTime, 'ddd, DD MMM YYYY HH:mm:ss zz') -
      moment.utc(startTime, 'ddd, DD MMM YYYY HH:mm:ss zz')) / 1000;
}