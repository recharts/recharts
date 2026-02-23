import{e as t,r as A}from"./iframe-Cg8afp3P.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-Dw1ue8mx.js";import{R as E}from"./arrayEqualityCheck-CdnxX3zW.js";import{A as a}from"./Area-BfwXyZwD.js";import{L as b}from"./Legend-CfuybC4t.js";import{X as d}from"./XAxis-CcHOaWFK.js";import{Y as g}from"./YAxis-B5L1n3Hm.js";import{T as h}from"./Tooltip-CU2EVBvY.js";import{R as u}from"./RechartsHookInspector-DBmCwbx2.js";import{A as v}from"./AreaChart-C2_-7sgP.js";import{C as T}from"./CartesianGrid-Dufe2PKF.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Jn537Djk.js";import"./index-BTReDVD1.js";import"./immer-496O7mbU.js";import"./hooks-CbbXi_l7.js";import"./axisSelectors-C693hjfU.js";import"./d3-scale-Cj67Rjiy.js";import"./zIndexSlice-BhrWtTkt.js";import"./renderedTicksSlice-DkvAPKlQ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjSIFQx_.js";import"./chartDataContext-GXm2JMjL.js";import"./CategoricalChart-Cr-8QZnp.js";import"./resolveDefaultProps-3HltEOEu.js";import"./Curve-kDork6Kh.js";import"./types-CMLysTZx.js";import"./step-CqAkm0lp.js";import"./Layer-YebNzFxt.js";import"./ReactUtils-Bs6wbtV4.js";import"./Label-DvKY9pNQ.js";import"./Text-CShVWkSN.js";import"./DOMUtils-DjmgTp4l.js";import"./ZIndexLayer-8TBIBWl0.js";import"./ActivePoints--aP-WW0G.js";import"./Dot-BEaF242C.js";import"./RegisterGraphicalItemId-mvTxW8NP.js";import"./GraphicalItemClipPath-CcY9VH0G.js";import"./SetGraphicalItem-mVKFfj-o.js";import"./useAnimationId-KzNTUIqt.js";import"./getRadiusAndStrokeWidthFromDot-TA9Ey7Di.js";import"./graphicalItemSelectors-Dk-ZfK_L.js";import"./Symbols-BOLBqJCz.js";import"./symbol-BNzksSxl.js";import"./useElementOffset-RqGPhtWN.js";import"./uniqBy-CzLOAIrK.js";import"./iteratee-C64KKsoF.js";import"./CartesianAxis-BH2_JJNm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-CHprlulN.js";import"./Rectangle-m1zl6eyw.js";import"./Sector-DyLH-ktt.js";import"./index-DRXexYxK.js";import"./ChartSizeDimensions-DccCBOyY.js";import"./OffsetShower-7vNsmCvs.js";import"./PlotAreaShower-C7II51Mo.js";const St={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
