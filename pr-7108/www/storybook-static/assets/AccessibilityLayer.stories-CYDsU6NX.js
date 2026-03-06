import{r as A,e as t}from"./iframe-BB4UUGL6.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-C2BzGzPZ.js";import{A as E}from"./AreaChart-Bgb-tm9w.js";import{C as b}from"./CartesianGrid-BCxtGjHc.js";import{X as d}from"./XAxis-Sg_yoptQ.js";import{Y as g}from"./YAxis-BjQFu2fY.js";import{A as a}from"./Area-CUCk_STT.js";import{T as h}from"./Tooltip-UgzVMgnv.js";import{R as u}from"./RechartsHookInspector-Bh0xNYsg.js";import{R as v}from"./arrayEqualityCheck-BYmPeJrr.js";import{L as T}from"./Legend-BdIYXKvq.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D-mKRVYc.js";import"./index-DU7ieidm.js";import"./immer-CGr0ptDX.js";import"./hooks-DFTFZ2_R.js";import"./axisSelectors-xhLV-t5X.js";import"./d3-scale-T-qah3ml.js";import"./zIndexSlice-CuyQJUW0.js";import"./renderedTicksSlice-lC7cSHHa.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BRe-Cj4k.js";import"./chartDataContext-zlvG9ShK.js";import"./CategoricalChart-Ct_zc7o_.js";import"./resolveDefaultProps-Dwn4tBVe.js";import"./CartesianAxis-D42FnObu.js";import"./Layer-CzRXBUT9.js";import"./Text-xAwQNVqR.js";import"./DOMUtils-DBhHNbvA.js";import"./Label-BuQHIgdG.js";import"./ZIndexLayer-C40yFkyN.js";import"./types-DX1g5Szp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve--7RAEkWQ.js";import"./step-BIZ2Vv4e.js";import"./ReactUtils-C_PCtVqv.js";import"./ActivePoints-qho3Mxiu.js";import"./Dot-BGQcGA8a.js";import"./RegisterGraphicalItemId-DlFEoDs3.js";import"./GraphicalItemClipPath-Y2-czyRy.js";import"./SetGraphicalItem-Da_W53nM.js";import"./useAnimationId-CR73Z47T.js";import"./getRadiusAndStrokeWidthFromDot-DX4q2mcQ.js";import"./graphicalItemSelectors-BlHR2ggU.js";import"./useElementOffset-DLf_jPLb.js";import"./uniqBy-DnQsVhpX.js";import"./iteratee-CSGtCKt7.js";import"./Cross-ugVlNa1O.js";import"./Rectangle-BoM2sg2T.js";import"./Sector-DNRZINVD.js";import"./index-UCZ6NmO8.js";import"./ChartSizeDimensions-Dx8qGUZW.js";import"./OffsetShower-6Dk3TPlH.js";import"./PlotAreaShower-CdNqGPUL.js";import"./Symbols-CZ1AA7rn.js";import"./symbol-DNGflvzo.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
