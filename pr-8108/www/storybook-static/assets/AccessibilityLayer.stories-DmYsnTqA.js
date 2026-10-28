import{r as A,R as t}from"./iframe-DbrRN1n8.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BwB9uQDU.js";import{A as E}from"./AreaChart-CgnStEo8.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DMrty2S3.js";import{X as g}from"./XAxis-D4Dr_tjl.js";import{Y as h}from"./YAxis-DXpw8vqJ.js";import{A as a}from"./Area-CzdHwnbQ.js";import{T as u}from"./Tooltip-C7nLXyTl.js";import{R as k}from"./zIndexSlice-Du0Au1R-.js";import{L as v}from"./Legend-BV3ignIc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlyIgJor.js";import"./resolveDefaultProps-Ds4rGbhG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DK6uFkxV.js";import"./throttle-DUdTYHJ7.js";import"./index-CogSL5JJ.js";import"./index-D6EAQOZI.js";import"./polarAxisSelectors-D77BuFKC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUENC00q.js";import"./index-M4gkvM-3.js";import"./index-xhc0FShP.js";import"./renderedTicksSlice-mzEE9LM4.js";import"./index-B5hYk0_Q.js";import"./CartesianChart-CDlGam4t.js";import"./ZIndexPortal-CvbthdtM.js";import"./CategoricalChart-DVK-Whre.js";import"./CartesianAxis-BCK1OBBy.js";import"./Layer-Do_lw1Xj.js";import"./Text-WfDu__TP.js";import"./pageBackground-CkPB-Imo.js";import"./ZIndexLayer-DdjxUpLS.js";import"./Label-A7WyPB0I.js";import"./types-DkNvVUMM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BgsnBCM1.js";import"./ActivePoints-BRaVZy1t.js";import"./Dot-CwOWQR4j.js";import"./activeStyles-BV7TfXze.js";import"./useAnimationId-CvK-4pcw.js";import"./dataEntryStyles-CKR3qDl0.js";import"./Symbols-CnZ9lVP1.js";import"./symbol-mpAZtHsQ.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-D97kyhFi.js";import"./getRadiusAndStrokeWidthFromDot-GpKWvG3K.js";import"./ActiveShapeUtils-DUWP9jsa.js";import"./Curve-CoHdM9Ch.js";import"./step-I4MYWlIC.js";import"./useEffectiveDataKey-ChFOzgVO.js";import"./useElementOffset-CTE_e8_t.js";import"./uniqBy-KNYEdHaO.js";import"./iteratee-Dv9in7l7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DFNkfyvS.js";import"./Rectangle-3NP_NJyH.js";import"./util-Dxo8gN5i.js";import"./Sector-qqHQzkjF.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
