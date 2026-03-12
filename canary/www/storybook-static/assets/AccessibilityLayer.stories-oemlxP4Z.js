import{r as A,e as t}from"./iframe-COcG-qbh.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-Bj1Kn6Ah.js";import{A as E}from"./AreaChart-DbaBkIIP.js";import{C as b}from"./CartesianGrid-1N8_LUDi.js";import{X as d}from"./XAxis-BvRN0x7f.js";import{Y as g}from"./YAxis-D1iCzuYE.js";import{A as a}from"./Area-gX8wfMF4.js";import{T as h}from"./Tooltip-sq3R3vOV.js";import{R as u}from"./RechartsHookInspector-D4zrFLHG.js";import{R as v}from"./arrayEqualityCheck-BeOMvnb3.js";import{L as T}from"./Legend-D0VUjU2p.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C1tql2K4.js";import"./index-L5JLgxKc.js";import"./immer-Ca_zwxaB.js";import"./hooks-B6EdczHv.js";import"./axisSelectors-CYW86iHh.js";import"./d3-scale-CT6TP1ZB.js";import"./zIndexSlice-DLKXsrK7.js";import"./renderedTicksSlice-CPg6Eb9Y.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C0k3xA_C.js";import"./chartDataContext-BfM2rVtS.js";import"./CategoricalChart-DbHJ5slW.js";import"./resolveDefaultProps-B_uk6Xbm.js";import"./CartesianAxis-RY42tSQN.js";import"./Layer-vnezQjXg.js";import"./Text-C_7F8gzT.js";import"./DOMUtils-DToY1wG2.js";import"./Label-DoQmsUBD.js";import"./ZIndexLayer-BbjqRzm7.js";import"./types-BmPLOBN4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C3xLkezj.js";import"./step-CYjHyJAh.js";import"./ReactUtils-ByNOpxgT.js";import"./ActivePoints-BrEavqGN.js";import"./Dot-CVahyVSD.js";import"./RegisterGraphicalItemId-DgZGaJJ7.js";import"./GraphicalItemClipPath-B0HdbPwh.js";import"./SetGraphicalItem-D9CK4gaX.js";import"./useAnimationId-C4wu98Fe.js";import"./getRadiusAndStrokeWidthFromDot-BeBm-eBn.js";import"./graphicalItemSelectors-9vdvgeJj.js";import"./useElementOffset-Cma1-6mE.js";import"./uniqBy-BdlGcYq-.js";import"./iteratee-CmvkIptj.js";import"./Cross-D2fxYFkW.js";import"./Rectangle-DI-yKH8h.js";import"./Sector-DxAh5Ohi.js";import"./index-R98a5OxC.js";import"./ChartSizeDimensions-DH_xn-IL.js";import"./OffsetShower-aZbRgbm7.js";import"./PlotAreaShower-Dce4f1ZD.js";import"./Symbols-BHgUqhVd.js";import"./symbol-DxkjCDul.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
