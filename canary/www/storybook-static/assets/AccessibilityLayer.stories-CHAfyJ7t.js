import{e as t,r as A}from"./iframe-DwqRYk2I.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-CeV-pGSf.js";import{R as E}from"./arrayEqualityCheck-DgzFlSOI.js";import{A as a}from"./Area-DYkMixxX.js";import{L as b}from"./Legend-C5eJuXMe.js";import{X as d}from"./XAxis-Cyh_YOcY.js";import{Y as g}from"./YAxis-QYWka3EJ.js";import{T as h}from"./Tooltip-CyQmKoLP.js";import{R as u}from"./RechartsHookInspector-DYt25tbN.js";import{A as v}from"./AreaChart-D6nRItLO.js";import{C as T}from"./CartesianGrid-CsOMLjge.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7VpHEZH.js";import"./hooks-D1ZMD5tV.js";import"./axisSelectors-BOQABpOz.js";import"./zIndexSlice-CZHcI390.js";import"./resolveDefaultProps-DNDo_DVE.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DcDVXLOL.js";import"./chartDataContext-Ctj-_rOR.js";import"./CategoricalChart-BLGSXnLr.js";import"./Curve-MGg7iv1Z.js";import"./types-DQBQm6yM.js";import"./Layer-CKGvS6fh.js";import"./ReactUtils-CSQ_QEna.js";import"./Label-BBrY7asM.js";import"./Text-DFlmLHAl.js";import"./DOMUtils-KiKr0dq-.js";import"./ZIndexLayer-14WaUFCY.js";import"./ActivePoints-DqfquW36.js";import"./Dot-NTY7DyyV.js";import"./RegisterGraphicalItemId-Bfk0jvW8.js";import"./GraphicalItemClipPath-D2KsqG86.js";import"./SetGraphicalItem-099u0L0c.js";import"./useAnimationId-BgtwKRIK.js";import"./getRadiusAndStrokeWidthFromDot-JPp-nKPZ.js";import"./graphicalItemSelectors-0SR2nuDA.js";import"./Symbols--4uQfBg4.js";import"./useElementOffset-BIde8PX1.js";import"./iteratee-Czloof4i.js";import"./CartesianAxis-0yio1lEn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-BlqNBQJ4.js";import"./Rectangle-Bp9O5e-s.js";import"./Sector-0XUVx_Z1.js";import"./index-B__3XDnp.js";import"./ChartSizeDimensions-BDK5RpWT.js";import"./OffsetShower-CMnq-Zau.js";import"./PlotAreaShower-DGemeH0F.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
