import{u as A,e as t}from"./iframe-DrZHGfnp.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-DxmmuLi3.js";import{A as E}from"./AreaChart-2Nng9HW5.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-CyZhB5js.js";import{X as g}from"./XAxis-CfPxufGn.js";import{Y as h}from"./YAxis-BDktYU23.js";import{A as a}from"./Area-BisN3tL_.js";import{T as u}from"./Tooltip-JtQYOAY5.js";import{R as y}from"./RechartsHookInspector-C7Iml_JQ.js";import{g as v}from"./arrayEqualityCheck-BU1FgpAp.js";import{L as T}from"./Legend-CpyzK0FE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7Mz9FPG.js";import"./index-BP-Nf1tN.js";import"./immer-D0UXwCcn.js";import"./hooks-D3ynsMIn.js";import"./axisSelectors-m6_CTWOp.js";import"./d3-scale-txqkfOII.js";import"./zIndexSlice-D-dyI62l.js";import"./renderedTicksSlice-7FEKlWww.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJW3KXl1.js";import"./chartDataContext-C7FGjj0C.js";import"./CategoricalChart-iLXWxvTy.js";import"./resolveDefaultProps-DYZAgT61.js";import"./CartesianAxis-DI4oFfLH.js";import"./Layer-ClTbBP2Y.js";import"./Text-BwWh8Zp8.js";import"./DOMUtils-DJHj6OuI.js";import"./Label-BqIF3DzG.js";import"./ZIndexLayer-BfJNfeY9.js";import"./types-6QYLxKbI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BOI2pjPZ.js";import"./step-BToukfgR.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DDlt2sQ2.js";import"./ActivePoints-Ef6nRbul.js";import"./Dot-DoeZby35.js";import"./RegisterGraphicalItemId-BFqXK8dS.js";import"./GraphicalItemClipPath-DRJNib_j.js";import"./SetGraphicalItem-BQUpenlh.js";import"./useAnimationId-BQVYm0pl.js";import"./getRadiusAndStrokeWidthFromDot-DUr3gs5u.js";import"./graphicalItemSelectors-DnMGtw1m.js";import"./useElementOffset-CqMnl3PK.js";import"./uniqBy-XAk6kl3o.js";import"./iteratee-usRtL8cc.js";import"./Cross-B5ARFrTc.js";import"./Rectangle-D6rErMHV.js";import"./Sector-DH0jrwMS.js";import"./index-BaPlyvUD.js";import"./ChartSizeDimensions-y6v6hFmg.js";import"./OffsetShower-BQ-We3NI.js";import"./PlotAreaShower-DUTHK_JT.js";import"./Symbols-B4qAZBiK.js";import"./symbol-S8QHyV4z.js";const Yt={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
