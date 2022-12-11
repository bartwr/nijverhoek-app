import { Meteor } from 'meteor/meteor';
import React, { useEffect } from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';

export const ContainerPickup = () => {

  const onSubmit = (e) => {
    e?.preventDefault();

    if(document.getElementById('js-ContainerPickup-button').value === 'Thanks!') {
      return;
    }

    const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');
    if(! houseNumber) return;

    const submittedByHouseNumber = parseInt(houseNumber);
    const containerNumber = document.getElementById('js-containerNumber').value;
    const status = document.getElementById('js-status').value;

    if(containerNumber === '') {
      alert('Selecteer een container nummer');
      return
    }

    // Say Thanks!
    document.getElementById('js-ContainerPickup-button').innerText = 'Thanks!';
    document.getElementById('js-ContainerPickup-button').style.backgroundColor = '#f85838';
    // Redirect to index
    setTimeout(() => {
      FlowRouter.go('index')
    }, 1500)

    Meteor.call('containers.addStatus', {
      submittedByHouseNumber: submittedByHouseNumber,
      containerNumber: parseInt(containerNumber),
      status: status
    }, (err, res) => {
        if(err) return;
      }
    );
  }

  return <LayoutWithLogo>
    <div className="fixed z-1 top-0 left-0 bottom-0 left-0 w-full overflow-x-auto">
      <img src="/images/components/ContainerPickup/map.png" alt="Container map"
        className="ContainerPickup-map block"
        style={{
          width: 'auto',
          maxWidth: '9999px',
          height: '100%',
        }}
      />
    </div>

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


      <div className="my-8 flex flex justify-around">
        <div>
          Container<br /><br />
          <Select name="containerNumber" id="js-containerNumber" defaultValue={localStorage.getItem('SLOOPHOEK__houseNumber')}>
            <option value="">#</option>
            {Array.from(Array(12), (_, number) => <option value={number+1} key={number+1}>
              {number+1}
            </option>)}
          </Select>
        </div>
        <div>
          is<br /><br />
          <Select name="status" id="js-status" defaultValue={localStorage.getItem('SLOOPHOEK__houseNumber')}>
            <option value="">vol</option>
            <option value="">halfvol</option>
            <option value="">leeg</option>
          </Select>
        </div>
      </div>

      <div className="my-4">
        <Button onClick={onSubmit} id="js-ContainerPickup-button">
          Geef door
        </Button>
      </div>

    </div>
  </LayoutWithLogo>
}
