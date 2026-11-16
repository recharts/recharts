import{r as A,R as t}from"./iframe-KWoDlvv0.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BNaAIAHQ.js";import{A as E}from"./AreaChart-ClFVACfM.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CwnO4f1F.js";import{X as g}from"./XAxis-Dha5DL-7.js";import{Y as h}from"./YAxis-BpsL_9nJ.js";import{A as a}from"./Area-Bz0BZNpk.js";import{T as u}from"./Tooltip-DyIqXAOf.js";import{R as k}from"./zIndexSlice-D6_TQa48.js";import{L as v}from"./Legend-zpJKMWIs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cd2ytf7V.js";import"./resolveDefaultProps-fIhDXQnx.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CV2At8Yo.js";import"./throttle-BvqCZ8Vh.js";import"./index-Li49Ujhl.js";import"./index-D_eG4QRf.js";import"./polarAxisSelectors-8HEoWBh0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oWIqdaah.js";import"./index-BfCybvCF.js";import"./index-CCYlIY-z.js";import"./renderedTicksSlice-C40hju2e.js";import"./index-Dv3wNeKm.js";import"./fillDefinitions-BahzxKfc.js";import"./CartesianChart-D1x7M7Ji.js";import"./chartDataContext-CRRlgIpa.js";import"./CategoricalChart-539yhc35.js";import"./CartesianAxis-CyfkCIs2.js";import"./Layer-waQQT3dP.js";import"./Text-DoeJcgDd.js";import"./ZIndexLayer-UqbdP99s.js";import"./Label-BPcs5PEB.js";import"./types-DGnljtoN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B50QbiA3.js";import"./ActivePoints-DgWtUVYM.js";import"./Dot-8l7EA-ok.js";import"./activeStyles-DdJ_j3KP.js";import"./useAnimationId-Dr1qu-UX.js";import"./Symbols-etFAQ42y.js";import"./symbol-DnM84iFX.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C36UrnCq.js";import"./getRadiusAndStrokeWidthFromDot-CjrqjHcw.js";import"./ActiveShapeUtils-C8mQk9io.js";import"./Curve-B7-98jub.js";import"./step-e6HwNXpN.js";import"./useEffectiveDataKey-Dnh6CHxJ.js";import"./useElementOffset-1JyRc5h3.js";import"./uniqBy-CbPnR-9p.js";import"./iteratee-DIz1rWLv.js";import"./isArguments-yB-y1yaH.js";import"./Cross-XnGezxgG.js";import"./Rectangle-9Jhf_J89.js";import"./util-Dxo8gN5i.js";import"./Sector-sU6YNYVD.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
