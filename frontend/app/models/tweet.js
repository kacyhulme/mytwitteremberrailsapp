import DS from 'ember-data';

var Tweet = DS.Model.extend({
  userName: DS.attr("string"),
  text: DS.attr("string"),
  retweetCount: DS.attr("number"),
  location: DS.attr("string"),
  description: DS.attr("string"),
  followersCount: DS.attr("number"),
  friendsCount: DS.attr("number")
});

export default Tweet;
