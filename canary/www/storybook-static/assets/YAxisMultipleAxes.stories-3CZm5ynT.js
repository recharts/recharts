import{R as t}from"./iframe-C0aK3mAR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-7NanDh-1.js";import{R as l}from"./zIndexSlice-CaqKW8u4.js";import{C as x}from"./ComposedChart-Bb9qF-bw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CuckYCvH.js";import{L as a}from"./Line-YVyFfETe.js";import{X as c}from"./XAxis-oAoSo46I.js";import{T as g}from"./Tooltip-C5OWskP-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DrUlGLQ7.js";import"./Text-sM2vj8c3.js";import"./resolveDefaultProps-D6yE2Er3.js";import"./ZIndexLayer-Cc5kF-_I.js";import"./index-DJ1epRIR.js";import"./index-C-RKF6PB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CptuzTw1.js";import"./throttle-Csdh9d4D.js";import"./axisSelectors-D_X7VOsT.js";import"./d3-scale-B_djSwnK.js";import"./CartesianAxis-CUkLyyeh.js";import"./Layer-CagqC790.js";import"./types-CmOm39qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-De1tNPIq.js";import"./index-Dtyq-_Jm.js";import"./index-wV9G7-7k.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D12_Reb0.js";import"./index-BYUWoSWy.js";import"./fillDefinitions-D-bSMJSA.js";import"./CartesianChart-D4R8-bYQ.js";import"./chartDataContext-FpEebw8X.js";import"./CategoricalChart-D8DGrwi8.js";import"./dataEntryStyles-cRuikTAi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2OQ5a3O.js";import"./useAnimationId-sv0XuVET.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BPSXSNcd.js";import"./tooltipContext-BzFP69XA.js";import"./ErrorBarContext-zrW_wYS_.js";import"./activeStyles-D8lDViyk.js";import"./SetGraphicalItem-D-GYSqJW.js";import"./getZIndexFromUnknown-B15Wxwj-.js";import"./useEffectiveDataKey-C4GReELG.js";import"./omit-BsLcpZjr.js";import"./isArguments-yB-y1yaH.js";import"./Curve-OWEMFZrc.js";import"./step-BYip5hLG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BHO4PoXJ.js";import"./Dot-C9rBqPl7.js";import"./Symbols-CEatGjCT.js";import"./symbol-BI0KcbYN.js";import"./getRadiusAndStrokeWidthFromDot-QbS_nSQ9.js";import"./useElementOffset-Bd-Smj9e.js";import"./uniqBy-BgGQ3Z2O.js";import"./iteratee-BXSX8eL-.js";import"./Cross-PSRIh47R.js";import"./Sector-C1PqGwtk.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
