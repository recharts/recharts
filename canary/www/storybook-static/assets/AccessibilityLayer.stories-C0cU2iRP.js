import{r as A,R as t}from"./iframe-DSiB0Y2h.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-VI9g2q1H.js";import{A as E}from"./AreaChart-Chi-o4z9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DhrsCxB3.js";import{X as g}from"./XAxis-DKaEKDyo.js";import{Y as h}from"./YAxis-BvhfxNjy.js";import{A as a}from"./Area-D8ug5883.js";import{T as u}from"./Tooltip-D8Llh9Of.js";import{R as k}from"./zIndexSlice-DXbXK2p0.js";import{L as v}from"./Legend-DvYrbNcw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CKOYxrgU.js";import"./index-DX0fo1e7.js";import"./index-BwXkalY4.js";import"./index-N88jlccS.js";import"./index-BxYFwyjs.js";import"./throttle-B3UghvKT.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BPUsumAR.js";import"./axisSelectors-m-5JnBq3.js";import"./resolveDefaultProps-dV1CHodA.js";import"./isWellBehavedNumber-CZNGJ9iq.js";import"./d3-scale-DOzMXTTX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BjQVh-35.js";import"./chartDataContext-DRuezjZY.js";import"./CategoricalChart-GJIpj0Il.js";import"./CartesianAxis-CTswAcYo.js";import"./Layer-GefPfHKN.js";import"./Text-CK2osH-3.js";import"./DOMUtils-DPI9rQIs.js";import"./Label-SBQmZETs.js";import"./ZIndexLayer-DpR0ZeoC.js";import"./types-Ctc34oVc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DcXITJ0o.js";import"./useAnimationId-CcRzR4wj.js";import"./ActivePoints-B6ujEarC.js";import"./Dot-h09Lg4V6.js";import"./RegisterGraphicalItemId-ZES9vfqK.js";import"./GraphicalItemClipPath-CUbr_GNl.js";import"./SetGraphicalItem-CMw9Vzf1.js";import"./getRadiusAndStrokeWidthFromDot-D73h4AtU.js";import"./ActiveShapeUtils-BbSbze6M.js";import"./Curve-CSkrO1uF.js";import"./step-D7_MEDCW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-T8-ppBBu.js";import"./useElementOffset-DgOlx547.js";import"./uniqBy-CyF01TCc.js";import"./iteratee-1FMy2Yxx.js";import"./Cross-tJLVE_Wj.js";import"./Rectangle-DI-L60n8.js";import"./util-Dxo8gN5i.js";import"./Sector-DLgetutF.js";import"./Symbols-BbTPMx-X.js";import"./symbol-BGQ2Bx4F.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
