import{e as t,r as k}from"./iframe-CzId_vMR.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-CMv1ks2h.js";import{R as b}from"./arrayEqualityCheck-DSdyV2X5.js";import{A as a}from"./Area-Cqyadbn2.js";import{L as C}from"./Legend-CFNhqrRN.js";import{X as g}from"./XAxis-CekBcBSy.js";import{Y as h}from"./YAxis-D1MjdOqy.js";import{T as u}from"./Tooltip-CZcztc67.js";import{R as y}from"./RechartsHookInspector-Co5fk2RP.js";import{A as v}from"./AreaChart-D-FMI2_W.js";import{C as T}from"./CartesianGrid-B6tHMBdj.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CN4xlQ0u.js";import"./hooks-C9JnWS43.js";import"./axisSelectors-OGsi9SPN.js";import"./zIndexSlice-BwlmGQPJ.js";import"./resolveDefaultProps-CjfObxG9.js";import"./PolarUtils-pvs2WqdL.js";import"./CartesianChart-Cp_RTL_u.js";import"./chartDataContext-bc8aYpmC.js";import"./CategoricalChart-Fsg15egP.js";import"./Curve-D5USJD5l.js";import"./types-DjXw3wTJ.js";import"./Layer-Cd1nD4kQ.js";import"./ReactUtils-B9bn4DTf.js";import"./Label-C0ElDb7Z.js";import"./Text-DyrIV_fF.js";import"./DOMUtils-DbOiFokS.js";import"./ZIndexLayer-C_SxWHYm.js";import"./ActivePoints-FI39lxZ5.js";import"./Dot-BamGkrTG.js";import"./RegisterGraphicalItemId-CBAG7Y6C.js";import"./GraphicalItemClipPath-BWo7OkkL.js";import"./SetGraphicalItem-w1vQ_GFV.js";import"./useAnimationId-DOB-FYIq.js";import"./getRadiusAndStrokeWidthFromDot-DhoyS4sY.js";import"./graphicalItemSelectors-Dp2Wlk9M.js";import"./Symbols-BRKfSvcL.js";import"./useElementOffset-DjiMAkTW.js";import"./iteratee-DjtVUf_D.js";import"./CartesianAxis-DwsgLCPL.js";import"./Cross-D0wqL9dG.js";import"./Rectangle-B-Y8RlPT.js";import"./Sector-BzoC5hxT.js";import"./index-CS_I0C1E.js";import"./ChartSizeDimensions-DGZWUdPh.js";import"./OffsetShower-b12JY01P.js";import"./PlotAreaShower-BQSWUX-t.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
