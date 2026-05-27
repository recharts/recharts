import{u as A,e as t}from"./iframe-DJXOgax2.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-CQeCmrJf.js";import{A as E}from"./AreaChart-BStGPm3-.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-BAYEYSZr.js";import{X as g}from"./XAxis-9kxG52aU.js";import{Y as h}from"./YAxis-DRv5Ieqa.js";import{A as a}from"./Area-DUNHIU9Z.js";import{T as u}from"./Tooltip-D8qot_hH.js";import{R as y}from"./RechartsHookInspector-s82vtdQF.js";import{g as v}from"./arrayEqualityCheck-k7PS2xak.js";import{L as T}from"./Legend-DDuYu27N.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BaSgqIB_.js";import"./index-BNAJMwXV.js";import"./immer-2a_xTrdV.js";import"./hooks-CZ0TOrWM.js";import"./axisSelectors-Dr5KL0ZI.js";import"./d3-scale-DuWCsZHZ.js";import"./zIndexSlice-B--1gOPM.js";import"./renderedTicksSlice-Bl5jCaCZ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFo4vKxS.js";import"./chartDataContext-kJxPcL-i.js";import"./CategoricalChart-Bx8_lMCZ.js";import"./resolveDefaultProps-DPbWDBA5.js";import"./CartesianAxis-BuS9D4Ek.js";import"./Layer-PAWXt2PX.js";import"./Text-npnYAvG4.js";import"./DOMUtils-i2w-QAqd.js";import"./Label-C8y2_6Vy.js";import"./ZIndexLayer-DVdyi4xb.js";import"./types-CX2SK57G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BPyFb2hT.js";import"./step-Bwlnh61x.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DyBcDzzn.js";import"./ActivePoints-kdx1y4B7.js";import"./Dot-BmjogDci.js";import"./RegisterGraphicalItemId-BxDB977O.js";import"./GraphicalItemClipPath-BH4qa2aX.js";import"./SetGraphicalItem-W-67q1_i.js";import"./useAnimationId-B1Sa6L7Z.js";import"./getRadiusAndStrokeWidthFromDot-CioYRZbs.js";import"./graphicalItemSelectors-gJ1uXDK1.js";import"./useElementOffset-BVFe881g.js";import"./uniqBy-CRMN3rmd.js";import"./iteratee-B_zfWqem.js";import"./Cross-CH1kJFsZ.js";import"./Rectangle-oqaSBBRm.js";import"./Sector-C4IUCLNM.js";import"./index-Bnctlgv-.js";import"./ChartSizeDimensions-Dwe9HRTS.js";import"./OffsetShower-BjMyZ4ga.js";import"./PlotAreaShower-6s_jSFmp.js";import"./Symbols-BMOYVBcW.js";import"./symbol-DR8oIFTo.js";const Yt={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
