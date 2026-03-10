import{r as A,e as t}from"./iframe-DHjTBwa0.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-CoHd_5kA.js";import{A as E}from"./AreaChart-DQJN1mkh.js";import{C as b}from"./CartesianGrid-Dn9Sz7KD.js";import{X as d}from"./XAxis-DzpQW1k6.js";import{Y as g}from"./YAxis-CHgoMFSJ.js";import{A as a}from"./Area-CFvfc3sj.js";import{T as h}from"./Tooltip-CFb1u5nY.js";import{R as u}from"./RechartsHookInspector-D6nhtH8K.js";import{R as v}from"./arrayEqualityCheck-CGXWmECa.js";import{L as T}from"./Legend-CiKBrHmA.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DyX2fUcK.js";import"./index-BPCnijYz.js";import"./immer-BrXT1eSW.js";import"./hooks-BI4eFA2i.js";import"./axisSelectors-DhPURh7h.js";import"./d3-scale-BUA-RFqD.js";import"./zIndexSlice-DqtSbfBR.js";import"./renderedTicksSlice-DkHSSwGo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dm1WBf-W.js";import"./chartDataContext-j2R-tyUk.js";import"./CategoricalChart-ByXlXeCM.js";import"./resolveDefaultProps-DXy8j8LY.js";import"./CartesianAxis-D9ZJukHE.js";import"./Layer-CoFjoalk.js";import"./Text-BWLl8TIe.js";import"./DOMUtils-DL_tkNCI.js";import"./Label-DMGH-XEw.js";import"./ZIndexLayer-CWpbiknC.js";import"./types-B-PC6Emj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DPzG6TNm.js";import"./step-C25GYkrO.js";import"./ReactUtils-DXoYQqwM.js";import"./ActivePoints-Blqf8jQG.js";import"./Dot-BsheDtZT.js";import"./RegisterGraphicalItemId-DKDKYGnd.js";import"./GraphicalItemClipPath-CGzigbYh.js";import"./SetGraphicalItem-XHeepBo6.js";import"./useAnimationId-C2i6VIVJ.js";import"./getRadiusAndStrokeWidthFromDot-GPi5Uiju.js";import"./graphicalItemSelectors-D_K7F2ot.js";import"./useElementOffset-DvcdPDwX.js";import"./uniqBy-D8yyZ5is.js";import"./iteratee-D4JFKxme.js";import"./Cross-BJreZDFL.js";import"./Rectangle-Dj02ipMQ.js";import"./Sector-CIZ18yvj.js";import"./index-CGH8qd9t.js";import"./ChartSizeDimensions-xCJQuae6.js";import"./OffsetShower-DuOTKuKX.js";import"./PlotAreaShower-H4JN1u5I.js";import"./Symbols-CnglQ83s.js";import"./symbol-LmxUlDu5.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
