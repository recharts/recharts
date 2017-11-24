const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// cartesian system chart component
require('./specs/cartesian/XAxisSpec');
require('./specs/cartesian/YAxisSpec');
require('./specs/cartesian/ZAxisSpec');
require('./specs/cartesian/BarSpec');
require('./specs/cartesian/AreaSpec');
require('./specs/cartesian/LineSpec');
require('./specs/cartesian/ScatterSpec');
require('./specs/cartesian/BrushSpec');
require('./specs/cartesian/CartesianAxisSpec');
require('./specs/cartesian/CartesianGridSpec');
require('./specs/cartesian/ReferenceLineSpec');
require('./specs/cartesian/ReferenceDotSpec');
require('./specs/cartesian/ReferenceAreaSpec');
require('./specs/cartesian/ErrorBarSpec');

// polar system chart component
require('./specs/polar/PolarRadiusAxisSpec');
require('./specs/polar/PolarAngleAxisSpec');
require('./specs/polar/PolarGridSpec');
require('./specs/polar/PieSpec');
require('./specs/polar/RadialBarSpec');
require('./specs/polar/RadarSpec');

// chart
require('./specs/chart/AreaChartSpec');
require('./specs/chart/BarChartSpec');
require('./specs/chart/LineChartSpec');
require('./specs/chart/PieChartSpec');
require('./specs/chart/RadarChartSpec');
require('./specs/chart/ScatterChartSpec');
require('./specs/chart/TreemapSpec');
require('./specs/chart/RadialBarChartSpec');
require('./specs/chart/ComposedChartSpec');
require('./specs/chart/SankeySpec');

// general component
require('./specs/component/CellSpec');
require('./specs/component/LegendSpec');
require('./specs/component/TooltipSpec');
require('./specs/component/ResponsiveContainerSpec');
require('./specs/component/TextSpec');
require('./specs/component/LabelSpec');
require('./specs/component/LabelListSpec');

// shape
require('./specs/shape/CrossSpec');
require('./specs/shape/CurveSpec');
require('./specs/shape/DotSpec');
require('./specs/shape/RectangleSpec');
require('./specs/shape/SectorSpec');
require('./specs/shape/PolygonSpec');
require('./specs/shape/SymbolsSpec');

// util
require('./specs/util/CartesianUtilsSpec');
require('./specs/util/PureRenderSpec');
require('./specs/util/DataUtilsSpec');
require('./specs/util/ReactUtilsSpec');
require('./specs/util/LogUtilsSpec');
require('./specs/util/DOMUtilsSpec');
require('./specs/util/ChartUtilsSpec');
