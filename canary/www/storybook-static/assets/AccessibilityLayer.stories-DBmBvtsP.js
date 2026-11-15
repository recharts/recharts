import{r as A,R as t}from"./iframe-CywB74O-.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DnMaCTiC.js";import{A as E}from"./AreaChart-Bhg1HLRI.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-FTvt7RrC.js";import{X as g}from"./XAxis-BnyIc3dE.js";import{Y as h}from"./YAxis-BQxfFMOH.js";import{A as a}from"./Area-BiTgTAQG.js";import{T as u}from"./Tooltip-TyNHZ99B.js";import{R as k}from"./zIndexSlice-CuZ12U6x.js";import{L as v}from"./Legend-CHJA5PmZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNXYBwim.js";import"./resolveDefaultProps-Gc3kbVEc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BlSjRH8p.js";import"./throttle-Cdx6aCwi.js";import"./index-B71Ze7LN.js";import"./index-DBD4vW62.js";import"./polarAxisSelectors-CHx-smd7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6sMKT8T.js";import"./index-DPjYOBE8.js";import"./index-CmTmClEE.js";import"./renderedTicksSlice-s1l-mRnQ.js";import"./index-DwB73Oyx.js";import"./fillDefinitions-CMU9craw.js";import"./CartesianChart-CiFd4vci.js";import"./chartDataContext-C42Xk_ee.js";import"./CategoricalChart-CByovhBV.js";import"./CartesianAxis-BkY9x357.js";import"./Layer-BeaWmaSV.js";import"./Text-D8_iVJPC.js";import"./ZIndexLayer-CHuGvNnR.js";import"./Label-DQEyyaka.js";import"./types-DUxXs5Ud.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BnKQuw5H.js";import"./ActivePoints-CULdSp3M.js";import"./Dot-CZ266pMm.js";import"./activeStyles-yKq-qtiq.js";import"./useAnimationId-DiaU742M.js";import"./Symbols-CkA0fnmK.js";import"./symbol-Bymi0eF-.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CWyrJmam.js";import"./getRadiusAndStrokeWidthFromDot-Dx2mkX1A.js";import"./ActiveShapeUtils-DRieSTBH.js";import"./Curve-BR2e6dhB.js";import"./step-DvAd1GMT.js";import"./useEffectiveDataKey-CjiZk5NG.js";import"./useElementOffset-DGFvSoKL.js";import"./uniqBy-lBBs8O3F.js";import"./iteratee-Dqbbdx6l.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BarD34_9.js";import"./Rectangle-qMfUeqmL.js";import"./util-Dxo8gN5i.js";import"./Sector-C2YaCYBx.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
