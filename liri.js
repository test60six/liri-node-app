 console.log("test"); 

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id:e2d3434be125475fbca8c7ce1ffc3b7a,
  secret:dddceb6244074141a465ea5879a9e4ad
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });