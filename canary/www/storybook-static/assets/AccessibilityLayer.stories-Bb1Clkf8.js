import{r as A,e as t}from"./iframe-Ck9vc756.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-DfP8SAqH.js";import{A as E}from"./AreaChart-DOjYB2jh.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Brki6jMT.js";import{X as g}from"./XAxis-DhL58n8S.js";import{Y as h}from"./YAxis-CN8GVS1Z.js";import{A as a}from"./Area-Mi2a2DEi.js";import{T as u}from"./Tooltip-DHifCrTz.js";import{R as y}from"./RechartsHookInspector-jYNw452D.js";import{R as v}from"./arrayEqualityCheck-vzCieRp2.js";import{L as T}from"./Legend-BC_Sfm9o.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VxEE_HZc.js";import"./index-DcmFMlNy.js";import"./immer-DxfnJBPA.js";import"./hooks-e18ms5aC.js";import"./axisSelectors-BUVUYV1B.js";import"./d3-scale-CWye4qHt.js";import"./zIndexSlice-y206Xv9r.js";import"./renderedTicksSlice-DZ5s87U9.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DU17ec1s.js";import"./chartDataContext-w_xDJEY9.js";import"./CategoricalChart-dlD1y7dU.js";import"./resolveDefaultProps-nQu5Go0U.js";import"./CartesianAxis-B_BJsMJ6.js";import"./Layer-C26sMZzH.js";import"./Text-DDesK1Nf.js";import"./DOMUtils-BCDfv7vR.js";import"./Label-Crw3CPfI.js";import"./ZIndexLayer-CJ-WJ8V7.js";import"./types-BGHQe8uG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DcMGJFRD.js";import"./step-BIffBEER.js";import"./ReactUtils-QBrDvIPv.js";import"./ActivePoints-D7rmE1Zy.js";import"./Dot-BSnXD6GM.js";import"./RegisterGraphicalItemId-Ddc28GTk.js";import"./GraphicalItemClipPath-O2r-hl13.js";import"./SetGraphicalItem-Dos1M3Gw.js";import"./useAnimationId-B40SS4XH.js";import"./getRadiusAndStrokeWidthFromDot-r9WuKRbn.js";import"./graphicalItemSelectors-DCZgLbeh.js";import"./useElementOffset-BeZBXZ-x.js";import"./uniqBy-DMfO8TM9.js";import"./iteratee-B1ZaElV0.js";import"./Cross-ahEwNB3P.js";import"./Rectangle-DmefmFIR.js";import"./Sector-DK3gU8wt.js";import"./index-D1Nat1jZ.js";import"./ChartSizeDimensions-DeS7AUEB.js";import"./OffsetShower-B5SEMIpQ.js";import"./PlotAreaShower-BRBe-I_w.js";import"./Symbols-DO4Vi22k.js";import"./symbol-DBHvF3Bk.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
