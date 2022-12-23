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
    const sloopTeamMembers = ['2', '31'];
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

  const calculateTotalProgress = (allProgress) => {
    if(! allProgress) return 0;
    let countEntries = 0, sumTotalPercentage = 0;
    allProgress.forEach(x => {
      countEntries++;
      sumTotalPercentage += parseInt(x.percentage);
    });
    console.log('PROGRESS: Number of households', countEntries);
    return sumTotalPercentage / countEntries;
  }

  const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');

  const LS_houseNumberCheckInCounters = localStorage.getItem('SLOOPHOEK__houseNumberCheckInCounters');
  let houseNumberCheckInCounters = [];
  if(LS_houseNumberCheckInCounters) {
    houseNumberCheckInCounters = JSON.parse(LS_houseNumberCheckInCounters);
  }

  const isAllowedToShareProgress = houseNumberCheckInCounters && houseNumberCheckInCounters[houseNumber] && houseNumberCheckInCounters[houseNumber] >= 2;

  const totalProgress = calculateTotalProgress(allProgress);

  return <>
    {showOverlay && <ProgressForm onClose={() => {
      setShowOverlay(false);
    }} />}
    <div className="-mt-2 mb-4 text-sm">
      De Nijverhoek is voor {Math.round(totalProgress)}% gesloopt
    </div>
    <div className={`${isAllowedToShareProgress ? 'cursor-pointer' : ''} overflow-x-auto overflow-y-hidden -mx-6`} onClick={() => {
      if(! isAllowedToShareProgress) return;
      setShowOverlay(true);
    }}>
      <ProgressSvg data={allProgress} width="100%" />
      <div data-name="legend" className="flex justify-around mt-4">
        <div className="h-1 w-4 flex flex-col justify-center" style={{
          backgroundColor: '#f1f1f1',
          fontSize: '4px',
          padding: '3px 0',
        }}>0%</div>
        <div className="bg-cover bg-no-repeat h-1 w-full" style={{
          backgroundImage: `url('https://cloud.githubusercontent.com/assets/928116/16114032/70c167ea-33bf-11e6-9265-0e98f1ba805b.png')`,
          padding: '3px 0',
        }} />
        <div className="h-1 w-10 text-white flex flex-col justify-center" style={{
          backgroundColor: '#309f00',
          fontSize: '4px',
          padding: '3px 0',
        }}>100%</div>
      </div>
    </div>
  </>
}
