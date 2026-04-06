import{r as A,e as t}from"./iframe-1sJLl6DZ.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-B5sHxVOV.js";import{A as E}from"./AreaChart-4XFbKpfH.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CKBoXX0H.js";import{X as g}from"./XAxis-BKluPuIm.js";import{Y as h}from"./YAxis-70kmgyRU.js";import{A as a}from"./Area-BHNUQW6K.js";import{T as u}from"./Tooltip-DTwCgrPZ.js";import{R as y}from"./RechartsHookInspector-FiK4LEfR.js";import{R as v}from"./arrayEqualityCheck-CBQMjkzv.js";import{L as T}from"./Legend-8WJWCCAH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BarrelpQ.js";import"./index-BefZ4p5Z.js";import"./immer-D3lmb_Hz.js";import"./hooks-BSV0CDFu.js";import"./axisSelectors-DfOHronC.js";import"./d3-scale-UoHoc1Us.js";import"./zIndexSlice-DewuM9Kl.js";import"./renderedTicksSlice-B18XtuK2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DajRV7bT.js";import"./chartDataContext-BDPauSBm.js";import"./CategoricalChart-Bp51RrNo.js";import"./resolveDefaultProps-BwudvEcy.js";import"./CartesianAxis-DRKzcyAj.js";import"./Layer-gI7ebry7.js";import"./Text-D1w4IOeM.js";import"./DOMUtils-Cz4f8MMH.js";import"./Label-B09ck5aR.js";import"./ZIndexLayer-D-ka0Tcp.js";import"./types-OZuhW1zj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-D1t5c_n4.js";import"./step-CdTAn4vV.js";import"./ReactUtils-E47kjf1a.js";import"./ActivePoints-7h-OJP_5.js";import"./Dot-CHPbrrnb.js";import"./RegisterGraphicalItemId-B5rT-TGw.js";import"./GraphicalItemClipPath-CGdaFH3i.js";import"./SetGraphicalItem-BDCPoYU4.js";import"./useAnimationId-BG884krZ.js";import"./getRadiusAndStrokeWidthFromDot-B2FefomC.js";import"./graphicalItemSelectors-BmMD1dgr.js";import"./useElementOffset-Dt07PlNN.js";import"./uniqBy-Ccn8DO8r.js";import"./iteratee-CoR2izNf.js";import"./Cross-BlMyO2X1.js";import"./Rectangle-CPIg9-tb.js";import"./Sector-CjSRrVkn.js";import"./index-CQyn9y4S.js";import"./ChartSizeDimensions-D07aYOSB.js";import"./OffsetShower-CPwA5xGr.js";import"./PlotAreaShower-7dIAXo4S.js";import"./Symbols-Bj_BiyXA.js";import"./symbol-Bipgyq1s.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
