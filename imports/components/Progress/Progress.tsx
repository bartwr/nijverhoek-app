import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { useTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import JSConfetti from 'js-confetti'

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';
import {ProgressDone} from './ProgressDone.tsx';

import {Overlay} from '../Overlay/Overlay.tsx';

import ProgressSvg from './ProgressSvg';

// Models
import { Progress as ProgressModel } from '/imports/models/Progress';

const myHouseNumber = parseInt(localStorage.getItem('SLOOPHOEK__houseNumber'));

const jsConfetti = new JSConfetti()
const showConfetti = (times: number) => { 
  if(! times) return;

  const celebrate = () => {
    jsConfetti.addConfetti()
    jsConfetti.addConfetti({
      emojis: ['⚒️', '🪵', '🌴', '◻️'],
      emojiSize: 30,
      confettiNumber: 100,
    });
  }

  celebrate();
  let counter = 1;

  let TO = setInterval(() => {
    if(counter >= times) {
      clearTimeout(TO);
      return;
    }
    celebrate();
    counter++;
  }, 1000);
}

const ProgressForm = ({
  onClose
}) => {
  const [myProgress, setMyProgress] = useState({
    percentage: 0
  });

  const [theHouseNumber, setTheHouseNumber] = useState(myHouseNumber);

  useEffect(() => {
    Meteor.call('containers.getProgressForHousehold', parseInt(theHouseNumber), (err, res) => {
      if(err) {
        console.error(err);
        return;
      }
      if(res === undefined) {
        setMyProgress({ percentage: 0 });
        document.getElementById('js-percentage').value = 0;
        document.getElementById('js-checked').checked = false;
        return;
      }
      setMyProgress(res);
      document.getElementById('js-percentage').value = res.percentage;
      document.getElementById('js-checked').checked = res.agreedOn100pctBySloopteam ? true : false;
    }
  }, [
    theHouseNumber
  ])

  const onSubmit = () => {
    const percentage = document.getElementById('js-percentage').value;
    const agreedOn100pctBySloopteam = document.getElementById('js-checked').checked;
    Meteor.call('containers.addProgress', {
      submittedByHouseNumber: parseInt(theHouseNumber),
      percentage: parseInt(percentage),
      agreedOn100pctBySloopteam: agreedOn100pctBySloopteam ? moment().toISOString() : false
    }, (err, res) => {
      onClose();
    })
  }

  const isInSloopTeam = (houseNumber) => {
    const sloopTeamMembers = [2, 3, 17, 31];
    return sloopTeamMembers.indexOf(houseNumber) > -1;
  }

  return (
    <Overlay
      title="Hoe ver ben jij?"
      onClose={onClose}
    >
      <p className="mt-6">
        Hoi kavel {isInSloopTeam(myHouseNumber) ?
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

      <label className={isInSloopTeam(myHouseNumber) ? `my-8 block` : ``}>
        <span className="ml-2 inline-block" style={{
          display: isInSloopTeam(myHouseNumber) ? 'block' : 'none'
        }}>100% gereed volgens Sloopteam:<br /></span>
        <input type={isInSloopTeam(myHouseNumber) ? 'checkbox' : 'hidden'} id="js-checked" name="checked" className="mt-4 inline-block" style={{
          width: '30px',
          height: '30px'
        }} />
      </label>

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
  const [numberOfDones, setNumberOfDones] = useState(0);

  const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');
  const didSeeAni = localStorage.getItem('SLOOPHOEK__didSee100pctDoneAni');

  const LS_houseNumberCheckInCounters = localStorage.getItem('SLOOPHOEK__houseNumberCheckInCounters');
  let houseNumberCheckInCounters = [];
  if(LS_houseNumberCheckInCounters) {
    houseNumberCheckInCounters = JSON.parse(LS_houseNumberCheckInCounters);
  }

  const isAllowedToShareProgress = houseNumberCheckInCounters && houseNumberCheckInCounters[houseNumber] && houseNumberCheckInCounters[houseNumber] >= 2;

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

  // Show confetti if a new household becomes 100% done 
  useEffect(() => {
    let counter = 0;
    allProgress.forEach(x => {
      if(x.agreedOn100pctBySloopteam) {
        counter += 1;
      }
    });
    // Show confetti if everyone is done (30 households)
    if(! didSeeAni && counter > numberOfDones && counter === 30) {
      showConfetti(1);
    }
    // Show confetti 1 time if a new household is done
    else if(numberOfDones > 0 && counter > numberOfDones) {
      // showConfetti(1);
    }
    setNumberOfDones(counter);
  }, [
    allProgress,
    numberOfDones
  ])

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

  const totalProgress = calculateTotalProgress(allProgress);

  return <>
    {(! didSeeAni && numberOfDones === 30) ? <ProgressDone /> : ''}
    {showOverlay && <ProgressForm onClose={() => {
      setShowOverlay(false);
    }} />}
    <div className="-mt-2 mb-4 text-sm">
      {! didSeeAni ? <div>
        De Nijverhoek is voor {Math.round(totalProgress)}% gesloopt
      </div> : <div>
        De Nijverhoek is voor <span className="
          inline-block
          px-1
          text-white
          cursor-pointer
        " style={{backgroundColor: '#4a8bf2'}}
        onClick={() => {
          localStorage.removeItem('SLOOPHOEK__didSee100pctDoneAni');
          document.location = '/';
        }}
        >
          {Math.round(totalProgress)}%
        </span> gesloopt
      </div>}
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
        <div className="h-1 w-8 text-white flex flex-col justify-center" style={{
          backgroundColor: '#309f00',
          fontSize: '4px',
          padding: '3px 0',
        }}>100%</div>
        <div className="h-1 w-12 text-white flex flex-col justify-center" style={{
          backgroundColor: '#008bf2',
          fontSize: '4px',
          padding: '3px 0',
        }}>GESLOOPT!</div>
      </div>
    </div>
  </>
}
