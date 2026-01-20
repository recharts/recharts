import{e as t,r as A}from"./iframe-CZOKXyYX.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-Bhz_MiFn.js";import{R as E}from"./arrayEqualityCheck-ZCpvDDUM.js";import{A as a}from"./Area-CO5WJG3L.js";import{L as b}from"./Legend-D1xTuSvo.js";import{X as d}from"./XAxis-DzfgVxfw.js";import{Y as g}from"./YAxis-3HWUkaDa.js";import{T as h}from"./Tooltip-sGlM95jv.js";import{R as u}from"./RechartsHookInspector-B7tAaeEL.js";import{A as v}from"./AreaChart-aumdUdK7.js";import{C as T}from"./CartesianGrid-CAS1UQAw.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BzS4jEvb.js";import"./hooks-Cs7Pyl2H.js";import"./axisSelectors-Cy9T5-14.js";import"./zIndexSlice-DkluUigR.js";import"./resolveDefaultProps-BdIYVt_j.js";import"./PolarUtils-BdcP-kXS.js";import"./CartesianChart-CEGcX5i7.js";import"./chartDataContext-CGCgcL6T.js";import"./CategoricalChart-CueK-ohc.js";import"./Curve-Cn7M-l6J.js";import"./types-mDJez9wS.js";import"./Layer-ipPtt6GK.js";import"./ReactUtils-CKx1UPE3.js";import"./Label-wuyiSzGf.js";import"./Text-DBc2QLFr.js";import"./DOMUtils-BK6pK0qd.js";import"./ZIndexLayer-DuvPoAvp.js";import"./ActivePoints-DA6Kv2zk.js";import"./Dot-CpDEwrks.js";import"./RegisterGraphicalItemId-CT7gxHP9.js";import"./GraphicalItemClipPath-DG_FLSO_.js";import"./SetGraphicalItem-A4Aj3AlV.js";import"./useAnimationId-BrU_ieRo.js";import"./getRadiusAndStrokeWidthFromDot-CQrJkzNb.js";import"./graphicalItemSelectors-Bg9oV1_t.js";import"./Symbols-DZsrADbK.js";import"./useElementOffset-8Y6iIbxO.js";import"./iteratee-BHKnSY98.js";import"./CartesianAxis-DWBeqImC.js";import"./Cross-D0VvRflz.js";import"./Rectangle-8jBBkAoM.js";import"./Sector-Dsjq5sTO.js";import"./index-Bq0EYqss.js";import"./ChartSizeDimensions-DcBo26mg.js";import"./OffsetShower-D0BahXva.js";import"./PlotAreaShower-D0tOLrH8.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
