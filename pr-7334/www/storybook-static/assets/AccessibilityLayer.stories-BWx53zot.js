import{r as A,e as t}from"./iframe-IedaLeal.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-BLFle0FW.js";import{A as E}from"./AreaChart-CJhy9mKm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B7TLSq6W.js";import{X as g}from"./XAxis-CUj044ZC.js";import{Y as h}from"./YAxis-j1HNTz_n.js";import{A as a}from"./Area-CCz7NRHm.js";import{T as u}from"./Tooltip-B6TvM8k9.js";import{R as y}from"./RechartsHookInspector-5qOOtg04.js";import{R as v}from"./arrayEqualityCheck-CDeFCuAt.js";import{L as T}from"./Legend-DVndYvev.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0o5SV0j_.js";import"./index-YtVhwzFk.js";import"./immer-Dd6dXjxy.js";import"./hooks-C5y3PU4C.js";import"./axisSelectors-Bx341r0C.js";import"./d3-scale-BX13yOxW.js";import"./zIndexSlice-BZ8DgwR3.js";import"./renderedTicksSlice-DOzQfNkA.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DtUsH4ee.js";import"./chartDataContext-DqUMO5tY.js";import"./CategoricalChart-DAXIc6R-.js";import"./resolveDefaultProps-DinctDfH.js";import"./CartesianAxis-DdlOSCj4.js";import"./Layer-COpu_kTm.js";import"./Text-ko_k4IV7.js";import"./DOMUtils-BYFJFnuE.js";import"./Label-NwC3LlsS.js";import"./ZIndexLayer-JYekqGDv.js";import"./types-Ci9gDE8O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BzqwREyl.js";import"./step-CR-qwJGd.js";import"./ReactUtils-De7AqaLg.js";import"./ActivePoints-Dn2oKCMT.js";import"./Dot-CXXTrQ7H.js";import"./RegisterGraphicalItemId-wI9lHTwH.js";import"./GraphicalItemClipPath-B96rVctv.js";import"./SetGraphicalItem-BzrdUKT-.js";import"./useAnimationId-D3Yn3hG9.js";import"./getRadiusAndStrokeWidthFromDot-B2hN5pbW.js";import"./graphicalItemSelectors-DDSx4B9l.js";import"./useElementOffset-XMbgmZkO.js";import"./uniqBy-CZ5FVlWP.js";import"./iteratee-DYAmoIVS.js";import"./Cross-vdltQL2q.js";import"./Rectangle-D0StcwZN.js";import"./Sector-BSwgLZD3.js";import"./index-sBYFadDc.js";import"./ChartSizeDimensions-DwT6nbul.js";import"./OffsetShower-RAcVZiZd.js";import"./PlotAreaShower-DRI9galD.js";import"./Symbols-ncFIdchy.js";import"./symbol-BiWopP6m.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={300}>
        <ComposedChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(ComposedChartArgs),
  parameters: {
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart width={500} height={400} data={pageData} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
