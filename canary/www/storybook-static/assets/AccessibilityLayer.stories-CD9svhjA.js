import{u as A,e as t}from"./iframe-D0NgTmOF.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-DJ5Lkyrz.js";import{A as E}from"./AreaChart-0-EukHa-.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-78fv6_De.js";import{X as g}from"./XAxis-CncyYZDx.js";import{Y as h}from"./YAxis-CwDQurre.js";import{A as a}from"./Area-CYB3KXeE.js";import{T as u}from"./Tooltip-CQxZaaqT.js";import{R as y}from"./RechartsHookInspector-5yLt0C9L.js";import{g as v}from"./arrayEqualityCheck-CwgUv_ht.js";import{L as T}from"./Legend-MDlw3RMW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5gUoFOn.js";import"./index-DvYw8x0Z.js";import"./immer-DnKwXwYM.js";import"./hooks-BjdflWes.js";import"./axisSelectors-D-soVtjN.js";import"./d3-scale-CuJiQ300.js";import"./zIndexSlice-B6knb3no.js";import"./renderedTicksSlice-B6w59eqG.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-vOQQa6wo.js";import"./chartDataContext-B3eSYf3f.js";import"./CategoricalChart-Cw-_htEg.js";import"./resolveDefaultProps-C2iJSQuR.js";import"./CartesianAxis-Ci5CupD_.js";import"./Layer-CdU29MCm.js";import"./Text-CYJBI_N5.js";import"./DOMUtils-B93EOx77.js";import"./Label-CwJJPXCN.js";import"./ZIndexLayer-CgbYN4dr.js";import"./types-BAabENvn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CmeNNcZa.js";import"./step-Dotb7kAI.js";import"./ReactUtils-CP67hvAP.js";import"./ActivePoints-Bqu6MNFU.js";import"./Dot-DXucPl9o.js";import"./RegisterGraphicalItemId-CIKun5N4.js";import"./GraphicalItemClipPath-DIWpokpF.js";import"./SetGraphicalItem-7Ry64uPY.js";import"./useAnimationId-BMh-hzSk.js";import"./getRadiusAndStrokeWidthFromDot-BgAjRsmY.js";import"./graphicalItemSelectors-CrhQHOrv.js";import"./useElementOffset-ERiIM-pz.js";import"./uniqBy-D9B9Na9v.js";import"./iteratee-C2EwE-pZ.js";import"./Cross-DDNGAYpR.js";import"./Rectangle-B7KfHMDv.js";import"./Sector-D7Ir7kN1.js";import"./index-CUywKB4R.js";import"./ChartSizeDimensions-KQoM2E8Q.js";import"./OffsetShower-18-bLdR4.js";import"./PlotAreaShower-C4z2y4fi.js";import"./Symbols-BQ_Pkm6Y.js";import"./symbol-DTnIuW2s.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
