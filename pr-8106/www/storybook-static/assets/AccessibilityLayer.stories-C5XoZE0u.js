import{r as A,R as t}from"./iframe-B_MIDKz_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BLBMKU0r.js";import{A as E}from"./AreaChart-CEe4aJYc.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-C_d4KfQI.js";import{X as g}from"./XAxis-C4lIERbq.js";import{Y as h}from"./YAxis-D3fzxS21.js";import{A as a}from"./Area-Cu-Nxcdm.js";import{T as u}from"./Tooltip-CNRGXaSi.js";import{R as k}from"./zIndexSlice-BRdFs8ID.js";import{L as v}from"./Legend-DEqvMq_C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqGFDY60.js";import"./resolveDefaultProps-xzz5mEiC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dl7meOBx.js";import"./throttle-BEqz9r6e.js";import"./index-BrIcEx9Z.js";import"./index-BOmAjlKN.js";import"./polarAxisSelectors-mzwQQ_dU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-TVFiOeXq.js";import"./index-DPAMyEeL.js";import"./index-CwOCWg00.js";import"./renderedTicksSlice-yOWeuXiw.js";import"./index-BKlyB3jB.js";import"./CartesianChart-_H9IG9R2.js";import"./ZIndexPortal-DjuZ3mTH.js";import"./CategoricalChart-D_eNWRTX.js";import"./CartesianAxis-ZYJAAdvA.js";import"./Layer-DNwByRxz.js";import"./Text-B7cqpu59.js";import"./pageBackground-5b67NUgV.js";import"./ZIndexLayer-CUoHFkKf.js";import"./Label-CENIwYcD.js";import"./types-B5hVBX50.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BZln5lTY.js";import"./ActivePoints-rPg8bsf1.js";import"./Dot-COTCbAgg.js";import"./activeStyles-CDqKbiIO.js";import"./useAnimationId-BYTiB8_B.js";import"./dataEntryStyles-BFC38uYF.js";import"./Symbols-C4T4jjYn.js";import"./symbol-D75a70A4.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-vDiBonc7.js";import"./getRadiusAndStrokeWidthFromDot-DE4AoGFo.js";import"./ActiveShapeUtils-D5xg6B3r.js";import"./Curve-9U6noJF7.js";import"./step-Bj2YjaOf.js";import"./useEffectiveDataKey-CNJBjtBe.js";import"./useElementOffset-kN6XAzkC.js";import"./uniqBy-CXvSLOdk.js";import"./iteratee-CYXB4_wY.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DsABquOe.js";import"./Rectangle-m0bX_fRW.js";import"./util-Dxo8gN5i.js";import"./Sector-BTnPCX-J.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
