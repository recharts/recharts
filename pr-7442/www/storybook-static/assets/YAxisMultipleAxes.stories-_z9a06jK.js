import{R as t}from"./iframe-_0vvsXwQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DH6-Go25.js";import{R as l}from"./zIndexSlice-UDOegWIl.js";import{C as x}from"./ComposedChart-C9VfnRnH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-KaD1us4p.js";import{L as a}from"./Line-Cj7LWAqT.js";import{X as c}from"./XAxis-BVL11hxO.js";import{T as g}from"./Tooltip-C8yOrcq0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-dROHwlCD.js";import"./CartesianAxis-ZzlyT-7-.js";import"./Layer-CbOAMwV5.js";import"./resolveDefaultProps-Dur14Ufb.js";import"./Text-DjMF9a9a.js";import"./DOMUtils-BVwvsn59.js";import"./isWellBehavedNumber-Cb6oai8T.js";import"./Label-CiJ4G9HU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-F6Q8sfzp.js";import"./index-B2rwiSR7.js";import"./index-B-MK1gV-.js";import"./types-DDFFAOTe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dyv93tW0.js";import"./immer-Crw1A_KU.js";import"./RechartsWrapper-D_godwDH.js";import"./index-DjufVxMp.js";import"./index-CQeeIj4f.js";import"./axisSelectors-DOgNvw74.js";import"./d3-scale-9nut4HIz.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuAlGfbC.js";import"./chartDataContext-ooxC0Mwi.js";import"./CategoricalChart-yQk_e9Td.js";import"./tooltipContext-CDHfg6co.js";import"./AnimatedItems-NUeY2MHF.js";import"./useAnimationId-Bs-cdpiV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_45chOx.js";import"./ActiveShapeUtils-CSlhsDPX.js";import"./RegisterGraphicalItemId-Do80jqI9.js";import"./ErrorBarContext-CJqzxiYr.js";import"./GraphicalItemClipPath-DQak-ToR.js";import"./SetGraphicalItem-c1mokMqb.js";import"./getZIndexFromUnknown-CaTLXIS8.js";import"./graphicalItemSelectors-DFIY6q2K.js";import"./Curve-Be-qJ1Us.js";import"./step-CiU6-CNX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bq9SVATs.js";import"./Dot-COzuztjB.js";import"./getRadiusAndStrokeWidthFromDot-CWPNX420.js";import"./useElementOffset-CShe55V9.js";import"./uniqBy-XCrF3wJ7.js";import"./iteratee-CU05RyCR.js";import"./Cross-DDWqM2pn.js";import"./Sector-JBzdhlhk.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
