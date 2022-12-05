import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';

const Households = new Mongo.Collection('Households')

// _id: MongoID
// dt_created: datetime
// household_number: number
// name: string

// const schema = new SimpleSchema({
//   var: {
//     type: String,
//     optional: true,
//   }
// })

export {Households}
