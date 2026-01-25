import{e as t,r as A}from"./iframe-zYnk8EOr.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-D5xvMhhv.js";import{R as E}from"./arrayEqualityCheck-R2aAAI7x.js";import{A as a}from"./Area-7riOxwU6.js";import{L as b}from"./Legend-WNA_odee.js";import{X as d}from"./XAxis-BSJK083u.js";import{Y as g}from"./YAxis--5gqcMjD.js";import{T as h}from"./Tooltip-DO15xDOs.js";import{R as u}from"./RechartsHookInspector-BM6dBg77.js";import{A as v}from"./AreaChart-gtm-u8uu.js";import{C as T}from"./CartesianGrid-qx_M6Mk1.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CuXPMym5.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./zIndexSlice-BvNEMV0a.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Bb7O5ezJ.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./Curve-BERjiOgY.js";import"./types-BQ3BmiiK.js";import"./Layer-B9ovT-3z.js";import"./ReactUtils-TEkJxkkD.js";import"./Label-GsPpBxAc.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./ZIndexLayer-DbRKS04n.js";import"./ActivePoints-CohCjn8B.js";import"./Dot-D2_ksVUP.js";import"./RegisterGraphicalItemId-Xtx5eZl0.js";import"./GraphicalItemClipPath-BwpenKow.js";import"./SetGraphicalItem-CghMnI1R.js";import"./useAnimationId-C9zF9Z14.js";import"./getRadiusAndStrokeWidthFromDot-DGiV6eq7.js";import"./graphicalItemSelectors-BLhvCA_u.js";import"./Symbols-CvhTj7bZ.js";import"./useElementOffset-DCTaxlc8.js";import"./iteratee-Ci7OymFI.js";import"./CartesianAxis-BwSMeEYw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-aT4hd7BR.js";import"./Rectangle-CWuLgpNw.js";import"./Sector-CRX25Q97.js";import"./index-C4mhfMdJ.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
