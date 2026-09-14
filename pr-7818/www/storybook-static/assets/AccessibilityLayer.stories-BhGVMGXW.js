import{r as A,R as t}from"./iframe-CazybM5Q.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-U-yCg0Zp.js";import{A as E}from"./AreaChart-B9-tPoxD.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DXEdJr3j.js";import{X as g}from"./XAxis-DU0DQOG4.js";import{Y as h}from"./YAxis-BbPMcjUo.js";import{A as a}from"./Area-BKS2Tut0.js";import{T as u}from"./Tooltip-bg-Rq8Zl.js";import{R as k}from"./zIndexSlice-C8_Ry1FK.js";import{L as v}from"./Legend-BO9b5cY6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CpPe0RTB.js";import"./resolveDefaultProps-CBYYqUCW.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DZkp_M3U.js";import"./throttle-l1Kptz9a.js";import"./index-DnBm6OUb.js";import"./index-DOWHA8mY.js";import"./isWellBehavedNumber-CpA3kMgp.js";import"./d3-scale-pDPjkkGb.js";import"./index-SN9fh9yC.js";import"./index-7BXYpUCT.js";import"./renderedTicksSlice-kdcY3T7P.js";import"./index-D_RyOPxQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DVi_4rZ_.js";import"./chartDataContext-D7DiZH02.js";import"./CategoricalChart-CzkgI-hR.js";import"./CartesianAxis-CjSMZkKI.js";import"./Layer-fj-XlG60.js";import"./Text-x2aI-_E3.js";import"./DOMUtils-D953XyQL.js";import"./useId-C2k1DfII.js";import"./useBackwardsCompatibleTheme-Busncj89.js";import"./Label-jvSJhliV.js";import"./ZIndexLayer-ytwD_49s.js";import"./types-BzWyleSx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DoL70GVg.js";import"./useAnimationId-Bh-TCZxX.js";import"./ActivePoints-BsSeTHgb.js";import"./Dot-BNIKPTnU.js";import"./RegisterGraphicalItemId-DaFrO76U.js";import"./GraphicalItemClipPath-Gh_0CyLf.js";import"./SetGraphicalItem-CGh1GzJA.js";import"./getRadiusAndStrokeWidthFromDot-BNmcBPi1.js";import"./ActiveShapeUtils-D_rLTXV3.js";import"./Curve-DGBASg2P.js";import"./step-CrScPSNY.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C973phhc.js";import"./useElementOffset-4OfpAhcO.js";import"./uniqBy-DV26r5Rr.js";import"./iteratee-Ry3r0H3-.js";import"./Cross-DQVhrJAA.js";import"./Rectangle-Bh1teys1.js";import"./util-Dxo8gN5i.js";import"./Sector-BCUKlagA.js";import"./Symbols-CaSh0UR-.js";import"./symbol-EFStI95C.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
