import{r as A,R as t}from"./iframe-BFObQXXM.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DfJYfYyB.js";import{A as E}from"./AreaChart-QuziXo3T.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-XMqhd9pN.js";import{X as g}from"./XAxis-qu1te6gL.js";import{Y as h}from"./YAxis-DaKTxPc7.js";import{A as a}from"./Area-BGDmT3SM.js";import{T as u}from"./Tooltip-qCP9WKi1.js";import{R as k}from"./zIndexSlice-BvSBG_sk.js";import{L as v}from"./Legend-BUrmqvrT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0l9eNV0.js";import"./resolveDefaultProps-BRFxqhI5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CVf0-qpU.js";import"./throttle-DjO6J8yc.js";import"./index-BDLQEm-M.js";import"./index-DuyOw6al.js";import"./isWellBehavedNumber-Di8XhGY_.js";import"./d3-scale-Da5OAhLE.js";import"./index-D88_648m.js";import"./index-DgBcae_n.js";import"./renderedTicksSlice-ElbwHqBe.js";import"./index-D3gbqmrd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-DmleFH.js";import"./chartDataContext-DLE8D3iQ.js";import"./CategoricalChart-CTQAivkk.js";import"./CartesianAxis-LKjUZ976.js";import"./Layer-B5sm7Diz.js";import"./Text-CJhUB4hq.js";import"./pageBackground-C-W7t-2X.js";import"./useId-C4vD49YQ.js";import"./useBackwardsCompatibleTheme-SoWlTCM6.js";import"./Label-DDOQ4R0s.js";import"./ZIndexLayer-Dx_I1S2M.js";import"./types-D0QZpxYL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CWTGeeaa.js";import"./useAnimationId-5IpIdjB8.js";import"./dataEntryStyles-BYgKVvun.js";import"./ActivePoints-u30qQxp9.js";import"./Dot-D0UZAudw.js";import"./GraphicalItemClipPath-Veko-L0U.js";import"./SetGraphicalItem-UiOjxlQM.js";import"./getRadiusAndStrokeWidthFromDot-l8Ertzo7.js";import"./ActiveShapeUtils-3kPY9Bl6.js";import"./Curve-vRM4WLtL.js";import"./step-DZUEZKzr.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DoMzN8uO.js";import"./useElementOffset-CATtOAUw.js";import"./uniqBy-Cqj_Zr9d.js";import"./iteratee-CKc5G6nr.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CGAu3OVA.js";import"./Rectangle-X-8XVq24.js";import"./util-Dxo8gN5i.js";import"./Sector-rRUrdzKs.js";import"./Symbols-rXANFg6Z.js";import"./symbol-DPnnNtEa.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
