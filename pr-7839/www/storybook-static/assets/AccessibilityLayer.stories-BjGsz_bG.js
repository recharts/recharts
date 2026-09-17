import{r as A,R as t}from"./iframe-MgA714vo.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DLmauAU1.js";import{A as E}from"./AreaChart-BRF2iAdJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CJCqY4vS.js";import{X as g}from"./XAxis-BO_zCdYE.js";import{Y as h}from"./YAxis-BWw82tYQ.js";import{A as a}from"./Area-BmBAk59t.js";import{T as u}from"./Tooltip-_iH2D9IH.js";import{R as k}from"./zIndexSlice-BFtzjsbT.js";import{L as v}from"./Legend-BkbPIsr_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1iPbMRH.js";import"./resolveDefaultProps-CB1SP_2F.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D8SlF3gx.js";import"./throttle-CokMtKXH.js";import"./index-yQC3T5y5.js";import"./index-DFNNaDkT.js";import"./isWellBehavedNumber-DFMdcmiK.js";import"./d3-scale-DxJKI2TE.js";import"./index-Gf96Mz3o.js";import"./index-BISHQAp4.js";import"./renderedTicksSlice-C4wx_D1w.js";import"./index-Bvn5aErC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BsRTJ-St.js";import"./chartDataContext-j9c_a0aH.js";import"./CategoricalChart-DPsIkKm4.js";import"./CartesianAxis-DiAsTuGj.js";import"./Layer-B-SLfZPM.js";import"./Text-DScWdIKY.js";import"./DOMUtils-79tWRulU.js";import"./useId-Wj9uSNps.js";import"./useBackwardsCompatibleTheme-DSXeHE4Z.js";import"./Label-cwVDT-eO.js";import"./ZIndexLayer-CrYLcujZ.js";import"./types-CZP1hKch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DYaErfcH.js";import"./useAnimationId-Dkacjwid.js";import"./ActivePoints-BYWv-6T2.js";import"./Dot-DxSSo-Hw.js";import"./RegisterGraphicalItemId-DjHk3rYd.js";import"./GraphicalItemClipPath-CuTt-XI_.js";import"./SetGraphicalItem-C0yQ7ETh.js";import"./getRadiusAndStrokeWidthFromDot-DoNGVpMm.js";import"./ActiveShapeUtils-GenD1j5W.js";import"./Curve-BBMmlamO.js";import"./step-Jmsq3o4W.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BtRSxKs5.js";import"./useElementOffset-BPMB1qe7.js";import"./uniqBy-DX3EmURr.js";import"./iteratee-pH2ns-XD.js";import"./Cross-KjjWSR_c.js";import"./Rectangle-D606jjIQ.js";import"./util-Dxo8gN5i.js";import"./Sector-vmdugbBz.js";import"./Symbols-BitF9prN.js";import"./symbol-tTdu_Gw1.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
