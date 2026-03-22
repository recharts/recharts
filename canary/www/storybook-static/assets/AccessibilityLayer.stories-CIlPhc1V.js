import{r as A,e as t}from"./iframe-CgO1MpLR.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-_NVVn82o.js";import{A as E}from"./AreaChart-BlsuIojV.js";import{C as b}from"./CartesianGrid-pjOIFEPw.js";import{X as d}from"./XAxis-2XcNPuPe.js";import{Y as g}from"./YAxis-DlCb0Sdu.js";import{A as a}from"./Area-Dhz1U03T.js";import{T as h}from"./Tooltip-TOxj-Y96.js";import{R as u}from"./RechartsHookInspector-CDDYORWo.js";import{R as v}from"./arrayEqualityCheck-u-i53ess.js";import{L as T}from"./Legend-DbHoqBrs.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CDt2FmMO.js";import"./index-DXMTaf8u.js";import"./immer-CbOoSQee.js";import"./hooks-2os6LPs1.js";import"./axisSelectors-GgUYtUsd.js";import"./d3-scale-DrxfQAZk.js";import"./zIndexSlice-Bk7fG6-8.js";import"./renderedTicksSlice-BCt2n75F.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9rc0WcRq.js";import"./chartDataContext-BsDrumof.js";import"./CategoricalChart-B51A2DYk.js";import"./resolveDefaultProps-DhOBRlG4.js";import"./CartesianAxis-BWRdw-B1.js";import"./Layer-BnKx9soM.js";import"./Text-BsiCf19y.js";import"./DOMUtils-ClzY_4R6.js";import"./Label-DuKpvZQ2.js";import"./ZIndexLayer-GawZf7gt.js";import"./types-CR8KEC21.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DQA1Id8x.js";import"./step-Do923Rg0.js";import"./ReactUtils-aHtS1QKc.js";import"./ActivePoints-4Dquq-We.js";import"./Dot-i5e7mgOR.js";import"./RegisterGraphicalItemId-DbAYEj3z.js";import"./GraphicalItemClipPath-Kfq1Q5v1.js";import"./SetGraphicalItem-BLM5KnkQ.js";import"./useAnimationId-DCzIcKnG.js";import"./getRadiusAndStrokeWidthFromDot-DB6-Bj1Z.js";import"./graphicalItemSelectors-D-J503vA.js";import"./useElementOffset-DfZinX6A.js";import"./uniqBy-D_Tq5wIv.js";import"./iteratee-BApfnIwz.js";import"./Cross-B8G7Ixjy.js";import"./Rectangle-By3Xy3Xn.js";import"./Sector-D7mFZfC7.js";import"./index-Co6Xoctr.js";import"./ChartSizeDimensions-BHD_hXk_.js";import"./OffsetShower-DcNg8xR5.js";import"./PlotAreaShower-Dqalehnj.js";import"./Symbols-gxmwBdwn.js";import"./symbol-BbAFTquJ.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
