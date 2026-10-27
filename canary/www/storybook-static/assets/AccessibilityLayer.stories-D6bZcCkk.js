import{r as A,R as t}from"./iframe-DHcJjYhp.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Bv15pDbO.js";import{A as E}from"./AreaChart-CBQbd_m4.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-ZdT5meIL.js";import{X as g}from"./XAxis-BsCapYe_.js";import{Y as h}from"./YAxis-CgAAJes1.js";import{A as a}from"./Area-QdB-nnlJ.js";import{T as u}from"./Tooltip-C3DlAGnj.js";import{R as k}from"./zIndexSlice-Cc80mhc9.js";import{L as v}from"./Legend-C8YJ-FLQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DW6cza7Q.js";import"./resolveDefaultProps-BvovYCe7.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CcZJHo_q.js";import"./throttle-GOg0Fvd7.js";import"./index-DrarxPoz.js";import"./index-DIJK83CB.js";import"./polarAxisSelectors-CcC4x2tN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CySl75ZF.js";import"./index-CKtel9-l.js";import"./index-Cln2IwYT.js";import"./renderedTicksSlice-Bl5XAOUo.js";import"./index-D3Qy2UUT.js";import"./CartesianChart-B9teWspu.js";import"./ZIndexPortal-pZH-aZp_.js";import"./CategoricalChart-mtPMptXy.js";import"./CartesianAxis-I4Gfetq1.js";import"./Layer-BayIcTfz.js";import"./Text-BAIudaB2.js";import"./pageBackground-CtNdVSAn.js";import"./ZIndexLayer-_GMRW-y_.js";import"./Label-CDs-ZtGW.js";import"./dataEntryStyles-DyEOYp64.js";import"./types-BNrWE8hx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CQ-NHiOO.js";import"./ActivePoints-D-AhTPsw.js";import"./Dot-CC8f5qsB.js";import"./activeStyles-CGuSRajE.js";import"./useAnimationId-r_2cTbPz.js";import"./Symbols-yzipNpVJ.js";import"./symbol-l4VrHHkB.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-CLn33yWX.js";import"./SetGraphicalItem-CQRz0ej3.js";import"./getRadiusAndStrokeWidthFromDot-xrAdJmyj.js";import"./ActiveShapeUtils-BGsGLrPh.js";import"./Curve-CK2uyVOO.js";import"./step-CaKisAF4.js";import"./useEffectiveDataKey-wQhirjtm.js";import"./useElementOffset-Bh8_OLoh.js";import"./uniqBy-B6G9ZnVo.js";import"./iteratee-DxJ21J1F.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C_SeJ845.js";import"./Rectangle-Cb_93E_H.js";import"./util-Dxo8gN5i.js";import"./Sector-Dl0iMyjQ.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
