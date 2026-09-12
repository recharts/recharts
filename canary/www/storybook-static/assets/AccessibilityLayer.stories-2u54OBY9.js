import{r as A,R as t}from"./iframe-a8fM-7Cj.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BjiltZm-.js";import{A as E}from"./AreaChart-B344dyy5.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D1-FT5PQ.js";import{X as g}from"./XAxis-CiRF9J92.js";import{Y as h}from"./YAxis-DeFLWHEC.js";import{A as a}from"./Area-CctBLeYi.js";import{T as u}from"./Tooltip-DWLIYdcR.js";import{R as k}from"./zIndexSlice-B7KswQd6.js";import{L as v}from"./Legend-BIclEAHV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DeMmS_JM.js";import"./resolveDefaultProps-DlXKv9jT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DVs_A9Pl.js";import"./throttle-CaMuYXI0.js";import"./index-BUD2jY61.js";import"./index-PFQMrolk.js";import"./isWellBehavedNumber-B_g3PQrc.js";import"./d3-scale-wNdoB6Dl.js";import"./index-Ke9S5-gf.js";import"./index-DRs5RvY7.js";import"./renderedTicksSlice-cjaWCzPx.js";import"./index-ZucSeVLn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DyOnhzMI.js";import"./chartDataContext-CMDG0z7K.js";import"./CategoricalChart-DQpuQH-u.js";import"./CartesianAxis-CtttCErg.js";import"./Layer-XxWBFlRD.js";import"./Text-Bo9ttyFU.js";import"./DOMUtils-BvC4n3H8.js";import"./useId-B5k2uM1L.js";import"./useBackwardsCompatibleTheme-CU11_u_K.js";import"./Label-KdQX6hx3.js";import"./ZIndexLayer-CUUoNHQJ.js";import"./types-DyUzdvoN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CVA7Axrg.js";import"./useAnimationId-DPUxtvyW.js";import"./ActivePoints-B8Jb8oVa.js";import"./Dot-DMPbfCPa.js";import"./RegisterGraphicalItemId-DUAbfK1e.js";import"./GraphicalItemClipPath-D12XFDsM.js";import"./SetGraphicalItem-DMaklldD.js";import"./getRadiusAndStrokeWidthFromDot-C7Tnz6V8.js";import"./ActiveShapeUtils-0G9qNMVr.js";import"./Curve-BopOTfmu.js";import"./step-BGrDxD_7.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BpSFuYBx.js";import"./useElementOffset-BGrjDRT_.js";import"./uniqBy-KCT6LaRN.js";import"./iteratee-DuzqjsWc.js";import"./Cross-B68UPwPf.js";import"./Rectangle-C2srlOyO.js";import"./util-Dxo8gN5i.js";import"./Sector-CccBQHbB.js";import"./Symbols-Cun0Q05f.js";import"./symbol-A-VdQ2Cb.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
