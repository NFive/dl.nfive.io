const { Octokit } = require('@octokit/rest');

module.exports = (owner, repo) => async (_, res) => {
  const release = await new Octokit().rest.repos.getLatestRelease({
    owner,
    repo
  });

  res.writeHead(302, { 'Location': release.data.assets[0].browser_download_url });
  res.end();
};
