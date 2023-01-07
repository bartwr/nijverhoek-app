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

import ProgressSvg from './ProgressSvg';

export const ProgressDone = () => {
  const [doesRedirect, setDoesRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('SLOOPHOEK__didSee100pctDoneAni', 'true');
      setDoesRedirect(true);
      setTimeout(() => {
        document.location = '/';
      }, 500);
    }, 4600);
  }, [])

  return <div className="
    fixed
    top-0
    right-0
    bottom-0
    left-0
    bg-white
    flex
    justify-center
    flex-col
    cursor-pointer
  " style={{
    zIndex: 100,
    backgroundColor: doesRedirect ? '#315685' : ''
  }} onClick={() => {
    document.location = '/';
  }}>
    {doesRedirect ? '' : <img
      src="/images/components/Progress/202301-slopen-klaar--animatie-voortgang-sloop.gif"
      alt="Animatie van het sloopproces"
    />}
  </div>
}
