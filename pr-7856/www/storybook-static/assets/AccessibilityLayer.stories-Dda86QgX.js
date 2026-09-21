import{r as A,R as t}from"./iframe-B-kCJkOw.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BAXW9VrG.js";import{A as E}from"./AreaChart-D83qT1kU.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BQvX0mwW.js";import{X as g}from"./XAxis-C88jehXC.js";import{Y as h}from"./YAxis-D8VGqcIq.js";import{A as a}from"./Area-hCO2mmN3.js";import{T as u}from"./Tooltip-DHZ_8KJV.js";import{R as k}from"./zIndexSlice-Clv-Wr_e.js";import{L as v}from"./Legend-BpHEVsxX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3el3knR.js";import"./resolveDefaultProps-BhhOMDdt.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DT9SmTCn.js";import"./throttle-DVuM4iFd.js";import"./index-DcAa2UuL.js";import"./index-CBKTbWE1.js";import"./isWellBehavedNumber-C4FzwffV.js";import"./d3-scale-IzH54SGl.js";import"./index-2QimBBuf.js";import"./index-BVh04Hzh.js";import"./renderedTicksSlice-C6ma__-i.js";import"./index-CmAyTwir.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3VLYHct.js";import"./chartDataContext-CikOGl8V.js";import"./CategoricalChart-CVXqoPY8.js";import"./CartesianAxis-DmQK4you.js";import"./Layer-DUmzLecA.js";import"./Text-DvIEDZcH.js";import"./DOMUtils-CWJWmJqm.js";import"./useId-DGNKKzIZ.js";import"./useBackwardsCompatibleTheme-D27rYUis.js";import"./Label-CshHc_P8.js";import"./ZIndexLayer-yM8iQkyd.js";import"./types-1S0vnYpD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BgnTcQ58.js";import"./useAnimationId-Bkh3_vjS.js";import"./ActivePoints-DYudjPxL.js";import"./Dot-BKZoXX6K.js";import"./RegisterGraphicalItemId-DX8EYk4F.js";import"./GraphicalItemClipPath-Bf7ClEec.js";import"./SetGraphicalItem-DlY4dRC7.js";import"./getRadiusAndStrokeWidthFromDot-DPuw4jnu.js";import"./ActiveShapeUtils-C14ipRtW.js";import"./Curve-__pvox1D.js";import"./step-DoJnsDJu.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-wZgDD3hk.js";import"./useElementOffset-BJT03Q9O.js";import"./uniqBy-_dq4LJrc.js";import"./iteratee-Dxw4ISyk.js";import"./Cross-DBczKRIH.js";import"./Rectangle-CgoNg2OD.js";import"./util-Dxo8gN5i.js";import"./Sector-CsqMh6gD.js";import"./Symbols-1DmeI7Ir.js";import"./symbol-CtvnUhbs.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
