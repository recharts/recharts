import{r as A,R as t}from"./iframe-66xGksI9.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BcXiD_oS.js";import{A as E}from"./AreaChart-DBcLMTT_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B5NNWkIE.js";import{X as g}from"./XAxis-CXNDEo4D.js";import{Y as h}from"./YAxis-BiYwIvVw.js";import{A as a}from"./Area-DTfQCQvZ.js";import{T as u}from"./Tooltip-CfnEyiLa.js";import{R as k}from"./zIndexSlice-CYY5i5GC.js";import{L as v}from"./Legend-CIRRr9kw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBtKgDqJ.js";import"./resolveDefaultProps-CNf-20ax.js";import"./get-cF5BDHN6.js";import"./axisSelectors-c7Es3nNM.js";import"./throttle-pB5GcO80.js";import"./index-BdwqiePa.js";import"./index-BY9aQbpp.js";import"./polarAxisSelectors-CBhhjzdU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ni_fDMoN.js";import"./index-DfrMyUP0.js";import"./index-BRQLVN4e.js";import"./renderedTicksSlice-C3z0elvI.js";import"./index-BykASSPU.js";import"./fillDefinitions-bQfE-RQi.js";import"./CartesianChart-Cqx4FTn2.js";import"./chartDataContext-Bw9Xn6sV.js";import"./CategoricalChart-cIWfYphX.js";import"./CartesianAxis-DQXtF-Wj.js";import"./Layer-C1IdSUB2.js";import"./Text-DBDWQ-k-.js";import"./ZIndexLayer-CW7ymMrJ.js";import"./Label-CZY2Xnwr.js";import"./types-D-bLaOPe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-BHMa596t.js";import"./dataEntryStyles-D5RB-ObJ.js";import"./ActivePoints-B6OlZ3cX.js";import"./Dot-D3LIPFdP.js";import"./activeStyles-ueUYGAtI.js";import"./useAnimationId-CE-ISBvq.js";import"./Symbols-BAjlrbb5.js";import"./symbol-DTY0uCjS.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BwgsUtDt.js";import"./ActiveShapeUtils-CCTJSoY2.js";import"./Curve-C90n3hpg.js";import"./step-BPw2RLV2.js";import"./useEffectiveDataKey-Dw6tI5XK.js";import"./useElementOffset-DJCmtGIc.js";import"./uniqBy-9AjO9xab.js";import"./iteratee-C80Q0yRq.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BOiCaUxD.js";import"./Rectangle-D_Uv0gGo.js";import"./util-Dxo8gN5i.js";import"./Sector-QJb9TZ4t.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
