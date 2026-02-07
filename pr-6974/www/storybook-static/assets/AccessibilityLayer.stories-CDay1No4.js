import{e as t,r as A}from"./iframe-p_UG0KAI.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CkU6p2-M.js";import{R as E}from"./arrayEqualityCheck-RFBrzMpT.js";import{A as a}from"./Area-TCi2Ah73.js";import{L as b}from"./Legend-C5lnNtwO.js";import{X as d}from"./XAxis-zKsPIOo2.js";import{Y as g}from"./YAxis-DEIZfQQv.js";import{T as h}from"./Tooltip-D7nuMyts.js";import{R as u}from"./RechartsHookInspector-DC0vak21.js";import{A as v}from"./AreaChart-Bv31OO_n.js";import{C as T}from"./CartesianGrid-DRqphYMG.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tEJUk72V.js";import"./hooks-pJuOnib6.js";import"./axisSelectors-PDDTaSk3.js";import"./zIndexSlice-BmIGVCRU.js";import"./resolveDefaultProps-DGxp3uGd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-pFigcRMV.js";import"./chartDataContext-CH9fTHhq.js";import"./CategoricalChart-BF8f5Erd.js";import"./Curve-BzeYL40i.js";import"./types-PTj5YW0Y.js";import"./Layer-JpdK0Yhb.js";import"./ReactUtils-Bi-gzM1a.js";import"./Label-079Vd-9w.js";import"./Text-D6vjCcrH.js";import"./DOMUtils-CJ8h57fm.js";import"./ZIndexLayer-CVbpoIAO.js";import"./ActivePoints-C5BJV9dv.js";import"./Dot-BYSk7D6p.js";import"./RegisterGraphicalItemId-CYD9ORuF.js";import"./GraphicalItemClipPath-QjUTAoiq.js";import"./SetGraphicalItem-JMwAn23t.js";import"./useAnimationId-CNvXWFg0.js";import"./getRadiusAndStrokeWidthFromDot-C_2SwELs.js";import"./graphicalItemSelectors-CBVmhFKB.js";import"./Symbols-CtMkMnQW.js";import"./useElementOffset-TZ-hkQh7.js";import"./iteratee-Drb2ZJYm.js";import"./CartesianAxis-0r0p8ryQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-C0w-Lqog.js";import"./Rectangle-Bxtfu4l2.js";import"./Sector-BYc0giK7.js";import"./index-Cmf0vnA4.js";import"./ChartSizeDimensions-IHqJf279.js";import"./OffsetShower-X_nsBUDf.js";import"./PlotAreaShower-BlZaNjOc.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
