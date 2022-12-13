import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';
import {Container} from './Container';
import {ContainerEdit} from './ContainerEdit.tsx';

export const ContainerPickup = () => {

  const [clickedPositionNumber, setClickedPositionNumber] = useState(undefined)

  // Position containers well for Firefox, as Firefox does something
  // strange with when using `width: max-content`
  useEffect(() => {
    const imgObject = new Image();
    const imageElement = document.getElementById('js-ContainerPickup-map');
    imgObject.onload = function() {
      const imageWidth = imageElement.width;
      imageElement.style.width = `${imageWidth}px`;
    }
    imgObject.src = imageElement.src;
  }, [])

  const onContainerClick = (containerPositionNumber: number) => {
    setClickedPositionNumber(containerPositionNumber);
  }

  const containerPositions = [
  {
    containerPositionNumber: 1,
    left: '12%'
  },
  {
    containerPositionNumber: 2,
    left: '15%'
  },
  {
    containerPositionNumber: 3,
    left: '22%'
  },
  {
    containerPositionNumber: 4,
    left: '24.5%'
  },
  {
    containerPositionNumber: 5,
    left: '30.2%'
  },
  {
    containerPositionNumber: 6,
    left: '33%'
  },
  {
    containerPositionNumber: 7,
    left: '40%'
  },
  {
    containerPositionNumber: 8,
    left: '43%'
  },
  {
    containerPositionNumber: 9,
    left: '50%'
  },
  {
    containerPositionNumber: 10,
    left: '53%'
  },
  {
    containerPositionNumber: 11,
    left: '59%'
  },
  {
    containerPositionNumber: 12,
    left: '62%'
  },
  {
    containerPositionNumber: 13,
    left: '67.9%'
  },
  {
    containerPositionNumber: 14,
    left: '70.5%'
  },
  {
    containerPositionNumber: 15,
    left: '76.5%'
  },
  {
    containerPositionNumber: 16,
    left: '79.3%'
  },
  {
    containerPositionNumber: 17,
    left: '91%',
    top: '30%',
    rotate: '67deg',
  },
  {
    containerPositionNumber: 18,
    left: '87%',
    top: '25%',
    rotate: '67deg',
  },
  {
    containerPositionNumber: 19,
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
          return <motion.div key={x.containerPositionNumber} style={{
            position: 'absolute',
            left: x.left,
            top: x.top || '59%',
            width: '12vh',
          }}
          className="cursor-pointer"
          onClick={() => {
            onContainerClick(x.containerPositionNumber)
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
            <Container
              containerPositionNumber={x.containerPositionNumber}
              rotate={x.rotate}
            />
          </motion.div>
        })}
        <img src="/images/components/ContainerPickup/map.png?3" alt="Container map"
          className="ContainerPickup-map block"
          id="js-ContainerPickup-map"
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

    </div>
  </LayoutWithLogo>
}
