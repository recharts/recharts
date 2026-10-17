import{r as A,R as t}from"./iframe-Cf4rQ-NM.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D9NfWs3n.js";import{A as E}from"./AreaChart-Ipy_LWN0.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dijd34fp.js";import{X as g}from"./XAxis-BIvdIl6o.js";import{Y as h}from"./YAxis-CNqs_HAY.js";import{A as a}from"./Area-CCx81GaB.js";import{T as u}from"./Tooltip-CMjrj-7d.js";import{R as k}from"./zIndexSlice-DMD_kE2u.js";import{L as v}from"./Legend-BTDRi3AW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BteUr7Vj.js";import"./resolveDefaultProps-Dge1pFTV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-9PR0sTvr.js";import"./throttle-B2HUKrsu.js";import"./index-BCa2sd2-.js";import"./index-DeMDRv06.js";import"./isWellBehavedNumber-DGgr4zRD.js";import"./d3-scale-Lc72VcRD.js";import"./index-xRR_iGj4.js";import"./index-1RjEuLS2.js";import"./renderedTicksSlice-CE9QQLn-.js";import"./index-BsaRhs6B.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CpdyhfTD.js";import"./chartDataContext-Dx7ZG5X9.js";import"./CategoricalChart-BUsdXEus.js";import"./CartesianAxis-DkanQVq_.js";import"./Layer-Cw23EJyc.js";import"./Text-CI7nXg92.js";import"./pageBackground-ja8baDve.js";import"./useId-CX6V0BQ1.js";import"./useBackwardsCompatibleTheme-Beid_g9Z.js";import"./Label-DJuA9Y4I.js";import"./ZIndexLayer-DsOZ8kUq.js";import"./types-PE1Wk2R_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Do9UPxka.js";import"./useAnimationId-D_Che_T2.js";import"./dataEntryStyles-DPFF45fD.js";import"./ActivePoints-C6euMq8T.js";import"./Dot-B2NKpqWj.js";import"./GraphicalItemClipPath-Dmqa19CH.js";import"./SetGraphicalItem-Dfb9XQen.js";import"./getRadiusAndStrokeWidthFromDot-DixpZj8q.js";import"./ActiveShapeUtils-BaLJZ67g.js";import"./Curve-Dr4UIWQ5.js";import"./step-Bcwq9xqU.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BQAfbWh7.js";import"./useElementOffset-Dl0LIsHj.js";import"./uniqBy-CYhaWn8Y.js";import"./iteratee-Dbg95qkm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-t70eUuc2.js";import"./Rectangle-B34jhTte.js";import"./util-Dxo8gN5i.js";import"./Sector-BHuTuRcM.js";import"./Symbols-D5DJG6Nl.js";import"./symbol-B_S5I6Iq.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
