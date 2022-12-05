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

import './Household.css';

const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');

const LS_houseNumberCheckInCounters = localStorage.getItem('SLOOPHOEK__houseNumberCheckInCounters');
let houseNumberCheckInCounters = [];
if(LS_houseNumberCheckInCounters) {
  houseNumberCheckInCounters = JSON.parse(LS_houseNumberCheckInCounters);
}

const Household = ({children}: {
  children: any
}) => {

  const [didClick, setDidClick] = useState(false);
  const [didClickSelf, setDidClickSelf] = useState(false);
  const [inputValue, setInputValue] = useState('');

  let TO_didClick;

  const isSelf = Number(children) == Number(houseNumber);
  const isAllowedToViewNames = houseNumberCheckInCounters[houseNumber] && houseNumberCheckInCounters[houseNumber] >= 5;

  // Keep track of users household name
  const { householdName, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('households.latest');

    const thisHousehold = Households.findOne({
      household_number: Number(children),
    }, {sort: {dt_created: -1}});

    return {
      householdName: thisHousehold ? thisHousehold.name : undefined,
      isLoading: !subscription.ready(),
    }
  }, []);

  useEffect(() => {
    if(householdName == undefined) return;
    setInputValue(householdName);
  }, [
    householdName
  ])

  return (
    <div className="relative">

      {didClickSelf && isAllowedToViewNames && <form className="
        Household-tooltip

        absolute
        -mt-16

        rounded-xl
        p-1
        text-center
        flex flex-col justify-center
        h-14
        font-bold
        text-xl
        text-white
        w-56
      " style={{
        background: '#ea5c33',
      }} onSubmit={(e) => {
        e.preventDefault();
        setDidClickSelf(false);
      }}>
        <input type="text" className="Household-input w-full h-full px-2 text-center rounded-lg" value={inputValue} onChange={(e) => {
          setInputValue(e.target.value);
          Meteor.call('households.updateName', {
            household_number: houseNumber,
            name: e.target.value
          })
        }}/>
      </form>}

      {didClick && householdName && isAllowedToViewNames && <div className="
        Household-tooltip

        absolute
        -mt-16

        rounded-xl
        p-2
        text-center
        flex flex-col justify-center
        h-14
        font-bold
        text-xl
        text-white
      " style={{
        background: '#ea5c33'
      }}>
        {householdName}
      </div>}

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
      }} onClick={() => {
        if(isSelf) {
          setDidClickSelf(! didClickSelf);
          return;
        }

        // Only if it is false and becomes true: Set timeout
        if(didClick === false) {
          clearTimeout(TO_didClick);
          TO_didClick = setTimeout(() => {
            setDidClick(false);
          }, 2500);
        }

        setDidClick(! didClick);
      }}>
        {children}
      </div>

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
  </LayoutWithLogo>
}
