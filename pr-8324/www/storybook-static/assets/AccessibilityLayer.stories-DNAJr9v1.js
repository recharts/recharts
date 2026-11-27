import{r as A,R as t}from"./iframe-CxHJIaxn.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-ZJvCku8z.js";import{A as E}from"./AreaChart-BEJfboe8.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-YKD58Ch-.js";import{X as g}from"./XAxis-BtFfwAik.js";import{Y as h}from"./YAxis-CePtpgW3.js";import{A as a}from"./Area-BH_qZkhq.js";import{T as u}from"./Tooltip-Cl9vkhW-.js";import{R as k}from"./zIndexSlice-B4J4SBJt.js";import{L as v}from"./Legend-DXxa1Zdn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-lHGqaVDW.js";import"./resolveDefaultProps-VB2vAzvZ.js";import"./get-CjriyByo.js";import"./axisSelectors-DToVA1z_.js";import"./throttle-zrHO1Lk3.js";import"./index-CTXNW52Q.js";import"./index-CCCil_M9.js";import"./polarAxisSelectors-Cypa3mep.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-AJjDHMaN.js";import"./index-DATl4CJn.js";import"./index-CNK9YebA.js";import"./renderedTicksSlice-BLYVCU7c.js";import"./index-WkAKiv7J.js";import"./fillDefinitions-DRREg7Kz.js";import"./CartesianChart-BVZvuLTX.js";import"./chartDataContext-DfmCl9OG.js";import"./CategoricalChart-DlLRA4vO.js";import"./CartesianAxis-DtD-UOrB.js";import"./Layer-CkJdGJLp.js";import"./Text-BkIUM7GL.js";import"./ZIndexLayer-B_7zdP5R.js";import"./Label-M_CthLgf.js";import"./types-BGw9U51_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-D_HaNWL6.js";import"./dataEntryStyles-DnDN_vpi.js";import"./ActivePoints-R1_oETV-.js";import"./Dot-Dme7I_-s.js";import"./activeStyles-BwCU-iTy.js";import"./useAnimationId-D_Yg6oAr.js";import"./Symbols-IHTx3wL0.js";import"./symbol-C32Av6Of.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Cp9BSKiw.js";import"./ActiveShapeUtils-BHoE966L.js";import"./Curve-D6sUhEtt.js";import"./step-DotuH85W.js";import"./useEffectiveDataKey-BI2pOOYW.js";import"./useElementOffset-D0XE9GLh.js";import"./uniqBy-Xde66OV6.js";import"./iteratee-BBskpsD7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DjanSu9o.js";import"./Rectangle-AwN8DkOy.js";import"./util-Dxo8gN5i.js";import"./Sector-B4ZR08uK.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
