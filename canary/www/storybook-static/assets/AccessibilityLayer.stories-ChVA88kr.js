import{r as A,R as t}from"./iframe-BFdjndOP.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B2SKrzpV.js";import{A as E}from"./AreaChart-BX3JLj-i.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CywwPkVC.js";import{X as g}from"./XAxis-B63qJ9KH.js";import{Y as h}from"./YAxis-XZTx9iJE.js";import{A as a}from"./Area-w8n_WBuD.js";import{T as u}from"./Tooltip-CiMTL7v1.js";import{R as k}from"./zIndexSlice-BMXGqLpb.js";import{L as v}from"./Legend-Dtr6sma1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-H7T23RGg.js";import"./resolveDefaultProps-DJFCHaiN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BPye2JbP.js";import"./throttle--h3a_z5m.js";import"./index-LVwuga6J.js";import"./index-BW02vIAv.js";import"./polarAxisSelectors-CPTbaBCS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BbKZN6cQ.js";import"./index-C8219kEG.js";import"./index-CdY5oKLt.js";import"./renderedTicksSlice-BxVzVivR.js";import"./index-D4M5TsAW.js";import"./CartesianChart-CvXsANEo.js";import"./ZIndexPortal-BavuMFDc.js";import"./CategoricalChart-DpOkbqlx.js";import"./CartesianAxis-Ch7lNcAW.js";import"./Layer-lJQGFAu3.js";import"./Text-DOzJQY6l.js";import"./pageBackground-CKt6d5Bo.js";import"./ZIndexLayer-Di6AWmDg.js";import"./Label-fhEADZhw.js";import"./types-CW6mEad7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-mpaOdaxP.js";import"./ActivePoints-DpmLDfVx.js";import"./Dot-BeCJ7sWp.js";import"./activeStyles-ClW3aIEp.js";import"./useAnimationId-BieQKvQP.js";import"./dataEntryStyles-DDh9bN_s.js";import"./Symbols-oeWcvHGW.js";import"./symbol-DfxiLrYg.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-B6LFxdSb.js";import"./getRadiusAndStrokeWidthFromDot-BZY9OVSR.js";import"./ActiveShapeUtils-BL-a7-b7.js";import"./Curve-BhC7Tab4.js";import"./step-Ck_VDGQS.js";import"./useEffectiveDataKey-CN9bTgz2.js";import"./useElementOffset-DAJ27Pif.js";import"./uniqBy-CG_-iAXC.js";import"./iteratee-CyrnsQ_T.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D-Xwp2JL.js";import"./Rectangle-CI5ZTAqr.js";import"./util-Dxo8gN5i.js";import"./Sector-CPd9IaIT.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
