import{R as t}from"./iframe-BlpdekQf.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DGARPD6V.js";import{R as l}from"./zIndexSlice-Bd-549Vw.js";import{C as x}from"./ComposedChart-BYV5Fhyo.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C6KH_Y-Z.js";import{L as a}from"./Line-DTtwP9ub.js";import{X as c}from"./XAxis-DCEI79gV.js";import{T as g}from"./Tooltip-X6dFuoRk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CrfPybH1.js";import"./Text-CRM9x0B4.js";import"./resolveDefaultProps-BWwU0p8m.js";import"./DOMUtils-C_8Iq0XJ.js";import"./isWellBehavedNumber-DfaAxwlE.js";import"./useId-DvrsL6or.js";import"./useBackwardsCompatibleTheme-C9u8MjhE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C5ftRxf2.js";import"./index-Dg90symq.js";import"./index-Dn5eONY4.js";import"./RechartsWrapper-BZ46sqe8.js";import"./axisSelectors-DwVSh5EL.js";import"./throttle-8wef2bFQ.js";import"./d3-scale-ffqjL1dY.js";import"./index-BcFSE7Eo.js";import"./index-Co2WS3GV.js";import"./renderedTicksSlice-rM-Or7ex.js";import"./index-BjAwxFOu.js";import"./CartesianAxis-CTJL8AJc.js";import"./Layer-Cz4a7tst.js";import"./types-DYnYQX3g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dncy8Mq7.js";import"./chartDataContext-CXgp5rOX.js";import"./CategoricalChart-CJrl3V7y.js";import"./AnimatedItems-BKOKH3Gm.js";import"./useAnimationId-SlAZ3zMA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bg9Sr7-8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BEiBGwD8.js";import"./tooltipContext-DP7cVDvd.js";import"./RegisterGraphicalItemId-D9zcRMey.js";import"./ErrorBarContext-DkC-IUMU.js";import"./GraphicalItemClipPath-Vs1wvJPe.js";import"./SetGraphicalItem-BG-oAwbp.js";import"./getZIndexFromUnknown-DeXLXtsN.js";import"./useGraphicalItemIdentity-BE0cCNWI.js";import"./Curve-DBrSRqYN.js";import"./step-C7NW3t9J.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C1DlvL6S.js";import"./Dot-BsVVT6T8.js";import"./getRadiusAndStrokeWidthFromDot-C3QjOZoW.js";import"./useElementOffset-C1b8oROV.js";import"./uniqBy-ujuwYKfk.js";import"./iteratee-Bs0KMcjA.js";import"./Cross-Bkd6QGz9.js";import"./Sector-b5JJyLMX.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
