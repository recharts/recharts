import{e as t,r as A}from"./iframe-Qbvlqe9c.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-dCvdXjW4.js";import{R as E}from"./arrayEqualityCheck-B3n_664E.js";import{A as a}from"./Area-DLgmmSCF.js";import{L as b}from"./Legend-hkD0puSA.js";import{X as d}from"./XAxis-DvwXUl6_.js";import{Y as g}from"./YAxis-CbhDcywn.js";import{T as h}from"./Tooltip-DNiKyqgP.js";import{R as u}from"./RechartsHookInspector-Bcf65z8s.js";import{A as v}from"./AreaChart-CsiCeXZ1.js";import{C as T}from"./CartesianGrid-BrR2o-p8.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-j0khHO2J.js";import"./hooks-C__9gfvB.js";import"./axisSelectors-DP3q5L3p.js";import"./zIndexSlice-Dd4fWTvl.js";import"./resolveDefaultProps-76Pg9xKV.js";import"./PolarUtils-1Zh54hEc.js";import"./CartesianChart-BEe2ZeB9.js";import"./chartDataContext-meOOuMw1.js";import"./CategoricalChart-BN7dR1q_.js";import"./Curve-viWUlKkP.js";import"./types-BIElRGEC.js";import"./Layer-CGD9i9Tv.js";import"./ReactUtils-DDfXx9yL.js";import"./Label-BjNpzDAS.js";import"./Text-BhRNkj8s.js";import"./DOMUtils-D4R1mvUb.js";import"./ZIndexLayer-BGnFu8Hz.js";import"./ActivePoints-Z50a9Y5S.js";import"./Dot-K6oNejLl.js";import"./RegisterGraphicalItemId-Bl4eT23s.js";import"./GraphicalItemClipPath-LG6KLgtm.js";import"./SetGraphicalItem-BGT_K21t.js";import"./useAnimationId-BMBkTPld.js";import"./getRadiusAndStrokeWidthFromDot-iWUSXSti.js";import"./graphicalItemSelectors-CvbJlI49.js";import"./Symbols-DUUTByO6.js";import"./useElementOffset-CVTdXMNm.js";import"./iteratee-D8VcXKhk.js";import"./CartesianAxis-a9jFIi9h.js";import"./Cross-Bkz5W_Jj.js";import"./Rectangle-Dq-tt7hT.js";import"./Sector-Byha0vVB.js";import"./index-BFsVO8Up.js";import"./ChartSizeDimensions-DHXLFfdm.js";import"./OffsetShower-CcbpVL0P.js";import"./PlotAreaShower-Bw9dKf0L.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
