import{r as A,R as t}from"./iframe-DP6zAp54.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Djbyfnt-.js";import{A as E}from"./AreaChart-B1liwrQU.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BlFAaOVn.js";import{X as g}from"./XAxis-wrPg27KZ.js";import{Y as h}from"./YAxis-CRTIqg01.js";import{A as a}from"./Area-CRKvfa16.js";import{T as u}from"./Tooltip-aHvmiEwK.js";import{R as k}from"./zIndexSlice-CdFbAgG_.js";import{L as v}from"./Legend-dg9X3PkL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOH9cWj9.js";import"./resolveDefaultProps-CSMJ250z.js";import"./get-CjriyByo.js";import"./axisSelectors-Rm4q15PI.js";import"./throttle-D7lh8v3-.js";import"./index-XgfMJOXy.js";import"./index-CYR3TkYm.js";import"./polarAxisSelectors-DrRxC45o.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Ct01c8MP.js";import"./index-DFp-_Wbz.js";import"./index-yomVPEkO.js";import"./renderedTicksSlice-BhuX61Ra.js";import"./index-BfoEz1rZ.js";import"./fillDefinitions-BqFRhPDs.js";import"./CartesianChart-DMNhl37Y.js";import"./chartDataContext-Dgk8EHkE.js";import"./CategoricalChart-C4A4gzgw.js";import"./CartesianAxis-BW9v8-VT.js";import"./Layer-44h3-wN_.js";import"./Text-DGNAB76g.js";import"./ZIndexLayer-DcCIRQcN.js";import"./Label-DIQKMqhX.js";import"./types-DNQC58zt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DHwNW-IB.js";import"./dataEntryStyles-DojbuA9r.js";import"./ActivePoints-C-GzPRnQ.js";import"./Dot-P3TO-0hC.js";import"./activeStyles-B0VCWO8T.js";import"./useAnimationId-EekDlSpG.js";import"./Symbols-D-J-NUlP.js";import"./symbol-CoNKi1UW.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CNROvnrS.js";import"./ActiveShapeUtils-DYM7TwK-.js";import"./Curve-DQP2JLjt.js";import"./step-DvtT47Gl.js";import"./useEffectiveDataKey-DdiUIHde.js";import"./useElementOffset-CL3Lm6d5.js";import"./uniqBy-BNdjw3X0.js";import"./iteratee-BHwSZVIk.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B1K9Yltn.js";import"./Rectangle-Cg7APWAF.js";import"./util-Dxo8gN5i.js";import"./Sector-0McMm1EY.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
