import DS from 'ember-data';

var Tweet = DS.Model.extend({
  userName: DS.attr("string"),
  text: DS.attr("string"),
  favorited: DS.attr("string"),
  lang: DS.attr("string"),
  retweetCount: DS.attr("number"),
  favoriteCount: DS.attr("number"),
  location: DS.attr("string")
});

export default Tweet;
