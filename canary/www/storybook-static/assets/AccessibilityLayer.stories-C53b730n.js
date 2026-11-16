import{r as A,R as t}from"./iframe-lJBwbutv.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Cxisz18M.js";import{A as E}from"./AreaChart-Ds7HeCrH.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BNYYJNHk.js";import{X as g}from"./XAxis-eFYFTspd.js";import{Y as h}from"./YAxis-DzJ296_j.js";import{A as a}from"./Area-B7aqdpdD.js";import{T as u}from"./Tooltip-z5cfifSR.js";import{R as k}from"./zIndexSlice-DOZGt0Xc.js";import{L as v}from"./Legend-m3nE9M3l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4uciLnE.js";import"./resolveDefaultProps-CuoHmAis.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CiZzV4Ua.js";import"./throttle-BD4ZOoVc.js";import"./index-D-yoUCLK.js";import"./index-DmjkyNBy.js";import"./polarAxisSelectors-g2gwazbI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrfLvVJ7.js";import"./index-BjclV3iC.js";import"./index-Bgy6zka-.js";import"./renderedTicksSlice-ChSQY0tz.js";import"./index-CPSRkKHN.js";import"./fillDefinitions-DgzgNWUG.js";import"./CartesianChart-BDxnsR9l.js";import"./chartDataContext-CuRy23UW.js";import"./CategoricalChart-CWJpCYvL.js";import"./CartesianAxis-DLyqJbpN.js";import"./Layer-CZzb4Onv.js";import"./Text-CH7ZTJa6.js";import"./ZIndexLayer-DMFEoW6r.js";import"./Label-C1XxCcqG.js";import"./types-BR2T4QCa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BXXFCsKs.js";import"./ActivePoints-De5xpIFf.js";import"./Dot-CHXRfIFb.js";import"./activeStyles-C_lJCdGG.js";import"./useAnimationId-Dj7sECHw.js";import"./Symbols-BrRhqa2q.js";import"./symbol-CHsvlSO9.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BjwhNxsW.js";import"./getRadiusAndStrokeWidthFromDot-4zFCm6-q.js";import"./ActiveShapeUtils-6HIsnjoS.js";import"./Curve-Dazce3Yn.js";import"./step-CVKg82eE.js";import"./useEffectiveDataKey-Bg5rFbYe.js";import"./useElementOffset-zJJN7xLG.js";import"./uniqBy-DWWs0y9k.js";import"./iteratee-DkvjpvPG.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BIkVXlap.js";import"./Rectangle-BLn-6YRh.js";import"./util-Dxo8gN5i.js";import"./Sector-D8arHEkn.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
