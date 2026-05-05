import{r as A,e as t}from"./iframe-CNonusrd.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-eizZQii2.js";import{A as E}from"./AreaChart-D8vvSkEv.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-LfDlAOjD.js";import{X as g}from"./XAxis-DXi_x7F1.js";import{Y as h}from"./YAxis-I3XCIJKJ.js";import{A as a}from"./Area-CBEM1MR7.js";import{T as u}from"./Tooltip-C1ub5SXJ.js";import{R as y}from"./RechartsHookInspector-DREJ71WB.js";import{R as v}from"./arrayEqualityCheck-l5oIinxJ.js";import{L as T}from"./Legend-ZeY5groX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DYPFeGd0.js";import"./index-D5p3lGcA.js";import"./immer-x45XYXGa.js";import"./hooks-sSaS_iHU.js";import"./axisSelectors-CxAQt0eW.js";import"./d3-scale-HntMfl1M.js";import"./zIndexSlice-lq1xLJsp.js";import"./renderedTicksSlice-DilFZHiz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-XRbcsYla.js";import"./chartDataContext-CPanrf0w.js";import"./CategoricalChart-2Jj_e3Uw.js";import"./resolveDefaultProps-9t13lHMU.js";import"./CartesianAxis-CyGRC0f9.js";import"./Layer-B4nmAurR.js";import"./Text-B8aP_-NL.js";import"./DOMUtils-BSt5xjPz.js";import"./Label-BkTOM4JT.js";import"./ZIndexLayer-C8APM9Um.js";import"./types-QSJLzDgf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-B-txv0y_.js";import"./step-CTC2hHac.js";import"./ReactUtils-C0hUy9cv.js";import"./ActivePoints-CTe4U5p3.js";import"./Dot-Ci2_k-bT.js";import"./RegisterGraphicalItemId-BlSb_05O.js";import"./GraphicalItemClipPath-Dh2li2pF.js";import"./SetGraphicalItem-ElLCpu1i.js";import"./useAnimationId-CKkBYz8x.js";import"./getRadiusAndStrokeWidthFromDot-S2UaL7g9.js";import"./graphicalItemSelectors-uEabWJTl.js";import"./useElementOffset-DQxeRcJO.js";import"./uniqBy-BouIk8Q6.js";import"./iteratee-D530YhRz.js";import"./Cross-BRGiVFKR.js";import"./Rectangle-vYVz2III.js";import"./Sector-2y1By5Z-.js";import"./index-D8MHUpjv.js";import"./ChartSizeDimensions-CH_6AtsO.js";import"./OffsetShower-BdevU7dF.js";import"./PlotAreaShower-iAJQSHaO.js";import"./Symbols-BvFq4E0I.js";import"./symbol-BAjtFeQt.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
