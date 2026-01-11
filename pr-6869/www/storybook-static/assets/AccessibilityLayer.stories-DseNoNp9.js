import{e as t,r as k}from"./iframe-YjsnRhKk.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-DHA8rPkN.js";import{R as b}from"./arrayEqualityCheck-BJwRC6MI.js";import{A as a}from"./Area-BsNYEbUZ.js";import{L as C}from"./Legend-BJ9mKJX0.js";import{X as g}from"./XAxis-B2tLltrx.js";import{Y as h}from"./YAxis-Dkcj0U0j.js";import{T as u}from"./Tooltip-CjaAafIJ.js";import{R as y}from"./RechartsHookInspector-B9NqqHZV.js";import{A as v}from"./AreaChart-B74xgUY_.js";import{C as T}from"./CartesianGrid-DdXZU_EM.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D804dJFF.js";import"./hooks-ybSWjp7E.js";import"./axisSelectors-DDrqqiFr.js";import"./zIndexSlice-CrYhtLvr.js";import"./resolveDefaultProps-Z_TS6-YD.js";import"./PolarUtils-CY6yHRxS.js";import"./CartesianChart-BXbZQS9i.js";import"./chartDataContext-DdZy89Ic.js";import"./CategoricalChart-DshWcI8J.js";import"./Curve-C9YHabA2.js";import"./types-B3ZyTjxE.js";import"./Layer-B5j-14SA.js";import"./ReactUtils-DPXAlJoJ.js";import"./Label-CLhSutXl.js";import"./Text-B-IGFYif.js";import"./DOMUtils-B8xMLIPn.js";import"./ZIndexLayer-B9GJT-1H.js";import"./ActivePoints-DAneNfUf.js";import"./Dot-CkNBEorS.js";import"./RegisterGraphicalItemId-iR66q9wz.js";import"./GraphicalItemClipPath-Ctr3letV.js";import"./SetGraphicalItem-CpQPspCO.js";import"./useAnimationId-BZSEvVKv.js";import"./getRadiusAndStrokeWidthFromDot-frfqIR4_.js";import"./graphicalItemSelectors-BtIB5oqM.js";import"./Symbols-BEUnwuzy.js";import"./useElementOffset-BorWrtVN.js";import"./iteratee-BmPeyMV0.js";import"./CartesianAxis-B3Ooqwxn.js";import"./Cross-CLE105WL.js";import"./Rectangle-DuxV1NLN.js";import"./Sector-COEdyvE7.js";import"./index-D4ADZzYF.js";import"./ChartSizeDimensions-pADZR5mB.js";import"./OffsetShower-BC6NiJ8x.js";import"./PlotAreaShower-B40cJmGZ.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
  args: {
    ...getStoryArgsFromArgsTypesObject(General)
  },
  parameters: {
    controls: {
      include: Object.keys(General)
    },
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,Ct as default};
