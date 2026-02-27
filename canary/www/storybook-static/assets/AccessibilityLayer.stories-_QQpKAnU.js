import{r as A,e as t}from"./iframe-Dd1Sjt9X.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CuflWUWP.js";import{A as E}from"./AreaChart-CL97w2KJ.js";import{C as b}from"./CartesianGrid-VgSpPdk9.js";import{X as d}from"./XAxis-BYGa6kOu.js";import{Y as g}from"./YAxis-BRdJhjsx.js";import{A as a}from"./Area-D4SO8TUW.js";import{T as h}from"./Tooltip-BaKcSW8R.js";import{R as u}from"./RechartsHookInspector-Cr2Johcx.js";import{R as v}from"./arrayEqualityCheck-pUdtrDKv.js";import{L as T}from"./Legend-Cqiyijne.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dw3RQG7d.js";import"./index-DHxloPwC.js";import"./immer-ezkOMCj7.js";import"./hooks-CKgsmzQh.js";import"./axisSelectors-DCUpOlmc.js";import"./d3-scale-BBdKeTjL.js";import"./zIndexSlice-B2TlWuzN.js";import"./renderedTicksSlice-DDOiTdbf.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BimCUxdh.js";import"./chartDataContext-CLOoHHQa.js";import"./CategoricalChart-CU3zaaGt.js";import"./resolveDefaultProps-C6lHiyqW.js";import"./CartesianAxis-CovsPuDZ.js";import"./Layer-CX4gucce.js";import"./Text-Cl6XBoxV.js";import"./DOMUtils-BIFKO-UG.js";import"./Label-ByOVYkgq.js";import"./ZIndexLayer-nfwFwrW8.js";import"./types-5Z667yyH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DCc30kqb.js";import"./step-3UMSkQg1.js";import"./ReactUtils-0A2SPQqI.js";import"./ActivePoints-DahGmIAZ.js";import"./Dot-BMZXiNKw.js";import"./RegisterGraphicalItemId-Cz8x82sR.js";import"./GraphicalItemClipPath-DOJdP2rh.js";import"./SetGraphicalItem-DT-0SkIe.js";import"./useAnimationId-ax-iI9cP.js";import"./getRadiusAndStrokeWidthFromDot-DKdUNLBw.js";import"./graphicalItemSelectors-CSqBE18Y.js";import"./useElementOffset-BjCP6cea.js";import"./uniqBy-DVrqLngK.js";import"./iteratee-DQ3FPWwk.js";import"./Cross-DvE5CAZT.js";import"./Rectangle-ChXOGBDT.js";import"./Sector-C-MT-tlR.js";import"./index-CAwGKYht.js";import"./ChartSizeDimensions-CyTaJmPr.js";import"./OffsetShower-BM6oyifk.js";import"./PlotAreaShower-D-MhE31R.js";import"./Symbols-nv82Msvy.js";import"./symbol-DU1W-Oc6.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
