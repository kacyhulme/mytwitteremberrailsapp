import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('landing');
  this.resource('tweets');
  this.resource('tweet', { path: '/tweet/:tweet_id' });
});

export default Router;
