import{r as A,R as t}from"./iframe-CgTT5dPO.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CYlzW49h.js";import{A as E}from"./AreaChart-CloIM8Dy.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B-SK66Uf.js";import{X as g}from"./XAxis-ClmjXtMB.js";import{Y as h}from"./YAxis-DSfP3iJV.js";import{A as a}from"./Area-BLzxg3NF.js";import{T as u}from"./Tooltip-t8L-cwt_.js";import{R as k}from"./zIndexSlice-CPGUCnGo.js";import{L as v}from"./Legend-9ACYjgET.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B51pwKIk.js";import"./resolveDefaultProps-CKA35xz0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Gtv_llo9.js";import"./throttle-BMr0TIll.js";import"./index-yjPGP_Pi.js";import"./index-DsTCyvOd.js";import"./isWellBehavedNumber-BWfrrYUp.js";import"./d3-scale-oJuzrlfE.js";import"./index-9dlMxjgk.js";import"./index-BDFV0rCg.js";import"./renderedTicksSlice-B7hU_9zD.js";import"./index-Db1ep0ty.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-P3XUrVp3.js";import"./chartDataContext-Cp4ZgLCD.js";import"./CategoricalChart-Ce5ExZbX.js";import"./CartesianAxis-1GG6rVOn.js";import"./Layer-CviKKqfs.js";import"./Text-BTX7KMwr.js";import"./DOMUtils-DNAAiWqJ.js";import"./useId-C9Sf9QRu.js";import"./useBackwardsCompatibleTheme-BnQi9_9k.js";import"./Label-DgIJd16K.js";import"./ZIndexLayer-CL4lnoUk.js";import"./types-DZAseBJP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-mZXv8WCL.js";import"./useAnimationId-D6-p5R60.js";import"./ActivePoints-Bnc15lgq.js";import"./Dot-DH9TpVyz.js";import"./RegisterGraphicalItemId-DeFFmfLc.js";import"./GraphicalItemClipPath-qWvJymnR.js";import"./SetGraphicalItem-BFHpZd6Q.js";import"./getRadiusAndStrokeWidthFromDot-DgPOWv_U.js";import"./ActiveShapeUtils-CCEW4taa.js";import"./Curve-cyeBNEBX.js";import"./step-D1irN9pp.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CKmqq4Ws.js";import"./useElementOffset-E-WECx4Q.js";import"./uniqBy-8m_J3yMU.js";import"./iteratee-BZZIIBc5.js";import"./Cross-C0bVdUJm.js";import"./Rectangle-huBGhNer.js";import"./util-Dxo8gN5i.js";import"./Sector-DExrbWoI.js";import"./Symbols-858ix6UN.js";import"./symbol-Di9ULjRu.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
