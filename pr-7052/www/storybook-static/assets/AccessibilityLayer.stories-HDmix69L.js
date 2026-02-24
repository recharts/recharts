import{r as A,e as t}from"./iframe-BlrnuDjf.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CXlLrCCb.js";import{A as E}from"./AreaChart-Bb7vLBKr.js";import{C as b}from"./CartesianGrid-BsN6v_bv.js";import{X as d}from"./XAxis-BYp_HR9V.js";import{Y as g}from"./YAxis-BWVYo6DZ.js";import{A as a}from"./Area-feVlYWCX.js";import{T as h}from"./Tooltip-DF9nxb6Z.js";import{R as u}from"./RechartsHookInspector-BAQjFSl6.js";import{R as v}from"./arrayEqualityCheck-BTXXQX4n.js";import{L as T}from"./Legend-DuQ4dF1E.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bw-KSP5T.js";import"./index-CKL3N-6v.js";import"./immer-BI9UFPL2.js";import"./hooks-Yl-LcXas.js";import"./axisSelectors-DHIQ-7_W.js";import"./d3-scale-CFGK5P70.js";import"./zIndexSlice-CqZHWfc6.js";import"./renderedTicksSlice-ULPEEzAa.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnkTC8bW.js";import"./chartDataContext-ihmINbbo.js";import"./CategoricalChart-DiwHthGG.js";import"./resolveDefaultProps-1DdFNclr.js";import"./CartesianAxis-edOWbwOR.js";import"./Layer-XHhRDzId.js";import"./Text-Cu_8uwrn.js";import"./DOMUtils-Cq-iC6tL.js";import"./Label-D_q5FUVB.js";import"./ZIndexLayer-7Hmap2eH.js";import"./types-DB_0tejV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BlGAAnP8.js";import"./step-oX00aiZd.js";import"./ReactUtils-BjQ30mBr.js";import"./ActivePoints-DAQMurwf.js";import"./Dot-BorEmCO3.js";import"./RegisterGraphicalItemId-Bh07AqU-.js";import"./GraphicalItemClipPath-EkcAQ3H7.js";import"./SetGraphicalItem-B1RMw4_v.js";import"./useAnimationId-DbkCLx7t.js";import"./getRadiusAndStrokeWidthFromDot-mkjXuMoL.js";import"./graphicalItemSelectors-D-FsgECM.js";import"./useElementOffset-VY0XYpIy.js";import"./uniqBy-CrknV9rA.js";import"./iteratee-DhN2HWwH.js";import"./Cross-wn3aRhM3.js";import"./Rectangle-DXu9YO7w.js";import"./Sector-Dv5PvvRm.js";import"./index-Cy5kt_9j.js";import"./ChartSizeDimensions-Igo4L2HP.js";import"./OffsetShower-BEEi0iU5.js";import"./PlotAreaShower-BeUubBWZ.js";import"./Symbols-DUfoVivI.js";import"./symbol-C5z5ai8y.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
