import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, {useEffect, useState} from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Models
import { Sessions } from '/imports/models/Sessions';

// Components
import {Title} from '../Title/Title.tsx';
import {Paragraph as P} from '../Paragraph/Paragraph';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';

const Household = ({children}: {
  children: any
}) => {
  const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');

  return (
    <div className="
      rounded-xl
      p-2
      m-2
      text-center
      flex flex-col justify-center
      w-10
      h-14
      font-bold
      text-xl
    " style={{
      background: '#9CC192',
      transform: (houseNumber && houseNumber == children) ? 'rotate(5deg)' : 'none'
    }}>
      {children}
    </div>
  );
}

export const Landing = () => {
  useEffect(x => {
    Meteor.subscribe('sessions.all');
  })

  const activeSessions = useTracker(() => Sessions.find({
    session_end: {$exists: false}
  }, {sort: {memo: 1}}).fetch(), []);

  return <LayoutWithLogo>
    <div className="flex flex-col justify-between">
      <Title>
        Wie is er aanwezig?
      </Title>

      <div className="py-6">
        <P>
          In deze kavels zijn er mensen aan het slopen:
        </P>
      </div>

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
  </LayoutWithLogo>
}
