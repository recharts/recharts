import{r as A,R as t}from"./iframe-BWaBJMJm.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DVxlQhI3.js";import{A as E}from"./AreaChart-CHxWHhcw.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-aXpXVra_.js";import{X as g}from"./XAxis-Du0WrONz.js";import{Y as h}from"./YAxis-BbW4o0g7.js";import{A as a}from"./Area-pU3zNpRw.js";import{T as u}from"./Tooltip-fbXWHZ4Z.js";import{R as k}from"./zIndexSlice-CtmWcXao.js";import{L as v}from"./Legend-qoAhyscU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_LHq0Dp.js";import"./resolveDefaultProps-BoTf8eWq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-WjeILgtA.js";import"./throttle-Dt5qCkk5.js";import"./index-DUifKCeq.js";import"./index-D2GUCawm.js";import"./isWellBehavedNumber-hjVXvh9H.js";import"./d3-scale-DYdeDEBW.js";import"./index-I7xfvYkR.js";import"./index-B1abja9I.js";import"./renderedTicksSlice-B4vPTGd7.js";import"./index-BakoavmS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTHkZiLZ.js";import"./chartDataContext-D5Ez6fbj.js";import"./CategoricalChart-DZaCTL-I.js";import"./CartesianAxis-ihxfexzN.js";import"./Layer-WH1GH-3R.js";import"./Text-CaLxBG_J.js";import"./DOMUtils-ZU1bRPvN.js";import"./useId-DH400x7B.js";import"./useBackwardsCompatibleTheme-C9V53e4Q.js";import"./Label-DaAaSDK3.js";import"./ZIndexLayer-BbdMqToM.js";import"./types-CeFzDtUp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CqoL6PKs.js";import"./useAnimationId-CrzFE7bT.js";import"./ActivePoints-DYqGU2MV.js";import"./Dot-bDcTuFpT.js";import"./RegisterGraphicalItemId-B7vtKiJL.js";import"./GraphicalItemClipPath-DPY_uU75.js";import"./SetGraphicalItem-DSLLIs8g.js";import"./getRadiusAndStrokeWidthFromDot-DUWDkXPH.js";import"./ActiveShapeUtils-DlN6eMVb.js";import"./Curve-BVKe4kAy.js";import"./step-DX3wHcPe.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B-PLK1-q.js";import"./useElementOffset-B3gaIHtz.js";import"./uniqBy-y_0rvX4w.js";import"./iteratee-CZlOM5B3.js";import"./Cross-Dfkldm_5.js";import"./Rectangle-DkogAKI_.js";import"./util-Dxo8gN5i.js";import"./Sector-BAB4JHWP.js";import"./Symbols-CtYV93jH.js";import"./symbol-Djg3VJZl.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
