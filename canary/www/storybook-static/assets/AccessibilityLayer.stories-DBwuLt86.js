import{r as A,e as t}from"./iframe-CxA-LBWH.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-Y1yK6LHm.js";import{A as E}from"./AreaChart-CxI7_1FP.js";import{C as b}from"./CartesianGrid-CezShP0V.js";import{X as d}from"./XAxis-re4pUrp8.js";import{Y as g}from"./YAxis-BcK0se4x.js";import{A as a}from"./Area-DoY7oHyO.js";import{T as h}from"./Tooltip-Ct1RWYIG.js";import{R as u}from"./RechartsHookInspector-Ddvgytdy.js";import{R as v}from"./arrayEqualityCheck-hJaoC2QB.js";import{L as T}from"./Legend-IPlQg4g6.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQKKXFhE.js";import"./index-Dk8ktJ0b.js";import"./immer-xqAoRSgx.js";import"./hooks-CIwzfPxR.js";import"./axisSelectors-OHI-Dqd0.js";import"./d3-scale-uVAmWtey.js";import"./zIndexSlice-BN1d4D77.js";import"./renderedTicksSlice-hESCiC9f.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsF2ziWs.js";import"./chartDataContext-BsA2334w.js";import"./CategoricalChart-B_RNqQJb.js";import"./resolveDefaultProps-CMH4rWNF.js";import"./CartesianAxis-D_h95VSX.js";import"./Layer-5LyTOX7F.js";import"./Text-BvZKJmQ_.js";import"./DOMUtils-BSZ8zVsl.js";import"./Label-CVqcP_87.js";import"./ZIndexLayer-N8IExBeW.js";import"./types-C0V6O8sH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C0Mvljc7.js";import"./step-o5fwVMRf.js";import"./ReactUtils-B-8-Nq1R.js";import"./ActivePoints-CIo7jtJ2.js";import"./Dot-C9MXONQR.js";import"./RegisterGraphicalItemId-D9LaM4VI.js";import"./GraphicalItemClipPath-BCMoGptD.js";import"./SetGraphicalItem-CRDshZRQ.js";import"./useAnimationId-aDbwOJad.js";import"./getRadiusAndStrokeWidthFromDot-CaSx4Wqq.js";import"./graphicalItemSelectors-C2a51vEK.js";import"./useElementOffset-CHo4FhRx.js";import"./uniqBy-CTP89-yu.js";import"./iteratee-3I0YZJkI.js";import"./Cross-CbF3xK_8.js";import"./Rectangle-B05RSUx1.js";import"./Sector-C9Xa9AX9.js";import"./index-DMMo74k-.js";import"./ChartSizeDimensions-BQWthli9.js";import"./OffsetShower-BxtkGnvp.js";import"./PlotAreaShower-lv5k_DaO.js";import"./Symbols-N7aoJg5C.js";import"./symbol-BbORdVVc.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
