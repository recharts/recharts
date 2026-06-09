import{r as A,R as t}from"./iframe-DDZvWz04.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DP1ubrAE.js";import{A as E}from"./AreaChart-DnrgD3f9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BOvGQ8vv.js";import{X as g}from"./XAxis-Dq8ay66-.js";import{Y as h}from"./YAxis-DzAaZg6g.js";import{A as a}from"./Area-Bzupji4R.js";import{T as u}from"./Tooltip-BiO0tLvP.js";import{R as k}from"./zIndexSlice-Dl_4acsk.js";import{L as v}from"./Legend-2JGtmMDl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgX57Ihb.js";import"./index-DdYDVMgh.js";import"./index-DEl5rper.js";import"./index-DmZKUkji.js";import"./index-BmsWrTVR.js";import"./immer-DcmssRfV.js";import"./get-Dd2obrAg.js";import"./renderedTicksSlice-D1_yHzJs.js";import"./axisSelectors-M3yg6AJ9.js";import"./d3-scale-BmewetN_.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BL5_8bl7.js";import"./isWellBehavedNumber-BqwSOCro.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C1c9k30X.js";import"./chartDataContext-hTPBvtpR.js";import"./CategoricalChart-DTcOD6T5.js";import"./CartesianAxis-CHHSHG1a.js";import"./Layer-C4SWy0Ia.js";import"./Text-dGyvvmq0.js";import"./DOMUtils-EJWG7PRQ.js";import"./Label-Cyb3kyRK.js";import"./ZIndexLayer-Dxkr3Ydq.js";import"./types-Du07Jl7S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DJruvPbG.js";import"./useAnimationId-CXggq5FE.js";import"./ActivePoints-VMcsu_Fc.js";import"./Dot-CtB54zVw.js";import"./RegisterGraphicalItemId-CPL9aXD0.js";import"./GraphicalItemClipPath-1JKRh9Qz.js";import"./SetGraphicalItem-DQRf2yyu.js";import"./getRadiusAndStrokeWidthFromDot-Ba3A1cdU.js";import"./ActiveShapeUtils-C9HYZ7qc.js";import"./Curve-sIzeAZHK.js";import"./step-BEPub2ZD.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CUAxioQq.js";import"./useElementOffset-CUIuFj27.js";import"./uniqBy-aPqG2Rlh.js";import"./iteratee-hWa_REQK.js";import"./Cross-B9Z2IOcq.js";import"./Rectangle-C7Fz1mfx.js";import"./Sector-yTNUroLz.js";import"./Symbols-BSDqJxCz.js";import"./symbol-BBNja1gb.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
