import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { useTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import moment from 'moment';

import {Overlay} from '../Overlay/Overlay.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';

// Models
import { Containers } from '/imports/models/Containers';

export const ContainerLogs = ({
  containerPositionNumber
}: {
  containerPositionNumber: number,
}) => {

  // Keep track of users household name
  const { containerLogs, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('containers.latest');

    const containerLogs = Containers.find({
      containerPositionNumber: containerPositionNumber
    }, {
      limit: 10,
      sort: {dt_created: -1}
    }).fetch();

    return {
      containerLogs: containerLogs,
      isLoading: !subscription.ready(),
    }
  }, []);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th align="left">Datum</th>
          <th align="left">Type</th>
          <th align="left">Status</th>
          <th align="left">Door</th>
        </tr>
      </thead>
      <tbody>
        {containerLogs.map((x) => {
          return <tr key={x._id}>
            <td align="left">{moment(x.dt_created).format('ddd HH:mm')}</td>
            <td align="left">
              {x.containerType && x.containerType === 'bouw-en-sloop' ? 'B&S' : ''}
              {x.containerType && x.containerType === 'houtafval-b' ? 'Hout' : ''}
            </td>
            <td align="left">
              {x.status && x.status === 'doorgegeven-aan-renewi' ? 'doorgegeven' : x.status}
            </td>
            <td align="left">#{x.submittedByHouseNumber}</td>
          </tr>
        })}
      </tbody>
    </table>
  );
}
