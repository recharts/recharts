import{r as A,e as t}from"./iframe-BM7P_3hj.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-EZo1iYMi.js";import{A as E}from"./AreaChart-CZj9I89z.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dq2Jr_Ri.js";import{X as g}from"./XAxis-C_LpUhcR.js";import{Y as h}from"./YAxis-BBUcqCa1.js";import{A as a}from"./Area-CLPntrQA.js";import{T as u}from"./Tooltip-C8QZFWX9.js";import{R as y}from"./RechartsHookInspector-DIlL8ISE.js";import{R as v}from"./arrayEqualityCheck-Bmgq3ZTz.js";import{L as T}from"./Legend-v7RNUMCE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B8tVHnOf.js";import"./index-Xlum1YFK.js";import"./immer-D-2u7HXy.js";import"./hooks-BY0xPmaj.js";import"./axisSelectors-Dx6sVhYx.js";import"./d3-scale-B0w3FH9e.js";import"./zIndexSlice-jDjA289q.js";import"./renderedTicksSlice-DVjCr-Qu.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Be0mgfMK.js";import"./chartDataContext-CJ-F_waf.js";import"./CategoricalChart-CRvKBBfd.js";import"./resolveDefaultProps-CZ0zKn9L.js";import"./CartesianAxis-BrBA7Fo6.js";import"./Layer-C6LffHMU.js";import"./Text-CQ7mU3s7.js";import"./DOMUtils-DrlqJZq7.js";import"./Label-BQD1_uHZ.js";import"./ZIndexLayer-D7eOOyk7.js";import"./types-o-wQVJEv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CqITwbJh.js";import"./step-DyBB5gGy.js";import"./ReactUtils-DyDnYFSa.js";import"./ActivePoints-CM_0l3Rg.js";import"./Dot-C4-mkX5o.js";import"./RegisterGraphicalItemId-B3DF5B-x.js";import"./GraphicalItemClipPath-DJd9bIYV.js";import"./SetGraphicalItem-BjV3tQT1.js";import"./useAnimationId-CDf7Yg_k.js";import"./getRadiusAndStrokeWidthFromDot-BxdGbl3w.js";import"./graphicalItemSelectors-hwGLjdl7.js";import"./useElementOffset-DP9By8L-.js";import"./uniqBy-CvtKv9kX.js";import"./iteratee-CcJgzovy.js";import"./Cross-BBfQruFy.js";import"./Rectangle-UEK_zsFS.js";import"./Sector-B2gfW0gr.js";import"./index-BpI1Zh7a.js";import"./ChartSizeDimensions-75IDTK2b.js";import"./OffsetShower-BvXPFVVi.js";import"./PlotAreaShower-Cu3BCYLx.js";import"./Symbols-PsAIzTU_.js";import"./symbol-BXNRxpVN.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
