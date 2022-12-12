import { Meteor } from 'meteor/meteor';
import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import { useTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Overlay} from '../Overlay/Overlay.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';

import './ContainerEdit.css';

export const ContainerEdit = ({
  containerPositionNumber,
  onClose
}: {
  containerPositionNumber: number,
  onClose?: Function
}) => {
  // On load
  useEffect(() => {
    Meteor.call('containers.getContainerStatus', containerPositionNumber, (err, res) => {
      if(err) {
        console.error(err);
        return;
      }
      // No container status found:
      if(res === undefined) {
        return;
      }
      // Did find container status:
      document.getElementById('js-containerNumber').value = res.containerNumber;
      document.getElementById('js-status').value = res.status;
      document.getElementById('js-containerType').value = res.containerType;
    })
  }, [])

  const onSubmit = (e) => {
    e?.preventDefault();

    if(document.getElementById('js-ContainerPickup-button').value === 'Thanks!') {
      return;
    }

    const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');

    const submittedByHouseNumber = houseNumber ? parseInt(houseNumber) : undefined;
    const containerNumber = document.getElementById('js-containerNumber').value;
    const containerType = document.getElementById('js-containerType').value;
    const status = document.getElementById('js-status').value;

    // Say Thanks!
    document.getElementById('js-ContainerPickup-button').innerText = 'Thanks!';
    document.getElementById('js-ContainerPickup-button').style.backgroundColor = '#f85838';
    // Redirect to index
    setTimeout(() => {
      onClose()
    }, 250)

    Meteor.call('containers.addStatus', {
      submittedByHouseNumber: submittedByHouseNumber,
      containerPositionNumber: containerPositionNumber,
      containerNumber: containerNumber ? parseInt(containerNumber) : undefined,
      containerType: containerType,
      status: status
    }, (err, res) => {
        if(err) return;
      }
    );
  }

  return (
    <Overlay
      title="Container status"
      onClose={onClose}
    >
      <div className="my-8 flex flex justify-around">
        <div>
          Container<br /><br />
          <Select name="containerNumber" id="js-containerNumber" style={{textAlign: 'center'}}>
            <option value="">?</option>
            {Array.from(Array(12), (_, number) => <option value={number+1} key={number+1}>
              {number+1}
            </option>)}
          </Select>
        </div>
        <div>
          is<br /><br />
          <Select name="status" id="js-status" style={{textAlign: 'center'}}>
            <option value="vol">vol</option>
            <option value="halfvol">halfvol</option>
            <option value="leeg">leeg</option>
          </Select>
        </div>
      </div>

      <div className="my-8">
        containertype is<br /><br />
        <Select name="containerType" id="js-containerType" style={{textAlign: 'center'}}>
          <option value="">?</option>
          <option value="bouw-en-sloop">Bouw & Sloopafval</option>
          <option value="houtafval-b">Houtafval B-kwaliteit</option>
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
