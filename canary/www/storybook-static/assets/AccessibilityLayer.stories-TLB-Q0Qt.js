import{r as A,R as t}from"./iframe-Ca9zq6-c.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-DleCrOAK.js";import{A as E}from"./AreaChart-LvUiuH5_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BPgnvgxf.js";import{X as g}from"./XAxis-BXUxDWml.js";import{Y as h}from"./YAxis-Di_pPAFf.js";import{A as a}from"./Area-Bb2U3BgG.js";import{T as u}from"./Tooltip-BNk2Rvy8.js";import{R as k}from"./zIndexSlice-CR-xpxM6.js";import{L as v}from"./Legend-D8rMlQBw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaG48vMC.js";import"./index-oZCeDex2.js";import"./index-FbuB2ssV.js";import"./index-BtFF0BK3.js";import"./index-D-6jHIBZ.js";import"./immer-BRLk8fdE.js";import"./get-CVL7Gg7t.js";import"./renderedTicksSlice-g-m8sL3N.js";import"./axisSelectors-CKheeyoe.js";import"./d3-scale-BmqB7fOq.js";import"./resolveDefaultProps-aQu_YsJN.js";import"./isWellBehavedNumber-CqGPlgER.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCrg56CU.js";import"./chartDataContext-Bliq4f83.js";import"./CategoricalChart-DP-UXbjk.js";import"./CartesianAxis-Cdin4D0O.js";import"./Layer-D2dY01rr.js";import"./Text-BceZOupb.js";import"./DOMUtils-CWZfW9Q5.js";import"./Label-Dc6nn1YN.js";import"./ZIndexLayer-N_1TQ7Pc.js";import"./types-DL0DYnfp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-G2tp0Yan.js";import"./step-D387uCSJ.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CQ3qeCfU.js";import"./ActivePoints-BmtaSDFt.js";import"./Dot-DVfqq-WH.js";import"./RegisterGraphicalItemId-BlhUjcl6.js";import"./GraphicalItemClipPath-CL4eJ5Gf.js";import"./SetGraphicalItem-DuOLtcMc.js";import"./useAnimationId-DX_MO7p4.js";import"./getRadiusAndStrokeWidthFromDot-D0JPsbB9.js";import"./graphicalItemSelectors-CQ9fLIUB.js";import"./useElementOffset-lMCe9HxU.js";import"./uniqBy-DQNXoyeH.js";import"./iteratee-BGMi6Zy8.js";import"./Cross-Y5-RDaB1.js";import"./Rectangle-Cd2dU1AM.js";import"./Sector-Bo6M0KYh.js";import"./Symbols-DqIr3c5H.js";import"./symbol-CUsmHQpS.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Lt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Lt as __namedExportsOrder,It as default};
