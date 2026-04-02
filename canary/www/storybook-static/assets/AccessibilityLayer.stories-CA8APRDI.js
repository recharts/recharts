import{r as A,e as t}from"./iframe-eSAJEZht.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-C-MvXfhH.js";import{A as E}from"./AreaChart-oTJCb7rP.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D4NuE-Sg.js";import{X as g}from"./XAxis-DBtpKE2p.js";import{Y as h}from"./YAxis-BH4pX6Iz.js";import{A as a}from"./Area-32j4mz-3.js";import{T as u}from"./Tooltip-zy-WrCaW.js";import{R as y}from"./RechartsHookInspector-CNBbry69.js";import{R as v}from"./arrayEqualityCheck-DIP4cf6Y.js";import{L as T}from"./Legend-B-8fEd-n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CiRDGflb.js";import"./index-zRxxYhEY.js";import"./immer-TNEPjPCB.js";import"./hooks-Q2uSt6yB.js";import"./axisSelectors-DyoITJEq.js";import"./d3-scale-CjiJ_ZTy.js";import"./zIndexSlice-BGPHYbVg.js";import"./renderedTicksSlice-B8h_p9LR.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2iAnTHm.js";import"./chartDataContext-eyhsy6xY.js";import"./CategoricalChart-B1JvHwji.js";import"./resolveDefaultProps-BhREbLw9.js";import"./CartesianAxis-CGGz-Ws1.js";import"./Layer-Cp_zb8Y2.js";import"./Text-BIJyaKeQ.js";import"./DOMUtils-tcwXxObr.js";import"./Label-C16feiqK.js";import"./ZIndexLayer-D46bbrBq.js";import"./types-BwWrJ-BL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-dniblYNk.js";import"./step-n_okOr0Q.js";import"./ReactUtils-H-FoJgDc.js";import"./ActivePoints-DV8ALALF.js";import"./Dot--nNeygLj.js";import"./RegisterGraphicalItemId-BbmjudUD.js";import"./GraphicalItemClipPath-8GCAR-eN.js";import"./SetGraphicalItem-x3BMDizg.js";import"./useAnimationId-Cu-vgNv6.js";import"./getRadiusAndStrokeWidthFromDot-CDzYNMm_.js";import"./graphicalItemSelectors-CtTHxHbt.js";import"./useElementOffset-aklaWS_N.js";import"./uniqBy-CeyRlWJb.js";import"./iteratee-CR1uVucu.js";import"./Cross-BoevrVQ9.js";import"./Rectangle-DvSVsybX.js";import"./Sector-DkuyB5qD.js";import"./index-BGg-RllE.js";import"./ChartSizeDimensions-DwToSRXW.js";import"./OffsetShower-UG9ad5J7.js";import"./PlotAreaShower-ltT9O7XE.js";import"./Symbols-DdU7u5vI.js";import"./symbol-56g7D4zb.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
