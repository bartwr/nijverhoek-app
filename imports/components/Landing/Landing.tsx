import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, {useEffect, useState} from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Models
import { Sessions } from '/imports/models/Sessions';
import { Households } from '/imports/models/Households';

// Components
import {Title} from '../Title/Title.tsx';
import {Paragraph as P} from '../Paragraph/Paragraph';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';
import {Progress} from '../Progress/Progress.tsx';
import {Household} from '../Household/Household.tsx';

import './Household.css';

const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');

const LS_houseNumberCheckInCounters = localStorage.getItem('SLOOPHOEK__houseNumberCheckInCounters');
let houseNumberCheckInCounters = [];
if(LS_houseNumberCheckInCounters) {
  houseNumberCheckInCounters = JSON.parse(LS_houseNumberCheckInCounters);
}

const isVerified = houseNumberCheckInCounters && houseNumberCheckInCounters[houseNumber] && houseNumberCheckInCounters[houseNumber] >= 1;

export const Landing = () => {
  useEffect(x => {
    Meteor.subscribe('sessions.all');
  }, [])

  const activeSessions = useTracker(() => Sessions.find({
    session_end: {$exists: false}
  }, {sort: {memo: 1}}).fetch(), []);

  return <LayoutWithLogo>
    <div className="flex flex-col justify-between">

      <Title>
        Wie is er aanwezig?
      </Title>

      {activeSessions && activeSessions.length > 0 && <div className="py-6">
        <P>
          In deze kavels zijn er mensen aan het slopen:
        </P>
      </div>}

      <div className="
        flex justify-center flex-wrap
      ">
        {activeSessions.map(x => {
          return <Household key={x._id}>
            {x.memo}
          </Household>  
        })}
      </div>

      <div className="
        my-8
        flex
        justify-around
      ">
        <Button onClick={() => {
          FlowRouter.go('sloop-checkin')
        }}>
          Check in
        </Button>
        <Button onClick={() => {
          FlowRouter.go('sloop-checkout')
        }}>
          Check out
        </Button>
       </div>
    </div>

    {<div className="my-4 mb-8">
      <Title>
        Container vol?
      </Title>

      <div onClick={() => FlowRouter.go('sloop-container-pickup')}>
        <img src="/images/components/ContainerPickup/container-pickup.jpg" alt="Pickup container" className="cursor-pointer" />
      </div>
    </div>}

    {<div className="my-4 mb-8">
      <Title>
        Voortgang
      </Title>

      <div className="py-4">
        <Progress />
      </div>
    </div>}

  </LayoutWithLogo>
}
