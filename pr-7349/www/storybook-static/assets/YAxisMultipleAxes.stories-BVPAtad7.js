import{e as t}from"./iframe-8-kjzB7M.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DaRq7QHm.js";import{g as l}from"./arrayEqualityCheck-BFH1E3k_.js";import{C as x}from"./ComposedChart-Dr0nJPxm.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-DejEor9c.js";import{L as a}from"./Line-CGldzIuh.js";import{X as A}from"./XAxis-D2S2cmnw.js";import{T as g}from"./Tooltip-DE4719SA.js";import{R as f}from"./RechartsHookInspector-CM7h1fuc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CXWQlOps.js";import"./Layer-CzqQGym9.js";import"./resolveDefaultProps-DEBbAbU8.js";import"./Text-CoxxW3ZN.js";import"./DOMUtils-DlGm6rgl.js";import"./Label-DM3VCT7K.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BFtzmC6W.js";import"./zIndexSlice-RoK7gDNz.js";import"./immer-DyK63VIN.js";import"./types-BtLx_F1t.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B1hkz5RK.js";import"./hooks-D7HTiiCO.js";import"./axisSelectors-BNYuZguV.js";import"./d3-scale-CQtZ6VlM.js";import"./RechartsWrapper-B7ei5y6q.js";import"./index-B7HOuyLw.js";import"./CartesianChart-DIcUCgdK.js";import"./chartDataContext-B5w2WfFE.js";import"./CategoricalChart-BSYInFMU.js";import"./tooltipContext-DATQSPWz.js";import"./ReactUtils-CewVIgMM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9KTCJgL8.js";import"./useAnimationId-R2tEawoj.js";import"./ActiveShapeUtils-B64sWmQr.js";import"./isPlainObject-Dd1Ki_ZE.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-CmJN5Y2e.js";import"./ErrorBarContext-DcV-oeSm.js";import"./GraphicalItemClipPath-CVE49Uj3.js";import"./SetGraphicalItem-DKHyStui.js";import"./getZIndexFromUnknown-D3BpjNV2.js";import"./graphicalItemSelectors-BwmNh9RH.js";import"./Curve-D8ZMrIKx.js";import"./step-BPajIDVN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B6bRCrz9.js";import"./Dot-kp7349vp.js";import"./getRadiusAndStrokeWidthFromDot-DEvwWVK6.js";import"./useElementOffset-D5qXLcar.js";import"./uniqBy-twvRpSaZ.js";import"./iteratee-C5SgYX63.js";import"./Cross-GdDzPHQX.js";import"./Sector-BTU-7R8c.js";import"./index-DmSQVuHS.js";import"./ChartSizeDimensions-C53bqH85.js";import"./OffsetShower-Ba6R23wJ.js";import"./PlotAreaShower-mh0ASj0Y.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Lt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
