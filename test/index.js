import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());

// cartesian system chart component
require('./specs/cartesian/XAxisSpec');
require('./specs/cartesian/YAxisSpec');

// polar system chart component
require('./specs/polar/PolarAngleAxisSpec');
require('./specs/polar/RadialBarSpec');
require('./specs/polar/RadarSpec');

// chart
require('./specs/chart/SankeySpec');

// general component
require('./specs/component/TooltipSpec');
require('./specs/component/TextSpec');

// shape
require('./specs/shape/CrossSpec');
require('./specs/shape/CurveSpec');
require('./specs/shape/DotSpec');
require('./specs/shape/RectangleSpec');
require('./specs/shape/SectorSpec');
require('./specs/shape/PolygonSpec');
require('./specs/shape/SymbolsSpec');
require('./specs/shape/TrapezoidSpec');
