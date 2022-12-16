import { Meteor } from 'meteor/meteor';
import moment from 'moment';

import { Progress } from '/imports/models/Progress';

Meteor.methods({
  // 
  'containers.addProgress': function({
    submittedByHouseNumber,
    percentage
  }: {
    submittedByHouseNumber: number,
    percentage: number
  }) {
    if(! submittedByHouseNumber) return;

    // Upsert entry
    return Progress.upsert({
      submittedByHouseNumber: submittedByHouseNumber,
    }, {
      dt_created: moment().toISOString(),
      submittedByHouseNumber: submittedByHouseNumber,
      percentage: percentage
    })
  },
  // 
  'containers.getProgressForHousehold': function(houseNumber: number) {
    return Progress.findOne({
      submittedByHouseNumber: houseNumber,
    }, {
      sort: {
        dt_created: -1
      }
    });
  }
})
