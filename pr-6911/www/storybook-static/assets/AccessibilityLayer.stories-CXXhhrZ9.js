import{e as t,r as A}from"./iframe-Bp7wnAMR.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-DcPTD6P5.js";import{R as E}from"./arrayEqualityCheck-DxE10Oy_.js";import{A as a}from"./Area-GuMkRfH3.js";import{L as b}from"./Legend-BaTaG579.js";import{X as d}from"./XAxis-CYwkaB_4.js";import{Y as g}from"./YAxis-8qVMRpFM.js";import{T as h}from"./Tooltip-DUWliZ2b.js";import{R as u}from"./RechartsHookInspector-DHfob8nJ.js";import{A as v}from"./AreaChart-CuH204Ou.js";import{C as T}from"./CartesianGrid-BQDtpVC4.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4djzgpQ.js";import"./hooks-CNofKjzo.js";import"./axisSelectors-hHhjBbva.js";import"./zIndexSlice-CRBGxDjV.js";import"./resolveDefaultProps-73ODOPj1.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Dno3SfYe.js";import"./chartDataContext-nk0Pjs0Z.js";import"./CategoricalChart-CZ-Ak8iT.js";import"./Curve-C9HH72jI.js";import"./types-7BwnP8OD.js";import"./Layer-7joqFoN-.js";import"./ReactUtils-DrfTY3Od.js";import"./Label-Tu9yek-h.js";import"./Text-DwUQNXUe.js";import"./DOMUtils-dKVtaV9j.js";import"./ZIndexLayer-CSCYRG22.js";import"./ActivePoints-Ctmx7Brj.js";import"./Dot-CALDlJiD.js";import"./RegisterGraphicalItemId-DL9uxaj9.js";import"./GraphicalItemClipPath-8AiwXJLZ.js";import"./SetGraphicalItem-Bo7sM5w_.js";import"./useAnimationId-goMb22IV.js";import"./getRadiusAndStrokeWidthFromDot-FCZZS-qa.js";import"./graphicalItemSelectors-y2G6qR0K.js";import"./Symbols-B3gxOXiD.js";import"./useElementOffset-B1-MS-fR.js";import"./iteratee-C4Py6258.js";import"./CartesianAxis-j6YjD7Sk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-C05zcV3J.js";import"./Rectangle-Ck3EAtYG.js";import"./Sector-BGL47Yd8.js";import"./index-D6AxLi4e.js";import"./ChartSizeDimensions-DwflQZom.js";import"./OffsetShower-B6O-ZqIp.js";import"./PlotAreaShower-B0Yqyt4M.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Tt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Tt as __namedExportsOrder,vt as default};
