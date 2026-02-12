import{e as t,r as A}from"./iframe-Dim5_luC.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-DbnqK2Sk.js";import{R as E}from"./arrayEqualityCheck-DY4kDyOd.js";import{A as a}from"./Area-CTXxFcwD.js";import{L as b}from"./Legend-Br876WZe.js";import{X as d}from"./XAxis-CajpKvi_.js";import{Y as g}from"./YAxis-BX5wgPpW.js";import{T as h}from"./Tooltip-DC6wlv6_.js";import{R as u}from"./RechartsHookInspector-P8u42xZf.js";import{A as v}from"./AreaChart-DmjRqc4H.js";import{C as T}from"./CartesianGrid-_WEiigJ6.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BTGjRieY.js";import"./hooks-DQwyA4z1.js";import"./axisSelectors-CiSFc718.js";import"./zIndexSlice-DWwDEXe3.js";import"./resolveDefaultProps-D3nhBTU3.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B-LiUj8Z.js";import"./chartDataContext-yPgkGQSE.js";import"./CategoricalChart-CIgbHOM5.js";import"./Curve-C8164FP7.js";import"./types-BxKSV5b4.js";import"./Layer-DsncGJyW.js";import"./ReactUtils-B4IuMLLa.js";import"./Label-g1K_6191.js";import"./Text-POGh3Ki-.js";import"./DOMUtils-OmeTbLvk.js";import"./ZIndexLayer-D1v8rxBH.js";import"./ActivePoints-BWj_K0bx.js";import"./Dot-CrMbwoD0.js";import"./RegisterGraphicalItemId-BV1l7uMF.js";import"./GraphicalItemClipPath-D0CZwxPN.js";import"./SetGraphicalItem-BevZjJX4.js";import"./useAnimationId-BMRzQV3k.js";import"./getRadiusAndStrokeWidthFromDot-B0s95MF2.js";import"./graphicalItemSelectors-C8hsMw3D.js";import"./Symbols-BQHr33CI.js";import"./useElementOffset-DTeN2fqC.js";import"./iteratee-C63kfqEP.js";import"./CartesianAxis-CuZKHGcg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-C0n50i0p.js";import"./Rectangle-BRrYL6fC.js";import"./Sector-DyfQSrST.js";import"./index-BcXSgkDx.js";import"./ChartSizeDimensions-DhXaHeyJ.js";import"./OffsetShower-BPrV8Xge.js";import"./PlotAreaShower-BgwWJf6_.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
