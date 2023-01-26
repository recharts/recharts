import React from 'react';
import Highlight from '../../utils/Highlight';
import { localeGet } from '../../utils/LocaleUtils';

const Installation = ({ locale }) => (
  <div className="mod-installation" id="Installation">
    <h3 className="page-title">{localeGet(locale, 'installation', 'installation')}</h3>
    <h4 className="sub-title">NPM</h4>
    <p className="paragraph-title">
      {localeGet(locale, 'installation', 'npm-desc')}
      <a href="http://webpack.github.io/" target="_blank" rel="noreferrer">
        Webpack
      </a>
      {localeGet(locale, 'installation', 'dot')}
    </p>
    <Highlight className="sh">
      {`  # latest stable
  $ npm install recharts`}
    </Highlight>
    <h4 className="sub-title">UMD</h4>
    <p className="paragraph-title">
      {localeGet(locale, 'installation', 'umd-desc')}
      &nbsp;(&nbsp;
      <a href="https://unpkg.com/" target="_blank" rel="noreferrer">
        unpkg
      </a>
      &nbsp;)&nbsp; &nbsp;:
    </p>
    <Highlight className="html">
      {`<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
<script src="https://unpkg.com/recharts/umd/Recharts.js"></script>`}
    </Highlight>
    <p className="paragraph-title">
      {localeGet(locale, 'installation', 'umd-use')}
      <code>window.Recharts</code>
    </p>
    <h4 className="sub-title">{localeGet(locale, 'installation', 'dev-build')}</h4>
    <Highlight className="sh">
      {`  $ git clone https://github.com/recharts/recharts.git
  $ cd recharts
  $ npm install
  $ npm run build`}
    </Highlight>
  </div>
);

export default Installation;
