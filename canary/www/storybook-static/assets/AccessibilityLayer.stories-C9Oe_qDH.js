import{r as A,R as t}from"./iframe-BEGj1koH.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Bzc4T97f.js";import{A as E}from"./AreaChart-C0Sj8Vti.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CnGKMMdf.js";import{X as g}from"./XAxis-A5l93qYr.js";import{Y as h}from"./YAxis-pWnSqNwD.js";import{A as a}from"./Area-vfwCpP4p.js";import{T as u}from"./Tooltip-BlRYrkch.js";import{R as k}from"./zIndexSlice-CEJVfddR.js";import{L as v}from"./Legend-BGEPhXJp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DyBgNckc.js";import"./resolveDefaultProps-BYyXPZU-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DNGVPDPw.js";import"./throttle-9RbVUj4o.js";import"./index-DDO4uWer.js";import"./index-DR0rd1FX.js";import"./polarAxisSelectors-Bip_MddP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-80plsouy.js";import"./index-BjkAsnz4.js";import"./index-OAXr3uJt.js";import"./renderedTicksSlice-kRCXaW-h.js";import"./index-CMfsitJi.js";import"./fillDefinitions-CBOLnqU9.js";import"./CartesianChart-Ct1jbJB4.js";import"./chartDataContext-CTuyBUPX.js";import"./CategoricalChart-DExcD38L.js";import"./CartesianAxis-DbfSB8D9.js";import"./Layer-C55olOZb.js";import"./Text-DjwfkybI.js";import"./ZIndexLayer-DF1RNmQW.js";import"./Label-D38IadvQ.js";import"./types-DoIEZrXt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-D0L-GBmA.js";import"./ActivePoints-htAl9rci.js";import"./Dot-CF8XQTEk.js";import"./activeStyles-BAv2bBi7.js";import"./useAnimationId-Dz0dpT6V.js";import"./Symbols-B6OXEcw9.js";import"./symbol-Bug6GalK.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CZ4dqLwM.js";import"./getRadiusAndStrokeWidthFromDot-CkygA61E.js";import"./ActiveShapeUtils-CbYiWbjj.js";import"./Curve-hlvSyv9M.js";import"./step-Cc4Umos1.js";import"./useEffectiveDataKey-Dgv3FRKU.js";import"./useElementOffset-CiV49lwO.js";import"./uniqBy-C61gVEFe.js";import"./iteratee-BOHATSs8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DnloOoyf.js";import"./Rectangle-Br2C5RSL.js";import"./util-Dxo8gN5i.js";import"./Sector-D3cUvRcp.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
