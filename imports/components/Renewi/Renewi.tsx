import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { useTracker } from 'meteor/react-meteor-data';
import moment from 'moment';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';
import {Container} from '../ContainerPickup/Container';
import {ContainerEdit} from '../ContainerPickup/ContainerEdit.tsx';
import {Legend} from '../ContainerPickup/Legend.tsx';

export const Renewi = () => {

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

    setWidthForImage();

    return () => {
      window.removeEventListener('resize', function () {
        setWidthForImage();
      });
    }
  }, [])

  const containerPositions = [
  {
    houseNumber: 1,
    containerPositionNumber: 20,
    left: '18%',
    rotate: '-18deg'
  },
  {
    houseNumber: 4,
    containerPositionNumber: 1,
    left: '23%'
  },
  // {
  //   containerPositionNumber: 2,
  //   left: '25.2%'
  // },
  {
    houseNumber: 7,
    containerPositionNumber: 3,
    left: '30%'
  },
  {
    containerPositionNumber: 4,
    left: '31.9%'
  },
  {
    houseNumber: 9,
    containerPositionNumber: 5,
    left: '36%'
  },
  // {
  //   containerPositionNumber: 6,
  //   left: '44.2%'
  // },
  {
    houseNumber: 14,
    containerPositionNumber: 7,
    left: '43%'
  },
  {
    houseNumber: 15,
    containerPositionNumber: 8,
    left: '45%'
  },
  {
    houseNumber: 17,
    containerPositionNumber: 9,
    left: '50%'
  },
  {
    containerPositionNumber: 10,
    left: '52%'
  },
  {
    houseNumber: 20,
    containerPositionNumber: 11,
    left: '56.5%'
  },
  {
    houseNumber: 21,
    containerPositionNumber: 12,
    left: '58.5%'
  },
  {
    houseNumber: 23,
    containerPositionNumber: 13,
    left: '63%'
  },
  {
    houseNumber: 24,
    containerPositionNumber: 14,
    left: '65%'
  },
  {
    houseNumber: 25,
    containerPositionNumber: 15,
    left: '70%'
  },
  // {
  //   containerPositionNumber: 16,
  //   left: '90.3%'
  // },
  {
    houseNumber: 27,
    containerPositionNumber: 21,
    left: '76.5%'
  },
  {
    houseNumber: 28,
    containerPositionNumber: 22,
    left: '79%'
  },
  {
    houseNumber: 30,
    containerPositionNumber: 17,
    left: '76%',
    top: '16%',
    rotate: '67deg',
  },
  {
    houseNumber: 29,
    containerPositionNumber: 18,
    left: '78.5%',
    top: '19.7%',
    rotate: '67deg',
  },
  {
    houseNumber: 28,
    containerPositionNumber: 19,
    left: '81%',
    top: '23.5%',
    rotate: '67deg',
  }]

  const Banner = ({style, children}) => (
    <div data-type="banner" className="overflow-hidden opacity-90 text-center absolute bg-red top-0 text-white flex flex-col justify-center" style={Object.assign({}, {
      background: '#ff000d',
      width: '6.4vh',
      height: '1.6vh',
      fontSize: '1vh'
    }, style)}>
      {children}
    </div>
  );

  return <LayoutWithLogo>
    {/*CONTAINER MAP*/}
    <motion.div
      id="js-ContainerPickup"
      className="fixed z-1 top-0 left-0 bottom-0 left-0 w-full overflow-x-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="relative" style={{
          width: 'max-content',
          height: '100%',
        }}>

        {containerPositions.map((x) => {
          return <>
            <motion.div key={x.containerPositionNumber} style={{
              position: 'absolute',
              left: x.left,
              top: x.top || '43.8%',
              width: '8vh',
            }}
            >
              <Container
                containerPositionNumber={x.containerPositionNumber}
                rotate={x.rotate}
                containerPositions={containerPositions}
              />
            </motion.div>
          </>
        })}

        <img src="/images/components/ContainerPickup/map-v3.png?0" alt="Container map"
          className="ContainerPickup-map block"
          id="js-ContainerPickup-map"
          style={{
            width: 'auto',
            maxWidth: '9999px',
            height: '100%',
          }}
        />

        <Banner style={{
          top: '42.33%',
          left: '46.25%'
        }}>
          Klussen
        </Banner>

        <Banner style={{
          top: '42.33%',
          left: '52.92%',
        }}>
          in De
        </Banner>

        <Banner style={{
          top: '42.33%',
          left: '58.7%',
        }}>
          Nijverhoek
        </Banner>

      </div>

    </motion.div>

    <Legend />

    <div className="relative z-10">

      <Title>
        Containers
      </Title>

      {/*<p className="my-4" style={{
        textShadow: 'white 0 0 3px'
      }}>
        Volgende wissel: dinsdag 27 dec
      </p>*/}

    </div>
  </LayoutWithLogo>
}
