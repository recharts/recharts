import{r as A,R as t}from"./iframe-DEVQjgtg.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CkNI_L7v.js";import{A as E}from"./AreaChart-CVad2sST.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-qpQnI3BO.js";import{X as g}from"./XAxis-BW3rW0v-.js";import{Y as h}from"./YAxis-DNUJzVJY.js";import{A as a}from"./Area-BtSga7w6.js";import{T as u}from"./Tooltip-BsOHq51C.js";import{R as k}from"./zIndexSlice-DfK8JSFq.js";import{L as v}from"./Legend-CuHxeQW8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CfFuT0mb.js";import"./resolveDefaultProps-CwoRT4vA.js";import"./get-CjriyByo.js";import"./axisSelectors-t3BvEa3q.js";import"./throttle-icp-MZ_z.js";import"./index-Cpcs4tmX.js";import"./index-C95LL0D7.js";import"./polarAxisSelectors-DOgnXW1S.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Co6YNHM_.js";import"./index-fXrCovV3.js";import"./index-TVJDl2u2.js";import"./renderedTicksSlice-2D_h0Nlg.js";import"./index-Cxp_oZwY.js";import"./fillDefinitions-D1YpghSP.js";import"./CartesianChart-pH5TOmhe.js";import"./chartDataContext-DImnS5HH.js";import"./CategoricalChart-BtHLUBe9.js";import"./CartesianAxis-CPxmijCh.js";import"./Layer-Cr563h4j.js";import"./Text-B9Mi7Fii.js";import"./ZIndexLayer-FMAzY6FJ.js";import"./Label-CuMp2cQz.js";import"./types-B0JGDzFy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-g6-mSPtW.js";import"./dataEntryStyles-DAcHMSZ1.js";import"./ActivePoints-Dpho8RxE.js";import"./Dot-p_BgihRi.js";import"./activeStyles-D4aY95Js.js";import"./useAnimationId-CMFy88eN.js";import"./Symbols-CuwdJXxk.js";import"./symbol-Dp50t1em.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CsW3luzS.js";import"./ActiveShapeUtils-DqT038Y8.js";import"./Curve-a_jcRLJ0.js";import"./step-CpcYtbS4.js";import"./useEffectiveDataKey-Cx2ptCsW.js";import"./useElementOffset-M02b1bSW.js";import"./uniqBy-RXDCBnIw.js";import"./iteratee-69chSGWI.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C_0Oj-h0.js";import"./Rectangle-BvNq4YWD.js";import"./util-Dxo8gN5i.js";import"./Sector-B86o0IXH.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
