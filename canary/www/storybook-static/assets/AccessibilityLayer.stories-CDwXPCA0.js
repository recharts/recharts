import{r as A,e as t}from"./iframe-Drx3sHzD.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-Cv9ZLW_z.js";import{A as E}from"./AreaChart-DMi4iQAe.js";import{C as b}from"./CartesianGrid-BbBnyfm6.js";import{X as d}from"./XAxis-CHiVQCBM.js";import{Y as g}from"./YAxis-BFFqV8T1.js";import{A as a}from"./Area-Ct6tPxNJ.js";import{T as h}from"./Tooltip-CB6Sl7jY.js";import{R as u}from"./RechartsHookInspector-B47NB8Ba.js";import{R as v}from"./arrayEqualityCheck-Cxh3C5Ut.js";import{L as T}from"./Legend-C1SPoGhM.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C25rZHqy.js";import"./index-C1X6dA56.js";import"./immer-CMngUaVZ.js";import"./hooks-CoGkBA0W.js";import"./axisSelectors-Dvu2n2j0.js";import"./d3-scale-DJsTU-V4.js";import"./zIndexSlice-BtH-N1PM.js";import"./renderedTicksSlice-NaH2qnuB.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-X3a2_VbG.js";import"./chartDataContext-4c8heGUY.js";import"./CategoricalChart-BH-H9_fa.js";import"./resolveDefaultProps-DJZRJ_w1.js";import"./CartesianAxis-CtfoqZiD.js";import"./Layer-BX4NaN0s.js";import"./Text-puWaXg2i.js";import"./DOMUtils-CNGQFx5Q.js";import"./Label-BYpXDDHB.js";import"./ZIndexLayer-BCRbCnLV.js";import"./types-Dt1v_DFT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CWdwiHun.js";import"./step-DiiGtOJG.js";import"./ReactUtils-DR-cFl3z.js";import"./ActivePoints-B39TV9kW.js";import"./Dot-DJk_feJD.js";import"./RegisterGraphicalItemId-D_XwV7_H.js";import"./GraphicalItemClipPath-DJ0LBSJn.js";import"./SetGraphicalItem-CaVxJkE3.js";import"./useAnimationId-BvmpUmZ8.js";import"./getRadiusAndStrokeWidthFromDot-DE_8tHNb.js";import"./graphicalItemSelectors-B3D-k-PR.js";import"./useElementOffset-C98yl90c.js";import"./uniqBy-CUBfT5KA.js";import"./iteratee-BioY3JBQ.js";import"./Cross-DhGrkxEb.js";import"./Rectangle-dAm4Nryw.js";import"./Sector-BU43v3eZ.js";import"./index-UsmbSRTd.js";import"./ChartSizeDimensions-DO_eIzzc.js";import"./OffsetShower-C7m1BjsQ.js";import"./PlotAreaShower-BQS_Wf3K.js";import"./Symbols-5INEUEhj.js";import"./symbol-DLZzCtHC.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
