import React from 'react';
import { render } from 'react-dom';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { App } from '/imports/ui/App';

const renderApp = (children) => {
  render(<App>
    {children}
  </App>, document.getElementById('react-target'));
}

FlowRouter.route('/', {
  name: 'index',
  async action(params, queryParams) {
    const { Landing } = await import('/imports/components/Landing/Landing.tsx')
    renderApp(<Landing />);
  }
});

FlowRouter.route('/sloop/checkin', {
  name: 'sloop-checkin',
  async action(params, queryParams) {
    const { CheckIn } = await import('/imports/components/CheckIn/CheckIn.jsx')
    renderApp(<CheckIn />);
  }
});

FlowRouter.route('/sloop/checkin/done', {
  name: 'sloop-checkin-done',
  async action(params, queryParams) {
    const { CheckInDone } = await import('/imports/components/CheckIn/CheckInDone')
    renderApp(<CheckInDone />);
  }
});

// Create 404 route (catch-all)
FlowRouter.route('*', {
  action() {
    // Show 404 error page
    renderApp(<div>404 Not Found</div>);
  }
});
