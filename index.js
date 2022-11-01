module.exports = hasFridayTheThirteenth = (date) => {
	const fd = new Date(date);
	const d = new Date(fd.getFullYear(), fd.getMonth());
	if (d.getDay() === 0) return true;
	return false;
};
