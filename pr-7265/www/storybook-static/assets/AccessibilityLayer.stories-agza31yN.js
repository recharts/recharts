import{r as A,e as t}from"./iframe-jbS-E__g.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-CltpXdcI.js";import{A as E}from"./AreaChart-Dhh4M_yx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D6FefVEI.js";import{X as g}from"./XAxis-D2ruk6hB.js";import{Y as h}from"./YAxis-pXEMWudQ.js";import{A as a}from"./Area-Do8Z7uFE.js";import{T as u}from"./Tooltip-OajYP7Ju.js";import{R as y}from"./RechartsHookInspector-BHyXn1pK.js";import{R as v}from"./arrayEqualityCheck-Bc6HaNgk.js";import{L as T}from"./Legend-arlg7icL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-Sq2tux.js";import"./index-CUlk-TbT.js";import"./immer-1JIHG1sP.js";import"./hooks-BJbsnZ8W.js";import"./axisSelectors--9NjHi9J.js";import"./d3-scale-CgsVpM20.js";import"./zIndexSlice-fK74Fe27.js";import"./renderedTicksSlice-kref20Pz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bb9w7oEt.js";import"./chartDataContext-ZjVOMNJz.js";import"./CategoricalChart-Ca7o1_-0.js";import"./resolveDefaultProps-AZHx8nL2.js";import"./CartesianAxis-DVvLgkRy.js";import"./Layer-D3-cQotP.js";import"./Text-DPOTj-ff.js";import"./DOMUtils-Co4AyA4r.js";import"./Label-CqNEB3cA.js";import"./ZIndexLayer-C0UmvjN1.js";import"./types-KpzOghRu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BHonL5AG.js";import"./step-CRkklqfM.js";import"./ReactUtils-CmIIaVE7.js";import"./ActivePoints-BAygIn8R.js";import"./Dot-B5SXOt0E.js";import"./RegisterGraphicalItemId-B4Mgvmap.js";import"./GraphicalItemClipPath-DQWRROhy.js";import"./SetGraphicalItem-CLdOZJOU.js";import"./useAnimationId-Dl-7lH7S.js";import"./getRadiusAndStrokeWidthFromDot-BQh-5tcv.js";import"./graphicalItemSelectors-Dv9j5m5Q.js";import"./useElementOffset-CiRQlEhg.js";import"./uniqBy-CPO7hTdl.js";import"./iteratee-BUzB0L-p.js";import"./Cross-Bba4Q0Eg.js";import"./Rectangle-CttT3kPR.js";import"./Sector-C7-FdoJb.js";import"./index-BLWb42Ez.js";import"./ChartSizeDimensions-BpE-Gxiy.js";import"./OffsetShower-BXbfoimB.js";import"./PlotAreaShower-CIgqmqyc.js";import"./Symbols-BT1y5TAN.js";import"./symbol-DR7gyPC3.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
