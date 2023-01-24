import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());

// cartesian system chart component
require('./specs/cartesian/XAxisSpec');

// polar system chart component
require('./specs/polar/RadarSpec');

// general component
require('./specs/component/TextSpec');
