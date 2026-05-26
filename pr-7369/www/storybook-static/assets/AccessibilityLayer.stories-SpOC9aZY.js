import{u as A,e as t}from"./iframe-D8sYifa2.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-B5ikDCQ1.js";import{C as l}from"./ComposedChart-DEf9PDgh.js";import{A as E}from"./AreaChart-DKPtFRxP.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-Bb81pApp.js";import{X as g}from"./XAxis-9biS9qcH.js";import{Y as h}from"./YAxis-BUVq_Z24.js";import{A as a}from"./Area-yY4e51qd.js";import{T as u}from"./Tooltip-_uQNvj8Z.js";import{R as y}from"./RechartsHookInspector-DH476wIm.js";import{d as v}from"./arrayEqualityCheck-y2Q9GogF.js";import{L as T}from"./Legend-7cd7NCmD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkonLtU6.js";import"./index-DUx68t71.js";import"./immer-DGWVQIGE.js";import"./hooks-BU-t5LUJ.js";import"./axisSelectors-BhhfO0Ag.js";import"./d3-scale-Cclz1I6I.js";import"./svgPropertiesAndEvents-DLjmXQI2.js";import"./zIndexSlice-_08NoE64.js";import"./renderedTicksSlice-4e9Z0x6u.js";import"./index-CMJrcCvs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DyRJBMNu.js";import"./chartDataContext-RIukKWW8.js";import"./CategoricalChart-Cy6OSvk9.js";import"./CartesianAxis-k72kWN9A.js";import"./Layer-D0lgb40K.js";import"./Text-CGRq25Ok.js";import"./DOMUtils-DEL1f2E9.js";import"./Label-DJUogzP7.js";import"./ZIndexLayer-BoxbsGwS.js";import"./types-C-x3ql1e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-D7_AU4BE.js";import"./step-Cv8kCHVT.js";import"./path-DyVhHtw_.js";import"./graphicalItemTheme-BorrGmPK.js";import"./ActivePoints-DwTRXl_F.js";import"./Dot-IstG4xe6.js";import"./RegisterGraphicalItemId-qsbqe2qd.js";import"./GraphicalItemClipPath-BvTSVrR_.js";import"./SetGraphicalItem-y2OPpJ7-.js";import"./useAnimationId-W_naYXH9.js";import"./getRadiusAndStrokeWidthFromDot-E4UfAf03.js";import"./graphicalItemSelectors-DMIY_pKH.js";import"./useElementOffset-B8DfRQ2Q.js";import"./uniqBy-CHW-V9O0.js";import"./iteratee-DhisUvfr.js";import"./Cross-Ct2MkSFS.js";import"./Rectangle-WKQjNyd_.js";import"./Sector-TIMVCNQr.js";import"./index-DmeQCr0O.js";import"./ChartSizeDimensions-HlWxaGyg.js";import"./OffsetShower-BZMcKLdA.js";import"./PlotAreaShower-DYk3IhVP.js";import"./Symbols-Iph-WCB-.js";import"./symbol-B2tLKIcI.js";const Yt={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
