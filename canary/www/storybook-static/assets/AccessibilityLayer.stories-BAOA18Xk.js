import{r as A,R as t}from"./iframe-DrMLBoK_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BJO1Ycdb.js";import{A as E}from"./AreaChart-yNg8g1ui.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-rjxjRRy0.js";import{X as g}from"./XAxis-Cwv8s30V.js";import{Y as h}from"./YAxis-T-2mqgRO.js";import{A as a}from"./Area-BJRbdkxd.js";import{T as u}from"./Tooltip-DLFB31JE.js";import{R as k}from"./zIndexSlice-BAbfq_sX.js";import{L as v}from"./Legend-BPFKtS9p.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXZPsywz.js";import"./resolveDefaultProps-C_WQkFbi.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CrOsHKKG.js";import"./throttle-2Z3dikKo.js";import"./index-CTLiCJTk.js";import"./index-IA7JdDoU.js";import"./polarAxisSelectors-D2k-junf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BHx6I7KL.js";import"./index-BsgdmWE6.js";import"./index-DwcArmuD.js";import"./renderedTicksSlice-DjVfoptE.js";import"./index-pQjQ56sZ.js";import"./CartesianChart-Dzyi-du7.js";import"./ZIndexPortal-Cic8j-2O.js";import"./CategoricalChart-CZtxZv4h.js";import"./CartesianAxis-CAiEG9fo.js";import"./Layer-DCQ6NbAd.js";import"./Text-CCAk-006.js";import"./DOMUtils-BZ5XTJuP.js";import"./ZIndexLayer-FCgsPrev.js";import"./Label-CJPkFebi.js";import"./types-CTebeEOM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-UL5cxJwa.js";import"./ActivePoints-BqSYU_4H.js";import"./Dot-m22IE0o6.js";import"./activeStyles-CN6y9IyH.js";import"./useAnimationId-C1T3lckw.js";import"./dataEntryStyles-DS33QVkf.js";import"./Symbols-BVUslZbl.js";import"./symbol-DCFwQ7z8.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-u5R4LaUm.js";import"./getRadiusAndStrokeWidthFromDot-e3lSPE0u.js";import"./ActiveShapeUtils-BLsOucL8.js";import"./Curve-CDb7Uz9B.js";import"./step-LAZCFOYn.js";import"./useEffectiveDataKey-Cmfpsn2Q.js";import"./useElementOffset-DSzIxfUE.js";import"./uniqBy-Wo4a7xMg.js";import"./iteratee-C7O8kT_z.js";import"./isArguments-yB-y1yaH.js";import"./Cross-PCIn7ixO.js";import"./Rectangle-CtabDI_D.js";import"./util-Dxo8gN5i.js";import"./Sector-CAabEh96.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
