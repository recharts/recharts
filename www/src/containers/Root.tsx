import { PureComponent } from 'react';
import { BrowserRouter } from 'react-router';
import Routes from '../routes';
import { PageTracker } from '../components/analytics.ts';

class Root extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <PageTracker />
        <Routes />
      </BrowserRouter>
    );
  }
}

export default Root;
