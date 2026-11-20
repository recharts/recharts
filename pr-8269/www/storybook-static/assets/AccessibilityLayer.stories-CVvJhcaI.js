import{r as A,R as t}from"./iframe-qp48uAQ7.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CiZY4n0u.js";import{A as E}from"./AreaChart-C8sf62Da.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DDmVqEQy.js";import{X as g}from"./XAxis-DBjPaOy0.js";import{Y as h}from"./YAxis-DlgcwvPx.js";import{A as a}from"./Area-BGY4MAa6.js";import{T as u}from"./Tooltip-Dar0g843.js";import{R as k}from"./zIndexSlice-KCJej1vF.js";import{L as v}from"./Legend-BgAjc9md.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1rMBmo6H.js";import"./resolveDefaultProps-H_yb4yD-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-EQaPQOEj.js";import"./throttle-DidOwtMq.js";import"./index-neNyiLUw.js";import"./index-BV3Lw9OX.js";import"./polarAxisSelectors-B_tUAyjC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C1UROyMV.js";import"./index-BBO10kZC.js";import"./index-DSRi-YPI.js";import"./renderedTicksSlice-BsS9ZrzM.js";import"./index-D8wT4PmW.js";import"./fillDefinitions-0M80HuO4.js";import"./CartesianChart-2yA0qqcE.js";import"./chartDataContext-BjUDfEUJ.js";import"./CategoricalChart-Dz_UBlxz.js";import"./CartesianAxis-CvElXQWV.js";import"./Layer-3O8BuD1C.js";import"./Text-9axAMSSa.js";import"./ZIndexLayer-B5vbT5ul.js";import"./Label-Sje2x2ae.js";import"./types-B-Gso0-n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DPhFQhmH.js";import"./dataEntryStyles-MmJGBd3d.js";import"./ActivePoints-AeR92xz-.js";import"./Dot-CZVpULkY.js";import"./activeStyles-CvvZZ1RN.js";import"./useAnimationId-gBLR8eku.js";import"./Symbols-DxoHFJIb.js";import"./symbol-Wa3jzChJ.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BRHHFk9x.js";import"./ActiveShapeUtils--ilFziir.js";import"./Curve-D9eNKl8H.js";import"./step-DYSBTYxM.js";import"./useEffectiveDataKey-81Od8ro-.js";import"./useElementOffset-Dp4_SaWM.js";import"./uniqBy-Cnk-Rop6.js";import"./iteratee-CnEj035Y.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CVzQj4ub.js";import"./Rectangle-Cfn5NBZC.js";import"./util-Dxo8gN5i.js";import"./Sector-CaOTB0DJ.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
