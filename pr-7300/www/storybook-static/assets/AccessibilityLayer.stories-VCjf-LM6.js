import{r as A,e as t}from"./iframe-BR42SwHx.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-dNCERGfx.js";import{A as E}from"./AreaChart-31wAHcTN.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BKtI12iX.js";import{X as g}from"./XAxis-Tjb-FFWw.js";import{Y as h}from"./YAxis-vI32OOi5.js";import{A as a}from"./Area-CdALuVQX.js";import{T as u}from"./Tooltip-BTvrqCSy.js";import{R as y}from"./RechartsHookInspector-BoeADalq.js";import{R as v}from"./arrayEqualityCheck-BTlu6_X5.js";import{L as T}from"./Legend-CgeqB7Dx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0DQb4gv.js";import"./index-D16v1uX6.js";import"./immer-CBsUjXpI.js";import"./hooks-D8cR8gUo.js";import"./axisSelectors-CoHyz1fh.js";import"./d3-scale-UZASi0oQ.js";import"./zIndexSlice-DLL8OYNe.js";import"./renderedTicksSlice-C8E2aIah.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CEhCqBUJ.js";import"./chartDataContext-DeHpxm8Y.js";import"./CategoricalChart-6WrjOunx.js";import"./resolveDefaultProps-C3ZG36Xp.js";import"./CartesianAxis-Bu_sq35Y.js";import"./Layer-DvQoXU13.js";import"./Text-D4m4zxqs.js";import"./DOMUtils-sfbIoaFE.js";import"./Label-DVExpSeB.js";import"./ZIndexLayer-8Duyh3JO.js";import"./types-CNxj5JXu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-MgYQVsjt.js";import"./step-CO8PYd_W.js";import"./ReactUtils-CgBYlHJF.js";import"./ActivePoints-DIaFZui8.js";import"./Dot-mjncFdWi.js";import"./RegisterGraphicalItemId-BuXbHokx.js";import"./GraphicalItemClipPath-C0dhtMPj.js";import"./SetGraphicalItem-BZOj4gaY.js";import"./useAnimationId-B6YKrKnq.js";import"./getRadiusAndStrokeWidthFromDot-zEBVevUM.js";import"./graphicalItemSelectors-BMIBIuIH.js";import"./useElementOffset-cx0ADUit.js";import"./uniqBy-CrOA1Xwi.js";import"./iteratee-DQsTI-if.js";import"./Cross-LzqoNpy2.js";import"./Rectangle-Di_iOTI6.js";import"./Sector-CuH6E9-r.js";import"./index-2-eZpp4N.js";import"./ChartSizeDimensions-FLfKJQs_.js";import"./OffsetShower-DtintQJW.js";import"./PlotAreaShower-C0gn6wTT.js";import"./Symbols-BwMDCpyM.js";import"./symbol-DV-iQcJU.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
