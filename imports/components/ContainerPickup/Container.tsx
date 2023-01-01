import { Meteor } from 'meteor/meteor';
import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import { useTracker } from 'meteor/react-meteor-data';

// Models
import { Containers } from '/imports/models/Containers';

export const Container = ({
  style,
  rotate,
  containerPositionNumber,
  containerSize,
  containerPositions
 }: {
  style: object,
  rotate?: string,
  containerPositionNumber: number,
  containerSize?: number,
  containerPositions: any
}) => {
  // Keep track of users household name
  const { containerStatus, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('containers.latest');

    const containerStatus = Containers.findOne({
      containerPositionNumber: containerPositionNumber
    }, {
      sort: {dt_created: -1}
    });

    return {
      containerStatus: containerStatus
      isLoading: !subscription.ready(),
    }
  }, []);

  const getIcon = (containerType) => {
    if(containerType === 'bouw-en-sloop') {
      return '⚒️';
    }
    else if(containerType === 'houtafval-b') {
      return '🪵';
    }
    else if(containerType === 'groenafval') {
      return '🌴';
    }
    else if(containerType === 'tegels') {
      return '◻️';
    }
  }

  let fillColor = '#ccc', opacity = 1, emoticon;
  if(containerStatus && containerStatus.status === 'vol') {
    fillColor = '#f01301';
  }
  else if(containerStatus && containerStatus.status === 'halfvol') {
    fillColor = '#f39802';
  }
  else if(containerStatus && containerStatus.status === 'leeg') {
    fillColor = '#4dff00';
  }
  else if(containerStatus && containerStatus.status === 'doorgegeven-aan-renewi') {
    fillColor = '#4300ff';
  }
  else if(containerStatus && containerStatus.status === 'weggehaald') {
    fillColor = '#eee';
    opacity = 0.1;
  }
  else if(containerStatus && containerStatus.status === 'volgende-locatie') {
    fillColor = 'transparent';
    opacity = 0.2;
    emoticon = getIcon(containerStatus.containerType);
  }
  // console.log('containerStatus', containerStatus)

  return (
    <div className="relative">
      {containerStatus && containerStatus.containerType && <div className={`
        Container-icon
        absolute top-0 right-0 bottom-0 left-0 flex flex-col text-center justify-center landscape:text-xs portrait:text-base
        ${containerStatus.containerSize != 40 ? 'portrait:-ml-1' : ''}
      `} style={{
          textShadow: '0px -1px 0.25px #fff'
      }}>
        {getIcon(containerStatus.containerType)}
      </div>}
      {emoticon && <div className={`
        absolute top-0 right-0 bottom-0 left-0 flex flex-col text-center justify-center landscape:text-xs portrait:text-base
        ${containerStatus.containerSize != 40 ? 'portrait:-ml-1' : ''}
      `}>
        <span className={`
          rounded-full bg-black
          ${containerStatus.containerSize === 40 ? 'portrait:w-10' : 'portrait:w-8'} ${containerStatus.containerSize === 40 ? 'portrait:h-10' : 'portrait:h-8'}
          ${containerStatus.containerSize === 40 ? 'landscape:w-7' : 'landscape:w-6'} ${containerStatus.containerSize === 40 ? 'landscape:h-7' : 'landscape:jh-6'}
          mx-auto flex justify-center flex-col
          relative
        `} style={{
          backgroundColor: '#4300ff',
          border: `solid #000 ${containerStatus.containerSize === 40 ? '4px' : '2px'}`,
          textShadow: '0px -1px 0.25px #fff'
        }}>
          {emoticon}
          <div className="
            absolute
            text-xs
          " style={{
            top: '-3.9vh',
            left: '-8px',
            color: '#4300ff',
            textShadow: '0px -1px 1px white',
            background: '#fff',
            padding: '0 2px'
            zIndex: 20,
          }}>
            {containerStatus.containerSize || '20'}m3
          </div>
        </span>
      </div>}
      <motion.svg
        animate={{ opacity: opacity }}
        transition={{ delay: 0.8 }}
        viewBox="0 0 175 180"
        xmlns="<http://www.w3.org/2000/svg>"
        style={Object.assign({}, {opacity: 0}, style)}
      >
        <rect
          x="50"
          y="20"
          rx="20"
          ry="20"
          width={(containerStatus && containerStatus.containerSize) == 40 ? 80 : 60}
          height="150"
          style={{
            fill: fillColor,
            stroke:'black',
            strokeWidth: (containerStatus && containerStatus.containerSize) == 40 ? 15 : 10,
            opacity: 0.8,
            transformBox: 'fill-box',
            transformOrigin: 'center',
            transform: `rotate(${rotate ? rotate : '30deg'})`
          }}
        />
      </motion.svg>
    </div>
  );
}
