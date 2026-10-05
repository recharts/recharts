import{r as A,R as t}from"./iframe-BO6kNEfQ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BIhV4Cn8.js";import{A as E}from"./AreaChart-DFJR29Hb.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-sQS0RZSA.js";import{X as g}from"./XAxis-DUMRPyWG.js";import{Y as h}from"./YAxis-Bpx19asJ.js";import{A as a}from"./Area-C-Zq-iKZ.js";import{T as u}from"./Tooltip-BJ6ncSEb.js";import{R as k}from"./zIndexSlice-CSvwJ_UT.js";import{L as v}from"./Legend-wrLObU49.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjhorxtA.js";import"./resolveDefaultProps-DeeWTLmP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-clIGt-1m.js";import"./throttle-CC5fq1IH.js";import"./index-C9e-3BIk.js";import"./index-CAnCLEru.js";import"./isWellBehavedNumber-B-Ulh-Re.js";import"./d3-scale-B89J0uLC.js";import"./index-CTBq7QCd.js";import"./index-BiTwoYeC.js";import"./renderedTicksSlice-CyXD3owy.js";import"./index-DGFWSvO2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DbU3p1bm.js";import"./chartDataContext-C8PMDwYi.js";import"./CategoricalChart-BBSMzdqi.js";import"./CartesianAxis-DkQVUKnt.js";import"./Layer-DAnsZuJj.js";import"./Text-CvDq8Z5Q.js";import"./DOMUtils-DjzhJzRg.js";import"./useId-CAIxAqit.js";import"./useBackwardsCompatibleTheme-DwFWyF9F.js";import"./Label-ktTcBfs2.js";import"./ZIndexLayer-BVG745mx.js";import"./types-CrvIZc3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-FM3uBbR2.js";import"./useAnimationId-NFss7X44.js";import"./ActivePoints--BVAgljg.js";import"./Dot-Bps0tpeZ.js";import"./RegisterGraphicalItemId-DXmwJq0A.js";import"./GraphicalItemClipPath-CqCtj_pv.js";import"./SetGraphicalItem-CMnburaU.js";import"./getRadiusAndStrokeWidthFromDot-TV6VUSJm.js";import"./ActiveShapeUtils-CRw266nd.js";import"./Curve-hgySA8iE.js";import"./step-BjM5lwd1.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BOcRclg4.js";import"./useElementOffset-Bows1p5H.js";import"./uniqBy-QqkFbTHY.js";import"./iteratee-CYMuw_Xv.js";import"./Cross-DDTRSnDt.js";import"./Rectangle-bQ1U5Rvt.js";import"./util-Dxo8gN5i.js";import"./Sector-CsR_fyCv.js";import"./Symbols-VJ3ENrFL.js";import"./symbol-DPXsMkWI.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
