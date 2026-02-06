import{e as t,r as A}from"./iframe-DxZX8v3W.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-BGkEXwf1.js";import{R as E}from"./arrayEqualityCheck-CHFkqTV_.js";import{A as a}from"./Area-_r78wk7L.js";import{L as b}from"./Legend-BW6GuNFW.js";import{X as d}from"./XAxis-DzPSb7qL.js";import{Y as g}from"./YAxis-CpMOxs2p.js";import{T as h}from"./Tooltip-AYYQXPAP.js";import{R as u}from"./RechartsHookInspector-EozXGI-d.js";import{A as v}from"./AreaChart-SjeJ2okw.js";import{C as T}from"./CartesianGrid-DQNeuEVT.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMTy2N8_.js";import"./hooks-B7xKXdiJ.js";import"./axisSelectors-CsqEoZpJ.js";import"./zIndexSlice-DbH822fK.js";import"./resolveDefaultProps-DhuxpMgF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGtowRh8.js";import"./chartDataContext-kn-jHXwi.js";import"./CategoricalChart-CLJuTuVW.js";import"./Curve-amoMOh-y.js";import"./types-DXQoRjfG.js";import"./Layer-BPZWkKY5.js";import"./ReactUtils-BR0ZodR6.js";import"./Label-DcVTU5jd.js";import"./Text-BjDK3asE.js";import"./DOMUtils-BxXkT_Dg.js";import"./ZIndexLayer-u2cA8wLh.js";import"./ActivePoints-ChW3PNAb.js";import"./Dot-6gTSKkj_.js";import"./RegisterGraphicalItemId-DtMUd9c3.js";import"./GraphicalItemClipPath-DHNbR-WC.js";import"./SetGraphicalItem-BXOgfpPM.js";import"./useAnimationId-DTZHXicx.js";import"./getRadiusAndStrokeWidthFromDot-9yl6HY0F.js";import"./graphicalItemSelectors-DQwtEIC6.js";import"./Symbols-ByPpWVp2.js";import"./useElementOffset-BYdkRgKD.js";import"./iteratee-Bw9xrDoj.js";import"./CartesianAxis-DPUMtDOy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-BYg9PL7z.js";import"./Rectangle-ZKdZP-LA.js";import"./Sector-C4RYsjmR.js";import"./index-59kLrafc.js";import"./ChartSizeDimensions-DNmKalNs.js";import"./OffsetShower-Bf42ilrd.js";import"./PlotAreaShower-CjZ5fG5L.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
