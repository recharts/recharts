import{e as t,r as A}from"./iframe-CtEwCT9X.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CbuGECyR.js";import{R as E}from"./arrayEqualityCheck-H3JWu4Kp.js";import{A as a}from"./Area-BQhbcDDK.js";import{L as b}from"./Legend-BJx8HRfe.js";import{X as d}from"./XAxis-Dyu1KvxF.js";import{Y as g}from"./YAxis-KCRp4wE3.js";import{T as h}from"./Tooltip-B-kEP6ee.js";import{R as u}from"./RechartsHookInspector-DzvPF_wD.js";import{A as v}from"./AreaChart-ICsmlKyP.js";import{C as T}from"./CartesianGrid-B-PS9MdK.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AnHxT7w4.js";import"./hooks-rcQ-gxvj.js";import"./axisSelectors-CLqmQnll.js";import"./zIndexSlice-C0NscEQ4.js";import"./resolveDefaultProps-D4rIxQ8x.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DROVOQUl.js";import"./chartDataContext-3NcgbJTI.js";import"./CategoricalChart-DA7sCUkZ.js";import"./Curve-CYu7zDaL.js";import"./types-BlQIDijQ.js";import"./Layer-BNdxATQx.js";import"./ReactUtils-BjGJq1or.js";import"./Label-4VfWqw9i.js";import"./Text-BjHYQlz2.js";import"./DOMUtils-B7ui-v2S.js";import"./ZIndexLayer-BGiHPSQp.js";import"./ActivePoints-CRykM8N_.js";import"./Dot-B6v6wM9O.js";import"./RegisterGraphicalItemId-g2iXfztY.js";import"./GraphicalItemClipPath-C8XfWWgk.js";import"./SetGraphicalItem-bKBrJsc3.js";import"./useAnimationId-DKUOkxb7.js";import"./getRadiusAndStrokeWidthFromDot-BLthc_nE.js";import"./graphicalItemSelectors-D3ATsXBN.js";import"./Symbols-DsTuGPc2.js";import"./useElementOffset-DPwAogKS.js";import"./iteratee-COP-Hq4Y.js";import"./CartesianAxis-CVBmqBFQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-Dqutsibu.js";import"./Rectangle-BpE70r4e.js";import"./Sector-Do1ff_IB.js";import"./index-wj7KHo_g.js";import"./ChartSizeDimensions-yLUqjZ4u.js";import"./OffsetShower-2b6-cTCa.js";import"./PlotAreaShower-CQqB1CA9.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
