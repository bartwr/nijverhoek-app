import React, {useEffect} from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';

export const CheckOut = () => {
  const checkOut = () => {
    // Check if houseNumber was selected
    const houseNumber = document.getElementById('houseNumber').value;
    if(! houseNumber) {
      alert('Selecteer het kavelnummer waarin je gaat slopen');
      return;
    }

    // Store number in localStorage
    localStorage.setItem('SLOOPHOEK__houseNumber', houseNumber);

    // Check out
    Meteor.call('sessions.checkout', {
      memo: Number(houseNumber),
      session_end: null
    }, (err, res) => {
      console.log(err, res);
      if(err || ! res) return;

      if(res.error) {
        alert(res.error.msg);
        FlowRouter.go('index');
        return;
      }

      // If checkin went well: redirect
      FlowRouter.go('sloop-checkout-done')
    });
  }

  return <LayoutWithLogo>
    <Title>
      Welk kavel ga je leeg achterlaten?
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
      <Button onClick={checkOut}>
        Check out
      </Button>
    </div>
  </LayoutWithLogo>
}
