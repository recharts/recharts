import{r as A,R as t}from"./iframe-DC5T2GCj.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Dc1csNHW.js";import{A as E}from"./AreaChart-CaAIGaAK.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B28T3YID.js";import{X as g}from"./XAxis-CfQ_9fqW.js";import{Y as h}from"./YAxis-lqkl3rqG.js";import{A as a}from"./Area-B-ToNYR-.js";import{T as u}from"./Tooltip-BbYwG4_Y.js";import{R as k}from"./zIndexSlice-DOsx9V2z.js";import{L as v}from"./Legend-DBRTAH_k.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DYjSRCa_.js";import"./resolveDefaultProps-gSxbvbxj.js";import"./get-CjriyByo.js";import"./axisSelectors-B_BJB7t0.js";import"./throttle-CU56JRf7.js";import"./index-CxhZ_jtS.js";import"./index-CuovNQzi.js";import"./polarAxisSelectors-ftiVMEmb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ccs_pA9m.js";import"./index-BzBudmwv.js";import"./index-Dg66RVOT.js";import"./renderedTicksSlice-B-kM46TD.js";import"./index-BFdMDMd2.js";import"./fillDefinitions-Bx7rUJI2.js";import"./CartesianChart-7SPsAfcZ.js";import"./chartDataContext-BhVo_C4q.js";import"./CategoricalChart-BjWBv8hx.js";import"./CartesianAxis-Ldc9waKq.js";import"./Layer-CPK-7NIh.js";import"./Text-agvS8xSD.js";import"./ZIndexLayer-CauVCDM2.js";import"./Label-CWyu9wCB.js";import"./types-Bpysv2Pn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DZMpjyXl.js";import"./dataEntryStyles-D7lSN93x.js";import"./ActivePoints-BGltZVX5.js";import"./Dot-BnGpEvHu.js";import"./activeStyles-CBtGMRGE.js";import"./useAnimationId-Do3keAzT.js";import"./Symbols-B7vEIcCD.js";import"./symbol-CpvxzB9V.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CgeoKwAC.js";import"./ActiveShapeUtils-09R3ENuC.js";import"./Curve-xzcOD2X_.js";import"./step-dKzEEUk_.js";import"./useEffectiveDataKey-CuDgyJop.js";import"./useElementOffset-DxkPxrTP.js";import"./uniqBy-Bq4o6iFV.js";import"./iteratee-CTGqF3Gd.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CcCgIRqV.js";import"./Rectangle-Hs6i8eyj.js";import"./util-Dxo8gN5i.js";import"./Sector-BbNcubvX.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
