import { Meteor } from 'meteor/meteor';
import moment from 'moment';

import { Containers } from '/imports/models/Containers';

Meteor.methods({
  // 
  'containers.addStatus': function({
    submittedByHouseNumber,
    containerPositionNumber,
    containerNumber,
    containerType,
    containerSize,
    status
  }: {
    submittedByHouseNumber?: number,
    containerPositionNumber: number,
    containerNumber?: number,
    containerType?: number,
    containerSize?: number,
    status: string
  }) {
    // Insert entry
    return Containers.insert({
      dt_created: moment().toISOString(),
      submittedByHouseNumber: submittedByHouseNumber,
      containerPositionNumber: containerPositionNumber,
      containerNumber: containerNumber,
      containerType: containerType,
      containerSize: containerSize,
      status: status
    })
  },
  // 
  'containers.getContainerStatus': function(containerPositionNumber: number) {
    console.log('containerPositionNumber', containerPositionNumber)
    return Containers.findOne({
      containerPositionNumber: containerPositionNumber,
    }, {
      sort: {
        dt_created: -1
      }
    });
  }
})
