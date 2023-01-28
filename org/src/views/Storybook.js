import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Installation, GettingStarted, Customize } from '../components/GuideView';
import { getLocaleType } from '../utils/LocaleUtils';
import './Storybook.scss';

const modules = ['installation', 'getting-started', 'customize'];

@connect((state, ownProps) => {
  const pathname = ownProps.location.pathname || '';
  const paths = pathname.split('/');

  return {
    page: paths && paths.length === 4 ? paths[3] : modules[0],
  };
})
class Storybook extends PureComponent {
  renderGuide(locale) {
    // eslint-disable-next-line react/prop-types
    const { page } = this.props;

    if (page === 'installation') {
      return <Installation locale={locale} />;
    }
    if (page === 'getting-started') {
      return <GettingStarted locale={locale} />;
    }
    if (page === 'customize') {
      return <Customize locale={locale} />;
    }
    return null;
  }

  render() {
    const { page } = this.props;
    const locale = getLocaleType(this.props);

    return <iframe src="https://63d24aee84ee7cc215239dcc-yrlgloqamw.chromatic.com/"/>;
  }
}

export default Storybook;
