import{r as A,e as t}from"./iframe-Dq5DdRfA.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-QdhTFZSq.js";import{A as E}from"./AreaChart-DoWrHqVD.js";import{C as b}from"./CartesianGrid-CK5HKDGi.js";import{X as d}from"./XAxis-CZx-cxt6.js";import{Y as g}from"./YAxis-BfiaHiWI.js";import{A as a}from"./Area-DZqdozis.js";import{T as h}from"./Tooltip-Cac0gHCt.js";import{R as u}from"./RechartsHookInspector-hbHSdV_4.js";import{R as v}from"./arrayEqualityCheck-qGR3MUeV.js";import{L as T}from"./Legend-WPQY1pFr.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-vGlNcTAG.js";import"./index-KC-eWLnl.js";import"./immer-BgAF4C3H.js";import"./hooks-BxbNPqIZ.js";import"./axisSelectors-BFeCG5Ru.js";import"./d3-scale-DI2YC43N.js";import"./zIndexSlice-DPv0Xhij.js";import"./renderedTicksSlice-DP9i4nv6.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BaePTbzD.js";import"./chartDataContext-CXein_ih.js";import"./CategoricalChart-BcQURnMq.js";import"./resolveDefaultProps-DHlsVcqU.js";import"./CartesianAxis-D7oRmpa0.js";import"./Layer-xEbSwsN4.js";import"./Text-CZ8K0x5S.js";import"./DOMUtils-C3M38rM5.js";import"./Label-RkqWKdyr.js";import"./ZIndexLayer-CmxjkRKY.js";import"./types-D0iVcQvS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-tqjOY4Pq.js";import"./step-Cni1WXw7.js";import"./ReactUtils-Cob9khRk.js";import"./ActivePoints-CNP7zn1d.js";import"./Dot-DzScFwGr.js";import"./RegisterGraphicalItemId-DlkbZouM.js";import"./GraphicalItemClipPath-BA8J5QwR.js";import"./SetGraphicalItem-nN4OlGtN.js";import"./useAnimationId-D_Jb4Dtq.js";import"./getRadiusAndStrokeWidthFromDot-B8rTEkIw.js";import"./graphicalItemSelectors-BJ7jsKd2.js";import"./useElementOffset-EIWIV3Vm.js";import"./uniqBy-cRfk3nMJ.js";import"./iteratee-BBm-pYg1.js";import"./Cross-CNFJAK17.js";import"./Rectangle-DwxhPvUN.js";import"./Sector-D0MGcgsD.js";import"./index-DD51iIl-.js";import"./ChartSizeDimensions-CU3eWKS2.js";import"./OffsetShower-6LrCHYpG.js";import"./PlotAreaShower-BdkOHlKt.js";import"./Symbols-4l3uCecX.js";import"./symbol-DApxb55n.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
