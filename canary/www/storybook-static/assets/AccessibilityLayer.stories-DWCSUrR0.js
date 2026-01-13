import{e as t,r as A}from"./iframe-ZneQOoj5.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-BAOyItJh.js";import{R as E}from"./arrayEqualityCheck-BNajb9_C.js";import{A as a}from"./Area-tqFJQ0Zb.js";import{L as b}from"./Legend-DoAaJ_6N.js";import{X as d}from"./XAxis-iiI74VtB.js";import{Y as g}from"./YAxis-B0TStWJD.js";import{T as h}from"./Tooltip-QREByfUs.js";import{R as u}from"./RechartsHookInspector-o16may3G.js";import{A as v}from"./AreaChart-BkYTmcHL.js";import{C as T}from"./CartesianGrid-9pcoHFJE.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cti5RU63.js";import"./hooks-f5tcO63K.js";import"./axisSelectors-Bn4oM41D.js";import"./zIndexSlice-D_yw_EwD.js";import"./resolveDefaultProps-Ca5bm1S2.js";import"./PolarUtils-kb3Ynomj.js";import"./CartesianChart-CYjuCTh1.js";import"./chartDataContext-B0ByfYA8.js";import"./CategoricalChart-Dsfzrp1E.js";import"./Curve-D5OcxVms.js";import"./types-D_7qF1fe.js";import"./Layer-CxIF_InE.js";import"./ReactUtils-Bw9y5ciT.js";import"./Label-s2gAZUId.js";import"./Text-BSmPk6IU.js";import"./DOMUtils-CY6Iwyv6.js";import"./ZIndexLayer-DbAXPfU_.js";import"./ActivePoints-DBydqYpl.js";import"./Dot-EaxYnBY2.js";import"./RegisterGraphicalItemId-GDWraSC2.js";import"./GraphicalItemClipPath-D0RDiP4j.js";import"./SetGraphicalItem-xtvvD71Q.js";import"./useAnimationId-qX2h62Hn.js";import"./getRadiusAndStrokeWidthFromDot-CBuap8aJ.js";import"./graphicalItemSelectors-Cd6CAvac.js";import"./Symbols-DOSg8I_W.js";import"./useElementOffset-DFO0Z8DN.js";import"./iteratee-BC097ozc.js";import"./CartesianAxis-ZVfszaWr.js";import"./Cross-Ce4LtU96.js";import"./Rectangle-gyHsx_3Q.js";import"./Sector-CIuTmDEF.js";import"./index-BhzpkJlR.js";import"./ChartSizeDimensions-DcPBcGoe.js";import"./OffsetShower-D0qLOk-K.js";import"./PlotAreaShower-kc5kHvIr.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
