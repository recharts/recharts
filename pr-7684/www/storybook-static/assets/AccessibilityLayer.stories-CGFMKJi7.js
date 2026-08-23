import{r as A,R as t}from"./iframe-C3Hc6ExU.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DQvc_r-0.js";import{A as E}from"./AreaChart-BD3VmzSE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DRfcDaI-.js";import{X as g}from"./XAxis-Dtgw3Co8.js";import{Y as h}from"./YAxis-C-y6lpsY.js";import{A as a}from"./Area-yUULwIEy.js";import{T as u}from"./Tooltip-BEzcRvDA.js";import{R as k}from"./zIndexSlice-DUSt-QRk.js";import{L as v}from"./Legend-vTCAFLss.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7tS-h39.js";import"./index-DPHIqaZF.js";import"./index-jh_FdFAs.js";import"./index-BCuR5Ep7.js";import"./index-N8Br274d.js";import"./throttle-DY2EWLMY.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CVNuchwD.js";import"./resolveDefaultProps-I9hvH7ZX.js";import"./isWellBehavedNumber-BaxFFXf5.js";import"./d3-scale-BNbYa6kD.js";import"./renderedTicksSlice-C_VQ6yCW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D83sOKb0.js";import"./chartDataContext-De2r_5pJ.js";import"./CategoricalChart-Z9dORHEb.js";import"./CartesianAxis-DzoIF-ni.js";import"./Layer-nhPcXxtD.js";import"./Text-DrMy69_K.js";import"./DOMUtils-Cnn_urMe.js";import"./useId-z0f7lKjA.js";import"./useBackwardsCompatibleTheme-BO1TP3oH.js";import"./Label-CANqho75.js";import"./ZIndexLayer-G0ryhOC-.js";import"./types-fNKA8Oi0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-EryZIVr5.js";import"./useAnimationId-C5Z2jNIS.js";import"./ActivePoints-MsPbupEa.js";import"./Dot-Dhy6Aaz6.js";import"./RegisterGraphicalItemId-B-hExQD4.js";import"./GraphicalItemClipPath-1LBjo5Ot.js";import"./SetGraphicalItem-DJG5Kc0f.js";import"./getRadiusAndStrokeWidthFromDot-BZlod__d.js";import"./ActiveShapeUtils-BBT5vOsU.js";import"./Curve-xgDPuw9g.js";import"./step-C6OJ_LlT.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CPtG7WLe.js";import"./useElementOffset-DuZ6R57W.js";import"./uniqBy-CoWizTQu.js";import"./iteratee-BjcMXY4A.js";import"./Cross-KjR35TKX.js";import"./Rectangle-B8xTYBg9.js";import"./util-Dxo8gN5i.js";import"./Sector-U6RkeRpn.js";import"./Symbols-DPWsfdBp.js";import"./symbol-Gsnozwnh.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
