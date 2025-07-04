const axios = require('axios');

async function fetchGithubData(githubId) {
  try {
    const url = `https://api.github.com/users/${githubId}`;
    const response = await axios.get(url);

    return {
      username: response.data.login,
      followers: response.data.followers,
      following: response.data.following,
      public_repos: response.data.public_repos,
      avatar_url: response.data.avatar_url,
      profile_url: response.data.html_url
    };
  } catch (error) {
    console.error('GitHub fetch error:', error.message);
    return null;
  }
}

module.exports = { fetchGithubData };
