import DS from 'ember-data';

var Timeline = DS.Model.extend({
  screenName: DS.attr("string"),
  text: DS.attr("string"),
  location: DS.attr("string"),
  description: DS.attr("string"),
  url: DS.attr("string"),
  followersCount: DS.attr("number"),
  friendsCount: DS.attr("number")
});

export default Timeline;
