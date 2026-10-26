import{r as A,R as t}from"./iframe-BofWz4pi.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D_3KSeQ5.js";import{A as E}from"./AreaChart-dX-Wd_A6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DfNl3NF9.js";import{X as g}from"./XAxis-7mtD4Kk1.js";import{Y as h}from"./YAxis-D1oxSTTV.js";import{A as a}from"./Area-DGIpuGYq.js";import{T as u}from"./Tooltip-DHASBblv.js";import{R as k}from"./zIndexSlice-DPHCingP.js";import{L as v}from"./Legend-BJN62WwA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-uhVYqXCO.js";import"./resolveDefaultProps-DKgUGYpY.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BlRUD72R.js";import"./throttle-CD21hIR0.js";import"./index-Ch52J8fd.js";import"./index-budgZ99k.js";import"./polarAxisSelectors-5SLj1vDB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBiuonxv.js";import"./index-CCD_p5-C.js";import"./index-BTJxJJp6.js";import"./renderedTicksSlice-DguNpOt6.js";import"./index-DGPf-g6A.js";import"./CartesianChart-Bw0i9iF5.js";import"./chartDataContext-f6L6P8Kq.js";import"./CategoricalChart-DMR2DLHI.js";import"./CartesianAxis-DEogGjPj.js";import"./Layer-bLQQfVOZ.js";import"./Text-Cod3bNx5.js";import"./pageBackground-CLiAzPgV.js";import"./useId-CsDd5jlc.js";import"./ZIndexLayer-ZOq897pe.js";import"./Label-CCUawDng.js";import"./dataEntryStyles-EsxEhXM1.js";import"./types-Da0w2MOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-B7UPTptH.js";import"./useAnimationId-CM0h2zlX.js";import"./ActivePoints-DgVnIIPK.js";import"./Dot-DoIuuVTb.js";import"./RegisterGraphicalItemId-C_30UGno.js";import"./SetGraphicalItem-Cxhb9Qmq.js";import"./getRadiusAndStrokeWidthFromDot-Py8UGwCM.js";import"./ActiveShapeUtils-jlvddXY2.js";import"./Curve-CFeHUPSl.js";import"./step-A_Fv11J5.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CF-diEWF.js";import"./useElementOffset-B4a6RQjs.js";import"./uniqBy-DiB2KEwv.js";import"./iteratee-CfR7qh40.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cj2oQu0f.js";import"./Rectangle-BNojMJrW.js";import"./util-Dxo8gN5i.js";import"./Sector-ma2Hi-5z.js";import"./Symbols-dr6Uh6kU.js";import"./symbol-cg3YFeoa.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
