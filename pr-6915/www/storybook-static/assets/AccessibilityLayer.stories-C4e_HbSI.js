import{e as t,r as A}from"./iframe-NQnSavsc.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-CtfPGNRU.js";import{R as E}from"./arrayEqualityCheck-ClUhvVMc.js";import{A as a}from"./Area-OtYLkW8N.js";import{L as b}from"./Legend-BMjXqy5o.js";import{X as d}from"./XAxis-BVWUh-i7.js";import{Y as g}from"./YAxis-B4mT5_6h.js";import{T as h}from"./Tooltip-DcWfx3tc.js";import{R as u}from"./RechartsHookInspector-CrS4ifUj.js";import{A as v}from"./AreaChart-MdPrszax.js";import{C as T}from"./CartesianGrid-uwgsZBij.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFx6ycKR.js";import"./hooks-BcaLrk1Y.js";import"./axisSelectors-GttesoX_.js";import"./zIndexSlice-nS_oTVB0.js";import"./resolveDefaultProps-clR4-9At.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DsO03C2-.js";import"./chartDataContext-BPtWcoks.js";import"./CategoricalChart--MZ7Ud20.js";import"./Curve-D3iL2MuF.js";import"./types-Ditu6fq2.js";import"./Layer-BUJpEzYu.js";import"./ReactUtils-B56Ms0vK.js";import"./Label-CdLQa_Zq.js";import"./Text-s16izCJe.js";import"./DOMUtils-hORVmOPR.js";import"./ZIndexLayer-D7r7UDo0.js";import"./ActivePoints-_Hw47NBl.js";import"./Dot-DSKTAfka.js";import"./RegisterGraphicalItemId-CF9d6kYM.js";import"./GraphicalItemClipPath-DBWQaJ3W.js";import"./SetGraphicalItem-BSyTvg-d.js";import"./useAnimationId-DY2MKiMD.js";import"./getRadiusAndStrokeWidthFromDot-CnaxLYsp.js";import"./graphicalItemSelectors-Bq6_wx_b.js";import"./Symbols-C7hNVpPd.js";import"./useElementOffset-C8NPmaKx.js";import"./iteratee-R7qkJOYZ.js";import"./CartesianAxis-BxH1zk3Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-u9ebXOeT.js";import"./Rectangle-dUbZu5CP.js";import"./Sector-DKYprxhX.js";import"./index-CtOaP7ae.js";import"./ChartSizeDimensions-BZdR1kHO.js";import"./OffsetShower-CoGf8iJT.js";import"./PlotAreaShower-CFMI3s33.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Tt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Tt as __namedExportsOrder,vt as default};
