import{e as t,r as A}from"./iframe-Ddtg6pJD.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-BM48fs1-.js";import{R as E}from"./arrayEqualityCheck-CG9XTfyR.js";import{A as a}from"./Area-BOMd3b4k.js";import{L as b}from"./Legend-CjBGtdvp.js";import{X as d}from"./XAxis-BuVbltIt.js";import{Y as g}from"./YAxis-DZmITrXC.js";import{T as h}from"./Tooltip-CQdauUmp.js";import{R as u}from"./RechartsHookInspector-CCfITcFS.js";import{A as v}from"./AreaChart-BTGeYBfm.js";import{C as T}from"./CartesianGrid-ClAnFFvt.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_aZbub_8.js";import"./hooks-DMJ48TSK.js";import"./axisSelectors-yUV1wcMm.js";import"./zIndexSlice-Ccg2qy_d.js";import"./resolveDefaultProps-BClOIvLb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BJB0TrzH.js";import"./chartDataContext-rtX1npPB.js";import"./CategoricalChart-DEs3YJXi.js";import"./Curve-C-ksUiT7.js";import"./types-ClXtAg6j.js";import"./Layer-DFCJKk43.js";import"./ReactUtils-Cw8MXjHP.js";import"./Label-DVFU8Pe0.js";import"./Text-Dr3Q50hE.js";import"./DOMUtils-ClD35WUk.js";import"./ZIndexLayer-BmeIxVaP.js";import"./ActivePoints-Ds6wCLcR.js";import"./Dot-CLk6qXvT.js";import"./RegisterGraphicalItemId-QH6oSkLG.js";import"./GraphicalItemClipPath-3Plpc9D_.js";import"./SetGraphicalItem-CMBgXv4K.js";import"./useAnimationId-CURyQWbL.js";import"./getRadiusAndStrokeWidthFromDot-dgSAwQ2V.js";import"./graphicalItemSelectors-DLxd3U73.js";import"./Symbols-TieKMT2F.js";import"./useElementOffset--qyUsfM-.js";import"./iteratee-TDlx1PX0.js";import"./CartesianAxis-Bg_xmACB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-D5DVzTTn.js";import"./Rectangle-DJ8F3yH0.js";import"./Sector-ClpHZ9p-.js";import"./index-DxoUglm9.js";import"./ChartSizeDimensions-CSjlsLF1.js";import"./OffsetShower-B4ALlsP9.js";import"./PlotAreaShower-B9MEGcsm.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
