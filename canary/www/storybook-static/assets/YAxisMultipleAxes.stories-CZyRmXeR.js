import{R as t}from"./iframe-GBGc-iKq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-mSAPjc-3.js";import{R as l}from"./zIndexSlice-DP0tLqWW.js";import{C as x}from"./ComposedChart-BAWAmmMR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-QHhZHYJ9.js";import{L as a}from"./Line-BLIZlFIO.js";import{X as c}from"./XAxis-BBjH0uDR.js";import{T as g}from"./Tooltip-B4XvSEH4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DICUyaHN.js";import"./CartesianAxis-DQP4bonx.js";import"./Layer-CDGRbd8f.js";import"./resolveDefaultProps-DIrI2E0T.js";import"./Text-B4CLUneY.js";import"./DOMUtils-BP3f5q3h.js";import"./isWellBehavedNumber-Lbc_fCaY.js";import"./Label-DSpdGeyH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMlwN-1Q.js";import"./index-WIkdQGR_.js";import"./index-Bj7NMbSa.js";import"./types-BTPiehg7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CwhUMpGJ.js";import"./immer-9IN4E6VX.js";import"./RechartsWrapper-CY1_ev_Z.js";import"./index-DDYWU-5r.js";import"./index-DEGNeWRW.js";import"./axisSelectors-DUsVRTIw.js";import"./d3-scale-Dym64WYU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ci5TMZqv.js";import"./chartDataContext-Di_sY_cY.js";import"./CategoricalChart-L_ONP4HK.js";import"./tooltipContext-DRZw4DN2.js";import"./AnimatedItems-C29R-vhg.js";import"./useAnimationId-BXgA3n2L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C36d9lkh.js";import"./ActiveShapeUtils-DlvuUpon.js";import"./RegisterGraphicalItemId-C9tnUoji.js";import"./ErrorBarContext-BIvto65z.js";import"./GraphicalItemClipPath-CocmCyqp.js";import"./SetGraphicalItem-5bSLaCIx.js";import"./getZIndexFromUnknown-D4tcK45P.js";import"./graphicalItemSelectors-CSv0afn4.js";import"./Curve-B9n6ABfY.js";import"./step-CxLlu8x6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CBmfjAqp.js";import"./Dot-Jn68Tyru.js";import"./getRadiusAndStrokeWidthFromDot-nN08QDm9.js";import"./useElementOffset-_LlNMZ1b.js";import"./uniqBy-BPbPdDdp.js";import"./iteratee-DqpINt84.js";import"./Cross-DLvWwON2.js";import"./Sector-B3N5mJTn.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
