import{r as A,e as t}from"./iframe-DDDnlj5f.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-Ce7krGfK.js";import{A as E}from"./AreaChart-DNX46pqW.js";import{C as b}from"./CartesianGrid-qf6C1vx8.js";import{X as d}from"./XAxis-CWnYqww0.js";import{Y as g}from"./YAxis-BsKc4EC-.js";import{A as a}from"./Area-DHos3Nsy.js";import{T as h}from"./Tooltip-D_nWFJy_.js";import{R as u}from"./RechartsHookInspector-BhwNj7SB.js";import{R as v}from"./arrayEqualityCheck-CJpSjh_E.js";import{L as T}from"./Legend-BN3eH4xq.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CrpiHev6.js";import"./index-CMSlVVpG.js";import"./immer-aj6qr0b6.js";import"./hooks-Dv-UaG4_.js";import"./axisSelectors-CDHzLZeD.js";import"./d3-scale-pmFb8TKN.js";import"./zIndexSlice-DoI0yJNb.js";import"./renderedTicksSlice-k6HnSAnM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5sDgHmv.js";import"./chartDataContext-ib7DGGK_.js";import"./CategoricalChart-h2VJliXU.js";import"./resolveDefaultProps-DYeysdtP.js";import"./CartesianAxis-CMW5fm9o.js";import"./Layer-BtE1IS0j.js";import"./Text-C-kvncvF.js";import"./DOMUtils-DDovTr1I.js";import"./Label-VNLDkr3Z.js";import"./ZIndexLayer-DkrOw8iH.js";import"./types-BPe_V6d-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-SLwfiusm.js";import"./step-BKhUoFo2.js";import"./ReactUtils-CjPSIKmy.js";import"./ActivePoints-IhqFWUPQ.js";import"./Dot-BEStURxK.js";import"./RegisterGraphicalItemId-D4tYqbmw.js";import"./GraphicalItemClipPath-CuDHFuAP.js";import"./SetGraphicalItem-CHHuJTp3.js";import"./useAnimationId-Dkj4_Bqz.js";import"./getRadiusAndStrokeWidthFromDot-BWHQ3Uig.js";import"./graphicalItemSelectors-BAN2wZdq.js";import"./useElementOffset-03RznBD_.js";import"./uniqBy-CE60lU9f.js";import"./iteratee-BZMdZ1c9.js";import"./Cross-CLlcOZg_.js";import"./Rectangle-Cb4jcIHL.js";import"./Sector-BQbNJdDe.js";import"./index-CTBoJ3Fl.js";import"./ChartSizeDimensions-CGFO1lez.js";import"./OffsetShower-LgcvfXe3.js";import"./PlotAreaShower-DDwsWzkY.js";import"./Symbols-9n4DXsSp.js";import"./symbol-B5WodTQ6.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
