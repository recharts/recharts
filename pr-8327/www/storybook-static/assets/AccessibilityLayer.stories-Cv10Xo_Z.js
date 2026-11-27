import{r as A,R as t}from"./iframe-2f2w1eP7.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D2F9GDNP.js";import{A as E}from"./AreaChart-ByoFUyge.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-TBapx3Gf.js";import{X as g}from"./XAxis-CJ4nXsTf.js";import{Y as h}from"./YAxis-CAInNDnd.js";import{A as a}from"./Area-DaTCLIzm.js";import{T as u}from"./Tooltip-Biadh1Xo.js";import{R as k}from"./zIndexSlice-CjJDCeK0.js";import{L as v}from"./Legend-K0ydl4Ax.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnbJXMBG.js";import"./resolveDefaultProps-CGl449JI.js";import"./get-CjriyByo.js";import"./axisSelectors-D3RC08dV.js";import"./throttle-b8Y6KxZo.js";import"./index-C9gJxZVs.js";import"./index-Ftdy-Ulz.js";import"./polarAxisSelectors--pE3aPXl.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cc08ccIM.js";import"./index-6HopGisC.js";import"./index-CczUKsLU.js";import"./renderedTicksSlice-Bc2u_l9O.js";import"./index-fhAHbGs4.js";import"./fillDefinitions-CQk55RgO.js";import"./CartesianChart-DpJaOFiF.js";import"./chartDataContext-D-ZzsBgN.js";import"./CategoricalChart-BX6OynRn.js";import"./CartesianAxis-Bgf8P4J0.js";import"./Layer-BbIS_iGu.js";import"./Text-Ch8rCVXH.js";import"./ZIndexLayer-UYyaz2px.js";import"./Label-CxsWdT_n.js";import"./types-DRiMB5bf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-AuV9g_SF.js";import"./dataEntryStyles-CX3wrxT3.js";import"./ActivePoints-Bv6CckHB.js";import"./Dot-BR-A3ViM.js";import"./activeStyles-fmqkmIUl.js";import"./useAnimationId-CyAJnZP0.js";import"./Symbols-fsmg-V93.js";import"./symbol-CyxV486p.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-12XTWwtV.js";import"./ActiveShapeUtils-C_e7Ka4v.js";import"./Curve-mX17fPzt.js";import"./step-DiSsdMnX.js";import"./useEffectiveDataKey-BS5IJ5Is.js";import"./useElementOffset-lvJWvhjj.js";import"./uniqBy-DGZQQqxr.js";import"./iteratee-DNN7vJ8e.js";import"./isArguments-yB-y1yaH.js";import"./Cross-oZCxF5Bj.js";import"./Rectangle-Chc6ZrLO.js";import"./util-Dxo8gN5i.js";import"./Sector-CfJJDasX.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
