import{R as t}from"./iframe-CThZUbdE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-COnF85r4.js";import{R as l}from"./zIndexSlice-BDry6QRp.js";import{C as x}from"./ComposedChart-BYeWN0El.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-COaI8xWN.js";import{L as a}from"./Line-PXaX8gsH.js";import{X as c}from"./XAxis-Czxsq92a.js";import{T as g}from"./Tooltip-CsO-9NI5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VHoxVJrE.js";import"./CartesianAxis-BM-bncSs.js";import"./Layer-C1XMVqEx.js";import"./resolveDefaultProps-CLr4xBR_.js";import"./Text-CWNe3a9o.js";import"./DOMUtils-Dd4kG65v.js";import"./isWellBehavedNumber-DrJ1JLjW.js";import"./Label-CE0t5kQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LL2CdfOc.js";import"./index-BrV4JukO.js";import"./index-uduL6A8n.js";import"./types-BBvrAdrd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-aJkWvwrp.js";import"./immer-6NPp0ZGq.js";import"./RechartsWrapper-Dh_6CvsG.js";import"./index-vpoK7Ps1.js";import"./index-B32OlRwA.js";import"./axisSelectors-nng6Kbok.js";import"./d3-scale-GyQF8VSi.js";import"./CartesianChart-CnPFeSiy.js";import"./chartDataContext-Bvn2U6wJ.js";import"./CategoricalChart-DpMx8cAV.js";import"./tooltipContext-pa2zo_xo.js";import"./AnimatedItems-PV5URjHV.js";import"./useAnimationId-DzTn0J9i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Czan5czn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-llZbJ7MK.js";import"./RegisterGraphicalItemId-C0Zw2Zrk.js";import"./ErrorBarContext-D77zIOkm.js";import"./GraphicalItemClipPath-ClxBFvMa.js";import"./SetGraphicalItem-CSrXN1n2.js";import"./getZIndexFromUnknown-QhI5Gjbl.js";import"./graphicalItemSelectors-DvTXnfX0.js";import"./Curve-CddvI1GC.js";import"./step-B0et1XJ2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-NvSpkC2T.js";import"./Dot-n9UR6iqn.js";import"./getRadiusAndStrokeWidthFromDot-CteGZ8Gy.js";import"./useElementOffset-I2abokvN.js";import"./uniqBy-CWUL-oIl.js";import"./iteratee-BoWDAhHy.js";import"./Cross-DlMz8kY1.js";import"./Sector-CjB2oaaR.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
