import{r as A,R as t}from"./iframe-tthEZROf.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DHi0lKW1.js";import{A as E}from"./AreaChart-Cz2_iooq.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B43r-LYt.js";import{X as g}from"./XAxis-Bbu_Ekv_.js";import{Y as h}from"./YAxis-KrW21LMm.js";import{A as a}from"./Area-C0JjBgEs.js";import{T as u}from"./Tooltip-DyGDdvsZ.js";import{R as k}from"./zIndexSlice-x-BIVIBz.js";import{L as v}from"./Legend-bPUwjHrk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTnk9UBm.js";import"./resolveDefaultProps--ww6vB9W.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CCMb6f1X.js";import"./throttle-DytOPEyf.js";import"./index-DkFq0gE6.js";import"./index-oZ0OTb3C.js";import"./isWellBehavedNumber-CJmmz2h5.js";import"./d3-scale-De6zhOSb.js";import"./index-BVTzxVB3.js";import"./index-CqetqEae.js";import"./renderedTicksSlice-CpQrC_np.js";import"./index-DkBTTuWT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DQWCoQde.js";import"./chartDataContext-D6MYvejF.js";import"./CategoricalChart-BHtoZx7C.js";import"./CartesianAxis-CWFnwULO.js";import"./Layer-B-lEtj28.js";import"./Text-Cxp0AK4z.js";import"./DOMUtils-CUwo8lte.js";import"./useId-5DCloKRu.js";import"./useBackwardsCompatibleTheme-p9GfZJFz.js";import"./Label-43myQ-K3.js";import"./ZIndexLayer-3Td9gWAI.js";import"./types-DSfbGXGs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D4IOxZdb.js";import"./useAnimationId-DDIADmfd.js";import"./ActivePoints-CeSECBNu.js";import"./Dot-9TYH62xU.js";import"./RegisterGraphicalItemId-3Sw_ADlZ.js";import"./GraphicalItemClipPath-CGwPa5y8.js";import"./SetGraphicalItem-DjBM1G-g.js";import"./getRadiusAndStrokeWidthFromDot-CkbsG5Hk.js";import"./ActiveShapeUtils--TNHR6BT.js";import"./Curve-SLfcRw16.js";import"./step-BTKEfH_z.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C5skwmjT.js";import"./useElementOffset-CHhkCNTB.js";import"./uniqBy-OYgoWVS3.js";import"./iteratee-BwpdS3Kb.js";import"./Cross-RUdD4q_P.js";import"./Rectangle-C1nwJrSX.js";import"./util-Dxo8gN5i.js";import"./Sector-CAUb_Pxk.js";import"./Symbols-DaT7FtPk.js";import"./symbol-DH-R-VAg.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
