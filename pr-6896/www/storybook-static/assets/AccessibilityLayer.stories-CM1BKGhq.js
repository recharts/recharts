import{e as t,r as A}from"./iframe-DTjNyuRV.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-D6xbDU0w.js";import{R as E}from"./arrayEqualityCheck-C4xGcSTy.js";import{A as a}from"./Area-DJopZYTW.js";import{L as b}from"./Legend--KVfADKp.js";import{X as d}from"./XAxis-Cc4WtM0z.js";import{Y as g}from"./YAxis-CTYfecrB.js";import{T as h}from"./Tooltip-DHU1_Ngb.js";import{R as u}from"./RechartsHookInspector-euo4g-ug.js";import{A as v}from"./AreaChart-OLApBypA.js";import{C as T}from"./CartesianGrid-DmHrhKtz.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./hooks-BKspSbbk.js";import"./axisSelectors-C5N0FKJg.js";import"./zIndexSlice-DRfn0LKt.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./PolarUtils-jGr_7wxa.js";import"./CartesianChart-oqf3iy5S.js";import"./chartDataContext-_UJlrEtw.js";import"./CategoricalChart-D9AJMhmv.js";import"./Curve-OPgUPtNu.js";import"./types-To9Ddb8E.js";import"./Layer-Bnob1t-w.js";import"./ReactUtils-338dS-Qh.js";import"./Label-BLKfXojP.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./ZIndexLayer-DQomkPs4.js";import"./ActivePoints-DGMmJbxW.js";import"./Dot-BEtD_ap4.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./GraphicalItemClipPath-C3b1vJcH.js";import"./SetGraphicalItem-B-b4IafD.js";import"./useAnimationId-DyTjjL6a.js";import"./getRadiusAndStrokeWidthFromDot-CBYLfGEK.js";import"./graphicalItemSelectors-DqkonIUB.js";import"./Symbols-Bqb-NDkg.js";import"./useElementOffset-CG9nz9uh.js";import"./iteratee-ZsRreprt.js";import"./CartesianAxis-DGjvbjMn.js";import"./Cross-Dp-5al6M.js";import"./Rectangle-p9Ft26dZ.js";import"./Sector-DY-WO6-X.js";import"./index-qnmfyn6T.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
