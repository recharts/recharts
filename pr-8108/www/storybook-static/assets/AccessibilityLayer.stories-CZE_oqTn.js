import{r as A,R as t}from"./iframe-6K1b1-eT.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B8GwPjuZ.js";import{A as E}from"./AreaChart-Br9XHFX6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BKiU5nyq.js";import{X as g}from"./XAxis-ClhB_79n.js";import{Y as h}from"./YAxis-_GZI3dYv.js";import{A as a}from"./Area-CEIHyoMt.js";import{T as u}from"./Tooltip-BJDj-_ph.js";import{R as k}from"./zIndexSlice-B780JRIC.js";import{L as v}from"./Legend-CVqC3TW7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DqVTXzd2.js";import"./resolveDefaultProps-BYoWz9Yk.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C-rSKBiJ.js";import"./throttle-CBl9h_oH.js";import"./index-Crbtmu02.js";import"./index-DtOoPLNq.js";import"./polarAxisSelectors-DAIX196M.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-vHo5DJBH.js";import"./index-fwe0fbm7.js";import"./index-C8-Ylk7e.js";import"./renderedTicksSlice-DsuMbTii.js";import"./index-EJ_yhvZY.js";import"./CartesianChart-Cvo7HdWy.js";import"./ZIndexPortal-wkZ6Ra_J.js";import"./CategoricalChart-CqHWKoUt.js";import"./CartesianAxis-D2Tqoy9W.js";import"./Layer-CJqJ-HtM.js";import"./Text-CdUlZS4M.js";import"./pageBackground-j7FwZ6MF.js";import"./ZIndexLayer-BCfq-6yJ.js";import"./Label-BWjzWDJx.js";import"./types-O5YDoWOS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Da0m2dvB.js";import"./ActivePoints-DfBmAS04.js";import"./Dot-mjfNbHvX.js";import"./activeStyles-C1gmhpCf.js";import"./useAnimationId-DP-ttVRU.js";import"./dataEntryStyles-DGPpD66W.js";import"./Symbols-j-UxEopj.js";import"./symbol-Ccjplwna.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CxuWSH9Y.js";import"./getRadiusAndStrokeWidthFromDot-9YrPK3Nw.js";import"./ActiveShapeUtils-9jaloMvW.js";import"./Curve-BTrtI1QS.js";import"./step-nJPm-9z_.js";import"./useEffectiveDataKey-Cqgp5Kke.js";import"./useElementOffset-c1RTDdmp.js";import"./uniqBy-OJKX_qkV.js";import"./iteratee-ItMtgKsp.js";import"./isArguments-yB-y1yaH.js";import"./Cross-pOdMossD.js";import"./Rectangle-BNPdRBQn.js";import"./util-Dxo8gN5i.js";import"./Sector-uQBxxe0t.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
