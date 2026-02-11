import{e as t}from"./iframe-DEzN-0IH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-ywkX_5u_.js";import{R as l}from"./arrayEqualityCheck-Dj5rgmpF.js";import{C as x}from"./ComposedChart-DnQI112R.js";import{B as o}from"./Bar-DYzcfM2N.js";import{L as a}from"./Line-CK5GftQF.js";import{X as c}from"./XAxis-C9IejdiW.js";import{T as A}from"./Tooltip-OEXQhO7Q.js";import{R as g}from"./RechartsHookInspector-f3uqQnpf.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps--GysF_k-.js";import"./CartesianAxis-34WftamX.js";import"./Layer-DoKHSLik.js";import"./Text-BWRoC5xn.js";import"./DOMUtils-CUVpLAf7.js";import"./Label-CwNS2FmH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DsNBC3BS.js";import"./zIndexSlice-BLXDXR0o.js";import"./types-MnMW5XmF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C4pdhuYh.js";import"./hooks-DVXAe2RE.js";import"./axisSelectors-DVjOWlPF.js";import"./RechartsWrapper-D226X-in.js";import"./CartesianChart-CKWYeFyd.js";import"./chartDataContext-DDAsV3h8.js";import"./CategoricalChart-ChS4DbUW.js";import"./tooltipContext-Bu74m_yM.js";import"./ReactUtils-BQDy0BEl.js";import"./ActiveShapeUtils-DdpV-Pge.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2soG4U2.js";import"./useAnimationId-DpL3ZrLE.js";import"./Trapezoid-DvZgohrQ.js";import"./Sector-Cn8fxEII.js";import"./Symbols-CNlz260r.js";import"./Curve-Een90XLK.js";import"./RegisterGraphicalItemId-BvrhgEWi.js";import"./ErrorBarContext-D5xdE6Qk.js";import"./GraphicalItemClipPath-BhXQU-ZR.js";import"./SetGraphicalItem-k6zlk5Ce.js";import"./getZIndexFromUnknown-DSl9nT4S.js";import"./graphicalItemSelectors-DhQyscN-.js";import"./ActivePoints-DHUEXfUz.js";import"./Dot-Dv2iwbT4.js";import"./getRadiusAndStrokeWidthFromDot-DCgdaaPW.js";import"./useElementOffset-CJBHLAAR.js";import"./iteratee-BkSREnKY.js";import"./Cross-Cmr9SEfJ.js";import"./index-UhpklWmI.js";import"./ChartSizeDimensions-BGz0NRwX.js";import"./OffsetShower-Hv6zXz6F.js";import"./PlotAreaShower-xiASrx7K.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Et=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Et as __namedExportsOrder,It as default};
