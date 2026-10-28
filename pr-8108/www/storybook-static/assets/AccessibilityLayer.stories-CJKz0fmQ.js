import{r as A,R as t}from"./iframe-D0jufW3D.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CHSW6wo4.js";import{A as E}from"./AreaChart-dEeJaYHT.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DPChzump.js";import{X as g}from"./XAxis-DbxDHf11.js";import{Y as h}from"./YAxis-D7roMtR7.js";import{A as a}from"./Area-BqxBj55b.js";import{T as u}from"./Tooltip-BQ0fqtX9.js";import{R as k}from"./zIndexSlice-BoierTw-.js";import{L as v}from"./Legend-BS3Q5f_P.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTMB1NV8.js";import"./resolveDefaultProps-CwNNBflB.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dx__qMJ7.js";import"./throttle-BRaHJfbv.js";import"./index-DuN5ZfYO.js";import"./index-CnAESQjM.js";import"./polarAxisSelectors-eVHebS17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK6BpS5A.js";import"./index-Bf3oFgb9.js";import"./index-BopMBIHA.js";import"./renderedTicksSlice-CqZoa4E3.js";import"./index-DpQX8-G9.js";import"./CartesianChart-D_2FRpkc.js";import"./ZIndexPortal-B4KRqmjs.js";import"./CategoricalChart-D4TUwcq3.js";import"./CartesianAxis-xT0IlJ0n.js";import"./Layer-D5IjCwFP.js";import"./Text-CJ7ZV5G-.js";import"./pageBackground-D6LTNenr.js";import"./ZIndexLayer-B9tL4Ye-.js";import"./Label-L5bBHry2.js";import"./types-KyGzz8Fo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BSqidkx_.js";import"./ActivePoints-BXYidu17.js";import"./Dot-CcvERK0Y.js";import"./activeStyles-CKVoF1Mf.js";import"./useAnimationId-BckzpxH4.js";import"./dataEntryStyles-L1JX3I7t.js";import"./Symbols-C7TjFguZ.js";import"./symbol-Cehhuj0X.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Cnoug-d_.js";import"./getRadiusAndStrokeWidthFromDot-DIU63BSP.js";import"./ActiveShapeUtils-dLVute71.js";import"./Curve-CbdawudC.js";import"./step-ClRjxL_f.js";import"./useEffectiveDataKey-D47_79bJ.js";import"./useElementOffset-Cmh5XwmF.js";import"./uniqBy-Dx1aoyhy.js";import"./iteratee-CPaJ8F08.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CYoxeUdp.js";import"./Rectangle-BcLE3h-E.js";import"./util-Dxo8gN5i.js";import"./Sector-Auh1s1yj.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
