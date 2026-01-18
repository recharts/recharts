import{e as t,r as A}from"./iframe-oKMzB0d-.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-DpH6RvdW.js";import{R as E}from"./arrayEqualityCheck-Caoo2I2E.js";import{A as a}from"./Area-D5FuYcRe.js";import{L as b}from"./Legend-CLhSxZ7W.js";import{X as d}from"./XAxis-DlRmKJ01.js";import{Y as g}from"./YAxis-DLym79d9.js";import{T as h}from"./Tooltip-B8PD1RTL.js";import{R as u}from"./RechartsHookInspector-BzEUDXeW.js";import{A as v}from"./AreaChart-Bm6vvkem.js";import{C as T}from"./CartesianGrid-5hmKvUrP.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTDVW_mD.js";import"./hooks-CriE4jYz.js";import"./axisSelectors-igA0S6xv.js";import"./zIndexSlice-BjyYTZgT.js";import"./resolveDefaultProps-BTiWYe8E.js";import"./PolarUtils-BvDSiGX_.js";import"./CartesianChart-CEC_RciI.js";import"./chartDataContext-CTkSsRq2.js";import"./CategoricalChart-CKuwRZ5o.js";import"./Curve-C8ob2FQq.js";import"./types-Bjx9mdsH.js";import"./Layer-Drq4I3c8.js";import"./ReactUtils-BHQlFXLR.js";import"./Label-CUg786Ba.js";import"./Text-BAYt6EI9.js";import"./DOMUtils-xOASrBrw.js";import"./ZIndexLayer-pfpD2pdJ.js";import"./ActivePoints-B2gNLb__.js";import"./Dot-p7_Nmurg.js";import"./RegisterGraphicalItemId-Bt6_4oI2.js";import"./GraphicalItemClipPath-AaekTZGq.js";import"./SetGraphicalItem-BmLbSZv4.js";import"./useAnimationId-D0v972Sk.js";import"./getRadiusAndStrokeWidthFromDot-CV18y5aL.js";import"./graphicalItemSelectors-5UOTYK6r.js";import"./Symbols-mKBUz55k.js";import"./useElementOffset-CKxTytD_.js";import"./iteratee-DGg97fx9.js";import"./CartesianAxis-D9OPLMCI.js";import"./Cross-Dk50kqQk.js";import"./Rectangle-CfUKIL1Q.js";import"./Sector-DAIlPrp3.js";import"./index-Bw063qfE.js";import"./ChartSizeDimensions-BmK2dJEG.js";import"./OffsetShower-B2D8CtyY.js";import"./PlotAreaShower-DVDhbnca.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
