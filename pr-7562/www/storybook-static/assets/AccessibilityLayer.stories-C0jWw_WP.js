import{r as A,R as t}from"./iframe-54ZcEpUv.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CXJcoZU4.js";import{A as E}from"./AreaChart-Q4wmKnnx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DidoAtGk.js";import{X as g}from"./XAxis-BhMXtQiv.js";import{Y as h}from"./YAxis-2cFJkYpr.js";import{A as a}from"./Area-CJSaHgRn.js";import{T as u}from"./Tooltip-5XrQW7rn.js";import{R as k}from"./zIndexSlice-D4EcTS4q.js";import{L as v}from"./Legend-CB35QEBv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-r5U10tn2.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./throttle-DtmCwuH2.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./axisSelectors-BFZg6wbM.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./d3-scale-Bz_vEXwn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./CategoricalChart-FIiVxhF6.js";import"./CartesianAxis-BfyoGem3.js";import"./Layer-C5bNrRV9.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";import"./Label--73vW_dK.js";import"./ZIndexLayer-CQupnOhG.js";import"./types-kdBRSK-c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bo-aqLFl.js";import"./useAnimationId-D-RZ_xXC.js";import"./ActivePoints-DSvyBCZS.js";import"./Dot-C2NjTS0n.js";import"./RegisterGraphicalItemId-BIJ3N5jx.js";import"./GraphicalItemClipPath-_HL_VRQE.js";import"./SetGraphicalItem-BBUtbuL-.js";import"./getRadiusAndStrokeWidthFromDot-eGcgYRyQ.js";import"./ActiveShapeUtils-DKX9K39u.js";import"./Curve-FTpO0g2t.js";import"./step-BsOSpGLs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C-mFdHvd.js";import"./useElementOffset-CHF_XBdP.js";import"./uniqBy-DtjPrqio.js";import"./iteratee-Bz0VOYsU.js";import"./Cross-434ElTmF.js";import"./Rectangle-KX1Q4ZbD.js";import"./util-Dxo8gN5i.js";import"./Sector-DS_9F4Dx.js";import"./Symbols-Vlrvy7XV.js";import"./symbol-sg6ZkDjS.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
