import{e as t,r as A}from"./iframe-DhupoOg_.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-mBL9UL86.js";import{R as E}from"./arrayEqualityCheck-1a2j5A1f.js";import{A as a}from"./Area-uZIECkE7.js";import{L as b}from"./Legend-CjOih_WG.js";import{X as d}from"./XAxis-GsEtiJs1.js";import{Y as g}from"./YAxis-Bqh3gjFj.js";import{T as h}from"./Tooltip-BWybEPAX.js";import{R as u}from"./RechartsHookInspector-BRJSRdzz.js";import{A as v}from"./AreaChart-N2Qa2UOF.js";import{C as T}from"./CartesianGrid-CZVdI6-b.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BO7q4INj.js";import"./hooks-B-j7NBfr.js";import"./axisSelectors-C2OcRccT.js";import"./zIndexSlice-3nE7BOgk.js";import"./renderedTicksSlice-Bj2xHM0I.js";import"./resolveDefaultProps-BTEYvdCP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BeuGUy48.js";import"./chartDataContext-CrqCenWu.js";import"./CategoricalChart-C2IMp10s.js";import"./Curve-BbS-sSDe.js";import"./types-CAd6nAW9.js";import"./Layer-Bu6njlMc.js";import"./ReactUtils-Den_eo7w.js";import"./Label-jW6-M5QE.js";import"./Text-ByV2kj0P.js";import"./DOMUtils-gPRAn0h9.js";import"./ZIndexLayer-UCgdXbxU.js";import"./ActivePoints-CT0rrdoG.js";import"./Dot-h4eiknre.js";import"./RegisterGraphicalItemId-S4zlzp4z.js";import"./GraphicalItemClipPath-n7T_zXvL.js";import"./SetGraphicalItem-DotNlweO.js";import"./useAnimationId-DwQLM9Vt.js";import"./getRadiusAndStrokeWidthFromDot-CGbuqu4G.js";import"./graphicalItemSelectors-DqCxYLZ_.js";import"./Symbols-B_Z7RLio.js";import"./useElementOffset-DbSKwHmX.js";import"./iteratee-1SnXECjR.js";import"./CartesianAxis-CrD8JHxo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-CecaA5jP.js";import"./Rectangle-CD_6SwFf.js";import"./Sector-qA3WmdGy.js";import"./index-B1siFWfz.js";import"./ChartSizeDimensions-DQpUS7oV.js";import"./OffsetShower-CF_FCt5b.js";import"./PlotAreaShower-O-owCsXY.js";const Tt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
