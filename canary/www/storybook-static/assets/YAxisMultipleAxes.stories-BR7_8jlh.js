import{R as t}from"./iframe-BN7wAejV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-LOiiKFb4.js";import{R as l}from"./zIndexSlice-BlaP7sYq.js";import{C as x}from"./ComposedChart-CDS5E2ok.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BwmDMnLO.js";import{L as a}from"./Line-BQoSY4oZ.js";import{X as c}from"./XAxis-VA1Akzpv.js";import{T as g}from"./Tooltip-BFGrTpv-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DnbeteFU.js";import"./get-CjriyByo.js";import"./Label-Bpsa1uOU.js";import"./Text-_3q1LLJU.js";import"./ZIndexLayer-CB5Di4JM.js";import"./index-D3oSOluz.js";import"./index-BS508S1N.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CchWb7G-.js";import"./throttle-OOfctLZP.js";import"./axisSelectors-D4jZOjlQ.js";import"./diverging-BuYLSsjs.js";import"./CartesianAxis-DWm3W2j1.js";import"./Layer-gDVCcB56.js";import"./types-B8ZxybVf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B6C_f0uh.js";import"./index-CmVxXaJX.js";import"./index-BqsbVcZz.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BzFY2Xxa.js";import"./index-DyRM39CP.js";import"./fillDefinitions-B689QTZV.js";import"./CartesianChart-D-Ahqv2A.js";import"./chartDataContext-CF2rDhwh.js";import"./CategoricalChart-CD7QHO--.js";import"./dataEntryStyles-CrycyMb5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-MX5du-y3.js";import"./useAnimationId-ClFn0gGk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bz62zvpu.js";import"./tooltipContext-CFdyblI-.js";import"./ErrorBarContext-eg_EChks.js";import"./activeStyles-CXY1xJkQ.js";import"./SetGraphicalItem-Bzbpd_mD.js";import"./getZIndexFromUnknown-B6PYvdpj.js";import"./useEffectiveDataKey-Bx0GloUb.js";import"./omit-Bfdsviqt.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-5PNvN8b1.js";import"./Curve-BFV098yv.js";import"./step-Bv7Zqu-1.js";import"./path-BBMZd4YL.js";import"./ActivePoints-EAvCRna9.js";import"./Dot-BsX3Z5g1.js";import"./Symbols-IIZndlP1.js";import"./symbol-C_xR0iSi.js";import"./useElementOffset-zW88tSra.js";import"./uniqBy-DTQZ_SiU.js";import"./iteratee-DVkTdlvM.js";import"./Cross-Bd__ghdN.js";import"./Sector-h9CQ16Nn.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
