import { Meteor } from 'meteor/meteor';
import moment from 'moment';

import { Households } from '/imports/models/Households';

Meteor.methods({
  // 
  'households.updateName': function({
    household_number,
    name
  }: {
    household_number: number,
    name: string
  }) {
    // Check if there's a recent entry
    const recentEntry = Households.findOne({
      household_number: Number(household_number),
      dt_created: {$gt: moment().subtract(5, 'minutes').toISOString()}
    });
    if(recentEntry) {
      // Update entry
      return Households.update(recentEntry._id, {
        $set: {
          dt_modified: moment().toISOString(),
          name: name
        }
      })
    }
    else {
      // Insert entry
      return Households.insert({
        dt_created: moment().toISOString(),
        household_number: Number(household_number),
        name: name
      })
    }
  }
})
