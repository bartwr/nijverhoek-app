import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import moment from 'moment';

import {Title} from '../Title/Title';
import {Select} from '../Form/Select';
import {Button} from '../Button/Button';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo';

// Models
import { Containers } from '/imports/models/Containers';

export const ContainerPickupAdmin = () => {
  // Keep track of users household name
  const { allContainerLogs, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('containers.latest');

    const allContainerLogs = Containers.find({}, {
      sort: {dt_created: -1}
    }).fetch();

    return {
      allContainerLogs: allContainerLogs,
      isLoading: !subscription.ready(),
    }
  }, []);

  return <LayoutWithLogo>
    <div className="-mx-6">

      <Title>
        Container logs
      </Title>

      <table className="my-4">
        <tr>
          <th align="left" className="px-2">Datum</th>
          <th align="left" className="px-2">#</th>
          <th align="left" className="px-2">Status</th>
          <th align="left" className="px-2">Via</th>
        </tr>
        {allContainerLogs.map((x) => {
          return <tr>
            <td align="left" className="px-2">{moment(x.dt_created).format('DD/MM HH:mm')}</td>
            <td align="left" className="px-2">{x.containerNumber}</td>
            <td align="left" className="px-2">{x.status}</td>
            <td align="left" className="px-2">{x.submittedByHouseNumber ? `K${x.submittedByHouseNumber}` : ''}</td>
          </tr>
        }, )}
      </table>

    </div>
  </LayoutWithLogo>
}
