const request = require('request-promise');

module.exports = async (req, res) => {
  var json = await request({
    uri: 'https://bintray.com/api/v1/packages/nfive/NFive/NFive/versions/_latest',
    json: true
  });

  res.writeHead(302, {'Location': `https://dl.bintray.com/nfive/NFive/${json.name}/nfive.zip`});
  res.end();
};
