import{e as t,r as A}from"./iframe-BH4WSVJq.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-DfoszhwC.js";import{R as E}from"./arrayEqualityCheck-CP7zdH6j.js";import{A as a}from"./Area-CYZTQYe_.js";import{L as b}from"./Legend-BnVA_vKm.js";import{X as d}from"./XAxis-Co1hN3iA.js";import{Y as g}from"./YAxis-Dj6UBB19.js";import{T as h}from"./Tooltip-DmWUq_Wy.js";import{R as u}from"./RechartsHookInspector-C-rHiQ21.js";import{A as v}from"./AreaChart-hJuLwLOJ.js";import{C as T}from"./CartesianGrid-ChShBsrG.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-cR6befFD.js";import"./hooks-CsAFpvHN.js";import"./axisSelectors-DWE-oxLu.js";import"./zIndexSlice-DQh671qs.js";import"./resolveDefaultProps-YH6ur84t.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnXNKoh0.js";import"./chartDataContext-px_EklfT.js";import"./CategoricalChart-BvpoJ5FY.js";import"./Curve-C54rJcUa.js";import"./types-BEfpPHVi.js";import"./Layer-FSItnfZD.js";import"./ReactUtils-DW1hnj4j.js";import"./Label-BSQQrDO-.js";import"./Text-BUp1j61E.js";import"./DOMUtils-Cd95pt4E.js";import"./ZIndexLayer-CiVdec-B.js";import"./ActivePoints-DZW_-t1x.js";import"./Dot-KeJkGvxa.js";import"./RegisterGraphicalItemId-BYo0Vbbs.js";import"./GraphicalItemClipPath-DGOjr7en.js";import"./SetGraphicalItem-Blp2F8-c.js";import"./useAnimationId-BPcwtD5E.js";import"./getRadiusAndStrokeWidthFromDot-DJ87tJ-9.js";import"./graphicalItemSelectors-DFCsnlwE.js";import"./Symbols-BTckn8e4.js";import"./useElementOffset-COjyL-h1.js";import"./iteratee-DdEzHjIf.js";import"./CartesianAxis-6RsVZvqn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-CxE7VLOZ.js";import"./Rectangle-BrKooVgo.js";import"./Sector-BpvDDX3s.js";import"./index-Cisc0CQR.js";import"./ChartSizeDimensions-CPQ4YyST.js";import"./OffsetShower-DYg0OjQP.js";import"./PlotAreaShower-C2wLpcp8.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
