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
    const setWidthForImage = () => {
      const imgObject = new Image();
      const imageElement = document.getElementById('js-ContainerPickup-map');
      imageElement.style.width = `auto`;
      imgObject.onload = function() {
        const imageWidth = imageElement.width;
        imageElement.style.width = `${imageWidth}px`;
      }
      imgObject.src = imageElement.src;
    }

    window.addEventListener('resize', function () {
      setWidthForImage();
    })
  }, [])

  const onContainerClick = (containerPositionNumber: number) => {
    setClickedPositionNumber(containerPositionNumber);
  }

  const containerPositions = [
  {
    containerPositionNumber: 20,
    left: '6%',
    rotate: '-18deg'
  },
  {
    containerPositionNumber: 1,
    left: '12.5%'
  },
  {
    containerPositionNumber: 2,
    left: '15.5%'
  },
  {
    containerPositionNumber: 3,
    left: '22%'
  },
  {
    containerPositionNumber: 4,
    left: '24.8%'
  },
  {
    containerPositionNumber: 5,
    left: '30.2%'
  },
  // {
  //   containerPositionNumber: 6,
  //   left: '33.2%'
  // },
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
    left: '70.8%'
  },
  {
    containerPositionNumber: 15,
    left: '78%'
  },
  // {
  //   containerPositionNumber: 16,
  //   left: '79.3%'
  // },
  {
    containerPositionNumber: 21,
    left: '88%'
  },
  {
    containerPositionNumber: 22,
    left: '91%'
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
          return <>
            <motion.div key={x.containerPositionNumber} style={{
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
                containerPositions={containerPositions}
              />
            </motion.div>
          </>
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

      <div style={{
        position: 'absolute',
        left: '16vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        1
      </div>
      <div style={{
        position: 'absolute',
        left: '34vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        2
      </div>
      <div style={{
        position: 'absolute',
        left: '58vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        3
      </div>
      <div style={{
        position: 'absolute',
        left: '75vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        4
      </div>
      <div style={{
        position: 'absolute',
        left: '105vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        5
      </div>
      <div style={{
        position: 'absolute',
        left: '130vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        6
      </div>
      <div style={{
        position: 'absolute',
        left: '152vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        7
      </div>
      <div style={{
        position: 'absolute',
        left: '175vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        8
      </div>
      <div style={{
        position: 'absolute',
        left: '198vh',
        top: '73%',
        width: '12vh',
        fontSize: '24px'
      }}>
        9
      </div>
      <div style={{
        position: 'absolute',
        left: '226vh',
        top: '71%',
        width: '12vh',
        fontSize: '24px'
      }}>
        10
      </div>
      <div style={{
        position: 'absolute',
        left: '235vh',
        top: '26%',
        width: '12vh',
        fontSize: '24px'
      }}>
        11
      </div>
      <div style={{
        position: 'absolute',
        left: '226vh',
        top: '22%',
        width: '12vh',
        fontSize: '24px'
      }}>
        12
      </div>
      <div style={{
        position: 'absolute',
        left: '214vh',
        top: '17%',
        width: '12vh',
        fontSize: '24px'
      }}>
        13
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
