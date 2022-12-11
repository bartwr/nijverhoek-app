import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';

const Containers = new Mongo.Collection('Containers')

/*
_id
dt_created
submittedByHouseNumber
containerNumber
status
*/

export {Containers}
