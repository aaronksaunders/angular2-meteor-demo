import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check';
import { Match } from 'meteor/check'

export const Parties = new Mongo.Collection('parties');

Meteor.methods({
  'addItem'(_data) {
    
    const NonEmptyString = Match.Where(function (x) {
      check(x, String);
      return x.length > 0;
    });
    
    check(_data.title, NonEmptyString);
    check(_data.message, NonEmptyString);

    Parties.insert({
      title: _data.title,
      message: _data.message,
      created_date: new Date()
    });
  }
})


if (Meteor.isServer) {
  Meteor.publish('parties', function () {
    return Parties.find();
  });
}