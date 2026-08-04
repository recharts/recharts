import{r as A,R as t}from"./iframe-CWA9dL1n.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-JYsLvtOs.js";import{A as E}from"./AreaChart-CwYT1Vp1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DQYoQUoz.js";import{X as g}from"./XAxis-DeVvUZ6V.js";import{Y as h}from"./YAxis-Crip943s.js";import{A as a}from"./Area-C2A-aW3H.js";import{T as u}from"./Tooltip-yr7yLNs2.js";import{R as k}from"./zIndexSlice-aQmFZxtc.js";import{L as v}from"./Legend-Cop-tyu3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CId5I6PX.js";import"./index-C7DdHlxQ.js";import"./index-BzvjS6S7.js";import"./index-B9WDmcBs.js";import"./index-D3IuHkaK.js";import"./throttle-CO5aCb3a.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-C0LhBYgl.js";import"./axisSelectors-kDLbJQaY.js";import"./resolveDefaultProps-3gLKwpWY.js";import"./isWellBehavedNumber-Bm4ocvOr.js";import"./d3-scale-CcIRMvmh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjycZaTM.js";import"./chartDataContext-B92OI4-S.js";import"./CategoricalChart-19SPVwUn.js";import"./CartesianAxis-TOCYRN01.js";import"./Layer-DdfHe4zJ.js";import"./Text-B5gv-Qby.js";import"./DOMUtils-h2leYdBT.js";import"./Label-Ci3V9in7.js";import"./ZIndexLayer-DQgxZgR-.js";import"./types-Dm1l0pKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-PN0Sf9X-.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-4dsj7PS2.js";import"./useAnimationId-BfVlpqgG.js";import"./ActivePoints-f0YyJDEU.js";import"./Dot-BzG5kAil.js";import"./RegisterGraphicalItemId-BY6CqeJu.js";import"./GraphicalItemClipPath-CNA6w-35.js";import"./SetGraphicalItem-iurO2H6w.js";import"./graphicalItemIdentity--MezaesT.js";import"./ActiveShapeUtils-cijm59wq.js";import"./Curve-Cpe2XzR8.js";import"./step-DXLtdr_A.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Ci2bweSS.js";import"./useElementOffset-DEgQPazE.js";import"./uniqBy-Cq9W0uGc.js";import"./iteratee-DihBNj6d.js";import"./Cross-Ci5XozZ6.js";import"./Rectangle-mWWl0VjI.js";import"./util-Dxo8gN5i.js";import"./Sector-BnY7o6rE.js";import"./Symbols-CS3q9FMu.js";import"./symbol-DpU8AU8u.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
