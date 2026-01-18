import{e as t,r as A}from"./iframe--x23rdHV.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-Cx255MWZ.js";import{R as E}from"./arrayEqualityCheck-BD1qZPxT.js";import{A as a}from"./Area-BARbmsxb.js";import{L as b}from"./Legend-CKghAnm7.js";import{X as d}from"./XAxis-C6zLiMLH.js";import{Y as g}from"./YAxis-DrKE9qmp.js";import{T as h}from"./Tooltip-BpR2HqJx.js";import{R as u}from"./RechartsHookInspector-CS_N4Y-F.js";import{A as v}from"./AreaChart-CTYcydwY.js";import{C as T}from"./CartesianGrid-CWvvQXSx.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaVQgtIT.js";import"./hooks-B9glux5h.js";import"./axisSelectors-DmpeXiUd.js";import"./zIndexSlice-BZ8J8CWC.js";import"./resolveDefaultProps-Q3fBKAvl.js";import"./PolarUtils-DJ6pmdE6.js";import"./CartesianChart-7YsubAAE.js";import"./chartDataContext-CDQnRCpO.js";import"./CategoricalChart-NDapYkGp.js";import"./Curve-BsoHhr4Y.js";import"./types-DIiwzDHn.js";import"./Layer-W9JL67lG.js";import"./ReactUtils-Bbi28O4z.js";import"./Label-CHtfbXlI.js";import"./Text-C7KTYcc4.js";import"./DOMUtils-a1QzPdPR.js";import"./ZIndexLayer-ezCnztm4.js";import"./ActivePoints-BGDarTer.js";import"./Dot-DVriPTsk.js";import"./RegisterGraphicalItemId-DjY_2vEh.js";import"./GraphicalItemClipPath-B3HNdztG.js";import"./SetGraphicalItem-Ccb8m39o.js";import"./useAnimationId-DUCYZNMW.js";import"./getRadiusAndStrokeWidthFromDot-pzOWmeWo.js";import"./graphicalItemSelectors-CO_EFJn4.js";import"./Symbols-DVanmgvf.js";import"./useElementOffset-B8qSdA4X.js";import"./iteratee-Bd8EGcRe.js";import"./CartesianAxis-kvi8Pcym.js";import"./Cross-BC82NsLR.js";import"./Rectangle-ZSQAb92H.js";import"./Sector-En_dyy3k.js";import"./index-DL_1z0BC.js";import"./ChartSizeDimensions-wrT4dmYN.js";import"./OffsetShower-CJxOrGxz.js";import"./PlotAreaShower-AHA62Bp0.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
