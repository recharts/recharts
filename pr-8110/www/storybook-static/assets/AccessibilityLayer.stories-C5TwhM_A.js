import{r as A,R as t}from"./iframe-Cr7yvMyR.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Br0t_Hun.js";import{A as E}from"./AreaChart-Cdy42nQa.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-qOjoXZ7o.js";import{X as g}from"./XAxis-6YWl141g.js";import{Y as h}from"./YAxis-CzA9LN6m.js";import{A as a}from"./Area-KVAx1aqo.js";import{T as u}from"./Tooltip-DiW-QkFW.js";import{R as k}from"./zIndexSlice-CsHxFK6N.js";import{L as v}from"./Legend-C_9JRBub.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtToZ6Qn.js";import"./resolveDefaultProps-7XokfeB_.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BefgmR9V.js";import"./throttle-RI9qCIcF.js";import"./index-BW-7B_Oi.js";import"./index-BxNxBv76.js";import"./polarAxisSelectors-Bu65NBmY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DsBZl9Yj.js";import"./index-D9o51X71.js";import"./index-DqRp8Gio.js";import"./renderedTicksSlice-BFO9fjGk.js";import"./index-DcWjrMSV.js";import"./CartesianChart-BdMrkwen.js";import"./ZIndexPortal-BAJpkEGh.js";import"./CategoricalChart-Cyp6BiKR.js";import"./CartesianAxis-CEqebLVd.js";import"./Layer-Dr_Plb3q.js";import"./Text-Bgk62K3n.js";import"./DOMUtils-DpKBhuMF.js";import"./ZIndexLayer-DE1YK584.js";import"./Label-Bde3ooKp.js";import"./types-NTnKzXXZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DKDyf66o.js";import"./ActivePoints-CeFLQPPR.js";import"./Dot-C8oJPXZf.js";import"./activeStyles-4Qukhfp5.js";import"./useAnimationId-CrRcWCxT.js";import"./dataEntryStyles-Df9giDaD.js";import"./Symbols-BTpF-zfb.js";import"./symbol-AnQJSsJ7.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CPzrGo_B.js";import"./getRadiusAndStrokeWidthFromDot-BmiuMj8w.js";import"./ActiveShapeUtils-DimJ4nan.js";import"./Curve-BMeJMEVZ.js";import"./step-C7lw2IuE.js";import"./useEffectiveDataKey-DcbjY3Lr.js";import"./useElementOffset-DLS-U19J.js";import"./uniqBy-WRjYJOFh.js";import"./iteratee-ru1DkRCS.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bh3oRRwe.js";import"./Rectangle-CzWgcXDx.js";import"./util-Dxo8gN5i.js";import"./Sector-BicQVizF.js";import"./fillDefinitions-C6DfZjQD.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
