import{r as A,R as t}from"./iframe-B3-vagTW.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DWsqb0Fg.js";import{A as E}from"./AreaChart-kkdCfDLB.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-WXxHwYMc.js";import{X as g}from"./XAxis-DFfS9226.js";import{Y as h}from"./YAxis-DormNcwM.js";import{A as a}from"./Area-C86MDGJF.js";import{T as u}from"./Tooltip-Cdmks0yt.js";import{R as k}from"./zIndexSlice-ZzyVUAHl.js";import{L as v}from"./Legend-DJkkf3EF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CddNfr5P.js";import"./resolveDefaultProps-qRvlmwXA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-HaoK80F7.js";import"./throttle-CY8bAEWp.js";import"./index-SDu6d5_I.js";import"./index-DuceAH_t.js";import"./polarAxisSelectors-D6Jg6oqH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4523EFb.js";import"./index-D2TNbHS1.js";import"./index-qrs8hmxN.js";import"./renderedTicksSlice-D2e62elM.js";import"./index-Bf39JYYB.js";import"./CartesianChart-B6mp8hDI.js";import"./ZIndexPortal-C2SecuQr.js";import"./CategoricalChart-xcg0VLQw.js";import"./CartesianAxis-Cwp1aQTy.js";import"./Layer-PmVaLGrp.js";import"./Text-BuzE9c3N.js";import"./DOMUtils-_lgsh9Yh.js";import"./ZIndexLayer-D9XZSYmm.js";import"./Label-vZvIOvi1.js";import"./types-BBjBCtu2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-MPu8rBts.js";import"./ActivePoints-DAC4XsL1.js";import"./Dot-D46CiK3O.js";import"./activeStyles-mevkhAS-.js";import"./useAnimationId-mixmWsfB.js";import"./dataEntryStyles-FOCBXEG_.js";import"./Symbols-ETwvKCIL.js";import"./symbol-DMAPBY15.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CRfd0rzO.js";import"./getRadiusAndStrokeWidthFromDot-DTvCyfLo.js";import"./ActiveShapeUtils-b384wv9G.js";import"./Curve-DWZFjGCn.js";import"./step-BN6dVKvX.js";import"./useEffectiveDataKey-pQIYsbLr.js";import"./useElementOffset-D_j3OR66.js";import"./uniqBy-DNND0Smg.js";import"./iteratee-CTRTWi67.js";import"./isArguments-yB-y1yaH.js";import"./Cross-QGkOHav6.js";import"./Rectangle-BKi9ciwV.js";import"./util-Dxo8gN5i.js";import"./Sector-DUXa2j63.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
