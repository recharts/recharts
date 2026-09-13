import{r as A,R as t}from"./iframe-CLtR9-MI.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B1Fivz02.js";import{A as E}from"./AreaChart-BHYJtfd2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-NAjdvN10.js";import{X as g}from"./XAxis-6BQkQ0ss.js";import{Y as h}from"./YAxis-D2WqE3kW.js";import{A as a}from"./Area-CmbBpvT0.js";import{T as u}from"./Tooltip-CsVYMHIy.js";import{R as k}from"./zIndexSlice-DAD-nkNa.js";import{L as v}from"./Legend-D9WY1rjh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BboqGkG2.js";import"./resolveDefaultProps-D6TYxzEx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B01i0yXb.js";import"./throttle-DKa3BIxu.js";import"./index-u5MFF0A2.js";import"./index-5pSzTMen.js";import"./isWellBehavedNumber-B9qntTjY.js";import"./d3-scale-B1XD5c5K.js";import"./index-BaHi7qAw.js";import"./index-CZdIlyb1.js";import"./renderedTicksSlice-BY7YJYCI.js";import"./index-CjAhAOwM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BnmKHbJT.js";import"./chartDataContext-Dhs0xlHM.js";import"./CategoricalChart-DJouQuZu.js";import"./CartesianAxis-BeUj4LrW.js";import"./Layer-DSwUEhDY.js";import"./Text-CwyJl8Qf.js";import"./DOMUtils-B1EmNrIU.js";import"./useId-BN1Du40N.js";import"./useBackwardsCompatibleTheme-BJ7QBrpH.js";import"./Label-BpbNna-S.js";import"./ZIndexLayer-D5Qq2-j2.js";import"./types-_UL_m5mX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-NFxue0WW.js";import"./useAnimationId-CKjPSYvA.js";import"./ActivePoints-LWQ74ttv.js";import"./Dot-Cg_oxTyJ.js";import"./RegisterGraphicalItemId-fH2hJ8mR.js";import"./GraphicalItemClipPath-1HJc_HKi.js";import"./SetGraphicalItem-Ty2V-l5e.js";import"./getRadiusAndStrokeWidthFromDot-DNgkSIfr.js";import"./ActiveShapeUtils-CKYNeMt6.js";import"./Curve-B_ohmPvH.js";import"./step-BArTcWqE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CogcmOBq.js";import"./useElementOffset-BFvCNgns.js";import"./uniqBy-BXE4YbrE.js";import"./iteratee-DJf2_w-w.js";import"./Cross-C5OQK69h.js";import"./Rectangle-DkICwgVP.js";import"./util-Dxo8gN5i.js";import"./Sector-DWsBRtQH.js";import"./Symbols-S2gdZXyp.js";import"./symbol-CyNk4FNP.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
