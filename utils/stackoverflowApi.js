const axios = require('axios');

async function fetchStackOverflowData(soId) {
  try {
    const url = `https://api.stackexchange.com/2.3/users/${soId}?order=desc&sort=reputation&site=stackoverflow`;
    const response = await axios.get(url);
    const user = response.data.items[0];

    return {
      display_name: user.display_name,
      reputation: user.reputation,
      profile_image: user.profile_image,
      link: user.link,
      badges: {
        bronze: user.badge_counts.bronze,
        silver: user.badge_counts.silver,
        gold: user.badge_counts.gold
      }
    };
  } catch (error) {
    console.error('StackOverflow fetch error:', error.message);
    return null;
  }
}

module.exports = { fetchStackOverflowData };
