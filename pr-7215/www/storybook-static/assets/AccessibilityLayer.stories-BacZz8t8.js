import{r as A,e as t}from"./iframe-CcieUljj.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-iK8PeiJH.js";import{A as E}from"./AreaChart-CHcHogcV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DcWHz-6f.js";import{X as g}from"./XAxis-DRW_fzsF.js";import{Y as h}from"./YAxis-ChIRv6Dr.js";import{A as a}from"./Area-BRQ5vtj8.js";import{T as u}from"./Tooltip-DPG6Xagy.js";import{R as y}from"./RechartsHookInspector-gpfAdvlL.js";import{R as v}from"./arrayEqualityCheck-CBSvOn2m.js";import{L as T}from"./Legend-DJWPsUvs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CNR_n_x6.js";import"./index-Dbc8u9bF.js";import"./immer-CRL2VYbe.js";import"./hooks-DPwXI4Gw.js";import"./axisSelectors-Pbek4Jez.js";import"./d3-scale-CoPY6zJ-.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-COf-5-fj.js";import"./renderedTicksSlice-OQ158BwU.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-OaoDdpk7.js";import"./chartDataContext-CVz5YgWY.js";import"./CategoricalChart-B0CWPrGL.js";import"./resolveDefaultProps-DtzB7iWl.js";import"./CartesianAxis-y4_48Kdj.js";import"./Layer-kYv4pH7g.js";import"./Text-ByRBAoo5.js";import"./DOMUtils-CgPYrlEh.js";import"./Label-x_qN36Er.js";import"./ZIndexLayer-BJKRgvH9.js";import"./types-CacpOb3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-RMCtBAwF.js";import"./useAnimationId-DddwMKxX.js";import"./ActivePoints-QoER0D4T.js";import"./Dot-D5mPo0FX.js";import"./RegisterGraphicalItemId-BJxOIzsy.js";import"./GraphicalItemClipPath-Cd4vnEzu.js";import"./SetGraphicalItem-Dz7oH1lw.js";import"./getRadiusAndStrokeWidthFromDot-9l7PqCbK.js";import"./ActiveShapeUtils-OiQWsOUN.js";import"./isPlainObject-DI_W5C57.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Z_JKhr7t.js";import"./Trapezoid-CWN34y2W.js";import"./Sector-BSfRVALc.js";import"./Symbols-CuWHy7F-.js";import"./symbol-iKW_0e7L.js";import"./step-CgpTw60r.js";import"./Curve-Bx8QBaeT.js";import"./graphicalItemSelectors-DiR5EaBc.js";import"./useElementOffset-CqK0Vxa0.js";import"./uniqBy-Biztq0Nb.js";import"./iteratee-DlqS2PSY.js";import"./Cross-C0sTfzMc.js";import"./index-Ca5GsAAq.js";import"./ChartSizeDimensions-C-S9llVm.js";import"./OffsetShower-B6NxlzmC.js";import"./PlotAreaShower-DQmFSr8w.js";const Xt={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ht=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ht as __namedExportsOrder,Xt as default};
