import{r as A,e as t}from"./iframe-q7EKBh7o.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-DSwqeICk.js";import{A as E}from"./AreaChart-OpTrUPbK.js";import{C as b}from"./CartesianGrid-zerpxpsB.js";import{X as d}from"./XAxis-Cc06MLaN.js";import{Y as g}from"./YAxis-Dzu9zp52.js";import{A as a}from"./Area-DpuL8aUB.js";import{T as h}from"./Tooltip-iTXI8B3b.js";import{R as u}from"./RechartsHookInspector-DewVmCy0.js";import{R as v}from"./arrayEqualityCheck-CNeXmyp-.js";import{L as T}from"./Legend-L2aYPyi0.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B22qLPQG.js";import"./index-C4-9aL-F.js";import"./immer-so6Ulnev.js";import"./hooks-BZKkCtfI.js";import"./axisSelectors-D3C9QRtF.js";import"./d3-scale-C3h6liLe.js";import"./zIndexSlice-FB6DIKIg.js";import"./renderedTicksSlice-egFijHun.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_NqAGOq.js";import"./chartDataContext-KwgMu4Lm.js";import"./CategoricalChart-BZ540HIN.js";import"./resolveDefaultProps-B7X7PXgS.js";import"./CartesianAxis-DgR0v-Eb.js";import"./Layer-QiojE74q.js";import"./Text-Df64Y-kP.js";import"./DOMUtils-CVphFinv.js";import"./Label-D0Yxhrga.js";import"./ZIndexLayer-CyDdrDhA.js";import"./types-8fLOkEDP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CMEBV0h5.js";import"./step-BUn93TOQ.js";import"./ReactUtils-CCO8h_ST.js";import"./ActivePoints-DPbjwaD_.js";import"./Dot-DPAcQCLX.js";import"./RegisterGraphicalItemId-CxyJNLVz.js";import"./GraphicalItemClipPath-CMf4z5s0.js";import"./SetGraphicalItem-D3d8G_vE.js";import"./useAnimationId-CVW780SS.js";import"./getRadiusAndStrokeWidthFromDot-D64HU0Nx.js";import"./graphicalItemSelectors-BqHaBQ_b.js";import"./useElementOffset-w_DRWkBd.js";import"./uniqBy-C9c8NOE5.js";import"./iteratee-DCcyxzVq.js";import"./Cross-CsXDdVSc.js";import"./Rectangle-C9CBwic5.js";import"./Sector-CO_u1rWF.js";import"./index-z6UB51wB.js";import"./ChartSizeDimensions-xzO8bMu2.js";import"./OffsetShower-Dpn1KfVs.js";import"./PlotAreaShower-BRuQ0joF.js";import"./Symbols-BiDhCEPu.js";import"./symbol-BD_3EPYV.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
