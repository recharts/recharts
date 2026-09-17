import{r as A,R as t}from"./iframe-BWgNvoHd.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CDicU1zI.js";import{A as E}from"./AreaChart-NNqV5AS_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Buu8uFyr.js";import{X as g}from"./XAxis-NaVI4shj.js";import{Y as h}from"./YAxis-Cw1g73tC.js";import{A as a}from"./Area-DiQyVPag.js";import{T as u}from"./Tooltip-B-ieOYkC.js";import{R as k}from"./zIndexSlice-C7P0LeTp.js";import{L as v}from"./Legend-CrwpKrLS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqggqYnG.js";import"./resolveDefaultProps-BWCwlNwt.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dam-iDrH.js";import"./throttle-Bg-BpQUC.js";import"./index-DmnQYdaI.js";import"./index-CK7j19MQ.js";import"./isWellBehavedNumber-CM5YB1xm.js";import"./d3-scale-CFMZ35Kl.js";import"./index-BqzBYwQc.js";import"./index-FyKmNOxh.js";import"./renderedTicksSlice-Dqzed6yg.js";import"./index-ldLlQXbm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dh0jr6Yv.js";import"./chartDataContext-BK5iZPJH.js";import"./CategoricalChart-BAKFtZDW.js";import"./CartesianAxis-ChN3yMr6.js";import"./Layer-C3eYLIIL.js";import"./Text-CY7tJJcL.js";import"./DOMUtils-Dr6Nulpk.js";import"./useId-BqfKGNe3.js";import"./useBackwardsCompatibleTheme-CAXCwkj5.js";import"./Label-B5Qmh4rZ.js";import"./ZIndexLayer-Cmt_sSM5.js";import"./types-CrSccog6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-hZV-WKF8.js";import"./useAnimationId-Bc7y922J.js";import"./ActivePoints-Cc4fx1EW.js";import"./Dot-B7IGFvAw.js";import"./RegisterGraphicalItemId-DD6KbxKE.js";import"./GraphicalItemClipPath-MkJi9iI4.js";import"./SetGraphicalItem-BxHdn_2c.js";import"./getRadiusAndStrokeWidthFromDot-D_8ZDval.js";import"./ActiveShapeUtils-BslnG83G.js";import"./Curve-3XxISmtt.js";import"./step-ChFfihmJ.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BBFCWIMQ.js";import"./useElementOffset-DTfG1d0_.js";import"./uniqBy-b4mUNSGI.js";import"./iteratee-BEUkWsOH.js";import"./Cross-BNwhfFnH.js";import"./Rectangle-CBMXDrA6.js";import"./util-Dxo8gN5i.js";import"./Sector-CAxghyDl.js";import"./Symbols-DXOe_3B0.js";import"./symbol-BSkZIEXR.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
