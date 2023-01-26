import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Installation, GettingStarted, Customize } from '../components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils';

const modules = ['installation', 'getting-started', 'customize'];
import './Storybook.scss';

@connect((state, ownProps) => {
  const pathname = ownProps.location.pathname || '';
  const paths = pathname.split('/');

  return {
    page: paths && paths.length === 4 ? paths[3] : modules[0],
  };
})
class Storybook extends PureComponent {
  renderGuide(locale) {
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

    return <iframe src="https://dillonreedy.github.io/recharts-storybook/?path=/story/recharts-area-chart--simple"/>;
  }
}

export default Storybook;
