import{R as t}from"./iframe-D8_PwwQn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B3qPS3l7.js";import{R as l}from"./zIndexSlice-D3hIREVO.js";import{C as x}from"./ComposedChart-DWabK0Ov.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ODSVpl1s.js";import{L as a}from"./Line-Dtm97aFG.js";import{X as c}from"./XAxis-BMXTihse.js";import{T as g}from"./Tooltip-BWwWiBy3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VOiq-nzz.js";import"./CartesianAxis-AGoux6hi.js";import"./Layer-DIbVHc_A.js";import"./resolveDefaultProps-CDlH06hb.js";import"./Text-Dcw4f9im.js";import"./DOMUtils-BuLBbKXn.js";import"./isWellBehavedNumber-I9OE6uzw.js";import"./Label-DYAIx6Pc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dhl_4keR.js";import"./index-ComLpA2A.js";import"./index-Bf27XMU5.js";import"./types-C59kAQfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dazc5DIT.js";import"./immer-B4u9UiQz.js";import"./RechartsWrapper-DSRWnM09.js";import"./index-BYYXq0C_.js";import"./index-DGMH0rdv.js";import"./axisSelectors-GpzB0aa8.js";import"./d3-scale-B_gxMkbZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-VfOncxQc.js";import"./chartDataContext-CFZ_6_Pd.js";import"./CategoricalChart-DVNyDBwI.js";import"./tooltipContext-D3_wAMPe.js";import"./AnimatedItems-Bi3B25M2.js";import"./useAnimationId-BP5XfAv2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIl7exJy.js";import"./ActiveShapeUtils-TdP-NoHF.js";import"./RegisterGraphicalItemId-I3cDOhkS.js";import"./ErrorBarContext-uaJHV0aS.js";import"./GraphicalItemClipPath-DA-AqBBR.js";import"./SetGraphicalItem-Clhc-wET.js";import"./getZIndexFromUnknown-COtwTq2n.js";import"./graphicalItemSelectors-BeCJiYni.js";import"./Curve-BnWchyuA.js";import"./step-ebfpa1zR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C2Pj95p4.js";import"./Dot-BJ21P9KG.js";import"./getRadiusAndStrokeWidthFromDot-B9utXb_M.js";import"./useElementOffset-CXqerjyX.js";import"./uniqBy-DiyPPqVx.js";import"./iteratee-DoFufU5s.js";import"./Cross-DzzeZn6L.js";import"./Sector-CqYmo_YS.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
