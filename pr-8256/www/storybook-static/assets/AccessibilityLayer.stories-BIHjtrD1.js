import{r as A,R as t}from"./iframe-Z3SayaVd.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-i6W5PytN.js";import{A as E}from"./AreaChart-BxucLrAb.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DGqJl6u1.js";import{X as g}from"./XAxis-BsEr8UIp.js";import{Y as h}from"./YAxis-PP-Vs1t2.js";import{A as a}from"./Area-CQcykFq2.js";import{T as u}from"./Tooltip-CjSCnT_4.js";import{R as k}from"./zIndexSlice-Dh2HMKB6.js";import{L as v}from"./Legend-64sg-l9Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rHkMTZTL.js";import"./resolveDefaultProps-DNiWcqg9.js";import"./get-cF5BDHN6.js";import"./axisSelectors--kuv0hpR.js";import"./throttle-Dxt6SGJ3.js";import"./index--orTKKd0.js";import"./index-wtNxUfyP.js";import"./polarAxisSelectors-DRpHoHNx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COX3gckA.js";import"./index-Byv9yEMF.js";import"./index-IODgrwVj.js";import"./renderedTicksSlice-B1QrN0Ft.js";import"./index-eVlhMApr.js";import"./fillDefinitions-YvUR7ZoJ.js";import"./CartesianChart-C0rkW4er.js";import"./chartDataContext-MZv5qjpR.js";import"./CategoricalChart-B9nlic4H.js";import"./CartesianAxis-CDmW-YMV.js";import"./Layer-R9bgEcMl.js";import"./Text-DdcAXxQ7.js";import"./ZIndexLayer-y38pl_-1.js";import"./Label-gVjZnKx0.js";import"./types-C7fTXY90.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CRZbI57R.js";import"./dataEntryStyles-CdjRVARh.js";import"./ActivePoints-mT6mIIhN.js";import"./Dot-CnIUGRfT.js";import"./activeStyles-DoLNHT3-.js";import"./useAnimationId-CJJ1SFId.js";import"./Symbols-D5F94Msa.js";import"./symbol-Cplhih6x.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-na8KM_FV.js";import"./ActiveShapeUtils-8h_kjkj8.js";import"./Curve-5n5qGKoW.js";import"./step-BOsnLXQi.js";import"./useEffectiveDataKey-COaHCNkR.js";import"./useElementOffset-Bp-2_zay.js";import"./uniqBy-DSum8Wv6.js";import"./iteratee-JP_8kGzy.js";import"./isArguments-yB-y1yaH.js";import"./Cross-wXMY7t0N.js";import"./Rectangle-C9s6B2mt.js";import"./util-Dxo8gN5i.js";import"./Sector-BC703UDw.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
