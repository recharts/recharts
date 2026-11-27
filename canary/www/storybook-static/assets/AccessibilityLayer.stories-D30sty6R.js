import{r as A,R as t}from"./iframe-BkOwE2GN.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BhRq4U8z.js";import{A as E}from"./AreaChart-DOu5PkhS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D5VfAX5W.js";import{X as g}from"./XAxis-0fckSjiA.js";import{Y as h}from"./YAxis-hX7zZE17.js";import{A as a}from"./Area-DP9gS0Oa.js";import{T as u}from"./Tooltip-LK18Qy9U.js";import{R as k}from"./zIndexSlice-Chy-hne0.js";import{L as v}from"./Legend-BP3s6Hw6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXzR8xrS.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./axisSelectors-DGKEku6n.js";import"./throttle-DAc5l_dD.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-CTw2DMEK.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";import"./CartesianAxis-DEhg_nUI.js";import"./Layer-CnUstnfJ.js";import"./Text-DYjefSTk.js";import"./ZIndexLayer-dRwAMNuu.js";import"./Label-y4X5dBPS.js";import"./types-CoO4ONhi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CE4sWQuP.js";import"./dataEntryStyles-R9P1sHzA.js";import"./ActivePoints-zmYc3mi0.js";import"./Dot-bUm5BNK-.js";import"./activeStyles-fROkMw-p.js";import"./useAnimationId-DWRfsMZ5.js";import"./Symbols-B-s6UWez.js";import"./symbol-zbMM1gn6.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BSi-Voc1.js";import"./ActiveShapeUtils-BE3bg2lY.js";import"./Curve-DGsLLJww.js";import"./step-XUgRcOx_.js";import"./useEffectiveDataKey-BySMHkBi.js";import"./useElementOffset-C2OMNI73.js";import"./uniqBy-CEEShQv_.js";import"./iteratee-CcBPK2XM.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dbp1ZLfh.js";import"./Rectangle-jQhwNsi0.js";import"./util-Dxo8gN5i.js";import"./Sector-DVdFrkkX.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
