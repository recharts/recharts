import{e as t,r as A}from"./iframe-DSWYlzWY.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CsltzT4x.js";import{R as E}from"./arrayEqualityCheck-Fy9pCvBq.js";import{A as a}from"./Area-CtEXnWPP.js";import{L as b}from"./Legend-ChFyYIbp.js";import{X as d}from"./XAxis-iMOgY7Au.js";import{Y as g}from"./YAxis-Bm_Vu3am.js";import{T as h}from"./Tooltip-CN-1saOx.js";import{R as u}from"./RechartsHookInspector-f6frTyp5.js";import{A as v}from"./AreaChart-BRcGOdLv.js";import{C as T}from"./CartesianGrid-1IEROZor.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DVh3xt6X.js";import"./hooks-B7BbWUVY.js";import"./axisSelectors-C1uR2G3h.js";import"./zIndexSlice-CwHVazMP.js";import"./renderedTicksSlice-soMCmbpR.js";import"./resolveDefaultProps-BiAk_CPB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFtDWNyw.js";import"./chartDataContext-DGfmnKNf.js";import"./CategoricalChart-DpkOEink.js";import"./Curve-kGDkBF5o.js";import"./types-C3ofbdQr.js";import"./Layer-BJ-1LjgN.js";import"./ReactUtils-cJI4Ub_j.js";import"./Label-DAbjiZ3-.js";import"./Text-CcJbWbw0.js";import"./DOMUtils-9Gl4sMzI.js";import"./ZIndexLayer-DdgNL7UI.js";import"./ActivePoints-Boyrjsl3.js";import"./Dot-iLU5pbFu.js";import"./RegisterGraphicalItemId-BBtGsgZd.js";import"./GraphicalItemClipPath-SnzIRqgJ.js";import"./SetGraphicalItem-BwFpDELA.js";import"./useAnimationId-C_vJY8DS.js";import"./getRadiusAndStrokeWidthFromDot-BMXa57aN.js";import"./graphicalItemSelectors-DN5wHNNo.js";import"./Symbols-DBQdL11F.js";import"./useElementOffset-Chrj36We.js";import"./iteratee-DTflgsMG.js";import"./CartesianAxis-BDz1zwgU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-kxoIjZLr.js";import"./Rectangle-BMuMjxhY.js";import"./Sector-BpUrusHe.js";import"./index-CFzpIqAG.js";import"./ChartSizeDimensions-B4hBN_oD.js";import"./OffsetShower-Dq8TEAZv.js";import"./PlotAreaShower-CsbtiMRd.js";const Tt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Kt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Kt as __namedExportsOrder,Tt as default};
