import { Meteor } from 'meteor/meteor';
import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import { useTracker } from 'meteor/react-meteor-data';

// Models
import { Containers } from '/imports/models/Containers';

export const Container = ({
  style,
  rotate,
  containerPositionNumber
 }: {
  style: object,
  rotate?: string,
  containerPositionNumber: number
}) => {
  // Keep track of users household name
  const { containerStatus, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('containers.latest');

    const containerStatus = Containers.findOne({
      containerPositionNumber: containerPositionNumber
    }, {
      sort: {dt_created: -1}
    });

    return {
      containerStatus: containerStatus
      isLoading: !subscription.ready(),
    }
  }, []);

  let fillColor = '#ccc';
  if(containerStatus && containerStatus.status === 'vol') {
    fillColor = '#f01301';
  }
  else if(containerStatus && containerStatus.status === 'halfvol') {
    fillColor = '#f39802';
  }
  else if(containerStatus && containerStatus.status === 'leeg') {
    fillColor = '#4dff00';
  }
  // console.log('containerStatus', containerStatus)

  return (
    <motion.svg
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      viewBox="0 0 180 180"
      xmlns="<http://www.w3.org/2000/svg>"
      style={Object.assign({}, {opacity: 0}, style)}
    >
      <rect
        x="50"
        y="20"
        rx="20"
        ry="20"
        width="70"
        height="150"
        style={{
          fill: fillColor,
          stroke:'black',
          strokeWidth: 15,
          opacity: 0.8,
          transformBox: 'fill-box',
          transformOrigin: 'center',
          transform: `rotate(${rotate ? rotate : '30deg'})`
        }}
      />
    </motion.svg>
  );
}
