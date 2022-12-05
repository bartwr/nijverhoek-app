import { Meteor } from 'meteor/meteor';

import { Sessions } from '/imports/models/Sessions';
import { Households } from '/imports/models/Households';

Meteor.publish('sessions.all', function () {
  return Sessions.find({}, {
  });
});

Meteor.publish('households.latest', function () {
  return Households.find({}, {
    sort: {dt_created: -1},
    limit: 250
  });
});
