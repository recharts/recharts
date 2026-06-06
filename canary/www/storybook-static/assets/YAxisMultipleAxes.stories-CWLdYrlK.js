import{R as t}from"./iframe-CfFwYGba.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D4OA0xxQ.js";import{R as l}from"./zIndexSlice-DfErsUYp.js";import{C as x}from"./ComposedChart-9_Y3XLOf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D6EitH5B.js";import{L as a}from"./Line-1W0aDq6r.js";import{X as c}from"./XAxis-C1PjqHUu.js";import{T as g}from"./Tooltip-D9G1T0b-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VqHCUeFt.js";import"./CartesianAxis-DYBfrE-6.js";import"./Layer-CIeZ6xN1.js";import"./resolveDefaultProps-CNXn3RtZ.js";import"./Text-6g8FEB5n.js";import"./DOMUtils-CelkDAhh.js";import"./isWellBehavedNumber-DNsnRpQn.js";import"./Label-BfJ1m9lw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CO0_v3Z6.js";import"./index-B1M76gQx.js";import"./index-DKyALkfw.js";import"./types-B8Ju2LTD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CeRHVXP-.js";import"./immer-ChF14mwi.js";import"./RechartsWrapper-BG04mOMU.js";import"./index-jr7opHAK.js";import"./index-DNhYiVbG.js";import"./axisSelectors-DhigzgEo.js";import"./d3-scale-CO_OUUyv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BKL_0SO1.js";import"./chartDataContext-CvyqEHRa.js";import"./CategoricalChart-D8Sfn5Og.js";import"./tooltipContext-Ld-NT6Pn.js";import"./AnimatedItems-DufJJ5tM.js";import"./useAnimationId-q4Azt8JP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dp-9d2wb.js";import"./ActiveShapeUtils-BoiiDjBc.js";import"./RegisterGraphicalItemId-DuA2mhLl.js";import"./ErrorBarContext-yluf_OAo.js";import"./GraphicalItemClipPath-CycB6t93.js";import"./SetGraphicalItem-BVwnEQ5r.js";import"./getZIndexFromUnknown-BkGTr2qU.js";import"./graphicalItemSelectors-2gG6urOn.js";import"./Curve-CvFToXA1.js";import"./step-Cz7LQHZ8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BvFcDKGx.js";import"./Dot-CQusYe0D.js";import"./getRadiusAndStrokeWidthFromDot-ClnovYdE.js";import"./useElementOffset-DHiFNrkV.js";import"./uniqBy-2uTalxV9.js";import"./iteratee-CgWzIoT6.js";import"./Cross-CJdDez7_.js";import"./Sector-BK2jXRga.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
