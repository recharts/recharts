import{r as A,R as t}from"./iframe-LXaU_yGQ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Dk11ZJ3E.js";import{A as E}from"./AreaChart-h0PpOczg.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-OUGW3i4b.js";import{X as g}from"./XAxis-p7HCxuCB.js";import{Y as h}from"./YAxis-CSeoCJK5.js";import{A as a}from"./Area-BQuiOAOb.js";import{T as u}from"./Tooltip-CMuc6rXN.js";import{R as k}from"./zIndexSlice-BSsrgEaY.js";import{L as v}from"./Legend-CW4FQckG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3XMumfr.js";import"./resolveDefaultProps-DbWwNOSn.js";import"./get-cF5BDHN6.js";import"./axisSelectors-COTFFsL0.js";import"./throttle-ByKIQNrZ.js";import"./index-DZIymj_T.js";import"./index-C00bVPiJ.js";import"./polarAxisSelectors-Bwd8WsKu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-xVZA29h1.js";import"./index-Cj2wRU1Y.js";import"./index-DCFuZ4eP.js";import"./renderedTicksSlice-bFWdrA3f.js";import"./index-D3Vd1Yho.js";import"./fillDefinitions-GJQeghKS.js";import"./CartesianChart-BiL3U0u_.js";import"./ZIndexPortal-B1CrZPtb.js";import"./CategoricalChart-DH4yc53T.js";import"./CartesianAxis-DZ_FsRV8.js";import"./Layer-CHoN3bhu.js";import"./Text-B2wTTXhn.js";import"./DOMUtils-wasDQX09.js";import"./ZIndexLayer-D76BtQdI.js";import"./Label-DYJ5zyBE.js";import"./types-WPs3xsFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-edsO3Rk5.js";import"./ActivePoints-NFoR1iD6.js";import"./Dot-DyfeLkRk.js";import"./activeStyles-PwSBVgUE.js";import"./useAnimationId-BI8ofMSC.js";import"./dataEntryStyles-CwUtW2sJ.js";import"./Symbols-DwjhqM4z.js";import"./symbol-BBQKO5RK.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-GbWatXWt.js";import"./getRadiusAndStrokeWidthFromDot-DPvgYAJF.js";import"./ActiveShapeUtils-57-jWYU2.js";import"./Curve-Bdp5Gfaz.js";import"./step-nDdn65YX.js";import"./useEffectiveDataKey-zCOJ1kMm.js";import"./useElementOffset-BTM80VK-.js";import"./uniqBy-BQLHmkt7.js";import"./iteratee-CVfcQAqg.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BjDFY2Wu.js";import"./Rectangle-CE9_TMcs.js";import"./util-Dxo8gN5i.js";import"./Sector-DHye28nJ.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
