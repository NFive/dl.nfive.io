const { Octokit } = require('@octokit/rest');

module.exports = (owner, repo) => async (_, res) => {
  const release = new Octokit().rest.repos.getLatestRelease({
    owner,
    repo
  });

  res.writeHead(302, { 'Location': JSON.stringify(release) });
  res.end();
};
