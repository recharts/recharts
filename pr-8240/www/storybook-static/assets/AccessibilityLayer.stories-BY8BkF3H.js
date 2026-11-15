import{r as A,R as t}from"./iframe-CQK5cKb5.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BPNXxxpF.js";import{A as E}from"./AreaChart-Bp_tZaby.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dzn84rmM.js";import{X as g}from"./XAxis-C7d_UGHt.js";import{Y as h}from"./YAxis-CXpvs3FV.js";import{A as a}from"./Area-CUObnf1Z.js";import{T as u}from"./Tooltip-Dzcs2ZVL.js";import{R as k}from"./zIndexSlice-B7W_lSrS.js";import{L as v}from"./Legend-BMSPASHC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIL7xA5W.js";import"./resolveDefaultProps-sIKj046z.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CFm2aUpt.js";import"./throttle-CtjoOnFV.js";import"./index-Dm38SIQa.js";import"./index-BKYCEKLA.js";import"./polarAxisSelectors-CGBkjniO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXQtVXGL.js";import"./index-CB2LtrSa.js";import"./index-FJUFiiDw.js";import"./renderedTicksSlice-CfjQzOiB.js";import"./index-vF-n4YF_.js";import"./fillDefinitions-R6mNXYbM.js";import"./CartesianChart-CdwXekNk.js";import"./chartDataContext-LfCv8xRO.js";import"./CategoricalChart-DiRS6s-r.js";import"./CartesianAxis-BgpXgN1R.js";import"./Layer-urQEAooy.js";import"./Text-Z2ey8U7p.js";import"./ZIndexLayer-9k2RLX5n.js";import"./Label-CQ2HjeWR.js";import"./types-DmMnI0O_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B4J35a5k.js";import"./ActivePoints-C-llUCjP.js";import"./Dot-DqwBwinu.js";import"./activeStyles-DkKN9Gb1.js";import"./useAnimationId-C1Da615s.js";import"./Symbols-BYEI9G2W.js";import"./symbol-CDkSHUUS.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-u5-88p1b.js";import"./getRadiusAndStrokeWidthFromDot-B0dUD5K2.js";import"./ActiveShapeUtils-DSt9b1dG.js";import"./Curve-B0cUpmBX.js";import"./step-D2yChQSN.js";import"./useEffectiveDataKey-C9n3TkLL.js";import"./useElementOffset-KeEWMChU.js";import"./uniqBy-C_Y6AlzU.js";import"./iteratee-AcsDAR-L.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C0dW1cn9.js";import"./Rectangle-DkPkuka8.js";import"./util-Dxo8gN5i.js";import"./Sector-DGo8K8ZE.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
