import{r as A,R as t}from"./iframe-CtnQdIY7.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CQbfWDL_.js";import{A as E}from"./AreaChart-BCFdLfrf.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BIFf-M9G.js";import{X as g}from"./XAxis-XO5v4-hr.js";import{Y as h}from"./YAxis-18LfpUGe.js";import{A as a}from"./Area-CzqGXiTo.js";import{T as u}from"./Tooltip-DKc99BpK.js";import{R as k}from"./zIndexSlice-uhZ24fvC.js";import{L as v}from"./Legend-BiRbjuQ8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DnMXuDt4.js";import"./index-C7Llpbdk.js";import"./index-CsEievrw.js";import"./index-D6huCRxI.js";import"./index-DamwuQ06.js";import"./throttle-BK98nfBm.js";import"./get-C2VjdU0L.js";import"./axisSelectors-RZmSNqcb.js";import"./resolveDefaultProps-BhVUJJl8.js";import"./isWellBehavedNumber-BafIqGdu.js";import"./d3-scale-DhrbdntK.js";import"./renderedTicksSlice-C6Ijq1lt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CtmjJLbI.js";import"./chartDataContext-CjvKHNlA.js";import"./CategoricalChart-DN8vznAz.js";import"./CartesianAxis-B2-Emwk9.js";import"./Layer-CrHPq_vq.js";import"./Text-B-1OewBP.js";import"./DOMUtils-BvAafYtQ.js";import"./Label-qBa5cEUX.js";import"./ZIndexLayer-DMqHwKfA.js";import"./types-CuvpKj9W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-v9ngAxmb.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C-8qrP3C.js";import"./useAnimationId-DN6fR6pH.js";import"./ActivePoints-pXmyAmZV.js";import"./Dot-C0XFWsWB.js";import"./RegisterGraphicalItemId-nrbEOJ2H.js";import"./GraphicalItemClipPath-DTrO8h0n.js";import"./SetGraphicalItem-CeeM15rn.js";import"./getRadiusAndStrokeWidthFromDot-B6TsNsTR.js";import"./ActiveShapeUtils-B0TODl5s.js";import"./Curve-maCREAuN.js";import"./step-Dqi6RR6U.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BZA8fGlN.js";import"./useElementOffset-qg6DMFTI.js";import"./uniqBy-B5Eni1L2.js";import"./iteratee-Cjnl5Vus.js";import"./Cross-B5r5VRis.js";import"./Rectangle-Dt_H66Jb.js";import"./util-Dxo8gN5i.js";import"./Sector-DI1mC89a.js";import"./Symbols-DQM-19oT.js";import"./symbol-CyjWwlnJ.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
