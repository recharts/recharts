import { PureComponent } from 'react';
import './iframe.scss';

class Storybook extends PureComponent {
  render() {
    return (
      <iframe
        title="Recharts storybook"
        className="fullscreen"
        src="https://main--63da8268a0da9970db6992aa.chromatic.com/"
      />
    );
  }
}

export default Storybook;
