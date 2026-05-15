import{r as A,e as t}from"./iframe-CYBvhlZy.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-Bvvd3hm_.js";import{A as E}from"./AreaChart-CSf_qGcG.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DJUNxO2e.js";import{X as g}from"./XAxis-eHWI-DgF.js";import{Y as h}from"./YAxis-Cr0sgLdF.js";import{A as a}from"./Area-DTmC9TGz.js";import{T as u}from"./Tooltip-Bl6pLRjZ.js";import{R as y}from"./RechartsHookInspector-CaeSkNQM.js";import{R as v}from"./arrayEqualityCheck-CK8f-Z2u.js";import{L as T}from"./Legend-BXbVRa32.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D_53Ouva.js";import"./index-nd8_1HWo.js";import"./immer-DZ9JDNpk.js";import"./hooks-CR7YY56P.js";import"./axisSelectors-BoLkhT_J.js";import"./d3-scale-DTdaSeXE.js";import"./zIndexSlice-vzQlxu4v.js";import"./renderedTicksSlice-PTTaozgG.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_feyW6L.js";import"./chartDataContext-CoyQinM0.js";import"./CategoricalChart-BXlXDqQY.js";import"./resolveDefaultProps-fdlpGSvO.js";import"./CartesianAxis-DeN7_m83.js";import"./Layer-DAuVz3MT.js";import"./Text-CrKmtYV0.js";import"./DOMUtils-DaBDLSWT.js";import"./Label-C0OOgdLf.js";import"./ZIndexLayer-CJwEcLcc.js";import"./types-BeBHA9WF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BOm9EQk3.js";import"./step-CGLzAmAZ.js";import"./ReactUtils-BYIbW4_R.js";import"./ActivePoints-CMoiNPrV.js";import"./Dot-D7HQ1K3c.js";import"./RegisterGraphicalItemId-BV1Az0SU.js";import"./GraphicalItemClipPath-CgGJbcJo.js";import"./SetGraphicalItem-D2M6v_rh.js";import"./useAnimationId-DVYg6VJa.js";import"./getRadiusAndStrokeWidthFromDot-XsFMXGfI.js";import"./graphicalItemSelectors-DNX_hSAl.js";import"./useElementOffset-Vb2Ffn3s.js";import"./uniqBy-B2hQmckI.js";import"./iteratee-DPMrHAQZ.js";import"./Cross-IqBPrWj8.js";import"./Rectangle-CL4E1CJr.js";import"./Sector-CjwyDs-v.js";import"./index-2ZvuN1gp.js";import"./ChartSizeDimensions-Be7xBjpI.js";import"./OffsetShower-ByB6-I6e.js";import"./PlotAreaShower-DizTc5Ay.js";import"./Symbols-CUYfHAW-.js";import"./symbol-CPTqgyqe.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
