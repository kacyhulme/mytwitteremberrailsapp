/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Acceptance: Tweet', function() {
  beforeEach(function() {
    App = startApp();
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  describe("visiting /tweets", function() {
    beforeEach(function() {
      visit('/tweets');
    });

    it('can visit /tweet', function() {
      andThen(function() {
        expect(currentPath()).to.equal('tweets');
        expect($("body").text()).to.include("coolest");
      });
    });
  });
});
