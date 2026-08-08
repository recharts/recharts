import{r as A,R as t}from"./iframe-zxb33ZNc.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-D9F-_u2o.js";import{A as E}from"./AreaChart-BTRcNxvt.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BbAkmeDL.js";import{X as g}from"./XAxis-DyyrbnA7.js";import{Y as h}from"./YAxis-1uMHWvAC.js";import{A as a}from"./Area-CrVNa8xR.js";import{T as u}from"./Tooltip-DotMbdnZ.js";import{R as k}from"./zIndexSlice-D-761Vg8.js";import{L as v}from"./Legend-2paWe6ay.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DnDLnjyJ.js";import"./index-C-3okO3A.js";import"./index-qRk_YJlx.js";import"./index-NFdtXm63.js";import"./index-Dy7fskO8.js";import"./throttle-CFGr8cJA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dv7CZoVg.js";import"./resolveDefaultProps-B762IN2m.js";import"./isWellBehavedNumber-C-R_UlW0.js";import"./d3-scale-BDbFjNBn.js";import"./renderedTicksSlice-DRIJDHkm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DKaHYTMw.js";import"./chartDataContext-c74vlS-l.js";import"./CategoricalChart-ZwmRaYFc.js";import"./CartesianAxis-DX_ZohL1.js";import"./Layer-C3L05uBE.js";import"./Text-KHBAPEp1.js";import"./DOMUtils-Dz-vbmjU.js";import"./Label-DU6Rr4ia.js";import"./ZIndexLayer-DbePcZGA.js";import"./types-Dolw0ENN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DJQOtdEl.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DMGgkPL-.js";import"./useAnimationId-SEMOU1a_.js";import"./ActivePoints-rNpF2i82.js";import"./Dot-aKbZPoCq.js";import"./RegisterGraphicalItemId-BHi56vMH.js";import"./GraphicalItemClipPath-dZEprd-F.js";import"./SetGraphicalItem-DyIKS88p.js";import"./getRadiusAndStrokeWidthFromDot-BBU-nePS.js";import"./ActiveShapeUtils-B0CCDTVh.js";import"./Curve-BFfco-WU.js";import"./step-Bi5jdybT.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BDTMSonU.js";import"./useElementOffset-Dv5E6_pT.js";import"./uniqBy-yJmr0v8a.js";import"./iteratee-DrBLX_LB.js";import"./Cross-Bmz824kw.js";import"./Rectangle-BjgKUtj_.js";import"./util-Dxo8gN5i.js";import"./Sector-DTuNs_3F.js";import"./Symbols-CyjUC6xP.js";import"./symbol-DmYa02Qn.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
