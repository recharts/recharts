import{e as t,r as A}from"./iframe-DDewu6bn.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-A2O41DUS.js";import{R as E}from"./arrayEqualityCheck-DXTExga0.js";import{A as a}from"./Area-V3XjRICb.js";import{L as b}from"./Legend-BNNypsMi.js";import{X as d}from"./XAxis-8FAWklv8.js";import{Y as g}from"./YAxis-D9vEUw1w.js";import{T as h}from"./Tooltip-FeQX2OCR.js";import{R as u}from"./RechartsHookInspector-CD3vvvGL.js";import{A as v}from"./AreaChart-CDQz-Tde.js";import{C as T}from"./CartesianGrid-Bh2qCtop.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzQiRy-1.js";import"./hooks-DyhX_5uQ.js";import"./axisSelectors-DesRmFZd.js";import"./zIndexSlice-DyN1nTyR.js";import"./resolveDefaultProps-B5JubxST.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C8I-Y6aj.js";import"./chartDataContext-CbJjYI1P.js";import"./CategoricalChart-hCldkx1o.js";import"./Curve-BBC21-sm.js";import"./types-BJyKbQEz.js";import"./Layer-DqLbE6Uv.js";import"./ReactUtils-DtjzxdpY.js";import"./Label-J4ZfWAib.js";import"./Text-ytjI21CM.js";import"./DOMUtils-Cf-jMyF1.js";import"./ZIndexLayer-mUyPWZcK.js";import"./ActivePoints-6rWUYf_F.js";import"./Dot-CCTp0i8d.js";import"./RegisterGraphicalItemId-CHV5Wa4s.js";import"./GraphicalItemClipPath-B9jmiGSm.js";import"./SetGraphicalItem-CnIZ3Mlk.js";import"./useAnimationId-CjgQOJMR.js";import"./getRadiusAndStrokeWidthFromDot-dhATJ_xE.js";import"./graphicalItemSelectors-aUvBtoK5.js";import"./Symbols-DzJjx9Jp.js";import"./useElementOffset-BW_oDTfp.js";import"./iteratee-KFwqOqNI.js";import"./CartesianAxis-D7kXIk58.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-DGZ-nkHY.js";import"./Rectangle-Don_yAtF.js";import"./Sector-efCwWuY6.js";import"./index-BXZrkBkN.js";import"./ChartSizeDimensions-BLu5DM0Z.js";import"./OffsetShower-D84gsABh.js";import"./PlotAreaShower-CEgKBwqt.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
