import{r as A,R as t}from"./iframe-ULtY-NVK.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BLU8rp3_.js";import{A as E}from"./AreaChart-DqOO7nMh.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bx2isx_J.js";import{X as g}from"./XAxis-BxexlvNE.js";import{Y as h}from"./YAxis-BQ0jDyxm.js";import{A as a}from"./Area-JDCaFsEe.js";import{T as u}from"./Tooltip-R8qLM_P2.js";import{R as k}from"./zIndexSlice-jBtZtiCi.js";import{L as v}from"./Legend-Vbwf_oDe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-JXy35Des.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DyOG1uRh.js";import"./throttle-CHVCCuLD.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./polarAxisSelectors-DJMQca_o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ZBKsHMes.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./CartesianAxis-B-ohTpBX.js";import"./Layer-DhwnXi08.js";import"./Text-DIgVe04Z.js";import"./ZIndexLayer-3L32Zbp4.js";import"./Label-RNo0-Kup.js";import"./types-YE6r9ekT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DVOUqZ2G.js";import"./ActivePoints-DVHPdhuz.js";import"./Dot-D81fGPmQ.js";import"./activeStyles-nNAh6kPS.js";import"./useAnimationId-BnN3bcdg.js";import"./Symbols-D8MIyMXa.js";import"./symbol-C9fiuppk.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C0LXV43X.js";import"./getRadiusAndStrokeWidthFromDot-DoYvpvg5.js";import"./ActiveShapeUtils-S-fma9uX.js";import"./Curve-CN39irzx.js";import"./step-qhW1rf6_.js";import"./useEffectiveDataKey-DbYUjo2f.js";import"./useElementOffset-DhIwgz5u.js";import"./uniqBy-DTA7LqR-.js";import"./iteratee-DNbp_EuJ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DardZkkK.js";import"./Rectangle-CgoAn4IQ.js";import"./util-Dxo8gN5i.js";import"./Sector-KxRZamhw.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
