import{e as t,r as A}from"./iframe-CaIgGyHM.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-ByOO_lp0.js";import{R as E}from"./arrayEqualityCheck-CjxR2bSj.js";import{A as a}from"./Area-CRFZ9aXk.js";import{L as b}from"./Legend-DSWW6CjA.js";import{X as d}from"./XAxis-CTD8LeaB.js";import{Y as g}from"./YAxis-CtUU2Zal.js";import{T as h}from"./Tooltip-BSsCpQhd.js";import{R as u}from"./RechartsHookInspector-Dwl6GEES.js";import{A as v}from"./AreaChart-B3NefZlE.js";import{C as T}from"./CartesianGrid-Bv3reDCi.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GR6QdmkY.js";import"./hooks-C-Cwfz9Q.js";import"./axisSelectors-CnuhT51I.js";import"./zIndexSlice-Q7xIp-VY.js";import"./resolveDefaultProps-DWSFOFU9.js";import"./PolarUtils-DrqRDweU.js";import"./CartesianChart-oU5kzf8D.js";import"./chartDataContext-D2XV3P37.js";import"./CategoricalChart-BosqoloG.js";import"./Curve-9htNi4i5.js";import"./types-8d_H4dY-.js";import"./Layer-Bv6QiOXu.js";import"./ReactUtils-CsC3O-TD.js";import"./Label-P-OvPLPn.js";import"./Text-b4cawV-F.js";import"./DOMUtils-Bp1vNIxR.js";import"./ZIndexLayer-Dbr8-T8d.js";import"./ActivePoints-C6Jn1jar.js";import"./Dot-LAxET7O2.js";import"./RegisterGraphicalItemId-BuoGtP2e.js";import"./GraphicalItemClipPath-DomblT_L.js";import"./SetGraphicalItem-ByoAYqMJ.js";import"./useAnimationId-C8_uny94.js";import"./getRadiusAndStrokeWidthFromDot-_YFZPvzl.js";import"./graphicalItemSelectors-CqQnKRMs.js";import"./Symbols-Crj6RDt9.js";import"./useElementOffset-HsHwXild.js";import"./iteratee-BXSQ8JUf.js";import"./CartesianAxis-BIL2gr42.js";import"./Cross-lPqrfSfL.js";import"./Rectangle-CaJA74zA.js";import"./Sector-BJsydvu6.js";import"./index-B-tNTan1.js";import"./ChartSizeDimensions-BI1RWPz_.js";import"./OffsetShower-BPLk7P8i.js";import"./PlotAreaShower-CFgftmSD.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
