import React from 'react';
import { render } from '@testing-library/react';
import { exampleRadarData } from '../_data';
import {
  Surface,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
} from '../../src';
import { pageData } from '../../storybook/stories/data/Page';

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

  describe('as a child of RadialBarChart', () => {
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
});
