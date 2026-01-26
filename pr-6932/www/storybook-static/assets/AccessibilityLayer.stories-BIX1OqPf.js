import{e as t,r as A}from"./iframe-CWA75x6f.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-CikPPUoS.js";import{R as E}from"./arrayEqualityCheck-BbPHrIiT.js";import{A as a}from"./Area-DUf504L_.js";import{L as b}from"./Legend-5u77eCaZ.js";import{X as d}from"./XAxis-DIb7kM4Q.js";import{Y as g}from"./YAxis--OX2yYy6.js";import{T as h}from"./Tooltip-CxSt-rF6.js";import{R as u}from"./RechartsHookInspector-SnjudCfW.js";import{A as v}from"./AreaChart-DSz6s5pI.js";import{C as T}from"./CartesianGrid-BBd7sKWs.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./zIndexSlice-BxnMOy2T.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./Curve-DzqGeZIr.js";import"./types-ieTTG77J.js";import"./Layer-Dyb8NBHJ.js";import"./ReactUtils-BsQxKoDK.js";import"./Label-QjXIZu_1.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./ZIndexLayer-C1tQmmyV.js";import"./ActivePoints-Dmg5s4MQ.js";import"./Dot-Bdf28i8O.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./GraphicalItemClipPath-BK1Cw2_u.js";import"./SetGraphicalItem-ERR7406L.js";import"./useAnimationId-CiXad0CX.js";import"./getRadiusAndStrokeWidthFromDot-BEv_HS27.js";import"./graphicalItemSelectors-DNZwly0D.js";import"./Symbols-BfpcWYyT.js";import"./useElementOffset-Xph5u3Ao.js";import"./iteratee-YaRpC3LM.js";import"./CartesianAxis-CEnZCSRe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-CyOmNZiN.js";import"./Rectangle-BDQ_yE-B.js";import"./Sector-CjAZzh8K.js";import"./index-rMQlUXxN.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
