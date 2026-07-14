import{r as A,R as t}from"./iframe-w7qCbIlq.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DOApFncK.js";import{A as E}from"./AreaChart-B6XzC0OA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-62KjYK99.js";import{X as g}from"./XAxis-8n0ix597.js";import{Y as h}from"./YAxis-CwFi80nS.js";import{A as a}from"./Area-BqOwgRTZ.js";import{T as u}from"./Tooltip-BL-JtHNM.js";import{R as k}from"./zIndexSlice-BtZQ5xih.js";import{L as v}from"./Legend-BOzn4Gr3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJCCLnSy.js";import"./index-Ddi-T72V.js";import"./index-C1u3rFhR.js";import"./index-BmGe_VQx.js";import"./index-BBIhqOXx.js";import"./throttle-KQ-EWGZj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-TeAVrZEF.js";import"./axisSelectors-DudJ2V7b.js";import"./resolveDefaultProps-BXXLLFZs.js";import"./isWellBehavedNumber-BLtoVg4o.js";import"./d3-scale-DHyfTYAT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BbPcQF_v.js";import"./chartDataContext-d_tiIYhw.js";import"./CategoricalChart-C5vKFxAI.js";import"./CartesianAxis-CT_UcdRd.js";import"./Layer-C8MJqdtw.js";import"./Text-Bii4Z9SU.js";import"./DOMUtils-BHtgPnwB.js";import"./Label-Bwto3iA9.js";import"./ZIndexLayer-BipLpo9Z.js";import"./types-0ytIGtz9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DtqXu7a9.js";import"./useAnimationId-BLBs87N6.js";import"./ActivePoints-MWBllTj-.js";import"./Dot-DqpKuKrG.js";import"./RegisterGraphicalItemId-BMqZVFge.js";import"./GraphicalItemClipPath-CJg2XcFN.js";import"./SetGraphicalItem-CaM-dNjz.js";import"./getRadiusAndStrokeWidthFromDot-Bj2pWrUE.js";import"./ActiveShapeUtils-pA3gak5X.js";import"./Curve-858tLF7S.js";import"./step-BY4MZZhT.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CyWml0qF.js";import"./useElementOffset-BPAlyBBz.js";import"./uniqBy-D4kbD2sN.js";import"./iteratee-kNxDFHiu.js";import"./Cross-BHsCGUhH.js";import"./Rectangle-BBGlMB0K.js";import"./util-Dxo8gN5i.js";import"./Sector-B7EdsSzn.js";import"./Symbols-DpLVmZ-d.js";import"./symbol-DSkPJeUc.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
