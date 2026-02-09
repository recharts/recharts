import{e as t,r as A}from"./iframe-Bm_dlztP.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-DyBYNAPL.js";import{R as E}from"./arrayEqualityCheck-BKx_y40S.js";import{A as a}from"./Area-m5csQfYr.js";import{L as b}from"./Legend-Dzh3BOn7.js";import{X as d}from"./XAxis-DiBdkzoV.js";import{Y as g}from"./YAxis-Dt19AUea.js";import{T as h}from"./Tooltip-D5YK1Rdo.js";import{R as u}from"./RechartsHookInspector-CZNQLUTJ.js";import{A as v}from"./AreaChart-B8X02vTq.js";import{C as T}from"./CartesianGrid-D8kzHBwE.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BufFVb6a.js";import"./hooks-QfdSjeut.js";import"./axisSelectors-BUAas6a1.js";import"./zIndexSlice-Bq54Z1bK.js";import"./resolveDefaultProps-DAVx7IVS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BEFObzU7.js";import"./chartDataContext-D60asm_F.js";import"./CategoricalChart-DinCBVKr.js";import"./Curve-D1sI4FDZ.js";import"./types-DmFvG4SC.js";import"./Layer-DqzpUDSE.js";import"./ReactUtils-278YW1x2.js";import"./Label-CDVZMFBi.js";import"./Text-BE0vw9O_.js";import"./DOMUtils-BT5kncNa.js";import"./ZIndexLayer-BWJMOT1A.js";import"./ActivePoints-CYA336oa.js";import"./Dot-DVC6PvDp.js";import"./RegisterGraphicalItemId-Fy4B400g.js";import"./GraphicalItemClipPath-DBcACHox.js";import"./SetGraphicalItem-C3DJs7FG.js";import"./useAnimationId-DL43TA5B.js";import"./getRadiusAndStrokeWidthFromDot-zhMizOQu.js";import"./graphicalItemSelectors-DtgjuJtM.js";import"./Symbols-CIac5k7Z.js";import"./useElementOffset-H-NWySai.js";import"./iteratee-C4Ua_ZlD.js";import"./CartesianAxis-Df-SQWPS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-Bc0M8izX.js";import"./Rectangle-CF3NoYDn.js";import"./Sector-Tp_jaJNZ.js";import"./index-DBvu736D.js";import"./ChartSizeDimensions-vZmS1AK4.js";import"./OffsetShower-D1dBuDTC.js";import"./PlotAreaShower-CncsJcTH.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
