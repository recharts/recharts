import{r as A,e as t}from"./iframe-CkFXM4wB.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-DibFHF-M.js";import{A as E}from"./AreaChart-0-pmWTzS.js";import{C as b}from"./CartesianGrid-4A_mvLxP.js";import{X as d}from"./XAxis-BrfBiI3E.js";import{Y as g}from"./YAxis--nz6ltt0.js";import{A as a}from"./Area-Da1ND1zM.js";import{T as h}from"./Tooltip-DB8bTF4E.js";import{R as u}from"./RechartsHookInspector-B3xLxxYl.js";import{R as v}from"./arrayEqualityCheck-YTUxoqUB.js";import{L as T}from"./Legend-Cnu46-RD.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BszZHVIX.js";import"./index-BdUYKJku.js";import"./immer-VfMLklKA.js";import"./hooks-DcZa8pcT.js";import"./axisSelectors-CJKN5-Iu.js";import"./d3-scale-DufYgqIf.js";import"./zIndexSlice-B5-XLxo_.js";import"./renderedTicksSlice-DBeHnZTe.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-bKq-XmFS.js";import"./chartDataContext-BpQAywsQ.js";import"./CategoricalChart-Mr91sBr1.js";import"./resolveDefaultProps-CgSC7b_8.js";import"./CartesianAxis-Bb-zNiAP.js";import"./Layer-dIWMs8k-.js";import"./Text-B-XsujPt.js";import"./DOMUtils-BTVGwpKA.js";import"./Label-BRTUkEBL.js";import"./ZIndexLayer-4pe948L1.js";import"./types-CUTS6MB0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-KgtuRfAG.js";import"./step-CbyAEdw5.js";import"./ReactUtils-YGQ827Cl.js";import"./ActivePoints-BuiTIuA5.js";import"./Dot-tTXkn-xi.js";import"./RegisterGraphicalItemId-ChGWl6rQ.js";import"./GraphicalItemClipPath-DuUyvYTP.js";import"./SetGraphicalItem-DJLRAQ5n.js";import"./useAnimationId-C9BYbESN.js";import"./getRadiusAndStrokeWidthFromDot-DSs9rVtO.js";import"./graphicalItemSelectors-D8LF-DWT.js";import"./useElementOffset-BnogzPjY.js";import"./uniqBy-BtLygSeP.js";import"./iteratee-BY4qpxip.js";import"./Cross-DUBAeb_H.js";import"./Rectangle-aTEw3KI1.js";import"./Sector-DMfw9vpP.js";import"./index-D5JWzaIV.js";import"./ChartSizeDimensions-DcpLG0d2.js";import"./OffsetShower-BfJno29D.js";import"./PlotAreaShower-DrDSYf2L.js";import"./Symbols-D5HyOKc9.js";import"./symbol-C6JS3ts9.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
