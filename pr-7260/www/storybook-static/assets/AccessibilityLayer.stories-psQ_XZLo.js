import{r as A,e as t}from"./iframe-8w6hSOb3.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-BXY8auWm.js";import{A as E}from"./AreaChart-BcoAnolR.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DPfgvCqu.js";import{X as g}from"./XAxis-AMaL4weY.js";import{Y as h}from"./YAxis-Bf2ShXUT.js";import{A as a}from"./Area-B-RtUU4c.js";import{T as u}from"./Tooltip-f2YVQGR8.js";import{R as y}from"./RechartsHookInspector-64iDxMAV.js";import{R as v}from"./arrayEqualityCheck-BcSkIFjy.js";import{L as T}from"./Legend-B3iEZQNB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJbnro3S.js";import"./index-DPLqP4cy.js";import"./immer-CNp4ouR9.js";import"./hooks-DH6TblVT.js";import"./axisSelectors-DJq9vOix.js";import"./d3-scale-DocPO7gd.js";import"./zIndexSlice-xR0tBw_b.js";import"./renderedTicksSlice-CehvSBlF.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bnp5U_KI.js";import"./chartDataContext-CHxjExdF.js";import"./CategoricalChart-C3Pb3oJs.js";import"./resolveDefaultProps-B5HxWc-X.js";import"./CartesianAxis-B-EZEcGt.js";import"./Layer-VbLV2S9I.js";import"./Text-Bl83wQcg.js";import"./DOMUtils-DpW_Dxz8.js";import"./Label-CbTww8i0.js";import"./ZIndexLayer-BZxHBglw.js";import"./types-DDD23-V2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DCDk8LQV.js";import"./step-CO9P-pBw.js";import"./ReactUtils-RNztsw35.js";import"./ActivePoints-c5MJ5OkK.js";import"./Dot-B5t0Roay.js";import"./RegisterGraphicalItemId-vJe763ER.js";import"./GraphicalItemClipPath-CMalPiCh.js";import"./SetGraphicalItem-CLkVCWjn.js";import"./useAnimationId-kYjgFxKg.js";import"./getRadiusAndStrokeWidthFromDot-BGkBgNmA.js";import"./graphicalItemSelectors-CTgr6Ywa.js";import"./useElementOffset-BS3k8eV3.js";import"./uniqBy-BKrVti4k.js";import"./iteratee-E4lAKDYa.js";import"./Cross-RsPs8K3p.js";import"./Rectangle-CYl8kbGp.js";import"./Sector-C0Mog3VL.js";import"./index-1JoQw62M.js";import"./ChartSizeDimensions-BdSUC2dN.js";import"./OffsetShower-CDnSCRp1.js";import"./PlotAreaShower-xfHEq74j.js";import"./Symbols-HCV45nTw.js";import"./symbol-DDPk1XI3.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
