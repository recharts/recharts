import{r as A,R as t}from"./iframe-CuQfx1mh.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CT5dqqrP.js";import{A as E}from"./AreaChart-z_EZ4bno.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CQ7ZP3nQ.js";import{X as g}from"./XAxis-DFSmxsEI.js";import{Y as h}from"./YAxis-BKox7kU6.js";import{A as a}from"./Area-Dv1y9tpc.js";import{T as u}from"./Tooltip-Z4HKncA5.js";import{R as k}from"./zIndexSlice-DATCiNk-.js";import{L as v}from"./Legend-Bb2vQlaO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DE6EtITA.js";import"./resolveDefaultProps-xvOlXZtC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BY0kcEhz.js";import"./throttle-SAQUG4vb.js";import"./index-CvvvrEYr.js";import"./index-Bw8PVQ13.js";import"./polarAxisSelectors-piadlyiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BW1Afi3u.js";import"./index-kT5VmTkQ.js";import"./index-BeCcpORD.js";import"./renderedTicksSlice-Ds69xoXU.js";import"./index-SztJ6oEx.js";import"./fillDefinitions-DUe233lT.js";import"./CartesianChart-BJj5wl32.js";import"./chartDataContext-pjMFjoUW.js";import"./CategoricalChart-DBOXRrXs.js";import"./CartesianAxis-CbXqU-62.js";import"./Layer-YgN4J4tN.js";import"./Text-BgHfu1GZ.js";import"./ZIndexLayer-W76HFIEY.js";import"./Label-GADa0aPm.js";import"./types-D3Hjk8Vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-GFwLhdMi.js";import"./ActivePoints-D3cJ21Q9.js";import"./Dot-nIfHLv6J.js";import"./activeStyles-Ci_kz6ws.js";import"./useAnimationId-tXprvTar.js";import"./Symbols-Cfnu_9Am.js";import"./symbol-CeqqAB3e.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CgminRJ_.js";import"./getRadiusAndStrokeWidthFromDot-BGDq57jg.js";import"./ActiveShapeUtils-D5R6UpQP.js";import"./Curve-BBk73TGO.js";import"./step-BPhAxlHA.js";import"./useEffectiveDataKey-DTMm3t3E.js";import"./useElementOffset-dCD-1zhD.js";import"./uniqBy-B4ZIglI5.js";import"./iteratee-0xqLSxi-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C30SLzjn.js";import"./Rectangle-Dy2GqrdD.js";import"./util-Dxo8gN5i.js";import"./Sector-Cptg7cXg.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
