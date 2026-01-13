import{e as t,r as k}from"./iframe-ZLLTs1L2.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-I5bjg5En.js";import{R as b}from"./arrayEqualityCheck-DulyWTfD.js";import{A as a}from"./Area-BYHBALC8.js";import{L as C}from"./Legend-Dqil_PZE.js";import{X as g}from"./XAxis-CHTCY5Jh.js";import{Y as h}from"./YAxis-BCMoz5bl.js";import{T as u}from"./Tooltip-Bed7mk_T.js";import{R as y}from"./RechartsHookInspector-BKmDjbuV.js";import{A as v}from"./AreaChart-CubaUTZh.js";import{C as T}from"./CartesianGrid-RpQXF-Dz.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bhfb6Tks.js";import"./hooks-hqrrPiBI.js";import"./axisSelectors-Cv0R_3oc.js";import"./zIndexSlice-CBRMfbRc.js";import"./resolveDefaultProps-EUJ6_KoJ.js";import"./PolarUtils-B9p_wTge.js";import"./CartesianChart-Ck4WnZ-P.js";import"./chartDataContext-nQ2-yRIQ.js";import"./CategoricalChart-CbG3DQY1.js";import"./Curve-F2oZRqDm.js";import"./types-DBavnEN9.js";import"./Layer-Z1TeMr3K.js";import"./ReactUtils-WSqE_xht.js";import"./Label-B7ECka5v.js";import"./Text-BKG1mCXc.js";import"./DOMUtils-CjGF8Xv9.js";import"./ZIndexLayer-C8fNtv4Q.js";import"./ActivePoints-BwYfd7gv.js";import"./Dot-DSdrQqBD.js";import"./RegisterGraphicalItemId-l1uOO4MI.js";import"./GraphicalItemClipPath-BLImpVHN.js";import"./SetGraphicalItem-D8kwoYfk.js";import"./useAnimationId-BvHzHoR_.js";import"./getRadiusAndStrokeWidthFromDot-Vw-0YA6V.js";import"./graphicalItemSelectors-CVqmQioH.js";import"./Symbols-CzmBRPG3.js";import"./useElementOffset-C-GQABMK.js";import"./iteratee-DOdS9XFe.js";import"./CartesianAxis-C0wXEvxF.js";import"./Cross-DHvBXRas.js";import"./Rectangle-CUa7ysAN.js";import"./Sector-C6G3hgjU.js";import"./index-CuDIHWly.js";import"./ChartSizeDimensions-P7hJmoJ7.js";import"./OffsetShower-DgUH6KPA.js";import"./PlotAreaShower-Caaac_r-.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
