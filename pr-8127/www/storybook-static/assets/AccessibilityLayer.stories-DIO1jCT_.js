import{r as A,R as t}from"./iframe-l1Y42C0u.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-0uZutU6k.js";import{A as E}from"./AreaChart-BFlQrcyu.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CDZaDU45.js";import{X as g}from"./XAxis-B9K8Q1Xb.js";import{Y as h}from"./YAxis-MT51XlEY.js";import{A as a}from"./Area-8cEMqoxK.js";import{T as u}from"./Tooltip-Chbmqq1h.js";import{R as k}from"./zIndexSlice-B33nqsCb.js";import{L as v}from"./Legend-EUSnmrcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOuMjlQh.js";import"./resolveDefaultProps-1jZi99P0.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D7HUEi6M.js";import"./throttle-DAyvkz9h.js";import"./index-DIs184pY.js";import"./index-Cqq6zn6Z.js";import"./polarAxisSelectors-BQIs9A7o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5Y8SIz5.js";import"./index-Bn03Joy2.js";import"./index-BwfxQem6.js";import"./renderedTicksSlice-D6aSCZ50.js";import"./index-BL-lBVJK.js";import"./CartesianChart-DP0lCfag.js";import"./ZIndexPortal-DmDlsnpL.js";import"./CategoricalChart-CsG2T3-z.js";import"./CartesianAxis-tpqsI94N.js";import"./Layer-euAv7Vlw.js";import"./Text-B6K4_AwF.js";import"./DOMUtils-D4PcHABk.js";import"./ZIndexLayer-DxyEEQXG.js";import"./Label-sWz5CiLk.js";import"./types-CrZHDfLN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DQcF-Fqd.js";import"./fillDefinitions-AHxQevDT.js";import"./LabelList-CqnzZffr.js";import"./ActivePoints-C9qJ4yHK.js";import"./Dot-CvycDJmI.js";import"./activeStyles-De0IjX-U.js";import"./useAnimationId-Df3Y-xS6.js";import"./dataEntryStyles-D_KE_N47.js";import"./Symbols-CQXeMdB_.js";import"./symbol-K2q-awoK.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Do2v7-d1.js";import"./getRadiusAndStrokeWidthFromDot-DDaIFX1-.js";import"./ActiveShapeUtils-CSx2HuI1.js";import"./Curve-B3MncDoj.js";import"./step-Be4HSYh6.js";import"./useEffectiveDataKey-Dv99CamK.js";import"./useElementOffset-Dc6g4T8Y.js";import"./uniqBy-BXAphbyZ.js";import"./iteratee-BoMr2KG7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BgI2taLq.js";import"./Rectangle-Gcg8iRps.js";import"./util-Dxo8gN5i.js";import"./Sector-B4KLeSUR.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
