import { Label, Line, LineChart, LineProps, XAxis, YAxis } from 'recharts';

const characterWidth = 3;

const lbracket1 = [
  { x: 0, y: 0 },
  { x: characterWidth, y: 1 },
];

const lbracket2 = [
  { x: 0, y: 0 },
  { x: characterWidth, y: -1 },
];

const gapForLogo = characterWidth * 11.5;

const slash = [
  { x: gapForLogo, y: -1.5 },
  { x: gapForLogo + characterWidth, y: 1.5 },
];

const rbracket1 = [
  { x: gapForLogo + characterWidth * 1.5, y: 1 },
  { x: gapForLogo + characterWidth * 2.5, y: 0 },
];

const rbracket2 = [
  { x: gapForLogo + characterWidth * 1.5, y: -1 },
  { x: gapForLogo + characterWidth * 2.5, y: 0 },
];

const LogoLine = (props: LineProps) => (
  <Line
    dataKey="y"
    dot={false}
    strokeWidth={1.5}
    stroke="var(--brand-primary, black)"
    isAnimationActive={false}
    {...props}
  />
);

export function RechartsLogo() {
  return (
    <LineChart width={200} height={60}>
      <style type="text/css">{`<![CDATA[
            .recharts-text {
              font-family: var(--font-family-code), monospace;
              font-weight: 300;
              font-size: var(--font-size-xl, 18px);
              white-space: nowrap;
            }
      ]]>`}</style>
      <XAxis type="number" dataKey="x" hide />
      <YAxis dataKey="y" domain={[-5, 5]} hide />
      <LogoLine data={lbracket1} />
      <LogoLine data={lbracket2} />
      <LogoLine data={slash} />
      <LogoLine data={rbracket1} />
      <LogoLine data={rbracket2} />
      <Label position="insideLeft" offset={13} width={10} fill="var(--brand-primary, black)">
        Recharts
      </Label>
    </LineChart>
  );
}
