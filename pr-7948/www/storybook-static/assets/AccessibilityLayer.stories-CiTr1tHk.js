import{r as A,R as t}from"./iframe-Z4zOoLz7.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Ci-r_zyP.js";import{A as E}from"./AreaChart-DUR-0Uq_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CoLshd-b.js";import{X as g}from"./XAxis-vC51wnfX.js";import{Y as h}from"./YAxis-DcaBIqq9.js";import{A as a}from"./Area-BoIyjwJz.js";import{T as u}from"./Tooltip-BQCBXkHh.js";import{R as k}from"./zIndexSlice-07-9uDTC.js";import{L as v}from"./Legend-BLQGVug1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6jGY5P2.js";import"./resolveDefaultProps-DOQLwwUl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D5RAwviA.js";import"./throttle-9WzIUwC-.js";import"./index-DyaBjL-T.js";import"./index-xqTHFQSV.js";import"./isWellBehavedNumber-Ds32fXh1.js";import"./d3-scale-By1WrWdl.js";import"./index-DNpJ-y1s.js";import"./index-DU7fosbq.js";import"./renderedTicksSlice-XpkPmQP6.js";import"./index-YATDX38S.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-r7CDK1kg.js";import"./chartDataContext-B0vVK4FP.js";import"./CategoricalChart-D5-WelqS.js";import"./CartesianAxis-D0qgtLuE.js";import"./Layer-DROZCM5S.js";import"./Text-D1NXAhAr.js";import"./pageBackground-cgE2GIfC.js";import"./useId-d3zx3clY.js";import"./useBackwardsCompatibleTheme-DoS7t3mQ.js";import"./Label-CznRo0qq.js";import"./ZIndexLayer-CzgpVDV6.js";import"./types-BIzeqQN_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Clj_q_02.js";import"./useAnimationId-CclGmA5U.js";import"./dataEntryStyles-jPYjF1-F.js";import"./ActivePoints-Cf8I1OR_.js";import"./Dot-BYY6Lyl-.js";import"./GraphicalItemClipPath-Dh8t0UHl.js";import"./SetGraphicalItem-D_Y4scs-.js";import"./getRadiusAndStrokeWidthFromDot-oWL_gOl_.js";import"./ActiveShapeUtils-DptdzhMF.js";import"./Curve-B2kFPXHR.js";import"./step-Bz8uLEg2.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Bz_dea2_.js";import"./useElementOffset-S6uYAEYX.js";import"./uniqBy-D7Oablgk.js";import"./iteratee-BmQxJUF4.js";import"./Cross-Cs-2djo7.js";import"./Rectangle-BRzNxGc4.js";import"./util-Dxo8gN5i.js";import"./Sector-CO7Pa82d.js";import"./Symbols--vCw1LR_.js";import"./symbol-bhdOsLww.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
