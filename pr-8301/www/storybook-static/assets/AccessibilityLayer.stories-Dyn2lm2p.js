import{r as A,R as t}from"./iframe-B6IWu9YI.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-7NLEhX0Q.js";import{A as E}from"./AreaChart-BhnkTzkX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Fw16Qisq.js";import{X as g}from"./XAxis-Dlj0iAIW.js";import{Y as h}from"./YAxis-MTRfWgoi.js";import{A as a}from"./Area-BI31Vi0z.js";import{T as u}from"./Tooltip-KfEfS0Ja.js";import{R as k}from"./zIndexSlice-CiiKnRRR.js";import{L as v}from"./Legend-DNKmLnLa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ut8KRm06.js";import"./resolveDefaultProps-D5gBkMry.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DNbDiKxI.js";import"./throttle-BURJLM__.js";import"./index-BTlMcQeh.js";import"./index-BGlqIfcK.js";import"./polarAxisSelectors-sP0_8T_l.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnDY_Nfy.js";import"./index-D9tAsY9i.js";import"./index-gbAMyFwS.js";import"./renderedTicksSlice-C5_vrS83.js";import"./index-DqMscQEy.js";import"./fillDefinitions-CycD80fW.js";import"./CartesianChart-CXZ1AepY.js";import"./chartDataContext-CXAoEtMH.js";import"./CategoricalChart-dyk1Sqmj.js";import"./CartesianAxis-Q1_hDZPE.js";import"./Layer-DH6wa-As.js";import"./Text-BO6nkoy7.js";import"./ZIndexLayer-6PrGVGr8.js";import"./Label-DTgwgIlk.js";import"./types-CluQiZar.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DmFDmFl9.js";import"./dataEntryStyles-B1GQ2fCv.js";import"./ActivePoints-CU2VyTBL.js";import"./Dot-Cj5qq7RO.js";import"./activeStyles-BITXl8mO.js";import"./useAnimationId-CU9aT4qK.js";import"./Symbols-BCHMzS19.js";import"./symbol-C2WLAmAq.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BnKu0Jsk.js";import"./ActiveShapeUtils-Bk4aWoxM.js";import"./Curve-BwM0kF7u.js";import"./step-CBaC3nOj.js";import"./useEffectiveDataKey-B8xnYYq1.js";import"./useElementOffset-toJRPtH1.js";import"./uniqBy-3fTL_ANn.js";import"./iteratee-DoKrSNie.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DpH30DLa.js";import"./Rectangle-DojOoXFW.js";import"./util-Dxo8gN5i.js";import"./Sector-RdamKlsZ.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
