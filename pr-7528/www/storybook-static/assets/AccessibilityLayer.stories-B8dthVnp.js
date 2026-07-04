import{r as A,R as t}from"./iframe-CMZSuYAp.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-EdmzyhxM.js";import{A as E}from"./AreaChart-CcQrmDZE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-04-StGWM.js";import{X as g}from"./XAxis-CUiAOeYD.js";import{Y as h}from"./YAxis-BePyX93F.js";import{A as a}from"./Area-C_9AiUeD.js";import{T as u}from"./Tooltip-KNIhxc5-.js";import{R as k}from"./zIndexSlice-BruTJuC3.js";import{L as v}from"./Legend-sRNs97z9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-eOuVxhlh.js";import"./index-okdZjd57.js";import"./index-Ctl2PZQv.js";import"./index-DNwfsXU8.js";import"./index-iarf_UZv.js";import"./throttle-BOp5gWf6.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CgdBaRrD.js";import"./axisSelectors-DIqIj73B.js";import"./resolveDefaultProps-B0_6d4zr.js";import"./isWellBehavedNumber-BkL4thK4.js";import"./d3-scale-BPlmUZUy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DKmMg594.js";import"./chartDataContext-Bl7GQ-j4.js";import"./CategoricalChart-BFWxbb2w.js";import"./CartesianAxis-BCaCchRD.js";import"./Layer-PNP6wOOP.js";import"./Text-xzZ1BXQ5.js";import"./DOMUtils-DG37HfTO.js";import"./Label-x_pt0DNK.js";import"./ZIndexLayer-DF-_v_ST.js";import"./types-DeGC_ypX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CkwT5Z0M.js";import"./useAnimationId-CGAH057_.js";import"./ActivePoints-DwWUSI4v.js";import"./Dot-vmVm3ZeK.js";import"./RegisterGraphicalItemId-C5vUvxmu.js";import"./GraphicalItemClipPath-Du3KiDeu.js";import"./SetGraphicalItem-9lTbvLuA.js";import"./getRadiusAndStrokeWidthFromDot-MO9qDoqv.js";import"./ActiveShapeUtils-Dd6ng2Wf.js";import"./Curve-UdXe1NTi.js";import"./step-WDNwu-cb.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BjlzbklH.js";import"./useElementOffset-Dc7Z0JxF.js";import"./uniqBy-BS_FhwG0.js";import"./iteratee-B0piW2Hj.js";import"./Cross-CzjZmQ29.js";import"./Rectangle-CYKkt_YU.js";import"./util-Dxo8gN5i.js";import"./Sector-DINHvntr.js";import"./Symbols-CDbIn1ya.js";import"./symbol-Jz5i-Ey-.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
