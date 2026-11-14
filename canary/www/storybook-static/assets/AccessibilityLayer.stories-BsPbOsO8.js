import{r as A,R as t}from"./iframe-CFiYbyYn.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-AVSPcUwt.js";import{A as E}from"./AreaChart-DV4769EA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-C813fyqf.js";import{X as g}from"./XAxis-RpmZ_jE_.js";import{Y as h}from"./YAxis-DQzPAn8l.js";import{A as a}from"./Area-CuP0JV9e.js";import{T as u}from"./Tooltip-DXHLHEHF.js";import{R as k}from"./zIndexSlice-CfnjI_J7.js";import{L as v}from"./Legend-CeRiVCN4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DnJ3Lnfw.js";import"./resolveDefaultProps-D5Jgld6M.js";import"./get-cF5BDHN6.js";import"./axisSelectors-ZJRlSH7p.js";import"./throttle-C32GRzNi.js";import"./index-BgXu95am.js";import"./index-D8Rvzs5o.js";import"./polarAxisSelectors-C73NV54c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BQZOe2uw.js";import"./index-CeN26RCh.js";import"./index-B2eeTemT.js";import"./renderedTicksSlice-DEUuAR6D.js";import"./index-CTcpyI6-.js";import"./fillDefinitions-DQn9hMkI.js";import"./CartesianChart-BI7GK76V.js";import"./chartDataContext-CxLvIdoH.js";import"./CategoricalChart-CA4HG4Fk.js";import"./CartesianAxis-D_9vstbH.js";import"./Layer-BfyvsZKx.js";import"./Text-BvA3DBG3.js";import"./ZIndexLayer-BDfLEL3A.js";import"./Label-BO6v_mC5.js";import"./types-BgyTt6P7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CEdPYhQz.js";import"./ActivePoints-Dj8mj1pc.js";import"./Dot-DG45E_Jc.js";import"./activeStyles-P0GMx-UH.js";import"./useAnimationId-BDSeKkxz.js";import"./Symbols-dPAJMo6f.js";import"./symbol-aLQJyVpc.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CGu2i_Hy.js";import"./getRadiusAndStrokeWidthFromDot-Ce32xTZu.js";import"./ActiveShapeUtils-CsNOZNpW.js";import"./Curve-CKgWn92F.js";import"./step-DxzKinYr.js";import"./useEffectiveDataKey-Dy2gs8KS.js";import"./useElementOffset-B4AwO3QR.js";import"./uniqBy-4Wq1ZNuh.js";import"./iteratee-B-Fq5cCX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-IGGmzroz.js";import"./Rectangle-BSxvUYTo.js";import"./util-Dxo8gN5i.js";import"./Sector-BGw3hAub.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
