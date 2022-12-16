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

  useEffect(() => {
    const houseNumber = parseInt(localStorage.getItem('SLOOPHOEK__houseNumber'));
    Meteor.call('containers.getProgressForHousehold', houseNumber, (err, res) => {
      if(err) {
        console.error(err);
        return;
      }

      setMyProgress(res);

      document.getElementById('js-percentage').value = res.percentage;
    }
  }, [])

  const onSubmit = () => {
    const percentage = document.getElementById('js-percentage').value;
    Meteor.call('containers.addProgress', {
      submittedByHouseNumber: parseInt(localStorage.getItem('SLOOPHOEK__houseNumber')),
      percentage: parseInt(percentage)
    }, (err, res) => {
      onClose();
    })
  }

  return (
    <Overlay
      title="Hoe ver ben jij?"
      onClose={onClose}
    >
      <p className="mt-6">
        Hoi kavel <u>{localStorage.getItem('SLOOPHOEK__houseNumber')}</u>, hoever ben jij al gesloopt, in een percentage uitgedrukt?
      </p>

      <div className="my-8">
        <Select name="percentage" id="js-percentage" defaultValue={myProgress.percentage}>
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

  return <>
    {showOverlay && <ProgressForm onClose={() => {
      setShowOverlay(false);
    }} />}
    <div className="cursor-pointer overflow-x-auto -mx-6" onClick={() => {
      setShowOverlay(true)
    }}>
      <ProgressSvg data={allProgress} width="100%" />
    </div>
  </>
}
