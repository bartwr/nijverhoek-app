import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { useTracker } from 'meteor/react-meteor-data';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';

import {Overlay} from '../Overlay/Overlay.tsx';

import ProgressSvg from './ProgressSvg';

// Models
import { Progress as ProgressModel } from '/imports/models/Progress';

const ProgressForm = ({
  onClose
}) => {
  const [myProgress, setMyProgress] = useState({
    percentage: 0
  });

  const [theHouseNumber, setTheHouseNumber] = useState(parseInt(localStorage.getItem('SLOOPHOEK__houseNumber')));

  useEffect(() => {
    Meteor.call('containers.getProgressForHousehold', parseInt(theHouseNumber), (err, res) => {
      if(err) {
        console.error(err);
        return;
      }
      if(res === undefined) {
        setMyProgress({ percentage: 0 });
        document.getElementById('js-percentage').value = 0;
        return;
      }
      setMyProgress(res);
      document.getElementById('js-percentage').value = res.percentage;
    }
  }, [
    theHouseNumber
  ])

  const onSubmit = () => {
    const percentage = document.getElementById('js-percentage').value;
    Meteor.call('containers.addProgress', {
      submittedByHouseNumber: parseInt(theHouseNumber),
      percentage: parseInt(percentage)
    }, (err, res) => {
      onClose();
    })
  }

  const isInSloopTeam = (houseNumber) => {
    // const sloopTeamMembers = ['2', '31'];
    const sloopTeamMembers = ['2'];
    return sloopTeamMembers.indexOf(houseNumber) > -1;
  }

  return (
    <Overlay
      title="Hoe ver ben jij?"
      onClose={onClose}
    >
      <p className="mt-6">
        Hoi kavel {isInSloopTeam(localStorage.getItem('SLOOPHOEK__houseNumber')) ?
          <select id="js-houseNumber" defaultValue={localStorage.getItem('SLOOPHOEK__houseNumber')} onChange={(e) => {
            setTheHouseNumber(e.target.value);
          }}>
            {Array.from(Array(32), (_, number) => <option value={number+1} key={number+1}>
              {number+1}
            </option>)}
          </select>
          :
          <u>{localStorage.getItem('SLOOPHOEK__houseNumber')}</u>
        }, 
        hoever ben jij al gesloopt, in een percentage uitgedrukt?
      </p>

      <div className="my-8">
        <Select name="percentage" id="js-percentage" defaultValue={myProgress ? myProgress.percentage : 0}>
          {Array.from(Array(11), (_, number) => <option value={number*10} key={number*10}>
            {number*10}%
          </option>)}
        </Select>
      </div>

      <div className="my-4">
        <Button onClick={onSubmit} id="js-ContainerPickup-button">
          Opslaan
        </Button>
      </div>
    </Overlay>
  );
}

export const Progress = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const { allProgress, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('progress.all');

    const progress = ProgressModel.find({}, {
      sort: {dt_created: -1},
    }).fetch();

    return {
      allProgress: progress,
      isLoading: !subscription.ready(),
    }
  }, []);

  // const data = [{
  //   houseNumber: 1,
  //   progress: 1
  // },
  // {
  //   houseNumber: 12,
  //   progress: 0.8
  // }]
  const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');

  const LS_houseNumberCheckInCounters = localStorage.getItem('SLOOPHOEK__houseNumberCheckInCounters');
  let houseNumberCheckInCounters = [];
  if(LS_houseNumberCheckInCounters) {
    houseNumberCheckInCounters = JSON.parse(LS_houseNumberCheckInCounters);
  }

  const isAllowedToShareProgress = houseNumberCheckInCounters && houseNumberCheckInCounters[houseNumber] && houseNumberCheckInCounters[houseNumber] >= 2;

  return <>
    {showOverlay && <ProgressForm onClose={() => {
      setShowOverlay(false);
    }} />}
    <div className={`${isAllowedToShareProgress ? 'cursor-pointer' : ''} overflow-x-auto -mx-6`} onClick={() => {
      if(! isAllowedToShareProgress) return;
      setShowOverlay(true);
    }}>
      <ProgressSvg data={allProgress} width="100%" />
    </div>
  </>
}
