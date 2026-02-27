import{r as A,e as t}from"./iframe-8sIubbdi.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-uiW_8j2H.js";import{A as E}from"./AreaChart-BoR-yQ3T.js";import{C as b}from"./CartesianGrid-DEIWEGJ2.js";import{X as d}from"./XAxis-IWyMdbO5.js";import{Y as g}from"./YAxis-CDYxK6mN.js";import{A as a}from"./Area-BA3pf917.js";import{T as h}from"./Tooltip-CC9FVXo5.js";import{R as u}from"./RechartsHookInspector-AlYSKZYm.js";import{R as v}from"./arrayEqualityCheck-DbCj9c-Y.js";import{L as T}from"./Legend-zzGAIuQ_.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D30EcdBX.js";import"./index-CbU0dTJ6.js";import"./immer-BT2n2B7O.js";import"./hooks-D_DW5Oi2.js";import"./axisSelectors-DxwSejiD.js";import"./d3-scale-DEnCLOEW.js";import"./zIndexSlice-VsYA40So.js";import"./renderedTicksSlice-CfkkEf9Z.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CXlojrwJ.js";import"./chartDataContext-4cME9qvC.js";import"./CategoricalChart-C7NQof8g.js";import"./resolveDefaultProps-DuCQFLVY.js";import"./CartesianAxis-DgCpBkCM.js";import"./Layer-BRXiwqet.js";import"./Text-3TK1Y5vF.js";import"./DOMUtils-DytWm70I.js";import"./Label-DilR1ra4.js";import"./ZIndexLayer-Ts04gVrK.js";import"./types-Bp02LWfB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BZpcUU-T.js";import"./step-CjuXRgh8.js";import"./ReactUtils-BXvpQNi2.js";import"./ActivePoints-KfMw2aSf.js";import"./Dot-TuBc5AFD.js";import"./RegisterGraphicalItemId-Cm3HEb7M.js";import"./GraphicalItemClipPath-C8kD9Qqm.js";import"./SetGraphicalItem-CsZep-cL.js";import"./useAnimationId-De5EZ4DF.js";import"./getRadiusAndStrokeWidthFromDot-7blQF-c9.js";import"./graphicalItemSelectors-CPoOjEEq.js";import"./useElementOffset-BE_YSGNC.js";import"./uniqBy-BpX7jN5I.js";import"./iteratee-B7Z3RNWE.js";import"./Cross-ChGQm2LJ.js";import"./Rectangle-2TS-ysJA.js";import"./Sector-CO7y0BXS.js";import"./index-QIusEcOA.js";import"./ChartSizeDimensions-B-IxYWC1.js";import"./OffsetShower-CFWyxT0Z.js";import"./PlotAreaShower-CXMf_89y.js";import"./Symbols-DYzrjJ12.js";import"./symbol-CzQ70XR0.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
