import{e as t,r as A}from"./iframe-D4XW71qE.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-F9p-LUMw.js";import{R as E}from"./arrayEqualityCheck-Ct0H2J7-.js";import{A as a}from"./Area-Cxh8UjsG.js";import{L as b}from"./Legend-BUhow01l.js";import{X as d}from"./XAxis-B7adFIe7.js";import{Y as g}from"./YAxis-BzXwxAD2.js";import{T as h}from"./Tooltip-Du8Gdhpt.js";import{R as u}from"./RechartsHookInspector-9aXKf5pi.js";import{A as v}from"./AreaChart-TL1nKHu5.js";import{C as T}from"./CartesianGrid-7yO0-lso.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0DDkfJP.js";import"./hooks-B5BtkbT7.js";import"./axisSelectors-DIlwx-_h.js";import"./zIndexSlice-DRfQm_zr.js";import"./resolveDefaultProps-BtLFSBo9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkcK7QB-.js";import"./chartDataContext-6vD_4ehm.js";import"./CategoricalChart-CiMFuwJC.js";import"./Curve-BM6HUAhp.js";import"./types-CVucT5VX.js";import"./Layer-_WbjJ9WY.js";import"./ReactUtils-Dt1V4s2Z.js";import"./Label-B64y4UV8.js";import"./Text-B9RQv17s.js";import"./DOMUtils-CsdAV10D.js";import"./ZIndexLayer-uUtlF8oG.js";import"./ActivePoints-Dec3rykj.js";import"./Dot-xgW2ThBu.js";import"./RegisterGraphicalItemId-c0aUNxuE.js";import"./GraphicalItemClipPath-sDej9Lnv.js";import"./SetGraphicalItem-BB8zeoY-.js";import"./useAnimationId-BXlO72m4.js";import"./getRadiusAndStrokeWidthFromDot-CmN5e2Eb.js";import"./graphicalItemSelectors-wz4tGnNY.js";import"./Symbols-CZhPoTol.js";import"./useElementOffset-Cyi-tiOQ.js";import"./iteratee-_d0iWEtc.js";import"./CartesianAxis-8-c0TmU5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-f5Oc3nUV.js";import"./Rectangle-CSkUH-X3.js";import"./Sector-AFsZXlCO.js";import"./index-r8aHoL1L.js";import"./ChartSizeDimensions-YAYg9XQP.js";import"./OffsetShower-D_rHwW7U.js";import"./PlotAreaShower-BEJsFdI1.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
