import{r as A,R as t}from"./iframe-BNtNFygj.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D__S-XeQ.js";import{A as E}from"./AreaChart-BStMJvDR.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dt7wk6to.js";import{X as g}from"./XAxis-CD7gPBRF.js";import{Y as h}from"./YAxis-BOh_LEcr.js";import{A as a}from"./Area-BCRJ4rSD.js";import{T as u}from"./Tooltip-CbPx-O8K.js";import{R as k}from"./zIndexSlice-B5_48POF.js";import{L as v}from"./Legend-C7LMyXkq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CuiNtI3q.js";import"./resolveDefaultProps-DL7SVEd6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-mpzDPz7I.js";import"./throttle-D7zSzoPk.js";import"./index-W1q-JWvv.js";import"./index-Da7ZrvvU.js";import"./polarAxisSelectors-1cb9nRSh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AvjMremu.js";import"./index-CfoYvP3O.js";import"./index-BaHcdURT.js";import"./renderedTicksSlice-Gd5JIWsJ.js";import"./index-DIbrCmVg.js";import"./fillDefinitions-DMQk4akV.js";import"./CartesianChart-BuwWmjhG.js";import"./ZIndexPortal-yiaw4zX4.js";import"./CategoricalChart-xvnPgk-J.js";import"./CartesianAxis-B0AA9leW.js";import"./Layer-BWvVPR01.js";import"./Text-CVsQWuYy.js";import"./DOMUtils-rxSz7zRH.js";import"./ZIndexLayer-DDjEreuo.js";import"./Label-CtODaKOy.js";import"./types-Bv6DwZgB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BMYELo_i.js";import"./ActivePoints-CXNwUvpE.js";import"./Dot-DlYRSPs_.js";import"./activeStyles-B8Yp5U6S.js";import"./useAnimationId-DUqQXAVR.js";import"./dataEntryStyles-Bi8dthc7.js";import"./Symbols-DqFb5GoD.js";import"./symbol-z9UqeDk-.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-D8wY5DBd.js";import"./getRadiusAndStrokeWidthFromDot-BCWYzwNk.js";import"./ActiveShapeUtils-BNpZBMKl.js";import"./Curve-CzR2ia5J.js";import"./step-3Vwob_iR.js";import"./useEffectiveDataKey-BUQC0_MU.js";import"./useElementOffset-BAzX0SkM.js";import"./uniqBy-dp3XQ01K.js";import"./iteratee-CSMACznW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Ch0LMa9x.js";import"./Rectangle-BeuBChLi.js";import"./util-Dxo8gN5i.js";import"./Sector-p7c5jngg.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
