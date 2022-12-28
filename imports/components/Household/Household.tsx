import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, {useEffect, useState} from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { motion } from "framer-motion"

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

import '../Landing/Household.css';

const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');

const LS_houseNumberCheckInCounters = localStorage.getItem('SLOOPHOEK__houseNumberCheckInCounters');
let houseNumberCheckInCounters = [];
if(LS_houseNumberCheckInCounters) {
  houseNumberCheckInCounters = JSON.parse(LS_houseNumberCheckInCounters);
}

export const Household = ({children}: {
  children: any
}) => {

  const [didClick, setDidClick] = useState(false);
  const [didClickSelf, setDidClickSelf] = useState(false);
  const [inputValue, setInputValue] = useState('');

  let TO_didClick, TO_didUpdate;

  const isSelf = Number(children) == Number(houseNumber);
  const isAllowedToViewNames = houseNumberCheckInCounters[houseNumber] && houseNumberCheckInCounters[houseNumber] >= 2;

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

  const updateInput = (e) => {
    setInputValue(e.target.value);
  }

  const blurInput = (e) => {
    Meteor.call('households.updateName', {
      household_number: houseNumber,
      name: e.target.value
    })
  }

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
        w-52
      " style={{
        background: '#ea5c33',
      }} onSubmit={(e) => {
        e.preventDefault();
        setDidClickSelf(false);
      }}>
        <input type="text" className="Household-input w-full h-full px-2 text-center rounded-lg" value={inputValue} onChange={updateInput} onBlur={blurInput} />
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
        background: '#ea5c33',
        lineHeight: ((householdName.indexOf(' ') > -1 || householdName.length > 15) ? '14px' : null),
        fontSize: ((householdName.indexOf(' ') > -1 || householdName.length > 15) ? '12px' : null)
      }}>
        {householdName}
      </div>}

      <motion.div
      whileHover={isAllowedToViewNames ? { scale: 1.1 } : {}}
      whileTap={isAllowedToViewNames ? { scale: 0.9 } : {}}
      className="
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
        transform: (houseNumber && houseNumber == children) ? 'rotate(5deg)' : 'none',
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
        {isAllowedToViewNames && isSelf && (! householdName || householdName === '') && <div className="
          absolute
          top-0
          right-0

          rounded-full
          w-2
          h-2
        " />}

        <span className="block">
          {children}
        </span>
      </motion.div>

    </div>
  );
}
