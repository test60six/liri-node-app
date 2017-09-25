 console.log("test");
 // var data = process.argv[2];
 // var data1 = process.argv[3];
 // var data2 = process.argv[4];
 // var data3 = process.argv[5];


 var fs = require("fs");

 var request = require("request");
 var keys=require("./keys.js");

 request("http://www.omdbapi.com/?apikey=[a3c5d16d]&r"), function(error, response, body) {

             if (!error && response.statusCode === 200) {

                 console.log(body);
             }
         };

         // var SpotifyWebApi = require('spotify-web-api-node');


         // var spotifyApi = new SpotifyWebApi({
         //     clientId: 'e2d3434be125475fbca8c7ce1ffc3b7a',
         //     clientSecret: '57d8efbc8e954218bc8a2e3f5d4ab76e',

         // });

         // var SpotifyWebApi = require('spotify-web-api-node');

         // //var spotifyApi = new SpotifyWebApi();

         // spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
         // .then(function(data) {
         //     console.log('Artist information', data.body);
         // }, function(err) {
         //     console.error(err);
         // });


         var Twitter = require('twitter');
 //console.log(keys);
var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret:  keys.consumer_secret,
  access_token_key:  keys.token_key,
  access_token_secret:  keys.token_secret,
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets.length);
    console.log(tweets[0].text);
  }
});