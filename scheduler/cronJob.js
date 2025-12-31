const cron = require('node-cron');
const { updateAllUsersData } = require('../controllers/dataController');

function startCronJob() {
  // Run every day at midnight (12:00 AM)
  cron.schedule('0 0 * * *', async () => {
    console.log('Midnight Schedular started: Refreshing all user data...');
    await updateAllUsersData();
    console.log('Midnight Schedular complete: All user data updated.');
  });
}

module.exports = startCronJob;
