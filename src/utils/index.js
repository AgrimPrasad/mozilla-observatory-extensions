import moment from 'moment';

export const toLocalTime = (timeString, format) => {
	const localtime = moment.utc(timeString, format).toDate();
	return moment(localtime).format('MMM Do YY, h:mm:ss a');
};

export const calcDuration =  (startTime, endTime) => {
	return (moment.utc(endTime, 'ddd, DD MMM YYYY HH:mm:ss zz') -
      moment.utc(startTime, 'ddd, DD MMM YYYY HH:mm:ss zz')) / 1000;
}

export const scoreStyleMap = (score) => {
	if (score < 25) {
		return "danger";
	} else if (score < 50) {
		return "warning";
	} else if (score < 90) {
		return "info";
	} else {
		return "success"
	}
}

export const passedTestsStyleMap = (passedTests) => {
	if (passedTests < 3) {
		return "danger";
	} else if (passedTests < 6) {
		return "warning";
	} else if (passedTests < 10) {
		return "info";
	} else {
		return "success"
	}
}