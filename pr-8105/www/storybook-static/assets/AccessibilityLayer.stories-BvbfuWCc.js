import{r as A,R as t}from"./iframe-OqKJbU5N.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DbKCzyO4.js";import{A as E}from"./AreaChart-DlFq3QMV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BiyHkmur.js";import{X as g}from"./XAxis-BOpO9kNQ.js";import{Y as h}from"./YAxis-BvbToLwB.js";import{A as a}from"./Area-Yw-ElK4Q.js";import{T as u}from"./Tooltip-B-vv3o_Q.js";import{R as k}from"./zIndexSlice-SR00o6sl.js";import{L as v}from"./Legend-LpcTH5CK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DR91apNy.js";import"./resolveDefaultProps-CJu8DiNV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DgBSWf8B.js";import"./throttle-Dd4NMqKN.js";import"./index-Dpjuq2Lp.js";import"./index-DZqDb_nm.js";import"./polarAxisSelectors-Ds9uThXq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BY5IvaL3.js";import"./index-D0vXz4xA.js";import"./index-D-gzGN7z.js";import"./renderedTicksSlice-DNR3Nm-M.js";import"./index-DYD5HM8H.js";import"./CartesianChart-CtxmU-X6.js";import"./ZIndexPortal-SXFY_RF7.js";import"./CategoricalChart-CphpP2QN.js";import"./CartesianAxis-pqwy63jz.js";import"./Layer-Cr-Iv08I.js";import"./Text-BBVNpawX.js";import"./pageBackground-Cszwy4wg.js";import"./ZIndexLayer-UUbhXFJu.js";import"./Label-Du8bKZih.js";import"./types-9svgO-k7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-s2IEt-iE.js";import"./ActivePoints-DniM9AXi.js";import"./Dot-C7hW2lTf.js";import"./activeStyles-DnmgD4rl.js";import"./useAnimationId-DvBUlVSU.js";import"./dataEntryStyles-KId877_8.js";import"./Symbols-ayOQu3YZ.js";import"./symbol-DNYfeltN.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CvB1j4dG.js";import"./getRadiusAndStrokeWidthFromDot-BDb9Uw_H.js";import"./ActiveShapeUtils-DR5Jktsx.js";import"./Curve-61gTtyRO.js";import"./step-BRtTreeO.js";import"./useEffectiveDataKey-CV_AhX-p.js";import"./useElementOffset-CzQY9gJ2.js";import"./uniqBy-DsfhD18s.js";import"./iteratee-Cyssn55k.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CUTxlgQS.js";import"./Rectangle-CMG9couI.js";import"./util-Dxo8gN5i.js";import"./Sector-tnQ6QhLg.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
