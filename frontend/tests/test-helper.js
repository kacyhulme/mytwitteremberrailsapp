import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';
import Pretender from 'pretender';
import Ember from 'ember';

setResolver(resolver);

Ember.onerror = function(error) {
  console.log(error);
  mocha.throwError(error);
};

beforeEach(function() {
  this.server = new Pretender(function() {
    this.get('/api/csrf', function(request) {
      return [
        200, {"Content-Type": "application/json"},
        JSON.stringify({
          "authenticity_token": "token"
        })
      ];
    });

    this.get('api/tweets', function(request) {
      return [
        200, {"Content-Type": "application/json"},
        JSON.stringify({
          "tweets": [
            {
              "id": 567910872066183200,
              "text": "RT @tehviking: I work with the smartest, kindest, coolest people. &lt;3 @cowboyd @fivetanley @kacyhulme @snowyrat",
              "retweet_count": 1,
              "user_name": "Kacy",
              "location": "Austin, Texas",
              "description": "rails/ember developer with a passion for healthy vegan food, rescued pitbulls, tattoos and everything creative & inspirational",
              "followers_count": 108,
              "friends_count": 119
            },
            {
              "id": 565545710511067140,
              "text": "RT @Wit_of_Wilde: You will always be fond of me. I represent to you all the sins you have never had the courage to commit.",
              "retweet_count": 199,
              "user_name": "Kacy",
              "location": "Austin, Texas",
              "description": "rails/ember developer with a passion for healthy vegan food, rescued pitbulls, tattoos and everything creative & inspirational",
              "followers_count": 108,
              "friends_count": 119
            },
            {

              "id": 559524390010748900,
              "text": "Lately --&gt; 11:23am: \"I can't take it anymore. I quit\". Takes long break... then 7:27pm: \"I got it! I am a f---ing genius!\" #programming",
              "retweet_count": 2,
              "user_name": "Kacy",
              "location": "Austin, Texas",
              "description": "rails/ember developer with a passion for healthy vegan food, rescued pitbulls, tattoos and everything creative & inspirational",
              "followers_count": 108,
              "friends_count": 119
            },
            {
              "id": 555921615087616000,
              "text": "@saalon hey thx --  helpful -- The Top Mistakes Developers Make Using Ember &amp; Rails http://t.co/irJqcwQRoI via @airpair #emberjs",
              "retweet_count": 3,
              "user_name": "Kacy",
              "location": "Austin, Texas",
              "description": "rails/ember developer with a passion for healthy vegan food, rescued pitbulls, tattoos and everything creative & inspirational",
              "followers_count": 108,
              "friends_count": 119
            }
          ]
        })
      ];
    });
  });

  this.server.unhandledRequest = function(type, path) {
    var error = new Error("Unhandled Route" + type + path);
    throw error;
  };
});

afterEach(function() {
  this.server.shutdown();
});
