import{r as A,R as t}from"./iframe-DiVXU681.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Ce0ZmhAi.js";import{A as E}from"./AreaChart-BSFJzhOi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-qIMJK8nU.js";import{X as g}from"./XAxis-C3k2I40a.js";import{Y as h}from"./YAxis-DRIG0Uth.js";import{A as a}from"./Area-FpUVBUik.js";import{T as u}from"./Tooltip-24mP4oxf.js";import{R as k}from"./zIndexSlice-DzaA_87S.js";import{L as v}from"./Legend-DlJsX6wB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-wAcW42w2.js";import"./index-Crp3sUc9.js";import"./index-DVcmQSez.js";import"./index-DgrTrvqA.js";import"./index-8IQM-0LL.js";import"./throttle-TSFzffo4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D56P7LNb.js";import"./resolveDefaultProps-CdAiRIhG.js";import"./isWellBehavedNumber-BX88-Alk.js";import"./d3-scale-BGRr8R4r.js";import"./renderedTicksSlice-CCTXP0cy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CTSm63aG.js";import"./chartDataContext-DPZzm9Zw.js";import"./CategoricalChart-DJdh8SdX.js";import"./CartesianAxis-pQr6RLfR.js";import"./Layer-BIRlOb6y.js";import"./Text-CCIULR2F.js";import"./DOMUtils-CLkaSbmi.js";import"./Label-0bv0xRMH.js";import"./ZIndexLayer-BbNui_5z.js";import"./types-VNyUreZc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BiKwVLZ_.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CmBbc9Cv.js";import"./useAnimationId-CxWNxwEQ.js";import"./ActivePoints-DG4FSK5q.js";import"./Dot-BqazTdoT.js";import"./RegisterGraphicalItemId-CjWwTgFZ.js";import"./graphicalItemIdentity-D0Jl2Dn2.js";import"./SetGraphicalItem-CGIfPK7m.js";import"./getRadiusAndStrokeWidthFromDot-BO77BdP0.js";import"./ActiveShapeUtils-DRcrzfDF.js";import"./Curve-BjRrTa61.js";import"./step-CQ2-KwOC.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BrOmBPmn.js";import"./useElementOffset-DnWcYAZJ.js";import"./uniqBy-BfbLVdUA.js";import"./iteratee-BKX_gc7E.js";import"./Cross-DfLUlGK_.js";import"./Rectangle-NkoMZfI8.js";import"./util-Dxo8gN5i.js";import"./Sector-B85yuHHd.js";import"./Symbols-CJedFpAh.js";import"./symbol-C6BtcMJ6.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
