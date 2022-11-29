import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import '../imports/startup/client/serviceWorker.js'

import { App } from '/imports/ui/App';

// Meteor.startup(() => {
 // });

const renderApp = (children) => {
  render(<App>
    {children}
  </App>, document.getElementById('react-target'));
}

FlowRouter.route('/', {
  name: 'index',
  action(params, queryParams) {
    renderApp();
  }
});

FlowRouter.route('/sloop/checkin', {
  name: 'sloop-checkin',
  async action(params, queryParams) {
    const { CheckIn } = await import('/imports/components/CheckIn/CheckIn.jsx')
    renderApp(<CheckIn />);
  }
});

// Create 404 route (catch-all)
FlowRouter.route('*', {
  action() {
    // Show 404 error page using Blaze
    this.render('notFound');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});
