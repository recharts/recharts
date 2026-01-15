import{e as t,r as A}from"./iframe-DZL_Ah-h.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-3nHTlBYt.js";import{R as E}from"./arrayEqualityCheck-D-Ts3cDI.js";import{A as a}from"./Area-DHCSdnv0.js";import{L as b}from"./Legend-DupYJZmR.js";import{X as d}from"./XAxis-CfBz4GHV.js";import{Y as g}from"./YAxis-B4LI4Fwk.js";import{T as h}from"./Tooltip-D1mnEu2m.js";import{R as u}from"./RechartsHookInspector-CKjH9lIc.js";import{A as v}from"./AreaChart-D3kdG_Rm.js";import{C as T}from"./CartesianGrid-zh2iKR1S.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ck-Abs8b.js";import"./hooks-Dodf-ron.js";import"./axisSelectors-Df1JfYHl.js";import"./zIndexSlice-DxoPuFz2.js";import"./resolveDefaultProps-DcfSkoMJ.js";import"./PolarUtils-DfkNCrwZ.js";import"./CartesianChart-Ci6fm2Tl.js";import"./chartDataContext-9vV2ynlS.js";import"./CategoricalChart-BD-QnqEO.js";import"./Curve-DKq7X7FQ.js";import"./types-Dy3M-0QX.js";import"./Layer-Cvyl7OZW.js";import"./ReactUtils-BhJ_85C1.js";import"./Label-DNHrzZbV.js";import"./Text-8PeDrNfr.js";import"./DOMUtils-D_0MfqW3.js";import"./ZIndexLayer-B8J5qb9c.js";import"./ActivePoints-DLM-C9_Y.js";import"./Dot-BoSXTYOc.js";import"./RegisterGraphicalItemId--gKDrMRm.js";import"./GraphicalItemClipPath-BTtL5NTg.js";import"./SetGraphicalItem-BZkyoZO7.js";import"./useAnimationId-B-fQiutN.js";import"./getRadiusAndStrokeWidthFromDot-DyoH3QJX.js";import"./graphicalItemSelectors-B03ZUp5o.js";import"./Symbols-DeYh9DPD.js";import"./useElementOffset-Bd6zDnOW.js";import"./iteratee-CSplJfXS.js";import"./CartesianAxis-hqZlkA4G.js";import"./Cross-B8dTDGJS.js";import"./Rectangle-DBmW1QC4.js";import"./Sector-CFzlz6F5.js";import"./index-DN9IEtGR.js";import"./ChartSizeDimensions-DKkQ1adP.js";import"./OffsetShower-DmaMI3on.js";import"./PlotAreaShower-BpNrAEUE.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
