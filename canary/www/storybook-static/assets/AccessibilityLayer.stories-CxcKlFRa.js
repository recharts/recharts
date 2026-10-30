import{r as A,R as t}from"./iframe-BDPfsqdF.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D7JGKNin.js";import{A as E}from"./AreaChart-Dn1obOMx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BNRy_tXV.js";import{X as g}from"./XAxis-D4_j-k4X.js";import{Y as h}from"./YAxis-Bl_BBErM.js";import{A as a}from"./Area-Fh3LHjMr.js";import{T as u}from"./Tooltip-DsDoEAPJ.js";import{R as k}from"./zIndexSlice-BfcQE96w.js";import{L as v}from"./Legend-CatJv-2c.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUmM3uYA.js";import"./resolveDefaultProps-UXrhpxMr.js";import"./get-cF5BDHN6.js";import"./axisSelectors-c7iT3Xqf.js";import"./throttle-DLGVq_fI.js";import"./index-BQeH_1mA.js";import"./index-DhEcRTBz.js";import"./polarAxisSelectors-C7NGCs8b.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8DyPgUy.js";import"./index-Bojq0CZP.js";import"./index-ex-Pgi_h.js";import"./renderedTicksSlice-GMkNhND_.js";import"./index-BRY97WZu.js";import"./CartesianChart-Do0DiZlo.js";import"./ZIndexPortal-kQXYrtt7.js";import"./CategoricalChart-BnbJl500.js";import"./CartesianAxis-BGQBH839.js";import"./Layer-irdZ2U7P.js";import"./Text-BNo_l2gi.js";import"./DOMUtils-DaHiW2kn.js";import"./ZIndexLayer-D5wXYtG3.js";import"./Label-CIaOlIjm.js";import"./types-DRfbQMuT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-BClBWVcN.js";import"./ActivePoints-1Kk_6r7U.js";import"./Dot-CDca1BfZ.js";import"./activeStyles-BFWSM9RU.js";import"./useAnimationId-PJ8_CwxA.js";import"./dataEntryStyles-RZhAuyPm.js";import"./Symbols-DWB63jlf.js";import"./symbol-CTG-DGxK.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Bfmt3udz.js";import"./getRadiusAndStrokeWidthFromDot-Jl4t-yCo.js";import"./ActiveShapeUtils-Cyzjr61Z.js";import"./Curve-wYhnU7Gh.js";import"./step-BXNgbZXy.js";import"./useEffectiveDataKey-DsGW0DuD.js";import"./useElementOffset-8y_suHrr.js";import"./uniqBy-BVW2sC2D.js";import"./iteratee-C91la3m6.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CuhOk6PY.js";import"./Rectangle-CavKlM0x.js";import"./util-Dxo8gN5i.js";import"./Sector-DpHwGpqU.js";import"./fillDefinitions-ZurvhtWc.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
