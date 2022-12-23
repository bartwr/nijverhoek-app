import { Meteor } from 'meteor/meteor';
import moment from 'moment';

import { Progress } from '/imports/models/Progress';

Meteor.methods({
  // 
  'containers.addProgress': function({
    submittedByHouseNumber,
    percentage,
    agreedOn100pctBySloopteam
  }: {
    submittedByHouseNumber: number,
    percentage: number,
    agreedOn100pctBySloopteam: any
  }) {
    if(! submittedByHouseNumber) return;

    // Upsert entry
    return Progress.upsert({
      submittedByHouseNumber: submittedByHouseNumber,
    }, {
      dt_created: moment().toISOString(),
      submittedByHouseNumber: submittedByHouseNumber,
      percentage: percentage,
      agreedOn100pctBySloopteam: agreedOn100pctBySloopteam
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
