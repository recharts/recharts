import{r as A,R as t}from"./iframe-gJmHOoV1.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Cjd81jW2.js";import{A as E}from"./AreaChart-BzBMy4go.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-VJceqVLi.js";import{X as g}from"./XAxis-CL1K5HKB.js";import{Y as h}from"./YAxis-BZbOJGmt.js";import{A as a}from"./Area-BB_o8Hgo.js";import{T as u}from"./Tooltip-jUMNHplV.js";import{R as k}from"./zIndexSlice-SLldW8vD.js";import{L as v}from"./Legend-bxQVu_p9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-uLgma0gs.js";import"./index-D2MlSgDp.js";import"./index-_1fsdksf.js";import"./index-BdFJZkPY.js";import"./index-DNgAqdgl.js";import"./throttle-C0HH0ZDc.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BbNLjq-V.js";import"./resolveDefaultProps-EuD2qw6Y.js";import"./isWellBehavedNumber-C4nB07Ky.js";import"./d3-scale-SCvl-fAD.js";import"./renderedTicksSlice-DkFdVLqh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3NOhLAb.js";import"./chartDataContext-Btj7Fomq.js";import"./CategoricalChart-Bdw8EORd.js";import"./CartesianAxis-Byci1LgV.js";import"./Layer-DMyVzZAK.js";import"./Text-BFMrUcgU.js";import"./DOMUtils-DoteccEu.js";import"./useBackwardsCompatibleTheme-t9HOmvr9.js";import"./Label-BW3VHSxT.js";import"./ZIndexLayer-Cs9adZB_.js";import"./types-BsPCKB2-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DO16LAh4.js";import"./useAnimationId-BPNuV2bD.js";import"./ActivePoints-B7JRncTK.js";import"./Dot-RQPmIpyp.js";import"./RegisterGraphicalItemId-ClU1Ba2D.js";import"./GraphicalItemClipPath-C8fMELX2.js";import"./SetGraphicalItem-BuXSQ0wS.js";import"./getRadiusAndStrokeWidthFromDot-C6MJNSc7.js";import"./ActiveShapeUtils-D-WSdclC.js";import"./Curve-Dowet-ta.js";import"./step-LqTLA14X.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cc0yXS9y.js";import"./useElementOffset-Y-qWOeHt.js";import"./uniqBy-BvB2bptq.js";import"./iteratee-JebvSegM.js";import"./Cross-KBxHvz6V.js";import"./Rectangle-CbNU9WCQ.js";import"./util-Dxo8gN5i.js";import"./Sector-xoH5dnsu.js";import"./Symbols-z9xxGOoR.js";import"./symbol-CISepo4K.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
