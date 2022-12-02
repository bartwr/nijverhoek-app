import { Meteor } from 'meteor/meteor';

import { Sessions } from '/imports/models/Sessions';

Meteor.publish('sessions.all', function () {
  return Sessions.find({}, {
  });
});