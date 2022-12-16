import { Mongo } from 'meteor/mongo';

const Progress = new Mongo.Collection('Progress')

// _id: MongoID
// dt_created: datetime
// submittedByHouseNumber: number
// percentage: number

export {Progress}
