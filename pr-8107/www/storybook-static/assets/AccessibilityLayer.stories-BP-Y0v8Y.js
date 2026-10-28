import{r as A,R as t}from"./iframe-CExY2eWA.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-jeltTTaE.js";import{A as E}from"./AreaChart-DI_E3PkS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-aVowaFX_.js";import{X as g}from"./XAxis-CfGhwt3z.js";import{Y as h}from"./YAxis-B_hjfjB_.js";import{A as a}from"./Area-D374EN8-.js";import{T as u}from"./Tooltip-eFT7inFD.js";import{R as k}from"./zIndexSlice-C37XV2sv.js";import{L as v}from"./Legend-BIDrTJ_w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLH4YKyL.js";import"./resolveDefaultProps-CjbXNHQ5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DD16TRVI.js";import"./throttle-BBNIp7bK.js";import"./index-8pYktU8Y.js";import"./index-FNceUiie.js";import"./polarAxisSelectors-YwnVtORU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-0yyW8T9p.js";import"./index-AsSutFXR.js";import"./index-CUE47Bel.js";import"./renderedTicksSlice-DrzyKYB4.js";import"./index-Da9Adtew.js";import"./CartesianChart-BC6n1rn7.js";import"./ZIndexPortal-noF9F7eD.js";import"./CategoricalChart-CTKTm7QW.js";import"./CartesianAxis-BL500t0F.js";import"./Layer-Bau4eIyO.js";import"./Text-B8G25q0u.js";import"./pageBackground-DZSWUMfw.js";import"./ZIndexLayer-DlXNWMXh.js";import"./Label-DKiyvKzI.js";import"./types-Dc-N9olf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-jPGn2qdg.js";import"./ActivePoints-hvZNmfX7.js";import"./Dot-DFSECcE9.js";import"./activeStyles-DJMtR5DX.js";import"./useAnimationId-DqJ2hXPF.js";import"./dataEntryStyles-iq_Y384c.js";import"./Symbols-BL7s7DpT.js";import"./symbol-DETtOMtn.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BdGwDqMG.js";import"./getRadiusAndStrokeWidthFromDot-D9OCaedM.js";import"./ActiveShapeUtils-C53NOjZd.js";import"./Curve-DQpSgZo6.js";import"./step-BYC0RXYs.js";import"./useEffectiveDataKey-CZSLIZ23.js";import"./useElementOffset-C39tezyP.js";import"./uniqBy-Crl5fHd8.js";import"./iteratee--CMPcs_W.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CO7Xs6dQ.js";import"./Rectangle-BbDfzF7k.js";import"./util-Dxo8gN5i.js";import"./Sector-BxZajP91.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
