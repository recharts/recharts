import{r as A,R as t}from"./iframe-Xn2MpEZO.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B-mMwZkB.js";import{A as E}from"./AreaChart-W1-Na1t6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CshHlagv.js";import{X as g}from"./XAxis-BfvOUMD4.js";import{Y as h}from"./YAxis-CAfubk2b.js";import{A as a}from"./Area-7gJ7wVDU.js";import{T as u}from"./Tooltip-ZVdfnJ5l.js";import{R as k}from"./zIndexSlice-Ci7uKtqk.js";import{L as v}from"./Legend-r5dsJIuI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxUke-Wy.js";import"./index-DCEv34s7.js";import"./index-BFHb-0iX.js";import"./index-B9rMLYis.js";import"./index-BJjZAGkk.js";import"./immer-Df9E9w07.js";import"./get-a5GlobPr.js";import"./renderedTicksSlice-DHtwTgZF.js";import"./axisSelectors-N1yg_9bS.js";import"./d3-scale-BhQeBFLV.js";import"./resolveDefaultProps-ComQIB2r.js";import"./isWellBehavedNumber-ikHr81yL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qVEZ4DBv.js";import"./chartDataContext-CdM4lEIq.js";import"./CategoricalChart-BYw4mGkG.js";import"./CartesianAxis-Ci5XT6aX.js";import"./Layer-DSBtIc_n.js";import"./Text-DhiURvp0.js";import"./DOMUtils-C9OtDZJT.js";import"./Label-Drk02YPI.js";import"./ZIndexLayer-rkhqqfVD.js";import"./types-BkUFHbYz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-AezG2GF8.js";import"./useAnimationId-Dddlhxb8.js";import"./ActivePoints-Du0eECBh.js";import"./Dot-BgDetyZ9.js";import"./RegisterGraphicalItemId-CGNP0Yo_.js";import"./GraphicalItemClipPath-Cc8lCQ6R.js";import"./SetGraphicalItem-97hX8Iat.js";import"./getRadiusAndStrokeWidthFromDot-CWaP50r6.js";import"./ActiveShapeUtils-DjKDdlLp.js";import"./Curve-DX9_0-tw.js";import"./step-DkdplZJs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-IpQzZ0vj.js";import"./useElementOffset-Byrz6AYu.js";import"./uniqBy-BTijv5vR.js";import"./iteratee-kQQ-_etq.js";import"./Cross-BxiQs5Fm.js";import"./Rectangle-BNtGtL1T.js";import"./util-Dxo8gN5i.js";import"./Sector-C3_M6Ao2.js";import"./Symbols-BM7k7zSs.js";import"./symbol-ipVDMKgS.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
