import{e as t,r as k}from"./iframe-C9kyXynm.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-CNIVaO9y.js";import{R as b}from"./arrayEqualityCheck-BdbBdFIu.js";import{A as a}from"./Area-Jve-7ksP.js";import{L as C}from"./Legend-DgLj4nAF.js";import{X as g}from"./XAxis-DlZ1onwt.js";import{Y as h}from"./YAxis-V3Y4BL5v.js";import{T as u}from"./Tooltip-DWE8kPry.js";import{R as y}from"./RechartsHookInspector-CKajdCMN.js";import{A as v}from"./AreaChart-D_bDKpmq.js";import{C as T}from"./CartesianGrid-C8kB-52l.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ultCJT0w.js";import"./hooks-BzniDeZ2.js";import"./axisSelectors-50fqgJ0X.js";import"./zIndexSlice-cJxKJ8ug.js";import"./resolveDefaultProps-BCZIpR14.js";import"./PolarUtils-B_1hBJ6O.js";import"./CartesianChart-EinDqxZ_.js";import"./chartDataContext-CZ4PAiww.js";import"./CategoricalChart-5uqkh1gH.js";import"./Curve-WEIhibNB.js";import"./types-BfqR7E8K.js";import"./Layer-LG3hnzpE.js";import"./ReactUtils-D_EEBxyT.js";import"./Label-C-oa8ua5.js";import"./Text-BcrXlrdS.js";import"./DOMUtils-CQZn70zK.js";import"./ZIndexLayer-7ELyukPI.js";import"./ActivePoints-B59gHKqE.js";import"./Dot-BiJvCsb9.js";import"./RegisterGraphicalItemId-oP_vlkHV.js";import"./GraphicalItemClipPath-DJAtFFUQ.js";import"./SetGraphicalItem-DyyRaUbx.js";import"./useAnimationId-XLZTjrUv.js";import"./getRadiusAndStrokeWidthFromDot-Bxt3ny70.js";import"./graphicalItemSelectors-CpyVq7h_.js";import"./Symbols-DR9F1KQK.js";import"./useElementOffset-CMzOGP_X.js";import"./iteratee-DoJqJKsx.js";import"./CartesianAxis-DH1-Rlhr.js";import"./Cross-GDyFEfaG.js";import"./Rectangle-DSM7deum.js";import"./Sector-D1DtIzuz.js";import"./index-DVm8rubF.js";import"./ChartSizeDimensions-COOovYk2.js";import"./OffsetShower-D9P9ThB2.js";import"./PlotAreaShower-B7fr2_CT.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
