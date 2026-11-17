// #region Imports, data, and helper functions
import {
  LabelList,
  Line,
  LineChart,
  LineProps,
  ReferenceDot,
  XAxis,
  YAxis,
  DefaultZIndexes,
  LabelListEntry,
  Dot,
  DotProps,
  AxisDomain,
  LabelProps,
  DotType,
  useRechartsTheme,
} from 'recharts';
import { useMemo } from 'react';
import { RechartsDevtools } from '@recharts/devtools';

// The icon path is 238.45 x 228.25 units, rendered at scale(0.1).
const ICON_SCALE = 0.1;
const ICON_WIDTH = 238.45445 * ICON_SCALE;
const ICON_HEIGHT = 228.24998 * ICON_SCALE;

const AirplaneIcon = ({ cx = 0, cy = 0 }: Pick<DotProps, 'cx' | 'cy'>) => (
  // https://upload.wikimedia.org/wikipedia/commons/7/7d/Plane_icon.svg
  <path
    // center the icon on (cx, cy)
    transform={`translate(${cx - ICON_WIDTH / 2}, ${cy - ICON_HEIGHT / 2}) scale(${ICON_SCALE})`}
    fillRule="evenodd"
    d="M194.67321 0 70.641958 53.625c-10.38227-6.92107-34.20058-21.27539-38.90545-23.44898-39.4400301-18.22079-36.9454001 14.73107-20.34925 24.6052 4.53917 2.70065 27.72352 17.17823 43.47345 26.37502l17.90625 133.9375 22.21875 13.15625 11.531252-120.9375 71.53125 36.6875 3.84375 39.21875 14.53125 8.625 11.09375-42.40625.125.0625 30.8125-31.53125-14.875-8-35.625 16.90625-68.28125-42.4375L217.36071 12.25 194.67321 0z"
  />
);

const AirplaneReferenceDot = (props: DotProps) => {
  return (
    <g>
      <Dot {...props} />
      <AirplaneIcon cx={props.cx} cy={props.cy} />
    </g>
  );
};

function between(a: number, b: number) {
  return Math.min(a, b) + Math.abs(a - b) / 2;
}

const topRow = 4;
const midRow = 2;
const bottomRow = 0;
const startA = 0;
const gapA = 11;
const mustek = { name: 'Můstek', yPos: between(topRow, midRow), xPos: 94 };
const florenc = { name: 'Florenc', yPos: mustek.yPos, xPos: 127 };
const muzeum = { name: 'Muzeum', yPos: between(midRow, bottomRow), xPos: between(mustek.xPos, florenc.xPos) };
const hlavak = {
  name: 'Hlavní nádraží',
  yPos: muzeum.yPos + (florenc.yPos - muzeum.yPos) / 2,
  xPos: muzeum.xPos + (florenc.xPos - muzeum.xPos) / 2,
};

const motol = { name: 'Nemocnice Motol', yPos: topRow, xPos: startA };
const petriny = { name: 'Petřiny', yPos: topRow, xPos: motol.xPos + gapA };
const veleslavin = { name: 'Nádraží Veleslavín', yPos: topRow, xPos: petriny.xPos + gapA };
const borislavka = { name: 'Bořislavka', yPos: topRow, xPos: veleslavin.xPos + gapA };
const dejvicka = { name: 'Dejvická', yPos: topRow, xPos: borislavka.xPos + gapA };
const hradcanska = { name: 'Hradčanská', yPos: topRow, xPos: dejvicka.xPos + gapA };
const malostranska = { name: 'Malostranská', yPos: topRow, xPos: hradcanska.xPos + gapA };
const staromestska = { name: 'Staroměstská', yPos: topRow, xPos: malostranska.xPos + gapA };
// mustek
// muzeum
const mirak = { name: 'Náměstí Míru', yPos: bottomRow, xPos: muzeum.xPos + 13 };
const jzp = { name: 'Jiřího z Poděbrad', yPos: bottomRow, xPos: mirak.xPos + gapA };
const flora = { name: 'Flora', yPos: bottomRow, xPos: jzp.xPos + gapA };
const zelivarna = { name: 'Želivského', yPos: bottomRow, xPos: flora.xPos + gapA };
const strasnicka = { name: 'Strašnická', yPos: bottomRow, xPos: zelivarna.xPos + gapA };
const skalka = { name: 'Skalka', yPos: bottomRow, xPos: strasnicka.xPos + gapA };
const depohostivar = { name: 'Depo Hostivař', yPos: bottomRow, xPos: skalka.xPos + gapA };
const lineA = {
  name: 'A',
  color: '#1aa300',
  stations: [
    motol,
    petriny,
    veleslavin,
    borislavka,
    dejvicka,
    hradcanska,
    malostranska,
    staromestska,
    mustek,
    muzeum,
    mirak,
    jzp,
    flora,
    zelivarna,
    strasnicka,
    skalka,
    depohostivar,
  ],
};

const gapB = 8;
const narodka = { name: 'Národní třída', yPos: midRow, xPos: mustek.xPos - 20 };
const karlak = { name: 'Karlovo náměstí', yPos: midRow, xPos: narodka.xPos - gapB };
const andel = { name: 'Anděl', yPos: midRow, xPos: karlak.xPos - gapB };
const smichac = { name: 'Smíchovské nádraží', yPos: midRow, xPos: andel.xPos - gapB };
const radlicka = { name: 'Radlická', yPos: midRow, xPos: smichac.xPos - gapB };
const jinonice = { name: 'Jinonice', yPos: midRow, xPos: radlicka.xPos - gapB };
const novebutovice = { name: 'Nové Butovice', yPos: midRow, xPos: jinonice.xPos - gapB };
const hurka = { name: 'Hůrka', yPos: midRow, xPos: novebutovice.xPos - gapB };
const luziny = { name: 'Lužiny', yPos: midRow, xPos: hurka.xPos - gapB };
const luka = { name: 'Luka', yPos: midRow, xPos: luziny.xPos - gapB };
const stodulky = { name: 'Stodůlky', yPos: midRow, xPos: luka.xPos - gapB };
const zlicin = { name: 'Zličín', yPos: midRow, xPos: stodulky.xPos - gapB };
// mustek
const namestirepubliky = {
  name: 'Náměstí Republiky',
  yPos: mustek.yPos,
  xPos: muzeum.xPos,
};
// florenc
const krizikova = { name: 'Křižíkova', yPos: midRow, xPos: florenc.xPos + 20 };
const invalidovna = { name: 'Invalidovna', yPos: midRow, xPos: krizikova.xPos + gapB };
const ceskomoravska = { name: 'Českomoravská', yPos: midRow, xPos: invalidovna.xPos + gapB };
const palmovka = { name: 'Palmovka', yPos: midRow, xPos: ceskomoravska.xPos + gapB };
const vysocanska = { name: 'Vysočanská', yPos: midRow, xPos: palmovka.xPos + gapB };
const kolbenova = { name: 'Kolbenova', yPos: midRow, xPos: vysocanska.xPos + gapB };
const hloubetin = { name: 'Hloubětín', yPos: midRow, xPos: kolbenova.xPos + gapB };
const rajskazahrada = { name: 'Rajská zahrada', yPos: midRow, xPos: hloubetin.xPos + gapB };
const cernak = { name: 'Černý Most', yPos: midRow, xPos: rajskazahrada.xPos + gapB };
const lineB = {
  name: 'B',
  color: '#fed330',
  stations: [
    zlicin,
    stodulky,
    luka,
    luziny,
    hurka,
    novebutovice,
    jinonice,
    radlicka,
    smichac,
    andel,
    karlak,
    narodka,
    mustek,
    namestirepubliky,
    florenc,
    krizikova,
    invalidovna,
    ceskomoravska,
    palmovka,
    vysocanska,
    kolbenova,
    hloubetin,
    rajskazahrada,
    cernak,
  ],
};

const gapC = 9;
const ipak = { name: 'I. P. Pavlova', yPos: bottomRow, xPos: muzeum.xPos - 18 };
const vysehrad = { name: 'Vyšehrad', yPos: bottomRow, xPos: ipak.xPos - gapC };
const povstani = { name: 'Pražského povstání', yPos: bottomRow, xPos: vysehrad.xPos - gapC };
const pankrac = { name: 'Pankrác', yPos: bottomRow, xPos: povstani.xPos - gapC };
const budejarna = { name: 'Budějovická', yPos: bottomRow, xPos: pankrac.xPos - gapC };
const kacerov = { name: 'Kačerov', yPos: bottomRow, xPos: budejarna.xPos - gapC };
const roztyly = { name: 'Roztyly', yPos: bottomRow, xPos: kacerov.xPos - gapC };
const chodov = { name: 'Chodov', yPos: bottomRow, xPos: roztyly.xPos - gapC };
const opatov = { name: 'Opatov', yPos: bottomRow, xPos: chodov.xPos - gapC };
const haje = { name: 'Háje', yPos: bottomRow, xPos: opatov.xPos - gapC };

const vltavska = { name: 'Vltavská', yPos: topRow, xPos: florenc.xPos + 13 };
const holesky = { name: 'Nádraží Holešovice', yPos: topRow, xPos: vltavska.xPos + gapC };
const kobylisy = { name: 'Kobylisy', yPos: topRow, xPos: holesky.xPos + gapC };
const ladvi = { name: 'Ládví', yPos: topRow, xPos: kobylisy.xPos + gapC };
const letnany = { name: 'Letňany', yPos: topRow, xPos: ladvi.xPos + gapC };
const strizkov = { name: 'Střížkov', yPos: topRow, xPos: letnany.xPos + gapC };
const prosek = { name: 'Prosek', yPos: topRow, xPos: strizkov.xPos + gapC };
const lineC = {
  name: 'C',
  color: '#ff242e',
  stations: [
    haje,
    opatov,
    chodov,
    roztyly,
    kacerov,
    budejarna,
    pankrac,
    povstani,
    vysehrad,
    ipak,
    muzeum,
    hlavak,
    florenc,
    vltavska,
    holesky,
    kobylisy,
    ladvi,
    letnany,
    strizkov,
    prosek,
  ],
};

// Some labels are rendering overlapped so we need to show them in custom positions
const customLabels = [mustek, muzeum, florenc, hlavak, veleslavin].map(s => s.name);

/**
 * Stations are outlined with the page background color, so that they look like a gap in the line.
 * Falls back to white when no theme is set.
 */
function useStationOutline(): string {
  const theme = useRechartsTheme();
  return theme?.pageBackground ?? '#fff';
}

function stationLabelAccessor(entry: LabelListEntry) {
  const label: string | undefined = entry.payload?.name;
  if (label != null && customLabels.includes(label)) {
    return undefined;
  }
  return label;
}

function MetroLine(props: LineProps) {
  const stationOutline = useStationOutline();
  // Dot fill comes from the Line `fill` prop, so this style can be shared by all lines
  const metroLineDot: DotType = useMemo(
    () => ({ strokeWidth: 3, stroke: stationOutline, r: 10, fillOpacity: 1 }),
    [stationOutline],
  );
  return (
    <Line
      type="monotone"
      dataKey="yPos"
      strokeWidth={15}
      dot={metroLineDot}
      fill={props.stroke}
      isAnimationActive={false}
      activeDot={false}
      {...props}
    >
      <LabelList
        angle={-65}
        fill={props.stroke}
        fontWeight="bold"
        textAnchor="start"
        position="top"
        dy={-15}
        dx={5}
        valueAccessor={stationLabelAccessor}
      />
    </Line>
  );
}

const chartMargin = { left: 30, bottom: 30, right: 60, top: 150 };
const xAxisDomain: AxisDomain = ['dataMin', 'dataMax'];
const yAxisDomain: AxisDomain = [0, 'dataMax'];

const mustekLabel: LabelProps = {
  value: mustek.name,
  angle: -65,
  textAnchor: 'start',
  fontWeight: 'bold',
  dy: -18,
  dx: 10,
};

const muzeumLabel: LabelProps = {
  value: muzeum.name,
  angle: -65,
  textAnchor: 'end',
  fontWeight: 'bold',
  dy: 45,
};

const florencLabel: LabelProps = {
  value: florenc.name,
  angle: -65,
  textAnchor: 'start',
  fontWeight: 'bold',
  dy: -18,
  dx: -15,
};

const hlavakLabel: LabelProps = {
  value: hlavak.name,
  angle: -73,
  textAnchor: 'start',
  fontWeight: 'bold',
  dy: 45,
  dx: 15,
};

const veleslavinLabel: LabelProps = {
  value: veleslavin.name,
  fill: lineA.color,
  angle: -65,
  textAnchor: 'start',
  fontWeight: 'bold',
  dy: -25,
  dx: 0,
};
// #endregion

export default function PrahaMetro() {
  const stationOutline = useStationOutline();
  return (
    <LineChart width={900} height={480} margin={chartMargin}>
      <MetroLine id="C" data={lineC.stations} stroke={lineC.color} />
      <MetroLine id="A" data={lineA.stations} stroke={lineA.color} />
      <MetroLine id="B" data={lineB.stations} stroke={lineB.color} />
      <XAxis type="number" dataKey="xPos" domain={xAxisDomain} hide />
      <YAxis domain={yAxisDomain} hide />
      <ReferenceDot
        x={mustek.xPos}
        y={mustek.yPos}
        label={mustekLabel}
        r={18}
        fill={lineA.color}
        stroke="none"
        fillOpacity={1}
        // one lower zIndex so that these dots render as a background behind the line dots
        zIndex={DefaultZIndexes.scatter - 1}
      />
      <ReferenceDot
        x={muzeum.xPos}
        y={muzeum.yPos}
        label={muzeumLabel}
        r={18}
        fill={lineC.color}
        stroke="none"
        fillOpacity={1}
        // one lower zIndex so that these dots render as a background behind the line dots
        zIndex={DefaultZIndexes.scatter - 1}
      />
      <ReferenceDot
        x={florenc.xPos}
        y={florenc.yPos}
        label={florencLabel}
        r={18}
        fill={lineC.color}
        stroke="none"
        fillOpacity={1}
        // one lower zIndex so that these dots render as a background behind the line dots
        zIndex={DefaultZIndexes.scatter - 1}
      />
      <ReferenceDot
        x={hlavak.xPos}
        y={hlavak.yPos}
        label={hlavakLabel}
        r={20}
        // one higher zIndex so that this dot renders over the line dot - we want to highlight this station
        zIndex={DefaultZIndexes.scatter + 1}
        fill={lineC.color}
        fillOpacity={1}
        stroke={stationOutline}
        strokeWidth={3}
        shape={AirplaneReferenceDot}
      />
      <ReferenceDot
        x={veleslavin.xPos}
        y={veleslavin.yPos}
        label={veleslavinLabel}
        r={20}
        // one higher zIndex so that this dot renders over the line dot - we want to highlight this station
        zIndex={DefaultZIndexes.scatter + 1}
        fill={lineA.color}
        fillOpacity={1}
        stroke={stationOutline}
        strokeWidth={3}
        shape={AirplaneReferenceDot}
      />
      <RechartsDevtools />
    </LineChart>
  );
}
