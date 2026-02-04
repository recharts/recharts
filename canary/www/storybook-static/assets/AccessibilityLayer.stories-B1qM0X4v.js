import{e as t,r as A}from"./iframe-2vdihYaA.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-owjmqR1m.js";import{R as E}from"./arrayEqualityCheck-Cz6bem1a.js";import{A as a}from"./Area-CZtkb-cS.js";import{L as b}from"./Legend-CFipEMHM.js";import{X as d}from"./XAxis-Dj-4Nnot.js";import{Y as g}from"./YAxis-DeIibkX2.js";import{T as h}from"./Tooltip-BAqCLzZ_.js";import{R as u}from"./RechartsHookInspector-CqgE5Nv7.js";import{A as v}from"./AreaChart-DXrk1KFy.js";import{C as T}from"./CartesianGrid-DZECSw9p.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BKqPTBXa.js";import"./hooks-DRq4Dknc.js";import"./axisSelectors-B6I2jDAj.js";import"./zIndexSlice-_CZsqZq4.js";import"./resolveDefaultProps-BMo1MjoM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CgDezk2P.js";import"./chartDataContext-DF08vkso.js";import"./CategoricalChart-CTkRrNay.js";import"./Curve-CO1p58ib.js";import"./types-BVLdKdSl.js";import"./Layer-BY-fsyoM.js";import"./ReactUtils-YY1V_Sy8.js";import"./Label-DyVMIxDt.js";import"./Text-B79Sux8Q.js";import"./DOMUtils-CHIYEZ9y.js";import"./ZIndexLayer-BhK_pYZk.js";import"./ActivePoints-BSNIUG_f.js";import"./Dot-CgptiLQj.js";import"./RegisterGraphicalItemId-BxLSDVx1.js";import"./GraphicalItemClipPath-ZZzgSpw_.js";import"./SetGraphicalItem-B1yLHWtu.js";import"./useAnimationId-C00yQmDC.js";import"./getRadiusAndStrokeWidthFromDot-Ryy3WNXf.js";import"./graphicalItemSelectors-BTuYPuVE.js";import"./Symbols-DySEQhPv.js";import"./useElementOffset-CC3Rdwqu.js";import"./iteratee-BCiuY1w8.js";import"./CartesianAxis-BzbcZQiG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-NDx5yO40.js";import"./Rectangle-LulPmG5i.js";import"./Sector-BfatqE6A.js";import"./index-DIOAgVA6.js";import"./ChartSizeDimensions-C8811dw0.js";import"./OffsetShower-ePUr3CkU.js";import"./PlotAreaShower-D0LZ_i9v.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
