import{r as A,e as t}from"./iframe-DDnGsu5h.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-DnFRUbQ4.js";import{A as E}from"./AreaChart-Ct62h4Dm.js";import{C as b}from"./CartesianGrid-Cqk_p3-f.js";import{X as d}from"./XAxis-_OohREfq.js";import{Y as g}from"./YAxis-BFUe8vT1.js";import{A as a}from"./Area-DNmehCGL.js";import{T as h}from"./Tooltip-Dyzs9RB6.js";import{R as u}from"./RechartsHookInspector-BSABdRIX.js";import{R as v}from"./arrayEqualityCheck-b4GtS9KF.js";import{L as T}from"./Legend-BAVLUpfE.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CV2CC7gc.js";import"./index-d0V4PGet.js";import"./immer-Wl9pIdwq.js";import"./hooks-CvD5OSLo.js";import"./axisSelectors-K5XPsZJJ.js";import"./d3-scale-CMnVuEfq.js";import"./zIndexSlice-CzCRY4NE.js";import"./renderedTicksSlice-C6o-1nzY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B6G_xsde.js";import"./chartDataContext-BS9VYmJ6.js";import"./CategoricalChart-DhfYtuLa.js";import"./resolveDefaultProps-fGyvU07W.js";import"./CartesianAxis-C4D4URoI.js";import"./Layer-BQ5I3ZR3.js";import"./Text-DIC51zN-.js";import"./DOMUtils-jQ5hfjUg.js";import"./Label-Cq1Jw9bg.js";import"./ZIndexLayer-CSa4Hu6m.js";import"./types-VBSg6qfW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CVMF8Bc_.js";import"./step-NA2d-6xM.js";import"./ReactUtils-LLGJjmJY.js";import"./ActivePoints-Bm7ShVQX.js";import"./Dot-BvK9-kYF.js";import"./RegisterGraphicalItemId-BptZQ5zb.js";import"./GraphicalItemClipPath-wpXTFAhB.js";import"./SetGraphicalItem-Bpj0QyBT.js";import"./useAnimationId-CsY2QYNS.js";import"./getRadiusAndStrokeWidthFromDot-BQH46_oi.js";import"./graphicalItemSelectors-BsCK-bG2.js";import"./useElementOffset-BLONHf2Z.js";import"./uniqBy-BHkPP5WV.js";import"./iteratee-BYQsP9wj.js";import"./Cross-Hstxks7w.js";import"./Rectangle-CItL8Q7z.js";import"./Sector-DVi4Mpj4.js";import"./index-DFiQJbL_.js";import"./ChartSizeDimensions-BTgFhtFz.js";import"./OffsetShower-C6Pk8qlF.js";import"./PlotAreaShower-Dg7-kQiU.js";import"./Symbols-BliKz0Rz.js";import"./symbol-DvZtmJVK.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
