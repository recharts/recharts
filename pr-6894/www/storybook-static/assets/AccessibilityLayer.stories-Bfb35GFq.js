import{e as t,r as A}from"./iframe-BMuWxLAr.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-BCldfKHH.js";import{R as E}from"./arrayEqualityCheck-CqiNO7U9.js";import{A as a}from"./Area-GkGixP3Z.js";import{L as b}from"./Legend-BrJXnRCE.js";import{X as d}from"./XAxis-WAtQ1axi.js";import{Y as g}from"./YAxis-Ce7Q5R0b.js";import{T as h}from"./Tooltip-gmr6yCdO.js";import{R as u}from"./RechartsHookInspector-zXV2QGE7.js";import{A as v}from"./AreaChart-BbYyttub.js";import{C as T}from"./CartesianGrid-BGa4GjxM.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DX7_Ztwr.js";import"./hooks-sLtblQr0.js";import"./axisSelectors-DkziLgOX.js";import"./zIndexSlice-BTEUYv6U.js";import"./resolveDefaultProps-5NLO6c-f.js";import"./PolarUtils-TfsB6rvw.js";import"./CartesianChart-FY0XM-zb.js";import"./chartDataContext-CANLYf-Z.js";import"./CategoricalChart-DViLh9Ev.js";import"./Curve-vG_gbHgm.js";import"./types-DTEjZcuz.js";import"./Layer-B3GdCeOT.js";import"./ReactUtils-CnoqxUjn.js";import"./Label-BDcobJj_.js";import"./Text-Cd5r0d0D.js";import"./DOMUtils-X92SmXv_.js";import"./ZIndexLayer-5mbugvqo.js";import"./ActivePoints-uR3BYcLE.js";import"./Dot-D-B6iTph.js";import"./RegisterGraphicalItemId-CCrV6fDN.js";import"./GraphicalItemClipPath-C7bBKX3e.js";import"./SetGraphicalItem-U0-JS-G0.js";import"./useAnimationId-CV7m1u0T.js";import"./getRadiusAndStrokeWidthFromDot-BFaAXNYg.js";import"./graphicalItemSelectors-CJs3TUGh.js";import"./Symbols-BPsutJwu.js";import"./useElementOffset-BIPaTuv8.js";import"./iteratee-D0uxWt8q.js";import"./CartesianAxis-HpZ4NVBh.js";import"./Cross-cWd-WtQK.js";import"./Rectangle-TwJi8_LR.js";import"./Sector-BljMkyic.js";import"./index-B4xTjkvp.js";import"./ChartSizeDimensions-CDGd01Cb.js";import"./OffsetShower-BqR0syDI.js";import"./PlotAreaShower-C3Up4AFj.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
