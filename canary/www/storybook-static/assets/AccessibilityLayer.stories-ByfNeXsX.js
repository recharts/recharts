import{r as A,e as t}from"./iframe-DzhPvN_j.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-HheWKBIJ.js";import{A as E}from"./AreaChart-DD3f1HOs.js";import{C as b}from"./CartesianGrid-CB07ijPG.js";import{X as d}from"./XAxis-DZpORi3T.js";import{Y as g}from"./YAxis-CJCzR98R.js";import{A as a}from"./Area-DGtqHiU8.js";import{T as h}from"./Tooltip-CkK3FoC6.js";import{R as u}from"./RechartsHookInspector-DDr9RNlY.js";import{R as v}from"./arrayEqualityCheck-BbmOyD_G.js";import{L as T}from"./Legend-uAOOqC4N.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRkniHVj.js";import"./index-Cw6ekdu2.js";import"./immer-DMYiXdM8.js";import"./hooks-Cd6CKD6W.js";import"./axisSelectors-OzG46XbO.js";import"./d3-scale-Cb1pH4Jp.js";import"./zIndexSlice-5RAhS0gW.js";import"./renderedTicksSlice-DXS4yQsn.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-poiqq0Wp.js";import"./chartDataContext-CN9Cvh4X.js";import"./CategoricalChart-CBxLoiN8.js";import"./resolveDefaultProps-D5C472LP.js";import"./CartesianAxis-CcEKfal4.js";import"./Layer-Ckqyyj_I.js";import"./Text-BqZmDUPE.js";import"./DOMUtils-vP3gppvy.js";import"./Label-CHDEQY5T.js";import"./ZIndexLayer-9g5l0O9I.js";import"./types-9iuX30XL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Bg7OAFiB.js";import"./step-DPzB36jn.js";import"./ReactUtils-B8wQ0lPM.js";import"./ActivePoints-BQliTLi8.js";import"./Dot-CmLP1K6L.js";import"./RegisterGraphicalItemId-Cy7sjBKU.js";import"./GraphicalItemClipPath-Ca8NlFcX.js";import"./SetGraphicalItem-mQIOZYtb.js";import"./useAnimationId-Bm5L9VBy.js";import"./getRadiusAndStrokeWidthFromDot-Dzez4mct.js";import"./graphicalItemSelectors-Bw4v3F4R.js";import"./useElementOffset-FCvPp8XD.js";import"./uniqBy-Cr1l51kb.js";import"./iteratee-BZcK010Q.js";import"./Cross-DkzHhjx5.js";import"./Rectangle-cFF1lzvY.js";import"./Sector-CP3wITBk.js";import"./index-BwszIH2h.js";import"./ChartSizeDimensions-CZzZunh8.js";import"./OffsetShower-CS-dGikj.js";import"./PlotAreaShower-Ch9v7dMV.js";import"./Symbols-D_1r08sf.js";import"./symbol-pZVEj6PC.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
