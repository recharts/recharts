import{r as A,R as t}from"./iframe-D-d0UxKx.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CxbWr-tb.js";import{A as E}from"./AreaChart-DDhWF1Mh.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-C8-alLqA.js";import{X as g}from"./XAxis-D-U3c8PB.js";import{Y as h}from"./YAxis-AsX76kO1.js";import{A as a}from"./Area-B0-CZY2F.js";import{T as u}from"./Tooltip-DE_FR6bh.js";import{R as k}from"./zIndexSlice-BzS2rwPG.js";import{L as v}from"./Legend-CfUz-HfC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-eUO8gZBV.js";import"./index-BFabSAMq.js";import"./index-CSjSfLNV.js";import"./index-hrPGNLyo.js";import"./index-Ch_o8Zsm.js";import"./immer-Bcymh1Oy.js";import"./get-DvwB2phC.js";import"./renderedTicksSlice-Dhujer-i.js";import"./axisSelectors-gJCz_NoR.js";import"./d3-scale-CAmzDAEa.js";import"./resolveDefaultProps-BULhiKbt.js";import"./isWellBehavedNumber-Cwzb-39K.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfHu0MoO.js";import"./chartDataContext-SgkfnsQg.js";import"./CategoricalChart-_USPwHCV.js";import"./CartesianAxis-BYNBLpS-.js";import"./Layer-DoiILNSz.js";import"./Text-BFbCMtys.js";import"./DOMUtils-BKfb6-ez.js";import"./Label-1pCxWysR.js";import"./ZIndexLayer-ikBJbvxL.js";import"./types-CjTc4pGQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BX5PTjVC.js";import"./useAnimationId-TLS-J4It.js";import"./ActivePoints-DL-7xiHM.js";import"./Dot-BZoK9nPq.js";import"./RegisterGraphicalItemId-P4cnc2kT.js";import"./GraphicalItemClipPath-CHhCw_J2.js";import"./SetGraphicalItem-B0zIa8gn.js";import"./getRadiusAndStrokeWidthFromDot-Bs94Qetl.js";import"./ActiveShapeUtils-BYmp4x7X.js";import"./Curve-BbmMMCNF.js";import"./step-DyColUtB.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CBgrggUD.js";import"./useElementOffset-Dy9eSR4I.js";import"./uniqBy-IX-17FwE.js";import"./iteratee-BSWYHyHw.js";import"./Cross-oxBNcvXe.js";import"./Rectangle-DBqM3f2v.js";import"./util-Dxo8gN5i.js";import"./Sector-Mx1uR2nm.js";import"./Symbols-DvPqf0ou.js";import"./symbol-l5NtWDxl.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
