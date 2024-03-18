// mindful-utils.js

const moment = require('moment');

// Function to calculate the total number of minutes from a duration string
function calculateTotalMinutes(durationString) {
  const duration = moment.duration(durationString);
  return duration.asMinutes();
}

// Function to check if a date is today
function isToday(date) {
  return moment(date).isSame(moment(), 'day');
}

// Function to format a duration string into a more human-readable format
function formatDuration(durationString) {
  const duration = moment.duration(durationString);
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  return `${hours} hours and ${minutes} minutes`;
}

module.exports = {
  calculateTotalMinutes,
  isToday,
  formatDuration
};
