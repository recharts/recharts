import{R as t}from"./iframe-Cd3J5nRN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D2-38tFq.js";import{R as l}from"./zIndexSlice-wIODfcHB.js";import{C as x}from"./ComposedChart-CR74LLuH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CnE82_Nr.js";import{L as a}from"./Line-AwPNXD7j.js";import{X as c}from"./XAxis-CAq4kERr.js";import{T as g}from"./Tooltip-Bya51qbO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CrzYsNNZ.js";import"./CartesianAxis-CQodEWot.js";import"./Layer-C0-faibl.js";import"./resolveDefaultProps-BAOUvy4N.js";import"./Text-BQiCL8pu.js";import"./DOMUtils-C0pcSgNu.js";import"./isWellBehavedNumber-jGn4h3zq.js";import"./Label-x5qCkJ5y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbYdMZ0m.js";import"./index-DYlcgjqt.js";import"./index-BK5to_p5.js";import"./types-DvVhAiRy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DUoWqaFq.js";import"./immer-D6_cV7mT.js";import"./RechartsWrapper-4JmG_mcb.js";import"./index-CLQBN1dD.js";import"./index-DkbQm4bl.js";import"./axisSelectors-BTr0cSxw.js";import"./d3-scale-DxsYWkxB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-QShZ6Qyv.js";import"./chartDataContext-DQMMfvFX.js";import"./CategoricalChart-z0DLkqJ1.js";import"./tooltipContext-CvoBerDz.js";import"./AnimatedItems-Dhj62weC.js";import"./useAnimationId-Bd8ziSRa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-4Sd8JCB6.js";import"./ActiveShapeUtils-DEonU6C1.js";import"./RegisterGraphicalItemId-DPItxssW.js";import"./ErrorBarContext-DfRZ0VKD.js";import"./GraphicalItemClipPath-CZRSWXrI.js";import"./SetGraphicalItem-DYeKk97u.js";import"./getZIndexFromUnknown-DujJtw9L.js";import"./graphicalItemSelectors-Cb0rlsta.js";import"./Curve-B0MYcAMh.js";import"./step-CxP-HNru.js";import"./path-DyVhHtw_.js";import"./ActivePoints-IkVOH40p.js";import"./Dot-DwJjJto9.js";import"./getRadiusAndStrokeWidthFromDot-DvmlTDI9.js";import"./useElementOffset-BXO3AwQl.js";import"./uniqBy-Jzi4tC7w.js";import"./iteratee-DiK7xQH2.js";import"./Cross-cjU0TZ8e.js";import"./Sector-CDZyVLLc.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
