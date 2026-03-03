import{r as A,e as t}from"./iframe-DrGUwCNH.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-BhneGLLj.js";import{A as E}from"./AreaChart-BcP_e-ct.js";import{C as b}from"./CartesianGrid-C7_CvgCJ.js";import{X as d}from"./XAxis-DG0gA5yQ.js";import{Y as g}from"./YAxis-CXzGtzv8.js";import{A as a}from"./Area-CaubPDzf.js";import{T as h}from"./Tooltip-Csvd94_F.js";import{R as u}from"./RechartsHookInspector-DVkoldVn.js";import{R as v}from"./arrayEqualityCheck-B-thuthJ.js";import{L as T}from"./Legend-CeHj8nhf.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5QstiPk.js";import"./index-BPQwAQcQ.js";import"./immer-BtgqId3I.js";import"./hooks-MsD78rw6.js";import"./axisSelectors-DWkWWbr7.js";import"./d3-scale-ByzzBKwW.js";import"./zIndexSlice-C-eL6wuf.js";import"./renderedTicksSlice-BCPFeSIm.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BEBwYk77.js";import"./chartDataContext-DU0L_61O.js";import"./CategoricalChart-CUzGTCjp.js";import"./resolveDefaultProps-B8l4f8zq.js";import"./CartesianAxis-BAqDA5_7.js";import"./Layer-DOWBbL5h.js";import"./Text-D0fVjYHK.js";import"./DOMUtils-Jzh5BZY9.js";import"./Label-B7C6-KkD.js";import"./ZIndexLayer-CBw-SdHg.js";import"./types-P3EO869A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-ywtP4oOQ.js";import"./step-DKLDrfb1.js";import"./ReactUtils-C94_zE_J.js";import"./ActivePoints-jvJhuq8B.js";import"./Dot-BB3Ssy69.js";import"./RegisterGraphicalItemId-CU0Tu66M.js";import"./GraphicalItemClipPath-DHoOCBG2.js";import"./SetGraphicalItem-BU2rvKVc.js";import"./useAnimationId-CM7jQqD0.js";import"./getRadiusAndStrokeWidthFromDot-Cc6LxlfS.js";import"./graphicalItemSelectors-DdKGU9xu.js";import"./useElementOffset-BHZsEqBf.js";import"./uniqBy-BKy-up6l.js";import"./iteratee-WrN9iqVE.js";import"./Cross-DkWZ6-nW.js";import"./Rectangle-DeFl-4jd.js";import"./Sector-2SvHHXh3.js";import"./index-3x6YcQkr.js";import"./ChartSizeDimensions-DRKtapfC.js";import"./OffsetShower-7BYMSgLY.js";import"./PlotAreaShower-BXy-ESLg.js";import"./Symbols-DUBAqkb2.js";import"./symbol-Bc0Cydwk.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
