import{e as t,r as A}from"./iframe-DCHwmqK8.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-cpUGiPkE.js";import{R as E}from"./arrayEqualityCheck-PCrDa-mZ.js";import{A as a}from"./Area-YxwNwi1z.js";import{L as b}from"./Legend-C9fjgCjO.js";import{X as d}from"./XAxis-Dy9Xo9z7.js";import{Y as g}from"./YAxis-CKNZXN9_.js";import{T as h}from"./Tooltip-Bslvzh63.js";import{R as u}from"./RechartsHookInspector-DqPpRwC6.js";import{A as v}from"./AreaChart-D26lLRxa.js";import{C as T}from"./CartesianGrid-X_8lntYf.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dam48Pnw.js";import"./hooks-C5KjLV4a.js";import"./axisSelectors-tq781mpa.js";import"./zIndexSlice-xa-TURHG.js";import"./renderedTicksSlice-DwhsECxN.js";import"./resolveDefaultProps-9mPboPW3.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDUX0Tg9.js";import"./chartDataContext-F7_MHoey.js";import"./CategoricalChart-CR27zK7v.js";import"./Curve-B04YTzst.js";import"./types-B1B-Xneg.js";import"./Layer-7f0xQXhX.js";import"./ReactUtils-CDXy_Xlj.js";import"./Label-BPyHNFQk.js";import"./Text-riFZx0Ep.js";import"./DOMUtils-BGimDYvY.js";import"./ZIndexLayer-B-u8VTE_.js";import"./ActivePoints-Dr3FcZs2.js";import"./Dot-bVWJn8Dw.js";import"./RegisterGraphicalItemId-BsQ61kmL.js";import"./GraphicalItemClipPath-DITSj-MA.js";import"./SetGraphicalItem-ChCpVhsL.js";import"./useAnimationId-C8JLALld.js";import"./getRadiusAndStrokeWidthFromDot-DjsEkiNr.js";import"./graphicalItemSelectors-DSzTlca1.js";import"./Symbols-Bq3Wi3iy.js";import"./useElementOffset-D_m576R-.js";import"./iteratee-Bn5DBhCx.js";import"./CartesianAxis-BkIGBz3a.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-Bq2zFEQ4.js";import"./Rectangle-CB4U0IVW.js";import"./Sector-Ch_o0ANK.js";import"./index-DsiXN0IX.js";import"./ChartSizeDimensions-GkZwO762.js";import"./OffsetShower-C96P7rJy.js";import"./PlotAreaShower-9zl_p26K.js";const Tt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
