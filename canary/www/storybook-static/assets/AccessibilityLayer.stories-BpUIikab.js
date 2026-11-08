import{r as A,R as t}from"./iframe-C0aK3mAR.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Bb9qF-bw.js";import{A as E}from"./AreaChart-CfoaUKQl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DCv6Fw-w.js";import{X as g}from"./XAxis-oAoSo46I.js";import{Y as h}from"./YAxis-7NanDh-1.js";import{A as a}from"./Area-CZRvf-ct.js";import{T as u}from"./Tooltip-C5OWskP-.js";import{R as k}from"./zIndexSlice-CaqKW8u4.js";import{L as v}from"./Legend-BS0W-7MT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D12_Reb0.js";import"./resolveDefaultProps-D6yE2Er3.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D_X7VOsT.js";import"./throttle-Csdh9d4D.js";import"./index-DJ1epRIR.js";import"./index-C-RKF6PB.js";import"./polarAxisSelectors-CptuzTw1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_djSwnK.js";import"./index-Dtyq-_Jm.js";import"./index-wV9G7-7k.js";import"./renderedTicksSlice-De1tNPIq.js";import"./index-BYUWoSWy.js";import"./fillDefinitions-D-bSMJSA.js";import"./CartesianChart-D4R8-bYQ.js";import"./chartDataContext-FpEebw8X.js";import"./CategoricalChart-D8DGrwi8.js";import"./CartesianAxis-CUkLyyeh.js";import"./Layer-CagqC790.js";import"./Text-sM2vj8c3.js";import"./ZIndexLayer-Cc5kF-_I.js";import"./Label-DrUlGLQ7.js";import"./types-CmOm39qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-cRuikTAi.js";import"./ActivePoints-BHO4PoXJ.js";import"./Dot-C9rBqPl7.js";import"./activeStyles-D8lDViyk.js";import"./useAnimationId-sv0XuVET.js";import"./Symbols-CEatGjCT.js";import"./symbol-BI0KcbYN.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-D-GYSqJW.js";import"./getRadiusAndStrokeWidthFromDot-QbS_nSQ9.js";import"./ActiveShapeUtils-BPSXSNcd.js";import"./Curve-OWEMFZrc.js";import"./step-BYip5hLG.js";import"./useEffectiveDataKey-C4GReELG.js";import"./useElementOffset-Bd-Smj9e.js";import"./uniqBy-BgGQ3Z2O.js";import"./iteratee-BXSX8eL-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-PSRIh47R.js";import"./Rectangle-D2OQ5a3O.js";import"./util-Dxo8gN5i.js";import"./Sector-C1PqGwtk.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
