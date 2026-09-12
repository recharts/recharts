import{r as A,R as t}from"./iframe-B7hbNEXj.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CBHvobIY.js";import{A as E}from"./AreaChart-1zlUrGmg.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-R_m8YFEY.js";import{X as g}from"./XAxis-DTRImo2J.js";import{Y as h}from"./YAxis-DYrUNm06.js";import{A as a}from"./Area-QV2fuU0i.js";import{T as u}from"./Tooltip-DW4lutut.js";import{R as k}from"./zIndexSlice-B7xQcNcG.js";import{L as v}from"./Legend-BHv0V5I1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-jiH_AYjt.js";import"./resolveDefaultProps-CZFMPmgx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-MpDLX8pO.js";import"./throttle-BSjszxUH.js";import"./index-Dqn8czyj.js";import"./index-BYIthK0p.js";import"./isWellBehavedNumber-7V-rOBye.js";import"./d3-scale-BYK0PNRi.js";import"./index-yv8yhgLp.js";import"./index-BXYzHp_E.js";import"./renderedTicksSlice-CuhNidwY.js";import"./index-C8e3_gAU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DfAXRIqb.js";import"./chartDataContext-BXIYwbQE.js";import"./CategoricalChart-yOdjtk4z.js";import"./CartesianAxis-CneZULGs.js";import"./Layer-osX5cZvY.js";import"./Text-DWuYBy5V.js";import"./DOMUtils-BhIaSreR.js";import"./useId-CxLZ9MIg.js";import"./useBackwardsCompatibleTheme-L1kNM3iV.js";import"./Label-lNQzMu7Z.js";import"./ZIndexLayer-jcXUwYN8.js";import"./types-C3ibKMTz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DhxUFxBy.js";import"./useAnimationId-BjhUfelV.js";import"./ActivePoints-BbyHcAce.js";import"./Dot-ArvJ9HsL.js";import"./RegisterGraphicalItemId-Dm44HWfF.js";import"./GraphicalItemClipPath-BL1Y6_ch.js";import"./SetGraphicalItem-DpZwQAUe.js";import"./getRadiusAndStrokeWidthFromDot-9G5pAfIZ.js";import"./ActiveShapeUtils-Ds7YjhX_.js";import"./Curve-CUqyVekg.js";import"./step-5lhI3wtQ.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C6Z_BcTV.js";import"./useElementOffset-w7QmJN4M.js";import"./uniqBy-D7tqJ0kr.js";import"./iteratee-CMD1iHwZ.js";import"./Cross-kZvf2QnA.js";import"./Rectangle-DXA3Y7lF.js";import"./util-Dxo8gN5i.js";import"./Sector-DGiQIbbB.js";import"./Symbols-Ce4xYfXm.js";import"./symbol-CQ0q3eX5.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
