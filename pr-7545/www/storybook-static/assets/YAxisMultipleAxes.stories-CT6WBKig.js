import{R as t}from"./iframe-DMOF2lK6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-RrgtBsUU.js";import{R as l}from"./zIndexSlice-DhTc22fH.js";import{C as x}from"./ComposedChart-D3i3PjRq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CCKHmoTf.js";import{L as a}from"./Line-D1OIUFwm.js";import{X as c}from"./XAxis-D4z0E1S_.js";import{T as g}from"./Tooltip-DaOMdjzm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B3U1UDpz.js";import"./Layer-7eLuysDW.js";import"./resolveDefaultProps-y8-G4ZMe.js";import"./Text-Diu2UmEV.js";import"./DOMUtils-BbhpPFQ_.js";import"./isWellBehavedNumber-dZNNr5ol.js";import"./Label-BEoMP2Su.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUULPtO2.js";import"./index-CPzx0qn0.js";import"./index-DMOQZokV.js";import"./types-CpWsykXF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ba4-qyoV.js";import"./throttle-DdV_xgY5.js";import"./RechartsWrapper-OXven1HQ.js";import"./index-D6CqkTNp.js";import"./index-CZ5vZ9qb.js";import"./axisSelectors-CxjdpUYQ.js";import"./d3-scale-fRi62pfH.js";import"./CartesianChart-Dri7Y6-1.js";import"./chartDataContext-CTH0eIlx.js";import"./CategoricalChart-C3YmcWt7.js";import"./tooltipContext-CXiCr-XV.js";import"./AnimatedItems-BdaIVj2C.js";import"./useAnimationId-Djm7sZoE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Czy0xVaV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJ8DXgxz.js";import"./RegisterGraphicalItemId-CeE9Z4_x.js";import"./ErrorBarContext-B97mauET.js";import"./GraphicalItemClipPath-BUGzJbXN.js";import"./SetGraphicalItem-B-lQGR6o.js";import"./getZIndexFromUnknown-ZXt_eyeP.js";import"./graphicalItemSelectors-iCteOsSQ.js";import"./Curve-DysNMUK1.js";import"./step-DvpijsBX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dw1JugLI.js";import"./Dot-DSdOAVgn.js";import"./getRadiusAndStrokeWidthFromDot-EOdI7GLa.js";import"./useElementOffset-DpfPFtuA.js";import"./uniqBy-BlzluoM8.js";import"./iteratee-BqDUwzTx.js";import"./Cross-DIerFCl2.js";import"./Sector-CDZAuxi0.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
