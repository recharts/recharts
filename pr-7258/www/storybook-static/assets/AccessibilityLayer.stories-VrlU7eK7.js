import{r as A,e as t}from"./iframe-dL2OVy5F.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-Y8SckKJS.js";import{A as E}from"./AreaChart-Bj78JQaE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BWHNj_Eu.js";import{X as g}from"./XAxis-B86_r9Ch.js";import{Y as h}from"./YAxis-BsWm2FVM.js";import{A as a}from"./Area-CErn5INA.js";import{T as u}from"./Tooltip-BGNMLgA6.js";import{R as y}from"./RechartsHookInspector-BZsexvc_.js";import{R as v}from"./arrayEqualityCheck-CaMvItyo.js";import{L as T}from"./Legend-DPzIZPc1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2xnsmZbF.js";import"./index-C8r_0QEC.js";import"./immer-DHklT898.js";import"./hooks-CtDQVu0u.js";import"./axisSelectors-Do7BkVsn.js";import"./d3-scale-3VqrHCN7.js";import"./zIndexSlice-DAYnIbZH.js";import"./renderedTicksSlice-D7ViyujS.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CQEHzqI9.js";import"./chartDataContext-BXPlG8LR.js";import"./CategoricalChart-BZHJ_HjV.js";import"./resolveDefaultProps-7Zncxn1v.js";import"./CartesianAxis-BKf97Rvg.js";import"./Layer-BrlL2tOs.js";import"./Text-Bwe6nLXh.js";import"./DOMUtils-Ci6QTQ3e.js";import"./Label-C6izcScL.js";import"./ZIndexLayer-BvENavnS.js";import"./types-LCDeNazI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DLwP9u8w.js";import"./step-CSrZegzj.js";import"./ReactUtils-A9WQzOkM.js";import"./ActivePoints-BcsZ0pU5.js";import"./Dot-DNIsMwyQ.js";import"./RegisterGraphicalItemId-BLl1AU5h.js";import"./GraphicalItemClipPath-B9R00R0l.js";import"./SetGraphicalItem-CczBCiBC.js";import"./useAnimationId-C4Vc8PxM.js";import"./getRadiusAndStrokeWidthFromDot-Dsgl31AO.js";import"./graphicalItemSelectors-3qVwPsXu.js";import"./useElementOffset-DKr_-hTa.js";import"./uniqBy--BozFN4q.js";import"./iteratee-BlkE-BhU.js";import"./Cross-Bx37bdEN.js";import"./Rectangle-XiX3CaBX.js";import"./Sector-4mD4Ykg7.js";import"./index-D_cVMinZ.js";import"./ChartSizeDimensions-CL0i_3ns.js";import"./OffsetShower-CTFYQb52.js";import"./PlotAreaShower-CS9RsVg8.js";import"./Symbols-3zNmirWo.js";import"./symbol-BGt6k0O8.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
