import{e as t,r as A}from"./iframe-BFxtY9dI.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-Pvg-RSkd.js";import{R as E}from"./arrayEqualityCheck-BQbZm714.js";import{A as a}from"./Area-Br9jiVSV.js";import{L as b}from"./Legend-v5xHdTLw.js";import{X as d}from"./XAxis-D3JpuhiV.js";import{Y as g}from"./YAxis-CPuMzTzv.js";import{T as h}from"./Tooltip-6YUCcRtK.js";import{R as u}from"./RechartsHookInspector-gudRCKH0.js";import{A as v}from"./AreaChart-DRCEYvVd.js";import{C as T}from"./CartesianGrid-rH53Dzit.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLTyrBtL.js";import"./index-DIi_90kL.js";import"./immer-CUcePk58.js";import"./hooks-BNRFjHsC.js";import"./axisSelectors-Ceb__LH1.js";import"./d3-scale-KUDmBWZW.js";import"./zIndexSlice-ZRc_7mLu.js";import"./renderedTicksSlice-BzWN-VH9.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CabJwrb4.js";import"./chartDataContext-DVsTe71B.js";import"./CategoricalChart-DKEDTrV-.js";import"./resolveDefaultProps-Bso679kC.js";import"./Curve-CuVRTfs_.js";import"./types-DnPXbBrB.js";import"./step-Ckw-k6uH.js";import"./Layer-YgumUWTD.js";import"./ReactUtils-DAjtS1FD.js";import"./Label-BcnS9G2E.js";import"./Text-C_nqvwwO.js";import"./DOMUtils-D2wt1W4C.js";import"./ZIndexLayer-DBC69qog.js";import"./ActivePoints-YDyzEBL0.js";import"./Dot-BvOkHPQI.js";import"./RegisterGraphicalItemId-Dp1MHSbj.js";import"./GraphicalItemClipPath-DRveIpF0.js";import"./SetGraphicalItem-BHv-MNOM.js";import"./useAnimationId-BSFVs4aF.js";import"./getRadiusAndStrokeWidthFromDot-BTjYZIUU.js";import"./graphicalItemSelectors-I5qGCcfM.js";import"./Symbols-CK_J3ycL.js";import"./symbol-CT0Qon51.js";import"./useElementOffset-DKdxrDGu.js";import"./uniqBy-6ea5zmox.js";import"./iteratee-VCyK8kIm.js";import"./CartesianAxis-BYeXOVyG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-B1lI0XWJ.js";import"./Rectangle-DpImsBEM.js";import"./Sector-CtJlOyZO.js";import"./index-Df7eFGry.js";import"./ChartSizeDimensions-Rd73rJcG.js";import"./OffsetShower-C5x-sRSJ.js";import"./PlotAreaShower-BaqJ4sLy.js";const St={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
