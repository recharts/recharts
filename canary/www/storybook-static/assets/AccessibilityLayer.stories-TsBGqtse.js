import{r as A,e as t}from"./iframe-Br4eYoVn.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-DO9Baogr.js";import{A as E}from"./AreaChart-cmOBUqIG.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-mQjGFThB.js";import{X as g}from"./XAxis-C8A1sscS.js";import{Y as h}from"./YAxis-WZOcc484.js";import{A as a}from"./Area-BGve4iAb.js";import{T as u}from"./Tooltip-C7klFK4K.js";import{R as y}from"./RechartsHookInspector-CJ4a_N61.js";import{R as v}from"./arrayEqualityCheck-BTssjmx8.js";import{L as T}from"./Legend-Covp1wtm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BAtpNlJG.js";import"./index-q-WvHn66.js";import"./immer-DPmqhqsD.js";import"./hooks-qMCGdphr.js";import"./axisSelectors-CHWOzT-A.js";import"./d3-scale-CCjKFVY6.js";import"./zIndexSlice-C3EiH9DM.js";import"./renderedTicksSlice-Tssq-3bV.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cr6moti0.js";import"./chartDataContext-DmHyrOc9.js";import"./CategoricalChart-RTBYP3g_.js";import"./resolveDefaultProps-d8J7CQ2o.js";import"./CartesianAxis-DnfdLPHJ.js";import"./Layer-BXiy0Hpp.js";import"./Text-DSxsG7eI.js";import"./DOMUtils-CbhnCx5H.js";import"./Label-CUHpuvtr.js";import"./ZIndexLayer-BkFJTbU_.js";import"./types-Bdr3PbTc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C9oEn5cY.js";import"./step-DYF_aI-7.js";import"./ReactUtils-Dn-n-3Yl.js";import"./ActivePoints-BJ31ITZc.js";import"./Dot-ec03_cyV.js";import"./RegisterGraphicalItemId-DFun1y8y.js";import"./GraphicalItemClipPath-Szud5QX3.js";import"./SetGraphicalItem-Bcsb28JH.js";import"./useAnimationId-7Mhr-lzJ.js";import"./getRadiusAndStrokeWidthFromDot-DtONMN5t.js";import"./graphicalItemSelectors-BFuwCmEQ.js";import"./useElementOffset-BqlbwxZo.js";import"./uniqBy-ByNeAQ4B.js";import"./iteratee-B-3U5ZDw.js";import"./Cross-8Y80D0dQ.js";import"./Rectangle-BnOsz_oj.js";import"./Sector-DL1xggZ9.js";import"./index-B-JygPoA.js";import"./ChartSizeDimensions-DeYSdXrS.js";import"./OffsetShower-B3belhb8.js";import"./PlotAreaShower-DSu4MaQt.js";import"./Symbols-DmFirhkx.js";import"./symbol-NUJ48OEk.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
