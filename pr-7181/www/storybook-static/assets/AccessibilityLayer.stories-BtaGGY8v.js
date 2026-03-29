import{r as A,e as t}from"./iframe-C5xSgLrQ.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-Cii0yw7e.js";import{A as E}from"./AreaChart-CEtu7FP1.js";import{C as b}from"./CartesianGrid-D4zDVCTs.js";import{X as d}from"./XAxis-BRtXBZQJ.js";import{Y as g}from"./YAxis-DVWoPU6G.js";import{A as a}from"./Area-DN9F6PdT.js";import{T as h}from"./Tooltip-Co6pf-KI.js";import{R as u}from"./RechartsHookInspector-DGw_Tn__.js";import{R as v}from"./arrayEqualityCheck-y9OahTCZ.js";import{L as T}from"./Legend-BSCq0tYj.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6VkPGGy.js";import"./index-7mth2ygc.js";import"./immer-CibMA2Vd.js";import"./hooks-D_Ct_jBZ.js";import"./axisSelectors-Cjz2FycN.js";import"./d3-scale-DSnNq-Zb.js";import"./zIndexSlice-Bh8d7RDS.js";import"./renderedTicksSlice-3asYpfwT.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEUFIUWW.js";import"./chartDataContext-DLPHSsFH.js";import"./CategoricalChart-CdAWxs2w.js";import"./resolveDefaultProps-CvWnTU23.js";import"./CartesianAxis-z8YHC5m1.js";import"./Layer-BwFEHJgH.js";import"./Text-D6Wg1Fki.js";import"./DOMUtils-DtO1NYEm.js";import"./Label-BiYutikV.js";import"./ZIndexLayer-BcEHBZGv.js";import"./types-BYICSsoS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BgNWnWhG.js";import"./step-D0TR_J7h.js";import"./ReactUtils-BVTYGt8W.js";import"./ActivePoints-jvxv4kw8.js";import"./Dot-CuQtPzJT.js";import"./RegisterGraphicalItemId-B7TKQ3nD.js";import"./GraphicalItemClipPath-2_yqp8aO.js";import"./SetGraphicalItem-DGqH91p1.js";import"./useAnimationId-CQohD0O1.js";import"./getRadiusAndStrokeWidthFromDot-BzTohH68.js";import"./graphicalItemSelectors-CTP79arQ.js";import"./useElementOffset-D737zDKa.js";import"./uniqBy-DHDZ4OYy.js";import"./iteratee-CiUneyCm.js";import"./Cross-DZiq0tO-.js";import"./Rectangle-FhpSgi7L.js";import"./Sector-DJx2xoEl.js";import"./index-DNx2k_-S.js";import"./ChartSizeDimensions-ChWtlIEh.js";import"./OffsetShower-ChplnW4p.js";import"./PlotAreaShower-UojNVDVn.js";import"./Symbols-DwxktYbI.js";import"./symbol-B65zJ9aN.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
