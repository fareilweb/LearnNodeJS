var request = require('request');
var cheerio = require('cheerio');

request('http://localhost:8080', function (error, response, body) {

    console.log(error);

  if (!error && response.statusCode == 200) {
    
    console.log(body);
    
    var $ = cheerio.load(body);    
    $('a').each(function (index, el) {
      console.log(el.attribs);
    });
  }
});