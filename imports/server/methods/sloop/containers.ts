import { Meteor } from 'meteor/meteor';
import moment from 'moment';

import { Containers } from '/imports/models/Containers';

Meteor.methods({
  // 
  'containers.addStatus': function({
    submittedByHouseNumber,
    containerNumber,
    status
  }: {
    submittedByHouseNumber?: number,
    containerNumber: number,
    status: string
  }) {
    // Insert entry
    return Containers.insert({
      dt_created: moment().toISOString(),
      submittedByHouseNumber: submittedByHouseNumber,
      containerNumber: containerNumber,
      status: status
    })
  }
})
