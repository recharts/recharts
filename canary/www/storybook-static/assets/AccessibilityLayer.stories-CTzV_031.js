import{e as t,r as A}from"./iframe-B4ZOa_Yu.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-Bx4qcLUx.js";import{R as E}from"./arrayEqualityCheck-C7qm6m5x.js";import{A as a}from"./Area-nObDQ_es.js";import{L as b}from"./Legend-Ci5IrWNW.js";import{X as d}from"./XAxis-Ds-wBXG3.js";import{Y as g}from"./YAxis-ORG4L0tf.js";import{T as h}from"./Tooltip-C3U7UEkk.js";import{R as u}from"./RechartsHookInspector-D8rerupA.js";import{A as v}from"./AreaChart-Dx_cZXdG.js";import{C as T}from"./CartesianGrid-D8vgK1HJ.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B66RMWp1.js";import"./index-DBSwNlxD.js";import"./immer-B05rlcy5.js";import"./hooks-BoWukVEP.js";import"./axisSelectors-CUTvv79j.js";import"./d3-scale-xF4QVF1U.js";import"./zIndexSlice-L-52L8l2.js";import"./renderedTicksSlice-BHPoCGKs.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dq-7HfpP.js";import"./chartDataContext-CeyVK9Tw.js";import"./CategoricalChart-CIWpFNpg.js";import"./resolveDefaultProps-DcaNso53.js";import"./Curve-BSyKD1Ot.js";import"./types-Cvz57JP2.js";import"./step-bVfLcMGZ.js";import"./Layer-D8UY7UMK.js";import"./ReactUtils-upui8jKZ.js";import"./Label-CDxkI7IB.js";import"./Text-RCR9lAA9.js";import"./DOMUtils-WUmSdG9_.js";import"./ZIndexLayer-DJVNNdtG.js";import"./ActivePoints-DrOeuumg.js";import"./Dot-C8akGE8Z.js";import"./RegisterGraphicalItemId-DSbtEDT7.js";import"./GraphicalItemClipPath-DUfb3-iB.js";import"./SetGraphicalItem-DHjcaBbG.js";import"./useAnimationId-BoXeTLIY.js";import"./getRadiusAndStrokeWidthFromDot-CUYccmbg.js";import"./graphicalItemSelectors-Cs1rdFjJ.js";import"./Symbols-aoMnmAhk.js";import"./symbol-ClQQoX6e.js";import"./useElementOffset-C2t73FR2.js";import"./uniqBy-CNaO2f4k.js";import"./iteratee-BRA6zEKM.js";import"./CartesianAxis-CCuPeB1h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-DttJ8Obf.js";import"./Rectangle-qe02Stpb.js";import"./Sector-DG-V-cIW.js";import"./index-C8tftqM8.js";import"./ChartSizeDimensions-CgbdMiCv.js";import"./OffsetShower-z8r0Gugh.js";import"./PlotAreaShower-CPk3ggQs.js";const St={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
