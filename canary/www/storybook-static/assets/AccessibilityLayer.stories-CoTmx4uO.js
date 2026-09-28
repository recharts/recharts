import{r as A,R as t}from"./iframe-_TSN2GeP.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-z5izNflA.js";import{A as E}from"./AreaChart-B09W0pNm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BshllkSB.js";import{X as g}from"./XAxis-BsztGX7X.js";import{Y as h}from"./YAxis-CFqjD2S5.js";import{A as a}from"./Area-WhnSkljG.js";import{T as u}from"./Tooltip-CCV_gS2x.js";import{R as k}from"./zIndexSlice-D96uBoAp.js";import{L as v}from"./Legend-CuaodD7Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXs5OB5c.js";import"./resolveDefaultProps-D9QDYjax.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dd3nK3xc.js";import"./throttle-Cil6wORT.js";import"./index-CCkkuyTr.js";import"./index-CSNAsU0S.js";import"./isWellBehavedNumber-BNbTdqm3.js";import"./d3-scale-BkrsrexO.js";import"./index-DMuyjDG0.js";import"./index-lnFbewhe.js";import"./renderedTicksSlice-9FoMOBwW.js";import"./index-BghYN9OX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CBmykTvx.js";import"./chartDataContext-Beyv08KU.js";import"./CategoricalChart-DrCkbeNv.js";import"./CartesianAxis-DiCtkIDj.js";import"./Layer-9vgq1u7o.js";import"./Text-E_mkl092.js";import"./DOMUtils-FVlzESpl.js";import"./useId-BhIopQFv.js";import"./useBackwardsCompatibleTheme-B-7Qbbn2.js";import"./Label-mOwsaJBj.js";import"./ZIndexLayer-CuHtjJTp.js";import"./types-DD8CfvEw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DzytQgaE.js";import"./useAnimationId-JMLdgXcg.js";import"./ActivePoints-CoOgGNlR.js";import"./Dot-DYuabF4m.js";import"./RegisterGraphicalItemId-DtZ0Q-pq.js";import"./GraphicalItemClipPath-CV0_mPKt.js";import"./SetGraphicalItem-BDNu96CY.js";import"./getRadiusAndStrokeWidthFromDot-CAf45XRU.js";import"./ActiveShapeUtils-B-Is-yHc.js";import"./Curve-BfZHkOXV.js";import"./step-B86fSev8.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D0CKpQKL.js";import"./useElementOffset-HEsArA2s.js";import"./uniqBy-DTFHfYak.js";import"./iteratee-deCpNbOg.js";import"./Cross-DtDlc5je.js";import"./Rectangle-bnIY1oY8.js";import"./util-Dxo8gN5i.js";import"./Sector-CgVRA7pI.js";import"./Symbols-CVMCwj0Q.js";import"./symbol-BZoobV8K.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
