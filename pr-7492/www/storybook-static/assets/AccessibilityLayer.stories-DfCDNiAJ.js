import{r as A,R as t}from"./iframe-Bc8uafj_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BaFcNv6t.js";import{A as E}from"./AreaChart-bM1fnLlM.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BZwF4Ai8.js";import{X as g}from"./XAxis-D3U7ZnRc.js";import{Y as h}from"./YAxis-TQ1T3gnX.js";import{A as a}from"./Area-cHy7tUdH.js";import{T as u}from"./Tooltip-C015rWVA.js";import{R as k}from"./zIndexSlice-DgIKKnku.js";import{L as v}from"./Legend-BXU6Biuu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ENbvc07n.js";import"./index-C3D0VAho.js";import"./index-Dhuj-LWB.js";import"./index-9l0gGEIz.js";import"./index-DbEmmVI0.js";import"./immer-DhRCiF9y.js";import"./get-CoQ1aHe8.js";import"./renderedTicksSlice-CDLhDidm.js";import"./axisSelectors-BV-5bajo.js";import"./d3-scale-CuCR1Aws.js";import"./resolveDefaultProps-D94aQw_7.js";import"./isWellBehavedNumber-CGMb3shs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-LYbang.js";import"./chartDataContext-w3WNE9w3.js";import"./CategoricalChart-DEq5So-g.js";import"./CartesianAxis-DjGZfAuA.js";import"./Layer-BOwFFWNG.js";import"./Text-BXzZhQXx.js";import"./DOMUtils-Dp92goZ8.js";import"./Label-3HS03WWg.js";import"./ZIndexLayer-BEkWbSjN.js";import"./types-unK8WfaH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CDgcpQiE.js";import"./useAnimationId-CUqgRxQq.js";import"./ActivePoints-Byxcert_.js";import"./Dot-Ch1zQlh_.js";import"./RegisterGraphicalItemId-CKxQU2m7.js";import"./GraphicalItemClipPath-DUHE7Dv_.js";import"./SetGraphicalItem-DFzenvxr.js";import"./getRadiusAndStrokeWidthFromDot-DFKmST2Y.js";import"./ActiveShapeUtils-H6mpGyBM.js";import"./Curve-DiuauwRl.js";import"./step-B3z5Hoe6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D1B9Vbyd.js";import"./useElementOffset-IpZ5186H.js";import"./uniqBy-B_P63sZB.js";import"./iteratee-NS3BASsA.js";import"./Cross-BSJlEbZW.js";import"./Rectangle-B_1O-YWH.js";import"./util-Dxo8gN5i.js";import"./Sector-Bt3XtUh8.js";import"./Symbols-CDHLQFdp.js";import"./symbol-DMI8nJp8.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
