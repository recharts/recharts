import{u as A,e as t}from"./iframe-CA2bza4n.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-BKM2Jk4b.js";import{A as E}from"./AreaChart-CiE9tAR1.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-D-uFJsc9.js";import{X as g}from"./XAxis-CURUMdQ0.js";import{Y as h}from"./YAxis-DFFbe6p-.js";import{A as a}from"./Area-BtxFyoBj.js";import{T as u}from"./Tooltip-3nmuHPLR.js";import{R as y}from"./RechartsHookInspector-QZX819t0.js";import{g as v}from"./arrayEqualityCheck-DAdSVd1l.js";import{L as T}from"./Legend-CdIG9cbK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5q3WxuV.js";import"./index-CsA15_6S.js";import"./immer-DasQIOIX.js";import"./hooks-C5pIdCPM.js";import"./axisSelectors-To1e2V6V.js";import"./d3-scale-rP3V7GwL.js";import"./zIndexSlice-CSAGQhtB.js";import"./renderedTicksSlice-DH7mHkyS.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DK-SLcv_.js";import"./chartDataContext-DoiK_cA8.js";import"./CategoricalChart-eE49ceQM.js";import"./resolveDefaultProps-BnLaySgP.js";import"./CartesianAxis-4aGY63Ak.js";import"./Layer-2pQ-0vOW.js";import"./Text-GI5oKEYa.js";import"./DOMUtils-DrG-za0U.js";import"./Label-BmhtQvJ8.js";import"./ZIndexLayer-_xwh97le.js";import"./types-CZ_BmrzD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-7nNudVZs.js";import"./step-BK3O3AGs.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CEO6nkw8.js";import"./ActivePoints-rXvPQbuC.js";import"./Dot-C7a5PgHO.js";import"./RegisterGraphicalItemId-DMySGUM1.js";import"./GraphicalItemClipPath-qf9cPUyg.js";import"./SetGraphicalItem-iX6trfIf.js";import"./useAnimationId-CvBgWeeZ.js";import"./getRadiusAndStrokeWidthFromDot-M3B-XLBm.js";import"./graphicalItemSelectors-Cx0iqyOb.js";import"./useElementOffset-DkAsfz-Q.js";import"./uniqBy-BH7dCUiF.js";import"./iteratee-DL8B346b.js";import"./Cross-D-jXg4F5.js";import"./Rectangle-CDekyl0v.js";import"./Sector-C2o8QhlW.js";import"./index-DZjuuzp6.js";import"./ChartSizeDimensions-BRPqgDFi.js";import"./OffsetShower-CTWF0vR4.js";import"./PlotAreaShower-CqWXxpLn.js";import"./Symbols-DX9XhuTU.js";import"./symbol-BQO-r6kd.js";const Yt={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
