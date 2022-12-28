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
import {Container} from './Container';
import {ContainerEdit} from './ContainerEdit.tsx';
import ProgressSvg from '../Progress/ProgressSvg';

// Models
import { Progress as ProgressModel } from '/imports/models/Progress';

export const ContainerPickup = () => {

  const [clickedPositionNumber, setClickedPositionNumber] = useState(undefined)
  const [myHouseNumber, setMyHouseNumber] = useState()

  // Get all progress
  const { allProgress, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('progress.all');

    const progress = ProgressModel.find({}, {
      sort: {dt_created: -1},
    }).fetch();

    return {
      allProgress: progress,
      isLoading: ! subscription.ready(),
    }
  }, []);

  // Set housenumber in state
  useEffect(() => {
    const houseNumber = parseInt(localStorage.getItem('SLOOPHOEK__houseNumber'));
    setMyHouseNumber(houseNumber);
  }, [])

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

  const onContainerClick = (containerPositionNumber: number) => {
    setClickedPositionNumber(containerPositionNumber);
  }

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
  // {
  //   containerPositionNumber: 10,
  //   left: '52%'
  // },
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

  // Auto scroll to users houseNumber (on component load)
  useEffect(() => {
    if(! myHouseNumber) return;

    // Get 'scroll left' position for housenumber
    let scrollLeftPercentage = 0;
    containerPositions.map((x) => {
      if(scrollLeftPercentage > 0) return;

      if(x.houseNumber && (x.houseNumber === myHouseNumber || x.houseNumber > myHouseNumber)) {
        scrollLeftPercentage = parseInt(x.left.replace('%', ''));
      }
    });

    if(myHouseNumber >= 31) scrollLeftPercentage = 76;

    const mapWidth = document.getElementById('js-ContainerPickup-map').width;
    const scrollLeftInPixels = (mapWidth / 100 * scrollLeftPercentage) - 150;

    // Scroll to position
    document.getElementById('js-ContainerPickup').scroll(scrollLeftInPixels, 0);
  }, [myHouseNumber])

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
    {/*OVERLAY*/}
    {clickedPositionNumber ? <ContainerEdit
      containerPositionNumber={clickedPositionNumber}
      onClose={() => {
        setClickedPositionNumber(undefined);
      }}
    /> : ''}

    {/*CONTAINER MAP*/}
    <div id="js-ContainerPickup" className="fixed z-1 top-0 left-0 bottom-0 left-0 w-full overflow-x-auto">
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

        {(moment().format('MM-DD') == '12-25' || moment().format('MM-DD') == '12-26') && <div className="fixed" style={{
          top: '59.3vh',
          left: '38.7%',
        }}>
          <img src="/images/components/ContainerPickup/theme-elements/christmas/santa-claus-orange.png" alt="Santa Claus" style={{width: '5vh'}} />
        </div>}

        {(moment().format('MM-DD') == '12-31') && <div className="fixed" style={{
          top: '59.3vh',
          left: '38.7%',
        }}>
          <img src="/images/components/ContainerPickup/theme-elements/fireworks/fireworks.svg" alt="Vuurwerk" style={{width: '5vh'}} />
        </div>}

        {(moment().format('MM-DD') == '01-01') && <div className="absolute" style={{
          top: '77.2vh',
          left: '27.1%',
        }}>
          <img src="/images/components/ContainerPickup/theme-elements/champaign/champaign.svg" alt="Champagne" style={{width: '8vh'}} />
        </div>}

        <div className="
          ContainerPickup-ProgressSvg
          absolute
        " style={{
            top: '11vh',
            width: '177.2vh',
            left: '47.6vh'
        }}>
          <ProgressSvg data={allProgress} width="100%" />
        </div>

      </div>

      {/*
      <div style={{
        position: 'absolute',
        left: '35vh',
        top: '57%',
        width: '12vh',
        fontSize: '24px',
      }}>
        1
      </div>
      <div style={{
        position: 'absolute',
        left: '34vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        2
      </div>
      <div style={{
        position: 'absolute',
        left: '58vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        3
      </div>
      <div style={{
        position: 'absolute',
        left: '75vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        4
      </div>
      <div style={{
        position: 'absolute',
        left: '105vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        5
      </div>
      <div style={{
        position: 'absolute',
        left: '130vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        6
      </div>
      <div style={{
        position: 'absolute',
        left: '152vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        7
      </div>
      <div style={{
        position: 'absolute',
        left: '175vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        8
      </div>
      <div style={{
        position: 'absolute',
        left: '198vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        9
      </div>
      <div style={{
        position: 'absolute',
        left: '226vh',
        top: '69%',
        width: '12vh',
        fontSize: '24px'
      }}>
        10
      </div>
      <div style={{
        position: 'absolute',
        left: '235vh',
        top: '22%',
        width: '12vh',
        fontSize: '24px'
      }}>
        11
      </div>
      <div style={{
        position: 'absolute',
        left: '226vh',
        top: '18%',
        width: '12vh',
        fontSize: '24px'
      }}>
        12
      </div>
      <div style={{
        position: 'absolute',
        left: '214vh',
        top: '13%',
        width: '12vh',
        fontSize: '24px'
      }}>
        13
      </div>
    */}

    </div>

    {/*LEGEND*/}
    <div className="fixed z-2 bottom-0 left-0 w-full overflow-x-auto">
      <img src="/images/components/ContainerPickup/legend.png" alt="Container map"
        className="ContainerPickup-map w-full bg-white p-1 block"
      />
    </div>

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
