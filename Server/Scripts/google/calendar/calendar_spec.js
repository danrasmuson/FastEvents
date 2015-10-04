require('dotenv').load(); // load .env
var calendar = require('./calendar');

describe('google calendar wrapper', function(){
 it('should provide authentication when I give a token', function(done){
   // you have to manually update this token
   calendar.auth({token: 'ya29.8AHJxws9KS3POtZA9FjZ7Uw7cu3BltcZhTAsAQzOHKa11D0YkOPx5abUiVV93p0Swjs_oA'})
     .forEach(function(auth){
       expect(auth.credentials.access_token).toBeDefined();
       done();
     })
 })
})
