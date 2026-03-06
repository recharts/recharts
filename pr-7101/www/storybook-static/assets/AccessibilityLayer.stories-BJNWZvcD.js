import{r as A,e as t}from"./iframe-BNAvIRSF.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CL-Wzbwp.js";import{A as E}from"./AreaChart-DaDFQ2Au.js";import{C as b}from"./CartesianGrid-JU9Ty3P0.js";import{X as d}from"./XAxis-jNdEOqKJ.js";import{Y as g}from"./YAxis-DKn9Z0NX.js";import{A as a}from"./Area-Df_KauIt.js";import{T as h}from"./Tooltip-BLcJz2Wy.js";import{R as u}from"./RechartsHookInspector-RJGN-lnu.js";import{R as v}from"./arrayEqualityCheck-B_mhFHzb.js";import{L as T}from"./Legend-DgtQ40Lp.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOKHmNYT.js";import"./index-C8X3jAB2.js";import"./immer-CgHRgtA8.js";import"./hooks-BLrpM1nt.js";import"./axisSelectors-BdwfMvGg.js";import"./d3-scale-H_vF25Xi.js";import"./zIndexSlice-Di15SS1w.js";import"./renderedTicksSlice-BJfEJ4_M.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CvP_4bZU.js";import"./chartDataContext-CvjStfkk.js";import"./CategoricalChart-sDSM-fNf.js";import"./resolveDefaultProps-D8b97oaV.js";import"./CartesianAxis-B-mMrgKm.js";import"./Layer-DWhwKERy.js";import"./Text-3IHlO_kG.js";import"./DOMUtils-PvS2Tri4.js";import"./Label-CPS78KHE.js";import"./ZIndexLayer-H82-bw69.js";import"./types-QGUyibIY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BiyZrQzX.js";import"./step-CmqF8yoP.js";import"./ReactUtils-DDF_v5tC.js";import"./ActivePoints-BuD7fFwZ.js";import"./Dot-C0S93Sbg.js";import"./RegisterGraphicalItemId-Ddyr6RRu.js";import"./GraphicalItemClipPath-B3V5TXUV.js";import"./SetGraphicalItem-BnPwV1U_.js";import"./useAnimationId-COyixU_T.js";import"./getRadiusAndStrokeWidthFromDot-BJXSwpXZ.js";import"./graphicalItemSelectors-FmA9hzqV.js";import"./useElementOffset-BPd1-EH2.js";import"./uniqBy-Bi-fCKKM.js";import"./iteratee-Dv4KjMpy.js";import"./Cross-BQR9pRs1.js";import"./Rectangle-DxFfTDWj.js";import"./Sector-B7_OzMPm.js";import"./index-BjQmXn2i.js";import"./ChartSizeDimensions-BQzIEJvl.js";import"./OffsetShower-DQh6BuRU.js";import"./PlotAreaShower-C8HeOK1-.js";import"./Symbols-DgKTLzDc.js";import"./symbol-CoAiT4va.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
