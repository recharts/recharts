import{r as A,R as t}from"./iframe-B89lyy_-.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BsssixLG.js";import{A as E}from"./AreaChart-Cgame1HF.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B0LoWWAc.js";import{X as g}from"./XAxis-CSc3N7hL.js";import{Y as h}from"./YAxis-CnBxKCbE.js";import{A as a}from"./Area-DIUTek2r.js";import{T as u}from"./Tooltip-DeSzgcGm.js";import{R as k}from"./zIndexSlice-BefUx2Nd.js";import{L as v}from"./Legend-ANhqDYkd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VgXxR9hf.js";import"./resolveDefaultProps-CABzBelW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DR4qXUjK.js";import"./throttle-BZuMAyb2.js";import"./index-KRoZzcbe.js";import"./index-BB4NcWJN.js";import"./polarAxisSelectors-CVXgDqrg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgC9WZfP.js";import"./index-DE_m11QS.js";import"./index-B0mW9FVH.js";import"./renderedTicksSlice-B3wgyDqC.js";import"./index-jctBjl-B.js";import"./CartesianChart-CsOis6XS.js";import"./ZIndexPortal-BM6dYFis.js";import"./CategoricalChart-C1dGPY9G.js";import"./CartesianAxis-DOEm-eMS.js";import"./Layer-CVGlZAI2.js";import"./Text-Dp5nXiQm.js";import"./DOMUtils-QfcpEM-9.js";import"./ZIndexLayer-6gVYvq6w.js";import"./Label-C15axuMc.js";import"./types-DRZvsZyz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-6ZaFDz_R.js";import"./ActivePoints-BKrA626A.js";import"./Dot-97i04StL.js";import"./activeStyles-CQvoijJ0.js";import"./useAnimationId-CrfHw1CS.js";import"./dataEntryStyles-C4pyloN-.js";import"./Symbols-DfxY9dbn.js";import"./symbol-DvLsC2AF.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-m8DhvWZo.js";import"./getRadiusAndStrokeWidthFromDot-Ddm3Cqxr.js";import"./ActiveShapeUtils-CFUdvdUp.js";import"./Curve-3TxFGWdO.js";import"./step-BRjfFT26.js";import"./useEffectiveDataKey-oyhM30Oz.js";import"./useElementOffset-DD1T0fU1.js";import"./uniqBy-QREi1o1G.js";import"./iteratee-Dd6IP1KA.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bx7xKlIX.js";import"./Rectangle-CXq2cdeR.js";import"./util-Dxo8gN5i.js";import"./Sector-DS2QQ-iw.js";import"./fillDefinitions-B-2MwM8M.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
