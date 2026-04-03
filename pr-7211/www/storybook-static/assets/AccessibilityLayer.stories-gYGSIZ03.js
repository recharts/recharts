import{r as A,e as t}from"./iframe-DzQrtuqC.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-EMFpw5dv.js";import{A as E}from"./AreaChart-tbXZ90NC.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-nBlC1WLR.js";import{X as g}from"./XAxis-1ARD5tua.js";import{Y as h}from"./YAxis-22Z8oCxY.js";import{A as a}from"./Area-K3kuuLsE.js";import{T as u}from"./Tooltip-CzufazAx.js";import{R as y}from"./RechartsHookInspector-CgIXv1De.js";import{R as v}from"./arrayEqualityCheck-CcYQ3TlE.js";import{L as T}from"./Legend-Bs5q-XAk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-12D3Dnhb.js";import"./index-BWU1iYbm.js";import"./immer-BG5eRMY4.js";import"./hooks-D1HOa-TD.js";import"./axisSelectors-C3BshaU1.js";import"./d3-scale-CxHdo-Jz.js";import"./zIndexSlice-B16G16Z8.js";import"./renderedTicksSlice-rqGxM86U.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLLa3Dnc.js";import"./chartDataContext-BI_W2HnQ.js";import"./CategoricalChart-BSh5BNmY.js";import"./resolveDefaultProps-cBec3zUl.js";import"./CartesianAxis-kUZksY3_.js";import"./Layer-OTa1RIrC.js";import"./Text-Boh5u1VK.js";import"./DOMUtils-Bn_VANWj.js";import"./Label-1lnwpSMQ.js";import"./ZIndexLayer-DjjOHeZ_.js";import"./types-BgvOUMxI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DTTWJNZu.js";import"./step-B5omXXrI.js";import"./ReactUtils-QGOY_45A.js";import"./ActivePoints-C5TcXqSX.js";import"./Dot-DPafLRI7.js";import"./RegisterGraphicalItemId-DtvVzUCB.js";import"./GraphicalItemClipPath-eGbWt4-y.js";import"./SetGraphicalItem-Bcmgk1GN.js";import"./useAnimationId-KT1IxfUT.js";import"./getRadiusAndStrokeWidthFromDot-DbVHh2EC.js";import"./graphicalItemSelectors-nd73tp_U.js";import"./useElementOffset-DuP6OLBs.js";import"./uniqBy-Bat9ka49.js";import"./iteratee-Cilelzxb.js";import"./Cross-DQAy_m1j.js";import"./Rectangle-D6c5ofir.js";import"./Sector-lNcT2dw2.js";import"./index-DkvclcRw.js";import"./ChartSizeDimensions-BpnzS4UN.js";import"./OffsetShower-5gMBmZb0.js";import"./PlotAreaShower-BdP0xDxN.js";import"./Symbols-CrC1lk7K.js";import"./symbol-BXGJBtQL.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
