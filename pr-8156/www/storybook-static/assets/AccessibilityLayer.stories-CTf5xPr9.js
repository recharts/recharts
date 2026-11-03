import{r as A,R as t}from"./iframe-BpPwD_oK.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B7ZoxfUU.js";import{A as E}from"./AreaChart-Dg4qKHG4.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CltJRHiR.js";import{X as g}from"./XAxis-Dja-Llqh.js";import{Y as h}from"./YAxis-GMxCrcAm.js";import{A as a}from"./Area-D0zaxnxf.js";import{T as u}from"./Tooltip-IpPgWDqU.js";import{R as k}from"./zIndexSlice-CZskftau.js";import{L as v}from"./Legend-KM2rCvli.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtJNI11v.js";import"./resolveDefaultProps-oHxAH6y3.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CCOlr32b.js";import"./throttle-jRz9fd5W.js";import"./index-BDbYb2y7.js";import"./index-C-Ap2UZI.js";import"./polarAxisSelectors-gNxk2Qvg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CBz-jIwW.js";import"./index-sbP1X6JH.js";import"./index-C3FSz61l.js";import"./renderedTicksSlice-BacllR_T.js";import"./index-DaSN1dEV.js";import"./fillDefinitions-BoqwWLdI.js";import"./CartesianChart-DUDm0Jrf.js";import"./ZIndexPortal-CPCtvPJx.js";import"./CategoricalChart-BCsFwQg5.js";import"./CartesianAxis-DPe5aXb5.js";import"./Layer-uKCEWQEh.js";import"./Text-BhQ_ePKx.js";import"./DOMUtils-BrCWiXlY.js";import"./ZIndexLayer-BfN85Ldf.js";import"./Label-Dm2gX9XZ.js";import"./types-C3LEdY55.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CdwfQdaD.js";import"./ActivePoints-rm17DGg7.js";import"./Dot-D_vqSwmx.js";import"./activeStyles-BKBboL8s.js";import"./useAnimationId-DjPYETUK.js";import"./dataEntryStyles-CSbDp-Df.js";import"./Symbols-CmOlxG5J.js";import"./symbol-CEUG_TNl.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CtMfZbBm.js";import"./getRadiusAndStrokeWidthFromDot-BkFKvs15.js";import"./ActiveShapeUtils-D3pEehn2.js";import"./Curve-CsmQrmZK.js";import"./step-uxJcfdRW.js";import"./useEffectiveDataKey-CeotyzvV.js";import"./useElementOffset-Clqm1mfa.js";import"./uniqBy-hvFHRVdb.js";import"./iteratee-CYqM1-65.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DUGsSR05.js";import"./Rectangle-KfOr2rpu.js";import"./util-Dxo8gN5i.js";import"./Sector-CRRCzxF2.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
