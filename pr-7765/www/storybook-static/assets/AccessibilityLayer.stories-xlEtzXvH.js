import{r as A,R as t}from"./iframe-ZGGTKsi4.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-HoHDKyYF.js";import{A as E}from"./AreaChart-ySx03UN0.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BDuAwTAR.js";import{X as g}from"./XAxis-DNlNZaF2.js";import{Y as h}from"./YAxis-D3HJo_sZ.js";import{A as a}from"./Area-C8quzMPc.js";import{T as u}from"./Tooltip-CzxrIFwv.js";import{R as k}from"./zIndexSlice-DxfJO5SI.js";import{L as v}from"./Legend-BVslAj_p.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bhqr1bRq.js";import"./resolveDefaultProps-vV3khv5M.js";import"./get-C2VjdU0L.js";import"./axisSelectors-sP9dBG4h.js";import"./throttle-DU3r4hZM.js";import"./index-BPQC-jNG.js";import"./index-HrJWGj9i.js";import"./isWellBehavedNumber-QCZGXLEu.js";import"./d3-scale-BsspybO2.js";import"./index-BpyhtFRO.js";import"./index-DsBTLunf.js";import"./renderedTicksSlice-BrYwA8bW.js";import"./index-SSLiRbGX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FipRlzk-.js";import"./chartDataContext-CVwvDOw7.js";import"./CategoricalChart-Da_wyX1Y.js";import"./CartesianAxis-y6hYyFes.js";import"./Layer-yZG6HjYa.js";import"./Text-uTHCfqpL.js";import"./DOMUtils-KcdWyv8l.js";import"./useId-BJoAZaHY.js";import"./useBackwardsCompatibleTheme-DiGhz-R4.js";import"./Label-CuL7W9s2.js";import"./ZIndexLayer-CnUQDGMu.js";import"./types-Cv_7IfEs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B0OCbKtI.js";import"./useAnimationId-BA-Y1lsT.js";import"./ActivePoints-DW5iFVK5.js";import"./Dot-DrTqTbYy.js";import"./RegisterGraphicalItemId-DAVF2joS.js";import"./GraphicalItemClipPath-DOFRcoC3.js";import"./SetGraphicalItem-rcmPBlm0.js";import"./getRadiusAndStrokeWidthFromDot-CtaK0aI-.js";import"./ActiveShapeUtils-CShJY30W.js";import"./Curve-BGLf-py4.js";import"./step-D_M_3p-d.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CdO4AxEG.js";import"./useElementOffset-CcFou8CY.js";import"./uniqBy-BAAGpGDY.js";import"./iteratee-CoISyMF-.js";import"./Cross-C6TcwmRS.js";import"./Rectangle-tu1-I-Uk.js";import"./util-Dxo8gN5i.js";import"./Sector-BEKQ8BC4.js";import"./Symbols-CuqLPjZz.js";import"./symbol-DyWpDIVN.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
