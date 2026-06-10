import{r as A,R as t}from"./iframe-Cd3J5nRN.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CR74LLuH.js";import{A as E}from"./AreaChart-DfxU3fci.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DkXjOA93.js";import{X as g}from"./XAxis-CAq4kERr.js";import{Y as h}from"./YAxis-D2-38tFq.js";import{A as a}from"./Area-Dni-SMys.js";import{T as u}from"./Tooltip-Bya51qbO.js";import{R as k}from"./zIndexSlice-wIODfcHB.js";import{L as v}from"./Legend-CxtUytsz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-4JmG_mcb.js";import"./index-CLQBN1dD.js";import"./index-DkbQm4bl.js";import"./index-DYlcgjqt.js";import"./index-BK5to_p5.js";import"./immer-D6_cV7mT.js";import"./get-CrzYsNNZ.js";import"./renderedTicksSlice-DUoWqaFq.js";import"./axisSelectors-BTr0cSxw.js";import"./d3-scale-DxsYWkxB.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BAOUvy4N.js";import"./isWellBehavedNumber-jGn4h3zq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QShZ6Qyv.js";import"./chartDataContext-DQMMfvFX.js";import"./CategoricalChart-z0DLkqJ1.js";import"./CartesianAxis-CQodEWot.js";import"./Layer-C0-faibl.js";import"./Text-BQiCL8pu.js";import"./DOMUtils-C0pcSgNu.js";import"./Label-x5qCkJ5y.js";import"./ZIndexLayer-DbYdMZ0m.js";import"./types-DvVhAiRy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Dhj62weC.js";import"./useAnimationId-Bd8ziSRa.js";import"./ActivePoints-IkVOH40p.js";import"./Dot-DwJjJto9.js";import"./RegisterGraphicalItemId-DPItxssW.js";import"./GraphicalItemClipPath-CZRSWXrI.js";import"./SetGraphicalItem-DYeKk97u.js";import"./getRadiusAndStrokeWidthFromDot-DvmlTDI9.js";import"./ActiveShapeUtils-DEonU6C1.js";import"./Curve-B0MYcAMh.js";import"./step-CxP-HNru.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Cb0rlsta.js";import"./useElementOffset-BXO3AwQl.js";import"./uniqBy-Jzi4tC7w.js";import"./iteratee-DiK7xQH2.js";import"./Cross-cjU0TZ8e.js";import"./Rectangle-4Sd8JCB6.js";import"./Sector-CDZyVLLc.js";import"./Symbols-B3gqvmhr.js";import"./symbol-Be66DzCH.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
