import{r as A,R as t}from"./iframe-DdGnkOFo.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-A-lxRNNH.js";import{A as E}from"./AreaChart-DBLWdV2_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-8-gqwNmB.js";import{X as g}from"./XAxis-CwjUQWj_.js";import{Y as h}from"./YAxis-BBZ_UVPr.js";import{A as a}from"./Area-BMP87Utr.js";import{T as u}from"./Tooltip-C3GMGeW6.js";import{R as k}from"./zIndexSlice-Coao54AN.js";import{L as v}from"./Legend-j7wP2bqS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWAtSdtd.js";import"./index-BT6JmE6p.js";import"./index-Ikz32X_R.js";import"./index-CLyHvciH.js";import"./index-Z1BsW0X1.js";import"./throttle-zZssU-Yn.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BOOh9KOs.js";import"./axisSelectors-Cd50OEg7.js";import"./resolveDefaultProps-Btuog99o.js";import"./isWellBehavedNumber-vlfZeEqT.js";import"./d3-scale-BvrGgEa2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BEpSJ7tS.js";import"./chartDataContext-DAj5ZKMQ.js";import"./CategoricalChart-B-_DRhy8.js";import"./CartesianAxis-Bo84uroF.js";import"./Layer-C_y1fxvr.js";import"./Text-DAM87njj.js";import"./DOMUtils-DV9Ec2hx.js";import"./Label-BhIy96Hp.js";import"./ZIndexLayer-Ohjg-EB3.js";import"./types-D3VR5HmA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BUboBg0D.js";import"./useAnimationId-6rr0uMBz.js";import"./ActivePoints-fBjIF9Nl.js";import"./Dot-CqaCoBUP.js";import"./RegisterGraphicalItemId-COu7yO2P.js";import"./GraphicalItemClipPath-DAEO1IcC.js";import"./SetGraphicalItem-2sM575PE.js";import"./getRadiusAndStrokeWidthFromDot-D5R5gYG2.js";import"./ActiveShapeUtils-D54fuxpr.js";import"./Curve-BxYGAEW6.js";import"./step-B8IQ9ApF.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DvuEKxlJ.js";import"./useElementOffset-4OHFNcW2.js";import"./uniqBy-CXPCyF4-.js";import"./iteratee-aK0dWx0L.js";import"./Cross-CiGCk2h5.js";import"./Rectangle-Dicu6Oub.js";import"./util-Dxo8gN5i.js";import"./Sector-D0r8VPbQ.js";import"./Symbols-SKeYRtHY.js";import"./symbol-CcoCMD-R.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
