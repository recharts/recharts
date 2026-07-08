import{r as A,R as t}from"./iframe-DGYc5Evr.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DPdiH-nu.js";import{A as E}from"./AreaChart-DogWq2aS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CzayXTLg.js";import{X as g}from"./XAxis-v5Hkx9ES.js";import{Y as h}from"./YAxis-D-S3NpvC.js";import{A as a}from"./Area-DcliiwXJ.js";import{T as u}from"./Tooltip-C0qqlB8-.js";import{R as k}from"./zIndexSlice-CjPpABdt.js";import{L as v}from"./Legend-Bm7jm6sf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./index-xTx_eyuL.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./throttle-44TCHeAp.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BojFd99l.js";import"./axisSelectors-BNixzxMM.js";import"./resolveDefaultProps-BzwDYh32.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./d3-scale-DWZ-qO9T.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./CartesianAxis-XkVfHgZD.js";import"./Layer-Cp66mevN.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./Label-ByCQCza6.js";import"./ZIndexLayer-BiqJjXGY.js";import"./types-m9Fzmc4X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DpTt0Un9.js";import"./useAnimationId-CRdgro7A.js";import"./ActivePoints-vXI-iHsm.js";import"./Dot-CRtBS-b6.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getRadiusAndStrokeWidthFromDot-CuWeSJ3l.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./Curve-CIxbvgQM.js";import"./step-ClaeK2JI.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-o-2IsEs2.js";import"./useElementOffset-BXz8BlKI.js";import"./uniqBy-pDvyWWJD.js";import"./iteratee-D1l6G22V.js";import"./Cross-CEmVOnV1.js";import"./Rectangle-2UtW3B_i.js";import"./util-Dxo8gN5i.js";import"./Sector-C0oj-kOp.js";import"./Symbols-BhoLSFjr.js";import"./symbol-BydJeVAg.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
