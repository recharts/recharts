import{r as A,e as t}from"./iframe-BTtdS09W.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-llfZcW-b.js";import{A as E}from"./AreaChart-wQKHUo2M.js";import{C as b}from"./CartesianGrid-DSOp2x3E.js";import{X as d}from"./XAxis-BIGryZaf.js";import{Y as g}from"./YAxis-CGeIp8Ig.js";import{A as a}from"./Area-CVfKFi31.js";import{T as h}from"./Tooltip-CSxEhPUY.js";import{R as u}from"./RechartsHookInspector-CAlJBqiK.js";import{R as v}from"./arrayEqualityCheck-Cr7uheU5.js";import{L as T}from"./Legend-CcmMXJ4b.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVSfFbBC.js";import"./index-qoIXPrbj.js";import"./immer-h2tBWHbd.js";import"./hooks-D1OOIbEZ.js";import"./axisSelectors-C-C-XPOd.js";import"./d3-scale-cMqm19h5.js";import"./zIndexSlice-upTe-uMW.js";import"./renderedTicksSlice-DJkpJNhd.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ClmLpAb4.js";import"./chartDataContext-ByF2cza-.js";import"./CategoricalChart-DC4azccj.js";import"./resolveDefaultProps-BNjLFhbQ.js";import"./CartesianAxis-Bttov5cI.js";import"./Layer-CG03jz1V.js";import"./Text-bWAVTtUg.js";import"./DOMUtils-WKcDWUte.js";import"./Label-DQKpHpKK.js";import"./ZIndexLayer-CbMDIpL4.js";import"./types-DbbwF8j4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DdtOV6ZM.js";import"./step-8k9vNXVF.js";import"./ReactUtils-DVOsTE35.js";import"./ActivePoints-B3QE05Z9.js";import"./Dot-PYiq21Zo.js";import"./RegisterGraphicalItemId-3lWinSBd.js";import"./GraphicalItemClipPath-5TXw2OKP.js";import"./SetGraphicalItem-BR57Hu8e.js";import"./useAnimationId-D12e2U_3.js";import"./getRadiusAndStrokeWidthFromDot-B3UN4p5A.js";import"./graphicalItemSelectors-BFealQV5.js";import"./useElementOffset-CBCTXrKZ.js";import"./uniqBy-i0BZM8rB.js";import"./iteratee-sVBPIoKX.js";import"./Cross-DiwCuDy9.js";import"./Rectangle-CIL45UrG.js";import"./Sector-U4JfKldd.js";import"./index-DrM9enLn.js";import"./ChartSizeDimensions-DNML0thn.js";import"./OffsetShower-CC2yWEZE.js";import"./PlotAreaShower-4F-cactL.js";import"./Symbols-DPD-AVYc.js";import"./symbol-C5fxreGH.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
