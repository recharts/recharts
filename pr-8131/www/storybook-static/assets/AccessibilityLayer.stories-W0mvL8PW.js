import{r as A,R as t}from"./iframe-N2_k56Bi.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BNYP_tMQ.js";import{A as E}from"./AreaChart-J1XdFGV8.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bjjq3zH2.js";import{X as g}from"./XAxis-BMzjraU8.js";import{Y as h}from"./YAxis-BWNeCe4E.js";import{A as a}from"./Area-DFLgXnZQ.js";import{T as u}from"./Tooltip-BDDIA8Ue.js";import{R as k}from"./zIndexSlice-C2n8MH5C.js";import{L as v}from"./Legend-D09Ji223.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dp1Mzfqy.js";import"./resolveDefaultProps-DqwpxfQ6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CAEFlKfw.js";import"./throttle-wqOW3oZ2.js";import"./index-DW0bz290.js";import"./index-CE3twcP3.js";import"./polarAxisSelectors-BJLn-yPG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXPoqAuA.js";import"./index-BDOvrbcw.js";import"./index-C9ctZ6JT.js";import"./renderedTicksSlice-tTdjxG_s.js";import"./index-ByH8O9KC.js";import"./fillDefinitions-dJCuHQYF.js";import"./CartesianChart-CoYa15-4.js";import"./ZIndexPortal-C8tnP8Pm.js";import"./CategoricalChart-CrnXV7kh.js";import"./CartesianAxis-DPQ0rx3G.js";import"./Layer-CJpZrgpd.js";import"./Text-CtPksR9D.js";import"./DOMUtils-DcUCUVaa.js";import"./ZIndexLayer-C9mVRhjd.js";import"./Label-BtTjy9h1.js";import"./types-DGUdIwXy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CpgHxPqB.js";import"./ActivePoints-DdYZUJkv.js";import"./Dot-D37s9B75.js";import"./activeStyles-CM4N_FMo.js";import"./useAnimationId-LBywhlWd.js";import"./dataEntryStyles-C-YlvJRH.js";import"./Symbols-jQ5nGruQ.js";import"./symbol-tKDu3Sq7.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CsZSO0ag.js";import"./getRadiusAndStrokeWidthFromDot-BENo0Gmv.js";import"./ActiveShapeUtils-CdIqoiTp.js";import"./Curve-DgWUxnsC.js";import"./step-DyI48c2G.js";import"./useEffectiveDataKey-D760KGHv.js";import"./useElementOffset-Dty61qI9.js";import"./uniqBy-BVd7MjX-.js";import"./iteratee-BfkazSyy.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Nwb4qvZ9.js";import"./Rectangle-Eo0dQZG0.js";import"./util-Dxo8gN5i.js";import"./Sector-BN8zQzmu.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
