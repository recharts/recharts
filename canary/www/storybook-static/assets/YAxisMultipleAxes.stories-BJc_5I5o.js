import{R as t}from"./iframe-Qmct8dPL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DhnYemPX.js";import{R as l}from"./zIndexSlice-DXIqEK91.js";import{C as x}from"./ComposedChart-EdWJ2dtJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CaSrxjTK.js";import{L as a}from"./Line-B9HMr-R-.js";import{X as c}from"./XAxis-9J-zU-e3.js";import{T as g}from"./Tooltip-DDk2MZ0p.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B1HxkUUU.js";import"./Text-CqCSaO_p.js";import"./resolveDefaultProps-1ACdwYcX.js";import"./DOMUtils-CVrddbmH.js";import"./isWellBehavedNumber-B8_5eiwl.js";import"./useId-BXFGZ7WB.js";import"./useBackwardsCompatibleTheme-BkhTNX9-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-1SjAyyP_.js";import"./index-BiNiAG-8.js";import"./index-Y-_D5N0e.js";import"./RechartsWrapper-CA8gYP8X.js";import"./axisSelectors-DQj7dDoX.js";import"./throttle-OLGJV50e.js";import"./d3-scale-BxubizPM.js";import"./index-JkwU9wUv.js";import"./index-Cl8DEeo-.js";import"./renderedTicksSlice-C_XZvXHS.js";import"./index-yzCwrxwp.js";import"./CartesianAxis-BRUXhqMv.js";import"./Layer-DivV_9FZ.js";import"./types-R1YvGwXP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BKFAhLSe.js";import"./chartDataContext-phyyW0XT.js";import"./CategoricalChart-kEDlcm2-.js";import"./AnimatedItems-Bqna9ZlZ.js";import"./useAnimationId-DreFRpzI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZ8eY7t4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-QE8CXMAG.js";import"./tooltipContext-CiPbyUsc.js";import"./RegisterGraphicalItemId-xOabcHeQ.js";import"./ErrorBarContext-C9Rble42.js";import"./GraphicalItemClipPath-B4CCgAUu.js";import"./SetGraphicalItem-Dm7pFyfQ.js";import"./getZIndexFromUnknown-Bpj5GULj.js";import"./useGraphicalItemIdentity-BCZesqSu.js";import"./dataEntryStyles-sSZ6unG7.js";import"./Curve-BWSQwgQs.js";import"./step-DllQQmGx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bxhr0cL_.js";import"./Dot-CegM_aDK.js";import"./getRadiusAndStrokeWidthFromDot-BXmHQhOs.js";import"./useElementOffset-CphcGvvP.js";import"./uniqBy--DW5GTcw.js";import"./iteratee-HAiNKtTX.js";import"./Cross-D-sDHqe0.js";import"./Sector-urLQQSN0.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
