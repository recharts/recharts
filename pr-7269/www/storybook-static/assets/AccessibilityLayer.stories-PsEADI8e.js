import{r as A,e as t}from"./iframe-p2IvJPp5.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-Cl8F1Prg.js";import{A as E}from"./AreaChart-GgibCdMs.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BNtK6pD-.js";import{X as g}from"./XAxis-TolWHMJv.js";import{Y as h}from"./YAxis-3lSAnX_i.js";import{A as a}from"./Area-DmGxfbV5.js";import{T as u}from"./Tooltip-CstLMPkD.js";import{R as y}from"./RechartsHookInspector-BTfDdL-Q.js";import{R as v}from"./arrayEqualityCheck-MFpiNrgh.js";import{L as T}from"./Legend-p-Oqpf4n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CC3JfRCb.js";import"./index-Bbr8AUP0.js";import"./immer-C-3OxAJ7.js";import"./hooks-BwAS4l5Q.js";import"./axisSelectors-BYVqkL8o.js";import"./d3-scale-_MVxtyqx.js";import"./zIndexSlice-DkiB7jtC.js";import"./renderedTicksSlice-BZEkjAjn.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-sJv9-h8P.js";import"./chartDataContext-RNMGpAdm.js";import"./CategoricalChart-CdP1Gioy.js";import"./resolveDefaultProps-D-WOYVwL.js";import"./CartesianAxis-C8slwFAS.js";import"./Layer-CAMhjis1.js";import"./Text-DybomHzv.js";import"./DOMUtils-JIJzz5BZ.js";import"./Label-dvxvBKxQ.js";import"./ZIndexLayer-DEFjE1si.js";import"./types-BUdqLlBz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-ymYrUrgJ.js";import"./step-BLz-mTOp.js";import"./ReactUtils-DS7t9UEd.js";import"./ActivePoints-BszxelsK.js";import"./Dot-B9yHy92F.js";import"./RegisterGraphicalItemId-BMsKHjZL.js";import"./GraphicalItemClipPath-Du63Zh2t.js";import"./SetGraphicalItem-BFQTuzAF.js";import"./useAnimationId-DfX16akC.js";import"./getRadiusAndStrokeWidthFromDot-BV_w38gC.js";import"./graphicalItemSelectors-DZjDdUgY.js";import"./useElementOffset-DDZhMm9e.js";import"./uniqBy-BDukc5-8.js";import"./iteratee-Chvr53L9.js";import"./Cross-DSmLOanO.js";import"./Rectangle--WL1ouFK.js";import"./Sector-DpIUnASU.js";import"./index-M5GHmuSt.js";import"./ChartSizeDimensions-DmpIaGou.js";import"./OffsetShower-BlCTa7sz.js";import"./PlotAreaShower-BfA3uM21.js";import"./Symbols-st46PVLX.js";import"./symbol-D4aZHrvc.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
