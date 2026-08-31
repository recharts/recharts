import{R as t}from"./iframe-CmDfCYy4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Clc76Y2_.js";import{R as l}from"./zIndexSlice-Djwis5u_.js";import{C as x}from"./ComposedChart-CuqccTr3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BDUFWqzX.js";import{L as a}from"./Line-B9SROX57.js";import{X as c}from"./XAxis-CeJE8CyL.js";import{T as g}from"./Tooltip-D2jCQ9zj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C_EyvZ8C.js";import"./Text-FnYPD4kR.js";import"./resolveDefaultProps-D0zMnbP3.js";import"./DOMUtils-CeEb1Ieo.js";import"./isWellBehavedNumber-ytXpT6fS.js";import"./useId-DdN0jYjl.js";import"./useBackwardsCompatibleTheme-D23nCtop.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DE-382dp.js";import"./index-vlpbybCm.js";import"./index-DuLzr3ug.js";import"./RechartsWrapper-PRNOsza0.js";import"./axisSelectors-BLlvkyot.js";import"./throttle-BvVliBGf.js";import"./d3-scale-h8Nvvkc2.js";import"./index-BiD8Ib67.js";import"./index-BDVGxzhR.js";import"./renderedTicksSlice-BvQmfKO8.js";import"./index-C3AEkUmj.js";import"./CartesianAxis-DVS9Bx8F.js";import"./Layer-2NB1aHcN.js";import"./types-BdmWqFz5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DQcpQ0vQ.js";import"./chartDataContext-Csr98tLV.js";import"./CategoricalChart-BVrKXV60.js";import"./AnimatedItems-D70_FMkE.js";import"./useAnimationId-CFWhy9Ri.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZ3tpH7C.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDpJLacA.js";import"./tooltipContext-DNmPIcfL.js";import"./RegisterGraphicalItemId-B3K6VYV9.js";import"./ErrorBarContext-CmqdPlQJ.js";import"./GraphicalItemClipPath-BSPzDNhY.js";import"./SetGraphicalItem-BYV2m0jb.js";import"./getZIndexFromUnknown-9cF8Gq2D.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B_SSOZi-.js";import"./Curve-DLCwqskO.js";import"./step-DtcV51zC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CpKsZRdO.js";import"./Dot-Br2gUZT5.js";import"./getRadiusAndStrokeWidthFromDot-BWI8_9l7.js";import"./useElementOffset-Deb0EMZn.js";import"./uniqBy-CuJXDrId.js";import"./iteratee-CJHJ6T1V.js";import"./Cross-Dj79XzQE.js";import"./Sector-gLhdGisY.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
