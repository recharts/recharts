import React from 'react';
import { render } from '@testing-library/react';
import { exampleRadarData, ringsData } from '../_data';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Surface,
} from '../../src';
import { pageData } from '../../storybook/stories/data/Page';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import {
  selectPolarAxis,
  selectPolarAxisScale,
  selectPolarAxisTicks,
  selectPolarCategoricalDomain,
} from '../../src/state/selectors/polarScaleSelectors';
import { selectPolarGridAngles, selectPolarGridRadii } from '../../src/state/selectors/polarGridSelectors';
import { expectLastCalledWithScale } from '../helper/expectScale';
import { selectAllPolarAppliedNumericalValues, selectPolarNiceTicks } from '../../src/state/selectors/polarSelectors';
import { TickItem } from '../../src/util/types';

type ExpectedLine = {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
};

function expectPolarGridLines(container: HTMLElement, expectedLines: ReadonlyArray<ExpectedLine>) {
  const lines = container.querySelectorAll('.recharts-polar-grid-angle line');

  const actualLines: ReadonlyArray<ExpectedLine> = Array.from(lines).map((line: SVGLineElement) => ({
    x1: line.getAttribute('x1'),
    y1: line.getAttribute('y1'),
    x2: line.getAttribute('x2'),
    y2: line.getAttribute('y2'),
  }));

  expect(actualLines).toEqual(expectedLines);
}

type ExpectedPolygon = {
  cx: number;
  cy: number;
  d: string;
};

function expectPolarGridPolygons(container: HTMLElement, expectedPolygon: ReadonlyArray<ExpectedPolygon>) {
  const polygons = container.querySelectorAll('.recharts-polar-grid-concentric-polygon');

  const actualPolygons: ReadonlyArray<ExpectedPolygon> = Array.from(polygons).map(
    (polygon: SVGPathElement): ExpectedPolygon => ({
      cx: Number(polygon.getAttribute('cx')),
      cy: Number(polygon.getAttribute('cy')),
      d: polygon.getAttribute('d'),
    }),
  );

  expect(actualPolygons).toEqual(expectedPolygon);
}

type ExpectedCircle = {
  cx: number;
  cy: number;
  r: number;
};

function expectPolarGridCircles(container: HTMLElement, expectedCircles: ReadonlyArray<ExpectedCircle>) {
  const circles = container.querySelectorAll('.recharts-polar-grid-concentric-circle');

  const actualCircles: ReadonlyArray<ExpectedCircle> = Array.from(circles).map(
    (circle: SVGCircleElement): ExpectedCircle => ({
      cx: Number(circle.getAttribute('cx')),
      cy: Number(circle.getAttribute('cy')),
      r: Number(circle.getAttribute('r')),
    }),
  );

  expect(actualCircles).toEqual(expectedCircles);
}

describe('<PolarGrid />', () => {
  describe('when polarAngles and polarRadius are specified explicitly, outside of any charts', () => {
    const polarAngles = [0, 30, 60, 90, 145, 180, 200, 270, 300];
    const polarRadius = [10, 20, 40, 80];

    test('Renders angle lines and polygons by default', () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <PolarGrid
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={200}
            width={500}
            height={500}
            polarAngles={polarAngles}
            polarRadius={polarRadius}
          />
        </Surface>,
      );

      expectPolarGridLines(container, [
        {
          x1: '250',
          x2: '450',
          y1: '250',
          y2: '250',
        },
        {
          x1: '250',
          x2: '423.20508075688775',
          y1: '250',
          y2: '150',
        },
        {
          x1: '250',
          x2: '350',
          y1: '250',
          y2: '76.79491924311228',
        },
        {
          x1: '250',
          x2: '250',
          y1: '250',
          y2: '50',
        },
        {
          x1: '250',
          x2: '86.16959114220163',
          y1: '250',
          y2: '135.2847127297908',
        },
        {
          x1: '250',
          x2: '50',
          y1: '250',
          y2: '249.99999999999997',
        },
        {
          x1: '250',
          x2: '62.06147584281831',
          y1: '250',
          y2: '318.40402866513375',
        },
        {
          x1: '250',
          x2: '249.99999999999997',
          y1: '250',
          y2: '450',
        },
        {
          x1: '250',
          x2: '350',
          y1: '250',
          y2: '423.2050807568877',
        },
      ]);

      expectPolarGridPolygons(container, [
        {
          cx: 250,
          cy: 250,
          d: 'M 260,250L 258.66025403784437,245L 255,241.3397459621556L 250,240L 241.80847955711008,244.26423563648953L 240,250L 240.60307379214092,253.4202014332567L 250,260L 255,258.66025403784437Z',
        },
        {
          cx: 250,
          cy: 250,
          d: 'M 270,250L 267.3205080756888,240L 260,232.67949192431124L 250,230L 233.61695911422015,238.5284712729791L 230,250L 231.20614758428184,256.8404028665134L 250,270L 260,267.3205080756888Z',
        },
        {
          cx: 250,
          cy: 250,
          d: 'M 290,250L 284.6410161513775,230L 270,215.35898384862247L 250,210L 217.23391822844033,227.05694254595815L 210,250L 212.41229516856367,263.6808057330268L 250,290L 270,284.6410161513775Z',
        },
        {
          cx: 250,
          cy: 250,
          d: 'M 330,250L 319.2820323027551,210L 290,180.71796769724492L 250,170L 184.46783645688066,204.11388509191633L 170,250L 174.82459033712732,277.3616114660535L 249.99999999999997,330L 290,319.28203230275506Z',
        },
      ]);

      expectPolarGridCircles(container, []);
    });

    test("Don't render any lines or polygons when polarAngles and polarRadius are not specified", () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <PolarGrid cx={250} cy={250} innerRadius={0} outerRadius={200} width={500} height={500} />
        </Surface>,
      );

      expectPolarGridLines(container, []);
      expectPolarGridPolygons(container, []);
      expectPolarGridCircles(container, []);
    });

    test('Render circles when gridType is specified to be circle', () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <PolarGrid
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={200}
            width={500}
            height={500}
            gridType="circle"
            polarAngles={polarAngles}
            polarRadius={polarRadius}
          />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-polar-grid-angle line')).toHaveLength(9);
      expect(container.querySelectorAll('.recharts-polar-grid-concentric-circle')).toHaveLength(4);
    });

    test("Don't render any path when outerRadius is smaller than 0", () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <PolarGrid
            cx={250}
            cy={250}
            innerRadius={0}
            outerRadius={0}
            width={500}
            height={500}
            gridType="circle"
            polarAngles={polarAngles}
            polarRadius={polarRadius}
          />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-polar-grid-angle line')).toHaveLength(0);
      expect(container.querySelectorAll('.recharts-polar-grid-concentric-circle')).toHaveLength(0);
    });
  });

  describe('as a child of RadarChart', () => {
    test('Renders polar radius axis with RadarChart', () => {
      const { container } = render(
        <RadarChart width={500} height={500} data={exampleRadarData}>
          <Radar dataKey="value" />
          <PolarRadiusAxis dataKey="value" />
          <PolarGrid />
        </RadarChart>,
      );

      expectPolarGridLines(container, [
        {
          x1: '250',
          x2: '250',
          y1: '250',
          y2: '54',
        },
        {
          x1: '250',
          x2: '388.5929291125633',
          y1: '250',
          y2: '111.4070708874367',
        },
        {
          x1: '250',
          x2: '446',
          y1: '250',
          y2: '250',
        },
        {
          x1: '250',
          x2: '388.5929291125633',
          y1: '250',
          y2: '388.5929291125633',
        },
        {
          x1: '250',
          x2: '250',
          y1: '250',
          y2: '446',
        },
        {
          x1: '250',
          x2: '111.4070708874367',
          y1: '250',
          y2: '388.5929291125633',
        },
        {
          x1: '250',
          x2: '54',
          y1: '250',
          y2: '250.00000000000003',
        },
        {
          x1: '250',
          x2: '111.40707088743665',
          y1: '250',
          y2: '111.4070708874367',
        },
      ]);

      expectPolarGridPolygons(container, [
        {
          cx: 250,
          cy: 250,
          d: 'M 250,250L 250,250L 250,250L 250,250L 250,250L 250,250L 250,250L 250,250Z',
        },
        {
          cx: 250,
          cy: 250,
          d: 'M 250,201L 284.6482322781408,215.35176772185918L 299,250L 284.6482322781408,284.6482322781408L 250,299L 215.35176772185918,284.6482322781408L 201,250L 215.35176772185918,215.35176772185918Z',
        },
        {
          cx: 250,
          cy: 250,
          d: 'M 250,152L 319.29646455628165,180.70353544371835L 348,250L 319.29646455628165,319.29646455628165L 250,348L 180.70353544371835,319.29646455628165L 152,250L 180.70353544371832,180.70353544371835Z',
        },
        {
          cx: 250,
          cy: 250,
          d: 'M 250,103L 353.9446968344225,146.05530316557753L 397,250L 353.9446968344225,353.9446968344225L 250,397L 146.05530316557753,353.9446968344225L 103,250.00000000000003L 146.05530316557747,146.05530316557753Z',
        },
        {
          cx: 250,
          cy: 250,
          d: 'M 250,54L 388.5929291125633,111.4070708874367L 446,250L 388.5929291125633,388.5929291125633L 250,446L 111.4070708874367,388.5929291125633L 54,250.00000000000003L 111.40707088743665,111.4070708874367Z',
        },
      ]);

      expectPolarGridCircles(container, []);
    });
  });

  describe('as a child of RadialBarChart with explicit axes', () => {
    it.each([
      { gridType: 'polygon', radialLines: true },
      { gridType: undefined, radialLines: true },
      { gridType: 'polygon', radialLines: undefined },
      { gridType: undefined, radialLines: undefined },
    ] as const)(
      'renders polygon and lines when gridType=$gridType and radialLines=$radialLines',
      ({ gridType, radialLines }) => {
        const { container } = render(
          <RadialBarChart width={500} height={500} data={pageData}>
            <RadialBar dataKey="uv" />
            <PolarAngleAxis type="number" dataKey="uv" />
            <PolarRadiusAxis type="category" dataKey="name" />
            <PolarGrid gridType={gridType} radialLines={radialLines} />
          </RadialBarChart>,
        );

        expectPolarGridLines(container, [
          {
            x1: '250',
            x2: '446',
            y1: '250',
            y2: '250',
          },
          {
            x1: '250',
            x2: '382.7471880386453',
            y1: '250',
            y2: '105.79811350806622',
          },
          {
            x1: '250',
            x2: '233.81444828742286',
            y1: '250',
            y2: '54.669439370692714',
          },
          {
            x1: '250',
            x2: '95.32846015830688',
            y1: '250',
            y2: '129.61430831282507',
          },
          {
            x1: '250',
            x2: '56.673184533066404',
            y1: '250',
            y2: '282.2605396950238',
          },
          {
            x1: '250',
            x2: '142.79816100800434',
            y1: '250',
            y2: '414.08462973945564',
          },
          {
            x1: '250',
            x2: '298.1151554795966',
            y1: '250',
            y2: '440.0024521241088',
          },
          {
            x1: '250',
            x2: '422.3768552364718',
            y1: '250',
            y2: '343.28568903526656',
          },
        ]);

        expectPolarGridPolygons(container, [
          {
            cx: 250,
            cy: 250,
            d: 'M 264,250L 259.4819420027604,239.69986525057615L 248.84388916338736,236.04781709790663L 238.9520328684505,241.40102202234465L 236.19094175236188,252.30432426393028L 242.34272578628602,261.7203306956754L 253.4367968199712,263.57160372315064L 262.31263251689086,256.66326350251904Z',
          },
          {
            cx: 250,
            cy: 250,
            d: 'M 292,250L 278.44582600828113,219.0995957517285L 246.53166749016205,208.14345129371986L 216.85609860535146,224.20306606703394L 208.57282525708567,256.9129727917908L 227.02817735885807,285.1609920870262L 260.31039045991355,290.7148111694519L 286.9378975506725,269.98979050755713Z',
          },
          {
            cx: 250,
            cy: 250,
            d: 'M 320,250L 297.4097100138019,198.4993262528808L 244.21944581693674,180.23908548953312L 194.76016434225247,207.00511011172324L 180.95470876180943,261.5216213196514L 211.71362893143012,308.601653478377L 267.18398409985593,317.85801861575317L 311.56316258445423,283.3163175125952Z',
          },
          {
            cx: 250,
            cy: 250,
            d: 'M 348,250L 316.37359401932264,177.8990567540331L 241.90722414371143,152.33471968534636L 172.66423007915344,189.80715415641254L 153.33659226653322,266.1302698475119L 196.39908050400217,332.0423148697278L 274.05757773979826,345.0012260620544L 336.1884276182359,296.64284451763325Z',
          },
          {
            cx: 250,
            cy: 250,
            d: 'M 376,250L 335.3374780248434,157.2987872551854L 239.59500247048612,124.4303538811596L 150.56829581605444,172.60919820110183L 125.71847577125698,270.73891837537246L 181.0845320765742,355.4829762610786L 280.93117137974065,372.14443350835563L 360.8136926520176,309.96937152267134Z',
          },
          {
            cx: 250,
            cy: 250,
            d: 'M 404,250L 354.30136203036415,136.69851775633774L 237.28278079726084,96.52598807697285L 128.47236155295542,155.41124224579113L 98.10035927598074,275.347566903233L 165.76998364914624,378.9236376524294L 287.80476501968303,399.2876409546569L 385.43895768579927,323.2958985277094Z',
          },
          {
            cx: 250,
            cy: 250,
            d: 'M 432,250L 373.2652460358849,116.09824825749004L 234.97055912403553,68.62162227278608L 106.3764272898564,138.21328629048043L 70.48224278070452,279.95621543109354L 150.4554352217183,402.3642990437802L 294.67835865962536,426.43084840095815L 410.0642227195809,336.6224255327475Z',
          },
        ]);

        expectPolarGridCircles(container, []);
      },
    );

    it('renders circle instead of polygon when gridType=circle', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={pageData}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis type="number" dataKey="uv" />
          <PolarRadiusAxis type="category" dataKey="name" />
          <PolarGrid gridType="circle" />
        </RadialBarChart>,
      );

      expectPolarGridPolygons(container, []);
      expectPolarGridCircles(container, [
        {
          cx: 250,
          cy: 250,
          r: 14,
        },
        {
          cx: 250,
          cy: 250,
          r: 42,
        },
        {
          cx: 250,
          cy: 250,
          r: 70,
        },
        {
          cx: 250,
          cy: 250,
          r: 98,
        },
        {
          cx: 250,
          cy: 250,
          r: 126,
        },
        {
          cx: 250,
          cy: 250,
          r: 154,
        },
        {
          cx: 250,
          cy: 250,
          r: 182,
        },
      ]);
    });

    it('does not render lines when radialLines=false', () => {
      const { container } = render(
        <RadialBarChart width={500} height={500} data={pageData}>
          <RadialBar dataKey="uv" />
          <PolarAngleAxis type="number" dataKey="uv" />
          <PolarRadiusAxis type="category" dataKey="name" />
          <PolarGrid radialLines={false} />
        </RadialBarChart>,
      );

      expectPolarGridLines(container, []);
    });
  });

  describe('as a child of RadialBarChart with implicit axes', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={300} height={300} data={ringsData}>
        <RadialBar dataKey="rings" />
        <PolarGrid gridType="circle" />
        {children}
      </RadialBarChart>
    ));

    it('should select radius axis settings', () => {
      const { spy } = renderTestCase(state => selectPolarAxis(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        scale: 'auto',
        tick: true,
        tickCount: 5,
        ticks: undefined,
        type: 'category',
        unit: undefined,
      });
    });

    it('should select radius axis scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 0));
      expectLastCalledWithScale(spy, {
        domain: [0, 1, 2, 3],
        range: [0, 116],
        bandwidth: 29,
      });
    });

    it('should select categorical domain', () => {
      const { spy } = renderTestCase(state => selectPolarCategoricalDomain(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith(undefined);
    });

    it('should select all polar applied values', () => {
      const { spy } = renderTestCase(state => selectAllPolarAppliedNumericalValues(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([
        {
          errorDomain: [],
          value: 3,
        },
        {
          errorDomain: [],
          value: 7,
        },
        {
          errorDomain: [],
          value: 9,
        },
        {
          errorDomain: [],
          value: 1,
        },
      ]);
    });

    it('should select radius axis ticks', () => {
      const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'radiusAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([
        {
          coordinate: 14.5,
          index: 0,
          offset: 14.5,
          value: 0,
        },
        {
          coordinate: 43.5,
          index: 1,
          offset: 14.5,
          value: 1,
        },
        {
          coordinate: 72.5,
          index: 2,
          offset: 14.5,
          value: 2,
        },
        {
          coordinate: 101.5,
          index: 3,
          offset: 14.5,
          value: 3,
        },
      ]);
    });

    it('should render concentric circles', () => {
      const { container } = renderTestCase();

      expectPolarGridCircles(container, [
        {
          cx: 150,
          cy: 150,
          r: 14.5,
        },
        {
          cx: 150,
          cy: 150,
          r: 43.5,
        },
        {
          cx: 150,
          cy: 150,
          r: 72.5,
        },
        {
          cx: 150,
          cy: 150,
          r: 101.5,
        },
      ]);
    });

    it('should select scale', () => {
      const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 0));
      expectLastCalledWithScale(spy, {
        domain: [0, 9],
        range: [0, 360],
      });
    });

    it('should select angle axis settings', () => {
      const { spy } = renderTestCase(state => selectPolarAxis(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith({
        allowDataOverflow: false,
        allowDecimals: false,
        allowDuplicatedCategory: true,
        dataKey: undefined,
        domain: undefined,
        id: 0,
        includeHidden: false,
        name: undefined,
        reversed: false,
        scale: 'auto',
        tick: true,
        tickCount: undefined,
        ticks: undefined,
        type: 'number',
        unit: undefined,
      });
    });

    it('should select angle ticks', () => {
      const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([
        { coordinate: 0, value: 0, offset: -0 },
        { coordinate: 40, value: 1, offset: -0 },
        { coordinate: 80, value: 2, offset: -0 },
        { coordinate: 120, value: 3, offset: -0 },
        { coordinate: 160, value: 4, offset: -0 },
        { coordinate: 200, value: 5, offset: -0 },
        { coordinate: 240, value: 6, offset: -0 },
        { coordinate: 280, value: 7, offset: -0 },
        { coordinate: 320, value: 8, offset: -0 },
        { coordinate: 360, value: 9, offset: -0 },
      ]);
    });

    it('should select grid angles', () => {
      const { spy } = renderTestCase(state => selectPolarGridAngles(state, 0));
      expect(spy).toHaveBeenLastCalledWith([0, 40, 80, 120, 160, 200, 240, 280, 320, 360]);
    });

    it('should render lines', () => {
      const { container } = renderTestCase();

      expectPolarGridLines(container, [
        {
          x1: '150',
          x2: '266',
          y1: '150',
          y2: '150',
        },
        {
          x1: '150',
          x2: '238.86115540180145',
          y1: '150',
          y2: '75.43663727636145',
        },
        {
          x1: '150',
          x2: '170.14318860936393',
          y1: '150',
          y2: '35.76230065058387',
        },
        {
          x1: '150',
          x2: '92.00000000000003',
          y1: '150',
          y2: '49.54105316100511',
        },
        {
          x1: '150',
          x2: '40.99565598883464',
          y1: '150',
          y2: '110.32566337422242',
        },
        {
          x1: '150',
          x2: '40.99565598883463',
          y1: '150',
          y2: '189.67433662577756',
        },
        {
          x1: '150',
          x2: '91.99999999999994',
          y1: '150',
          y2: '250.45894683899485',
        },
        {
          x1: '150',
          x2: '170.14318860936388',
          y1: '150',
          y2: '264.2376993494162',
        },
        {
          x1: '150',
          x2: '238.86115540180143',
          y1: '150',
          y2: '224.5633627236386',
        },
        {
          x1: '150',
          x2: '266',
          y1: '150',
          y2: '150.00000000000003',
        },
      ]);
    });
  });

  /*
   * The PolarGrid behaves very weird with multiple axes. It ignores tickCount,
   * the labels follow { but the domain doesn't,
   * the grid lines are pointing to labels sometimes and sometimes they are not.
   *
   * In 2.x it didn't support multiple axes at all (it picked a random one)
   * so having the abilitity to pick a specific one is an improvement, and we should iterate on the behaviour later.
   */
  describe('with multiple axes', () => {
    function RadialBarChartWithMultipleAxesWrapper({ children }: { children: React.ReactNode }) {
      return (
        <RadialBarChart width={300} height={300} data={pageData}>
          <RadialBar angleAxisId="axis-pv" radiusAxisId="axis-name" dataKey="pv" />
          <PolarAngleAxis angleAxisId="axis-uv" dataKey="uv" tickFormatter={value => `uv${value}`} type="number" />
          <PolarAngleAxis
            angleAxisId="axis-pv"
            dataKey="pv"
            tickFormatter={value => `pv: ${value}`}
            type="number"
            tickCount={3}
          />
          <PolarRadiusAxis radiusAxisId="axis-name" dataKey="name" type="category" />
          <PolarRadiusAxis radiusAxisId="axis-amt" dataKey="amt" type="number" angle={180} />
          {children}
        </RadialBarChart>
      );
    }

    describe('when angleAxisId=undefined', () => {
      it('should not render any lines or polygons or circles', () => {
        const { container } = render(
          <RadialBarChartWithMultipleAxesWrapper>
            <PolarGrid />
          </RadialBarChartWithMultipleAxesWrapper>,
        );

        expectPolarGridLines(container, []);
        expectPolarGridPolygons(container, []);
        expectPolarGridCircles(container, []);
      });
    });

    describe('when angleAxisId="axis-pv"', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChartWithMultipleAxesWrapper>
          <PolarGrid angleAxisId="axis-pv" />
          {children}
        </RadialBarChartWithMultipleAxesWrapper>
      ));
      it('should render lines pointing to labels of first angle axis', () => {
        const { container } = renderTestCase();

        expectPolarGridLines(container, [
          {
            x1: '150',
            x2: '266',
            y1: '150',
            y2: '150',
          },
          {
            x1: '150',
            x2: '34',
            y1: '150',
            y2: '150',
          },
          {
            x1: '150',
            x2: '266',
            y1: '150',
            y2: '150.00000000000003',
          },
        ]);
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 'axis-pv', false));
        const expected: ReadonlyArray<TickItem> = [
          {
            coordinate: 0,
            offset: -0,
            value: 0,
            index: 0,
          },
          {
            coordinate: 180,
            offset: -0,
            value: 600,
            index: 1,
          },
          {
            coordinate: 360,
            offset: -0,
            value: 1200,
            index: 2,
          },
        ];
        expect(spy).toHaveBeenLastCalledWith(expected);
      });

      it('should select angles', () => {
        const { spy } = renderTestCase(state => selectPolarGridAngles(state, 'axis-pv'));
        expect(spy).toHaveBeenLastCalledWith([0, 180, 360]);
      });
    });

    describe('when angleAxisId="axis-uv"', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChartWithMultipleAxesWrapper>
          <PolarGrid angleAxisId="axis-uv" />
          {children}
        </RadialBarChartWithMultipleAxesWrapper>
      ));

      it('should select axis settings', () => {
        const { spy } = renderTestCase(state => selectPolarAxis(state, 'angleAxis', 'axis-uv'));
        expect(spy).toHaveBeenLastCalledWith({
          allowDataOverflow: false,
          allowDecimals: undefined,
          allowDuplicatedCategory: false,
          dataKey: 'uv',
          domain: undefined,
          id: 'axis-uv',
          includeHidden: false,
          name: undefined,
          reversed: false,
          scale: 'auto',
          tick: true,
          tickCount: undefined,
          ticks: undefined,
          type: 'number',
          unit: undefined,
        });
      });

      it('should select nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarNiceTicks(state, 'angleAxis', 'axis-uv'));
        expect(spy).toHaveBeenLastCalledWith(undefined);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'angleAxis', 'axis-uv'));
        expectLastCalledWithScale(spy, {
          domain: [0, 1520],
          range: [0, 360],
        });
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'angleAxis', 'axis-uv', false));
        expect(spy).toHaveBeenLastCalledWith([
          {
            coordinate: 0,
            offset: -0,
            value: 0,
          },
          {
            coordinate: 47.368421052631575,
            offset: -0,
            value: 200,
          },
          {
            coordinate: 94.73684210526315,
            offset: -0,
            value: 400,
          },
          {
            coordinate: 142.10526315789474,
            offset: -0,
            value: 600,
          },
          {
            coordinate: 189.4736842105263,
            offset: -0,
            value: 800,
          },
          {
            coordinate: 236.84210526315792,
            offset: -0,
            value: 1000,
          },
          {
            coordinate: 284.2105263157895,
            offset: -0,
            value: 1200,
          },
          {
            coordinate: 331.57894736842104,
            offset: -0,
            value: 1400,
          },
        ]);
      });

      it('should select angles', () => {
        const { spy } = renderTestCase(state => selectPolarGridAngles(state, 'axis-uv'));
        expect(spy).toHaveBeenLastCalledWith([
          0, 47.368421052631575, 94.73684210526315, 142.10526315789474, 189.4736842105263, 236.84210526315792,
          284.2105263157895, 331.57894736842104,
        ]);
      });

      it('should render lines pointing to labels of second angle axis', () => {
        const { container } = renderTestCase();

        expectPolarGridLines(container, [
          {
            x1: '150',
            x2: '266',
            y1: '150',
            y2: '150',
          },
          {
            x1: '150',
            x2: '228.56466230858598',
            y1: '150',
            y2: '64.65602636191673',
          },
          {
            x1: '150',
            x2: '140.42079592520946',
            y1: '150',
            y2: '34.3961988112263',
          },
          {
            x1: '150',
            x2: '58.459700910018356',
            y1: '150',
            y2: '78.75132532799852',
          },
          {
            x1: '150',
            x2: '35.5820888052842',
            y1: '150',
            y2: '169.09297247256512',
          },
          {
            x1: '150',
            x2: '86.55401365779848',
            y1: '150',
            y2: '247.11131147845333',
          },
          {
            x1: '150',
            x2: '178.47631650833267',
            y1: '150',
            y2: '262.45043084896236',
          },
          {
            x1: '150',
            x2: '252.0189551399527',
            y1: '150',
            y2: '205.2098975923006',
          },
        ]);
      });

      it('should render lines pointing to labels of second angle axis', () => {
        const { container } = renderTestCase();

        expectPolarGridLines(container, [
          {
            x1: '150',
            x2: '266',
            y1: '150',
            y2: '150',
          },
          {
            x1: '150',
            x2: '228.56466230858598',
            y1: '150',
            y2: '64.65602636191673',
          },
          {
            x1: '150',
            x2: '140.42079592520946',
            y1: '150',
            y2: '34.3961988112263',
          },
          {
            x1: '150',
            x2: '58.459700910018356',
            y1: '150',
            y2: '78.75132532799852',
          },
          {
            x1: '150',
            x2: '35.5820888052842',
            y1: '150',
            y2: '169.09297247256512',
          },
          {
            x1: '150',
            x2: '86.55401365779848',
            y1: '150',
            y2: '247.11131147845333',
          },
          {
            x1: '150',
            x2: '178.47631650833267',
            y1: '150',
            y2: '262.45043084896236',
          },
          {
            x1: '150',
            x2: '252.0189551399527',
            y1: '150',
            y2: '205.2098975923006',
          },
        ]);
      });
    });

    describe('when radiusAxisId=undefined', () => {
      it('should render polygons', () => {
        const { container } = render(
          <RadialBarChartWithMultipleAxesWrapper>
            <PolarGrid angleAxisId="axis-pv" />
          </RadialBarChartWithMultipleAxesWrapper>,
        );

        expectPolarGridPolygons(container, [
          {
            cx: 150,
            cy: 150,
            d: 'M 158.28571428571428,150L 141.71428571428572,150L 158.28571428571428,150Z',
          },
          {
            cx: 150,
            cy: 150,
            d: 'M 174.85714285714286,150L 125.14285714285714,150L 174.85714285714286,150Z',
          },
          {
            cx: 150,
            cy: 150,
            d: 'M 191.42857142857142,150L 108.57142857142858,150L 191.42857142857142,150Z',
          },
          {
            cx: 150,
            cy: 150,
            d: 'M 208,150L 92,150L 208,150Z',
          },
          {
            cx: 150,
            cy: 150,
            d: 'M 224.57142857142856,150L 75.42857142857143,150L 224.57142857142856,150.00000000000003Z',
          },
          {
            cx: 150,
            cy: 150,
            d: 'M 241.14285714285717,150L 58.85714285714285,150L 241.14285714285717,150.00000000000003Z',
          },
          {
            cx: 150,
            cy: 150,
            d: 'M 257.7142857142857,150L 42.28571428571426,150L 257.7142857142857,150.00000000000003Z',
          },
        ]);
        expectPolarGridCircles(container, []);
      });
    });

    describe('when radiusAxisId=axis-name', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChartWithMultipleAxesWrapper>
          <PolarGrid angleAxisId="axis-pv" radiusAxisId="axis-name" />
          {children}
        </RadialBarChartWithMultipleAxesWrapper>
      ));

      it('should select nice ticks', () => {
        const { spy } = renderTestCase(state => selectPolarNiceTicks(state, 'radiusAxis', 'axis-name'));
        expect(spy).toHaveBeenLastCalledWith(undefined);
      });

      it('should select scale', () => {
        const { spy } = renderTestCase(state => selectPolarAxisScale(state, 'radiusAxis', 'axis-name'));
        expectLastCalledWithScale(spy, {
          domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
          range: [0, 116],
        });
      });

      it('should select ticks', () => {
        const { spy } = renderTestCase(state => selectPolarAxisTicks(state, 'radiusAxis', 'axis-name', false));
        expect(spy).toHaveBeenLastCalledWith([
          {
            coordinate: 8.28571428571428,
            value: 'Page A',
            index: 0,
            offset: 8.285714285714286,
          },
          {
            coordinate: 24.857142857142854,
            value: 'Page B',
            index: 1,
            offset: 8.285714285714286,
          },
          {
            coordinate: 41.42857142857142,
            value: 'Page C',
            index: 2,
            offset: 8.285714285714286,
          },
          {
            coordinate: 58,
            value: 'Page D',
            index: 3,
            offset: 8.285714285714286,
          },
          {
            coordinate: 74.57142857142857,
            value: 'Page E',
            index: 4,
            offset: 8.285714285714286,
          },
          {
            coordinate: 91.14285714285715,
            value: 'Page F',
            index: 5,
            offset: 8.285714285714286,
          },
          {
            coordinate: 107.71428571428574,
            value: 'Page G',
            index: 6,
            offset: 8.285714285714286,
          },
        ]);
      });

      it('should select array of radii', () => {
        const { spy } = renderTestCase(state => selectPolarGridRadii(state, 'axis-name'));
        expect(spy).toHaveBeenLastCalledWith([
          8.28571428571428, 24.857142857142854, 41.42857142857142, 58, 74.57142857142857, 91.14285714285715,
          107.71428571428574,
        ]);
      });
    });
  });
});
