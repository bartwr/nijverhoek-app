import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';

const Sessions = new Mongo.Collection('Sessions')

// _id: MongoID
// dt_created: datetime
// user_id: string
// memo: string
// session_start: datetime
// session_end: datetime
// number_of_visitors: integer

// const schema = new SimpleSchema({
//   var: {
//     type: String,
//     optional: true,
//   }
// })

export {Sessions}
