import{e as t,r as k}from"./iframe-Cwpfa-aU.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-Bjflq6a1.js";import{R as b}from"./arrayEqualityCheck-4s7O9CHw.js";import{A as a}from"./Area-Cm5KodTE.js";import{L as C}from"./Legend-CDhhebxP.js";import{X as g}from"./XAxis-UZUbrGY6.js";import{Y as h}from"./YAxis-BUkK3ftj.js";import{T as u}from"./Tooltip-i_abJ7x2.js";import{R as y}from"./RechartsHookInspector-RngvJaov.js";import{A as v}from"./AreaChart-DBqzvzOu.js";import{C as T}from"./CartesianGrid-CRtA0NQM.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DV1HqoPP.js";import"./hooks-Bu64bUH6.js";import"./axisSelectors-CkO9segl.js";import"./zIndexSlice-IilHGL9E.js";import"./resolveDefaultProps-Bl1VkIJn.js";import"./PolarUtils-D6OsdRao.js";import"./CartesianChart-B8cIlo8Y.js";import"./chartDataContext-BoIsIy8h.js";import"./CategoricalChart-yeCIXBUW.js";import"./Curve-Bv3AqiO6.js";import"./types-C0n05tvQ.js";import"./Layer-C5Up6lye.js";import"./ReactUtils-DiD0pNfa.js";import"./Label-BkH8bmvn.js";import"./Text-DG71k7CA.js";import"./DOMUtils-DpdULDT0.js";import"./ZIndexLayer-MboeMBT5.js";import"./ActivePoints-Dbd50Xfv.js";import"./Dot-BVCmMmNN.js";import"./RegisterGraphicalItemId-BzYcbqE1.js";import"./GraphicalItemClipPath-BWumZjSv.js";import"./SetGraphicalItem-CnrbgEG2.js";import"./useAnimationId-BNxZGCVU.js";import"./getRadiusAndStrokeWidthFromDot-C-Fw1e1x.js";import"./graphicalItemSelectors-C_fj_LyG.js";import"./Symbols-4LuKRow4.js";import"./useElementOffset-D4wGVCo_.js";import"./iteratee-eijgeMa6.js";import"./CartesianAxis-BJ_Cxbna.js";import"./Cross-D4h0k0sg.js";import"./Rectangle-DrpUAVjZ.js";import"./Sector-DE839nPA.js";import"./index-KilI1ssy.js";import"./ChartSizeDimensions-BzGykHcH.js";import"./OffsetShower-uqw3cQhV.js";import"./PlotAreaShower-DvkDcG7R.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
  args: {
    ...getStoryArgsFromArgsTypesObject(General)
  },
  parameters: {
    controls: {
      include: Object.keys(General)
    },
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,Ct as default};
