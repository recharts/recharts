import{r as A,e as t}from"./iframe-BRfjO5eG.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-AJ-ju0lV.js";import{A as E}from"./AreaChart-cZlagtru.js";import{C as b}from"./CartesianGrid-BhWUh4J_.js";import{X as d}from"./XAxis-_RHNkAyf.js";import{Y as g}from"./YAxis-SYTBy6_O.js";import{A as a}from"./Area-D2kHZ1nG.js";import{T as h}from"./Tooltip-7EGZtEd5.js";import{R as u}from"./RechartsHookInspector-DqZpsbqV.js";import{R as v}from"./arrayEqualityCheck-D8wbB52K.js";import{L as T}from"./Legend-CW_qU-or.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-t74pKe.js";import"./index-Ds6oaLH2.js";import"./immer-6Mf_l_pR.js";import"./hooks-BpX4ZWOU.js";import"./axisSelectors-CiymgkMX.js";import"./d3-scale-QcLEkwbV.js";import"./zIndexSlice-DJoH0JSW.js";import"./renderedTicksSlice-BaIKxrOg.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BILJUYgv.js";import"./chartDataContext-ffjZymjs.js";import"./CategoricalChart-D80geuJg.js";import"./resolveDefaultProps-DJkK52Dr.js";import"./CartesianAxis-DDdCZP34.js";import"./Layer-Djm95T9f.js";import"./Text-CAzsJ-UY.js";import"./DOMUtils-e5Yde7hA.js";import"./Label-C3-kCUB1.js";import"./ZIndexLayer-x9RJx9gY.js";import"./types-CJwNH7dd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-c7RsuyU-.js";import"./step-ylhKLd0a.js";import"./ReactUtils-Dg4XVGmm.js";import"./ActivePoints-CLnDBSxm.js";import"./Dot-y-sJeOCR.js";import"./RegisterGraphicalItemId-CTGxX7GS.js";import"./GraphicalItemClipPath-BNX-hUwf.js";import"./SetGraphicalItem-bUxjzC-C.js";import"./useAnimationId-fkzgSDca.js";import"./getRadiusAndStrokeWidthFromDot-CwUTXUzg.js";import"./graphicalItemSelectors-DYhjC6IF.js";import"./useElementOffset-DlikKlj3.js";import"./uniqBy-DF1aIDmX.js";import"./iteratee-Da_ecSU7.js";import"./Cross-B8JNfXdK.js";import"./Rectangle-Dx7CcXS4.js";import"./Sector-HbpHqeJ3.js";import"./index-CKyyuDQs.js";import"./ChartSizeDimensions-BOoNMCuu.js";import"./OffsetShower-ChoSpo1k.js";import"./PlotAreaShower-BU5aAxms.js";import"./Symbols-uMYMnubp.js";import"./symbol-DPSABYJO.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
