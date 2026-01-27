import{e as t,r as A}from"./iframe-CpBR2FD-.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-B6g7a6-n.js";import{R as E}from"./arrayEqualityCheck-DfVEXElD.js";import{A as a}from"./Area-D8EWln9I.js";import{L as b}from"./Legend-CSv-GvHn.js";import{X as d}from"./XAxis-Cmud21dv.js";import{Y as g}from"./YAxis-CYDXfh77.js";import{T as h}from"./Tooltip-CPsaw20l.js";import{R as u}from"./RechartsHookInspector-C3421ru3.js";import{A as v}from"./AreaChart-BHCAJ6jE.js";import{C as T}from"./CartesianGrid-BAFAxm3s.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CoeBe9ik.js";import"./hooks-DedpoqIJ.js";import"./axisSelectors-BrZ6G91_.js";import"./zIndexSlice-BCiKU99h.js";import"./resolveDefaultProps-DmMqjKPI.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-B1Icaiih.js";import"./chartDataContext-XtQC6I5E.js";import"./CategoricalChart-Bb8UD5I8.js";import"./Curve-DWHqQWsG.js";import"./types-D4KZK8k1.js";import"./Layer-DEK88535.js";import"./ReactUtils-VfTt9PFz.js";import"./Label-DWBk7fhM.js";import"./Text-Dhmw9EGu.js";import"./DOMUtils-BBsKE3Cz.js";import"./ZIndexLayer-fbfZmhXg.js";import"./ActivePoints-B3LyVgYO.js";import"./Dot-DiU-b5Rw.js";import"./RegisterGraphicalItemId-C5HCX42f.js";import"./GraphicalItemClipPath-VjF6EdyN.js";import"./SetGraphicalItem-BgcHabrg.js";import"./useAnimationId-CFZ1kX6W.js";import"./getRadiusAndStrokeWidthFromDot-Br3Pzfii.js";import"./graphicalItemSelectors-Creqlo0O.js";import"./Symbols-9dW_oll9.js";import"./useElementOffset-BaVJj_15.js";import"./iteratee-CgCvXk_a.js";import"./CartesianAxis-DIWnau3l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-B1ZwX2Rm.js";import"./Rectangle-BPCbtxXK.js";import"./Sector-UZPxualI.js";import"./index-Dknhq_uL.js";import"./ChartSizeDimensions-BjsHMoDH.js";import"./OffsetShower-D-sUEdFp.js";import"./PlotAreaShower-BP-Vy4Nm.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Tt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Tt as __namedExportsOrder,vt as default};
