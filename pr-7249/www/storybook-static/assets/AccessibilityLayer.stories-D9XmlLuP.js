import{r as A,e as t}from"./iframe-BL30a25n.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-CwvxB3E8.js";import{A as E}from"./AreaChart-BVRMeZiP.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-NIG_z2rH.js";import{X as g}from"./XAxis-BuEHyROH.js";import{Y as h}from"./YAxis-97iCNCLl.js";import{A as a}from"./Area-C7dpw94X.js";import{T as u}from"./Tooltip-CGzfh5OP.js";import{R as y}from"./RechartsHookInspector-CKAPvAcq.js";import{R as v}from"./arrayEqualityCheck-CTdhw7v2.js";import{L as T}from"./Legend-BFEw6qz3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSatPt3_.js";import"./index-DaX2Q3AK.js";import"./immer-BLjYPncX.js";import"./hooks-Bu6pJnUO.js";import"./axisSelectors-CmxwFFvW.js";import"./d3-scale-DN4NcrYH.js";import"./zIndexSlice-DuEq0Nzw.js";import"./renderedTicksSlice-BNblKiJo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DOXn6f_f.js";import"./chartDataContext-BvCVPcPU.js";import"./CategoricalChart-Cg95RMGg.js";import"./resolveDefaultProps-Dhgfu696.js";import"./CartesianAxis-6XJOi0JN.js";import"./Layer-DbzzoT5W.js";import"./Text-Da5MrtOo.js";import"./DOMUtils-2S3W7qMd.js";import"./Label-tOosDzC9.js";import"./ZIndexLayer-Ct2VJKyV.js";import"./types-DngVF1gy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C9Gn1Z7l.js";import"./step-COhLjfgX.js";import"./ReactUtils-CvEgiikN.js";import"./ActivePoints-DLmu87F_.js";import"./Dot-D_x5JJ0f.js";import"./RegisterGraphicalItemId-NIdQMjW7.js";import"./GraphicalItemClipPath-CvO0vgi7.js";import"./SetGraphicalItem-DqX3zCIa.js";import"./useAnimationId-StTSWEFx.js";import"./getRadiusAndStrokeWidthFromDot-BWR1tZh1.js";import"./graphicalItemSelectors-aq2pFf73.js";import"./useElementOffset-BRFRz_JX.js";import"./uniqBy-DLUxpX6I.js";import"./iteratee-D6pKSZwg.js";import"./Cross-BqARO_ay.js";import"./Rectangle-Dbi9MvBK.js";import"./Sector-By56eltg.js";import"./index-CJGBDWaZ.js";import"./ChartSizeDimensions-tl2VnG3o.js";import"./OffsetShower-D6jdoegT.js";import"./PlotAreaShower-CDPFlOoQ.js";import"./Symbols-DWmX7Ql_.js";import"./symbol-DiJYHTEZ.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
