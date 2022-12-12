import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';
import {Container} from './Container';
import {ContainerEdit} from './ContainerEdit.tsx';

export const ContainerPickup = () => {

  const [clickedPositionNumber, setClickedPositionNumber] = useState(undefined)

  const onContainerClick = (containerPositionNumber: number) => {
    setClickedPositionNumber(containerPositionNumber);
  }

  const containerPositions = [{
    containerPositionNumber: 1,
    left: '15%'
  }, {
    containerPositionNumber: 2,
    left: '22%'
  }, {
    containerPositionNumber: 3,
    left: '25%'
  }, {
    containerPositionNumber: 4,
    left: '40%'
  }, {
    containerPositionNumber: 5,
    left: '43%'
  }, {
    containerPositionNumber: 6,
    left: '50%'
  }, {
    containerPositionNumber: 7,
    left: '61%'
  }, {
    containerPositionNumber: 8,
    left: '67.9%'
  }, {
    containerPositionNumber: 9,
    left: '70.5%'
  }, {
    containerPositionNumber: 10,
    left: '91%',
    top: '30%',
    rotate: '67deg',
  }, {
    containerPositionNumber: 11,
    left: '87%',
    top: '25%',
    rotate: '67deg',
  }, {
    containerPositionNumber: 12,
    left: '83%',
    top: '20%',
    rotate: '67deg',
  }]

  return <LayoutWithLogo>
    {/*OVERLAY*/}
    {clickedPositionNumber ? <ContainerEdit
      containerPositionNumber={clickedPositionNumber}
      onClose={() => {
        setClickedPositionNumber(undefined);
      }}
    /> : ''}

    {/*CONTAINER MAP*/}
    <div className="fixed z-1 top-0 left-0 bottom-0 left-0 w-full overflow-x-auto">
      <div className="relative" style={{
          width: 'max-content',
          height: '100%',
        }}>
        {containerPositions.map((x) => {
          return <div key={x.containerPositionNumber} style={{
            position: 'absolute',
            left: x.left,
            top: x.top || '59%',
            width: '12vh',
          }}
          onClick={() => {
            onContainerClick(x.containerPositionNumber)
          }}
          >
            <Container
              containerPositionNumber={x.containerPositionNumber}
              rotate={x.rotate}
            />
          </div>
        })}
        <img src="/images/components/ContainerPickup/map.png?3" alt="Container map"
          className="ContainerPickup-map block"
          style={{
            width: 'auto',
            maxWidth: '9999px',
            height: '100%',
          }}
        />
      </div>
    </div>

    {/*LEGEND*/}
    <div className="fixed z-2 bottom-0 left-0 w-full overflow-x-auto">
      <img src="/images/components/ContainerPickup/legend.png" alt="Container map"
        className="ContainerPickup-map w-full bg-white p-1"
      />
    </div>

    <div className="relative z-10">

      <Title>
        Containers
      </Title>
      <p>
        worden elke werkdag geleegd
      </p>

    </div>
  </LayoutWithLogo>
}
