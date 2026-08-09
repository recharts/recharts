import{r as A,R as t}from"./iframe-D_UL8fjK.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CDUUKafl.js";import{A as E}from"./AreaChart-BqG07Sh5.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-NE6h68CE.js";import{X as g}from"./XAxis-CazN9wRX.js";import{Y as h}from"./YAxis-Dd6vSYjv.js";import{A as a}from"./Area-OZr20Xgv.js";import{T as u}from"./Tooltip-DXoBql9S.js";import{R as k}from"./zIndexSlice-B8f2hTRD.js";import{L as v}from"./Legend-BBUmNyqy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DnUEvc6-.js";import"./index-DmYZtYvi.js";import"./index-Bs4KGwv6.js";import"./index-DNxkBCVe.js";import"./index-h-g40TxG.js";import"./throttle-EbH1y2w7.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BNsSlswM.js";import"./resolveDefaultProps-Byb1qXS0.js";import"./isWellBehavedNumber-iC5WXlxZ.js";import"./d3-scale-5WraxJWy.js";import"./renderedTicksSlice-DZH5dqFY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C-1LzzB9.js";import"./chartDataContext-BZOn_6n4.js";import"./CategoricalChart-CtOYQTRo.js";import"./CartesianAxis-BrHAq2Nx.js";import"./Layer-DErQ8LWn.js";import"./Text-bynAhtfX.js";import"./DOMUtils-y3mUx3tY.js";import"./Label-efHFABNJ.js";import"./ZIndexLayer-CzKUyCGh.js";import"./types-D8jMk9wl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DF-Xzw8d.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-ZBM6OyTb.js";import"./useAnimationId-1dDzdKc5.js";import"./ActivePoints-BrIz1_y9.js";import"./Dot-CPC6zP8q.js";import"./RegisterGraphicalItemId-CO_dSij1.js";import"./graphicalItemIdentity-DUedU3Gi.js";import"./SetGraphicalItem-Bv1waFvM.js";import"./getRadiusAndStrokeWidthFromDot-DmFKBFPd.js";import"./ActiveShapeUtils-JCOSF6Qb.js";import"./Curve-VdPw19wo.js";import"./step-DBWLHasU.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DSFRQ2mt.js";import"./useElementOffset-He-jtgi_.js";import"./uniqBy-C-e68djf.js";import"./iteratee-CqgkHJdQ.js";import"./Cross-Q8gPv05a.js";import"./Rectangle-Bpl55SbL.js";import"./util-Dxo8gN5i.js";import"./Sector-D48s0Dkz.js";import"./Symbols-pXC08tLP.js";import"./symbol-B4SUxp2b.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
