import React, { useEffect } from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';

export const CheckIn = () => {
  const checkIn = () => {
    // Check if houseNumber was selected
    const houseNumber = document.getElementById('houseNumber').value;
    if(! houseNumber) {
      alert('Selecteer het kavelnummer waarin je gaat slopen');
      return;
    }

    // Store number in localStorage
    localStorage.setItem('SLOOPHOEK__houseNumber', houseNumber);

    // Check in
    Meteor.call('sessions.checkin', {
      user_id: localStorage.getItem('SLOOPHOEK__uuid'),
      memo: houseNumber,
      session_start: null,
      number_of_visitors: null
    }, (err, res) => {
      console.log(err, res);
      if(err || ! res) return;

      if(res.error) {
        alert(res.error.msg);
        FlowRouter.go('index');
        return;
      }

      // If checkin went well: redirect
      FlowRouter.go('sloop-checkin-done')
    });
  }

  return <LayoutWithLogo>
    <Title>
      Welkom in de Nijverhoek. In welk kavel ga je klussen?
    </Title>

    <div className="my-8">
      <Select name="houseNumber" id="houseNumber" defaultValue={localStorage.getItem('SLOOPHOEK__houseNumber')}>
        <option value=""></option>
        {Array.from(Array(32), (_, number) => <option value={number+1} key={number+1}>
          {number+1}
        </option>)}
      </Select>
    </div>

    <div className="my-4">
      <Button onClick={checkIn}>
        Check in
      </Button>
    </div>
  </LayoutWithLogo>
}
