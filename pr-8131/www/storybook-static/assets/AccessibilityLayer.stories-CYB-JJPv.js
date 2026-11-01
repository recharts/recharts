import{r as A,R as t}from"./iframe-CcMBsn7a.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DZIz87wm.js";import{A as E}from"./AreaChart-gft5Ue4C.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-1eIMjlFo.js";import{X as g}from"./XAxis-Dcud2AjR.js";import{Y as h}from"./YAxis-BnF9M7Oe.js";import{A as a}from"./Area-7QfiZvLn.js";import{T as u}from"./Tooltip-B3Mrs5p-.js";import{R as k}from"./zIndexSlice-DFRlFrsj.js";import{L as v}from"./Legend-Bzh10Y7T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5Uizgqh.js";import"./resolveDefaultProps-C_I-9eVr.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CpYzXpFY.js";import"./throttle-LNv5qelv.js";import"./index-BSB29nKH.js";import"./index-SlWo1Crq.js";import"./polarAxisSelectors-DoAcr0yY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DgNN2Fjk.js";import"./index-CdPGreQS.js";import"./index-CVuW9U_Y.js";import"./renderedTicksSlice-BvTPYPK6.js";import"./index-DNvfWRuY.js";import"./fillDefinitions-Cn95lAWR.js";import"./CartesianChart-GrqiJAJ3.js";import"./ZIndexPortal-CBXOiKa0.js";import"./CategoricalChart-BZVQkMIT.js";import"./CartesianAxis-Dr7Ti05X.js";import"./Layer-CeaFY6L3.js";import"./Text-Dz_XqFLj.js";import"./DOMUtils-DHsAC8dS.js";import"./ZIndexLayer-BQYqJ9ai.js";import"./Label-M1IGuJE8.js";import"./types-6qK0DF3w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BOiHk-iP.js";import"./ActivePoints-BpaOU93T.js";import"./Dot-DnefNcpX.js";import"./activeStyles-CkIUhE4Y.js";import"./useAnimationId-BiyhMFfV.js";import"./dataEntryStyles-Bttpss0z.js";import"./Symbols-BeP2l-ue.js";import"./symbol-ZVm563IN.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-D39u22t5.js";import"./getRadiusAndStrokeWidthFromDot-DGeLWXaD.js";import"./ActiveShapeUtils-Ce6BVgWv.js";import"./Curve-CgTOK48B.js";import"./step-Dj8K5zlQ.js";import"./useEffectiveDataKey-C8oLMiMN.js";import"./useElementOffset-CIR_VWXQ.js";import"./uniqBy-Cq9UYuC_.js";import"./iteratee-CPdK2ALT.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DUG9Ikbh.js";import"./Rectangle-BJTdQbL8.js";import"./util-Dxo8gN5i.js";import"./Sector-5AB5GNHW.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
