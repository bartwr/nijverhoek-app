import { Meteor } from 'meteor/meteor';
import moment from 'moment';

import { Sessions } from '/imports/models/Sessions';

Meteor.methods({
  // CHECK IN
  'sessions.checkin': function({
    user_id,
    memo,
    session_start,
    number_of_visitors
  }: {
    user_id: string,
    memo: string,
    session_start?: any,
    number_of_visitors?: number
  }) {
    const houseNumber = memo;

    // Check if there's no active session
    const activeSession = Sessions.findOne({
      memo: houseNumber,
      session_end: {$exists: false}
    });
    if(activeSession) {
      return {
        error: {
          code: 'active-session-found',
          msg: 'Je was al ingecheckt :)'
        }
      }
    }

    // Insert session
    return Sessions.insert({
      dt_created: moment().toISOString(),
      user_id: user_id,
      memo: memo,
      session_start: session_start || moment().toISOString(),
      number_of_visitors: number_of_visitors
    })
  },

  // CHECK OUT
  'sessions.checkout': function({
    memo,
    session_end
  }: {
    memo: string,
    session_end?: any
  }) {
    const houseNumber = memo;

    // Check if there's an active session
    const activeSession = Sessions.findOne({
      memo: houseNumber,
      session_end: {$exists: false}
    });
    if(! activeSession) {
      return {
        error: {
          code: 'no-active-session-found',
          msg: 'Je bent nog niet ingecheckt, dus kunt niet uitchecken'
        }
      }
    }

    // Update session
    return Sessions.update({
      _id: activeSession._id
    }, {
      $set: {
        memo: memo,
        session_end: session_end || moment().toISOString()
      }
    })
  },

  'sessions.getActive': function() {
     return Sessions.find({
       session_end: {$exists: false}
     }).fetch();
  }
})
