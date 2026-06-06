import{r as A,R as t}from"./iframe-BiXVY0YN.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Cf4jkg33.js";import{A as E}from"./AreaChart-BNUTbTSI.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DOHYVCTU.js";import{X as g}from"./XAxis-8aOHTtEo.js";import{Y as h}from"./YAxis-Da5Yhwpa.js";import{A as a}from"./Area-CvZPAbOr.js";import{T as u}from"./Tooltip-CONywgA0.js";import{R as k}from"./zIndexSlice-nY6JNSg8.js";import{L as v}from"./Legend-Cuei_W9Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7VFUx7Q.js";import"./index-BDCsY1Bp.js";import"./index-PSniF_G7.js";import"./index-nFhQ5GlG.js";import"./index-C9pEG8B_.js";import"./immer-Bguoov5l.js";import"./get-DSfNO7n4.js";import"./renderedTicksSlice-D3zVHdBs.js";import"./axisSelectors-aUKbGV01.js";import"./d3-scale-Bqjw06G0.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DD4XGInB.js";import"./isWellBehavedNumber-DE5idxcf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3egFHKO.js";import"./chartDataContext-CjUfDHdj.js";import"./CategoricalChart-BzNcO88n.js";import"./CartesianAxis-eCQKtisH.js";import"./Layer-uuEILT3S.js";import"./Text-DmK0i7Bz.js";import"./DOMUtils-C2cF8Szu.js";import"./Label-BJ6MA63M.js";import"./ZIndexLayer-6ebEplbW.js";import"./types-CLXMlpTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DfhrJO_Z.js";import"./useAnimationId-CfBicigm.js";import"./ActivePoints-B-SHt4Wz.js";import"./Dot-BnLwvEMd.js";import"./RegisterGraphicalItemId-MDxIerXT.js";import"./GraphicalItemClipPath-DNkkSszT.js";import"./SetGraphicalItem-AeS5weMQ.js";import"./getRadiusAndStrokeWidthFromDot-LZlKw0gF.js";import"./ActiveShapeUtils-RN-LxFg0.js";import"./Curve-D7wuzLSQ.js";import"./step-BzaqppXW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C0O5oaAS.js";import"./useElementOffset-CPLS44DG.js";import"./uniqBy-CcGBVuj2.js";import"./iteratee-STjWE_qx.js";import"./Cross-C3BpIl7J.js";import"./Rectangle-DuKXzg_S.js";import"./Sector-jQ_V-qCe.js";import"./Symbols-BELca2ug.js";import"./symbol-DzSheJ7o.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
